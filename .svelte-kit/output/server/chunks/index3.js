import { c as create_ssr_component, d as createEventDispatcher, o as onDestroy, b as add_attribute, f as each } from "./ssr.js";
const ALIGNMENT = {
  AUTO: "auto",
  START: "start",
  CENTER: "center",
  END: "end"
};
const DIRECTION = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
};
const SCROLL_CHANGE_REASON = {
  OBSERVED: 0,
  REQUESTED: 1
};
class SizeAndPositionManager {
  /**
   * @param {Options} options
   */
  constructor({ itemSize, itemCount, estimatedItemSize }) {
    this.itemSize = itemSize;
    this.itemCount = itemCount;
    this.estimatedItemSize = estimatedItemSize;
    this.itemSizeAndPositionData = {};
    this.lastMeasuredIndex = -1;
    this.checkForMismatchItemSizeAndItemCount();
    if (!this.justInTime) this.computeTotalSizeAndPositionData();
  }
  get justInTime() {
    return typeof this.itemSize === "function";
  }
  /**
   * @param {Options} options
   */
  updateConfig({ itemSize, itemCount, estimatedItemSize }) {
    if (itemCount != null) {
      this.itemCount = itemCount;
    }
    if (estimatedItemSize != null) {
      this.estimatedItemSize = estimatedItemSize;
    }
    if (itemSize != null) {
      this.itemSize = itemSize;
    }
    this.checkForMismatchItemSizeAndItemCount();
    if (this.justInTime && this.totalSize != null) {
      this.totalSize = void 0;
    } else {
      this.computeTotalSizeAndPositionData();
    }
  }
  checkForMismatchItemSizeAndItemCount() {
    if (Array.isArray(this.itemSize) && this.itemSize.length < this.itemCount) {
      throw Error(
        `When itemSize is an array, itemSize.length can't be smaller than itemCount`
      );
    }
  }
  /**
   * @param {number} index
   */
  getSize(index) {
    const { itemSize } = this;
    if (typeof itemSize === "function") {
      return itemSize(index);
    }
    return Array.isArray(itemSize) ? itemSize[index] : itemSize;
  }
  /**
   * Compute the totalSize and itemSizeAndPositionData at the start,
   * only when itemSize is a number or an array.
   */
  computeTotalSizeAndPositionData() {
    let totalSize = 0;
    for (let i = 0; i < this.itemCount; i++) {
      const size = this.getSize(i);
      const offset = totalSize;
      totalSize += size;
      this.itemSizeAndPositionData[i] = {
        offset,
        size
      };
    }
    this.totalSize = totalSize;
  }
  getLastMeasuredIndex() {
    return this.lastMeasuredIndex;
  }
  /**
   * This method returns the size and position for the item at the specified index.
   *
   * @param {number} index
   */
  getSizeAndPositionForIndex(index) {
    if (index < 0 || index >= this.itemCount) {
      throw Error(
        `Requested index ${index} is outside of range 0..${this.itemCount}`
      );
    }
    return this.justInTime ? this.getJustInTimeSizeAndPositionForIndex(index) : this.itemSizeAndPositionData[index];
  }
  /**
   * This is used when itemSize is a function.
   * just-in-time calculates (or used cached values) for items leading up to the index.
   *
   * @param {number} index
   */
  getJustInTimeSizeAndPositionForIndex(index) {
    if (index > this.lastMeasuredIndex) {
      const lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();
      let offset = lastMeasuredSizeAndPosition.offset + lastMeasuredSizeAndPosition.size;
      for (let i = this.lastMeasuredIndex + 1; i <= index; i++) {
        const size = this.getSize(i);
        if (size == null || isNaN(size)) {
          throw Error(`Invalid size returned for index ${i} of value ${size}`);
        }
        this.itemSizeAndPositionData[i] = {
          offset,
          size
        };
        offset += size;
      }
      this.lastMeasuredIndex = index;
    }
    return this.itemSizeAndPositionData[index];
  }
  getSizeAndPositionOfLastMeasuredItem() {
    return this.lastMeasuredIndex >= 0 ? this.itemSizeAndPositionData[this.lastMeasuredIndex] : { offset: 0, size: 0 };
  }
  /**
   * Total size of all items being measured.
   *
   * @return {number}
   */
  getTotalSize() {
    if (this.totalSize) return this.totalSize;
    const lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();
    return lastMeasuredSizeAndPosition.offset + lastMeasuredSizeAndPosition.size + (this.itemCount - this.lastMeasuredIndex - 1) * this.estimatedItemSize;
  }
  /**
   * Determines a new offset that ensures a certain item is visible, given the alignment.
   *
   * @param {'auto' | 'start' | 'center' | 'end'} align Desired alignment within container
   * @param {number | undefined} containerSize Size (width or height) of the container viewport
   * @param {number | undefined} currentOffset
   * @param {number | undefined} targetIndex
   * @return {number} Offset to use to ensure the specified item is visible
   */
  getUpdatedOffsetForIndex({ align = ALIGNMENT.START, containerSize, currentOffset, targetIndex }) {
    if (containerSize <= 0) {
      return 0;
    }
    const datum = this.getSizeAndPositionForIndex(targetIndex);
    const maxOffset = datum.offset;
    const minOffset = maxOffset - containerSize + datum.size;
    let idealOffset;
    switch (align) {
      case ALIGNMENT.END:
        idealOffset = minOffset;
        break;
      case ALIGNMENT.CENTER:
        idealOffset = maxOffset - (containerSize - datum.size) / 2;
        break;
      case ALIGNMENT.START:
        idealOffset = maxOffset;
        break;
      default:
        idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
    }
    const totalSize = this.getTotalSize();
    return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
  }
  /**
   * @param {number} containerSize
   * @param {number} offset
   * @param {number} overscanCount
   * @return {{stop: number|undefined, start: number|undefined}}
   */
  getVisibleRange({ containerSize = 0, offset, overscanCount }) {
    const totalSize = this.getTotalSize();
    if (totalSize === 0) {
      return {};
    }
    const maxOffset = offset + containerSize;
    let start = this.findNearestItem(offset);
    if (start === void 0) {
      throw Error(`Invalid offset ${offset} specified`);
    }
    const datum = this.getSizeAndPositionForIndex(start);
    offset = datum.offset + datum.size;
    let stop = start;
    while (offset < maxOffset && stop < this.itemCount - 1) {
      stop++;
      offset += this.getSizeAndPositionForIndex(stop).size;
    }
    if (overscanCount) {
      start = Math.max(0, start - overscanCount);
      stop = Math.min(stop + overscanCount, this.itemCount - 1);
    }
    return {
      start,
      stop
    };
  }
  /**
   * Clear all cached values for items after the specified index.
   * This method should be called for any item that has changed its size.
   * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionForIndex() is called.
   *
   * @param {number} index
   */
  resetItem(index) {
    this.lastMeasuredIndex = Math.min(this.lastMeasuredIndex, index - 1);
  }
  /**
   * Searches for the item (index) nearest the specified offset.
   *
   * If no exact match is found the next lowest item index will be returned.
   * This allows partially visible items (with offsets just before/above the fold) to be visible.
   *
   * @param {number} offset
   */
  findNearestItem(offset) {
    if (isNaN(offset)) {
      throw Error(`Invalid offset ${offset} specified`);
    }
    offset = Math.max(0, offset);
    const lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();
    const lastMeasuredIndex = Math.max(0, this.lastMeasuredIndex);
    if (lastMeasuredSizeAndPosition.offset >= offset) {
      return this.binarySearch({
        high: lastMeasuredIndex,
        low: 0,
        offset
      });
    } else {
      return this.exponentialSearch({
        index: lastMeasuredIndex,
        offset
      });
    }
  }
  /**
   * @private
   * @param {number} low
   * @param {number} high
   * @param {number} offset
   */
  binarySearch({ low, high, offset }) {
    let middle = 0;
    let currentOffset = 0;
    while (low <= high) {
      middle = low + Math.floor((high - low) / 2);
      currentOffset = this.getSizeAndPositionForIndex(middle).offset;
      if (currentOffset === offset) {
        return middle;
      } else if (currentOffset < offset) {
        low = middle + 1;
      } else if (currentOffset > offset) {
        high = middle - 1;
      }
    }
    if (low > 0) {
      return low - 1;
    }
    return 0;
  }
  /**
   * @private
   * @param {number} index
   * @param {number} offset
   */
  exponentialSearch({ index, offset }) {
    let interval = 1;
    while (index < this.itemCount && this.getSizeAndPositionForIndex(index).offset < offset) {
      index += interval;
      interval *= 2;
    }
    return this.binarySearch({
      high: Math.min(index, this.itemCount - 1),
      low: Math.floor(index / 2),
      offset
    });
  }
}
const css = {
  code: ".virtual-list-wrapper.svelte-12eyret{-webkit-overflow-scrolling:touch;overflow:auto;will-change:transform}.virtual-list-inner.svelte-12eyret{display:flex;position:relative;width:100%}",
  map: null
};
(() => {
  let result = false;
  try {
    const arg = Object.defineProperty({}, "passive", {
      get() {
        result = { passive: true };
        return true;
      }
    });
    window.addEventListener("testpassive", arg, arg);
    window.remove("testpassive", arg, arg);
  } catch (e) {
  }
  return result;
})();
const VirtualList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { height } = $$props;
  let { width = "100%" } = $$props;
  let { itemCount } = $$props;
  let { itemSize } = $$props;
  let { estimatedItemSize = null } = $$props;
  let { stickyIndices = null } = $$props;
  let { getKey = null } = $$props;
  let { scrollDirection = DIRECTION.VERTICAL } = $$props;
  let { scrollOffset = null } = $$props;
  let { scrollToIndex = null } = $$props;
  let { scrollToAlignment = null } = $$props;
  let { scrollToBehaviour = "instant" } = $$props;
  let { overscanCount = 3 } = $$props;
  const dispatchEvent = createEventDispatcher();
  const sizeAndPositionManager = new SizeAndPositionManager({
    itemCount,
    itemSize,
    estimatedItemSize: getEstimatedItemSize()
  });
  let wrapper;
  let items = [];
  let state = {
    offset: scrollOffset || scrollToIndex != null && items.length && getOffsetForIndex(scrollToIndex) || 0,
    scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
  };
  let styleCache = {};
  let wrapperStyle = "";
  let innerStyle = "";
  refresh();
  onDestroy(() => {
  });
  function refresh() {
    const { offset } = state;
    const { start, stop } = sizeAndPositionManager.getVisibleRange({
      containerSize: scrollDirection === DIRECTION.VERTICAL ? height : width,
      offset,
      overscanCount
    });
    let updatedItems = [];
    const totalSize = sizeAndPositionManager.getTotalSize();
    if (scrollDirection === DIRECTION.VERTICAL) {
      wrapperStyle = `height:${height}px;width:${width};`;
      innerStyle = `flex-direction:column;height:${totalSize}px;`;
    } else {
      wrapperStyle = `height:${height};width:${width}px`;
      innerStyle = `min-height:100%;width:${totalSize}px;`;
    }
    const hasStickyIndices = stickyIndices != null && stickyIndices.length !== 0;
    if (hasStickyIndices) {
      for (let i = 0; i < stickyIndices.length; i++) {
        const index = stickyIndices[i];
        updatedItems.push({ index, style: getStyle(index, true) });
      }
    }
    if (start !== void 0 && stop !== void 0) {
      for (let index = start; index <= stop; index++) {
        if (hasStickyIndices && stickyIndices.includes(index)) {
          continue;
        }
        updatedItems.push({ index, style: getStyle(index, false) });
      }
      dispatchEvent("itemsUpdated", { start, end: stop });
    }
    items = updatedItems;
  }
  function recomputeSizes(startIndex = 0) {
    styleCache = {};
    sizeAndPositionManager.resetItem(startIndex);
    refresh();
  }
  function getOffsetForIndex(index, align = scrollToAlignment, _itemCount = itemCount) {
    if (index < 0 || index >= _itemCount) {
      index = 0;
    }
    return sizeAndPositionManager.getUpdatedOffsetForIndex({
      align,
      containerSize: scrollDirection === DIRECTION.VERTICAL ? height : width,
      currentOffset: state.offset || 0,
      targetIndex: index
    });
  }
  function getEstimatedItemSize() {
    return estimatedItemSize || typeof itemSize === "number" && itemSize || 50;
  }
  function getStyle(index, sticky) {
    if (styleCache[index]) return styleCache[index];
    const { size, offset } = sizeAndPositionManager.getSizeAndPositionForIndex(index);
    let style;
    if (scrollDirection === DIRECTION.VERTICAL) {
      style = `left:0;width:100%;height:${size}px;`;
      if (sticky) {
        style += `position:sticky;flex-grow:0;z-index:1;top:0;margin-top:${offset}px;margin-bottom:${-(offset + size)}px;`;
      } else {
        style += `position:absolute;top:${offset}px;`;
      }
    } else {
      style = `top:0;width:${size}px;`;
      if (sticky) {
        style += `position:sticky;z-index:1;left:0;margin-left:${offset}px;margin-right:${-(offset + size)}px;`;
      } else {
        style += `position:absolute;height:100%;left:${offset}px;`;
      }
    }
    return styleCache[index] = style;
  }
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.itemCount === void 0 && $$bindings.itemCount && itemCount !== void 0) $$bindings.itemCount(itemCount);
  if ($$props.itemSize === void 0 && $$bindings.itemSize && itemSize !== void 0) $$bindings.itemSize(itemSize);
  if ($$props.estimatedItemSize === void 0 && $$bindings.estimatedItemSize && estimatedItemSize !== void 0) $$bindings.estimatedItemSize(estimatedItemSize);
  if ($$props.stickyIndices === void 0 && $$bindings.stickyIndices && stickyIndices !== void 0) $$bindings.stickyIndices(stickyIndices);
  if ($$props.getKey === void 0 && $$bindings.getKey && getKey !== void 0) $$bindings.getKey(getKey);
  if ($$props.scrollDirection === void 0 && $$bindings.scrollDirection && scrollDirection !== void 0) $$bindings.scrollDirection(scrollDirection);
  if ($$props.scrollOffset === void 0 && $$bindings.scrollOffset && scrollOffset !== void 0) $$bindings.scrollOffset(scrollOffset);
  if ($$props.scrollToIndex === void 0 && $$bindings.scrollToIndex && scrollToIndex !== void 0) $$bindings.scrollToIndex(scrollToIndex);
  if ($$props.scrollToAlignment === void 0 && $$bindings.scrollToAlignment && scrollToAlignment !== void 0) $$bindings.scrollToAlignment(scrollToAlignment);
  if ($$props.scrollToBehaviour === void 0 && $$bindings.scrollToBehaviour && scrollToBehaviour !== void 0) $$bindings.scrollToBehaviour(scrollToBehaviour);
  if ($$props.overscanCount === void 0 && $$bindings.overscanCount && overscanCount !== void 0) $$bindings.overscanCount(overscanCount);
  if ($$props.recomputeSizes === void 0 && $$bindings.recomputeSizes && recomputeSizes !== void 0) $$bindings.recomputeSizes(recomputeSizes);
  $$result.css.add(css);
  return `<div class="virtual-list-wrapper svelte-12eyret"${add_attribute("style", wrapperStyle, 0)}${add_attribute("this", wrapper, 0)}>${slots.header ? slots.header({}) : ``} <div class="virtual-list-inner svelte-12eyret"${add_attribute("style", innerStyle, 0)}>${each(items, (item) => {
    return `${slots.item ? slots.item({ style: item.style, index: item.index }) : ``}`;
  })}</div> ${slots.footer ? slots.footer({}) : ``} </div>`;
});
function scroll_into_view_if_needed_polyfill(centerIfNeeded = true) {
  const elem = this;
  const observer = new IntersectionObserver(function([entry]) {
    const ratio = entry.intersectionRatio;
    if (ratio < 1) {
      const place = ratio <= 0 && centerIfNeeded ? `center` : `nearest`;
      elem.scrollIntoView({
        block: place,
        inline: place
      });
    }
    this.disconnect();
  });
  observer.observe(elem);
  return observer;
}
if (typeof Element !== `undefined` && !Element.prototype?.scrollIntoViewIfNeeded && typeof IntersectionObserver !== `undefined`) {
  Element.prototype.scrollIntoViewIfNeeded = scroll_into_view_if_needed_polyfill;
}
export {
  VirtualList as V
};
