import { c as create_ssr_component, u as setContext, d as createEventDispatcher, s as subscribe, a as set_store_value, o as onDestroy, b as add_attribute, e as escape, v as validate_component, h as getContext, F as hasContext } from "./ssr.js";
import { t as tick } from "./Head.js";
import { w as writable } from "./index.js";
import { BROWSER } from "esm-env-robust";
/* empty css                                         */
const gatheringKey = {};
const GatheringRound = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setContext(gatheringKey, true);
  return `${slots.default ? slots.default({}) : ``}`;
});
function pxToNumber(pxString) {
  if (!pxString.endsWith("px")) {
    return void 0;
  }
  const num = parseFloat(pxString.slice(0, pxString.length - 2));
  return isNaN(num) ? void 0 : num;
}
const getDimensionName = (horizontal) => horizontal ? "height" : "width";
const calcComputedStyle = (element) => /* @__PURE__ */ window.getComputedStyle(element);
const getElementRect = (element) => /* @__PURE__ */ element.getBoundingClientRect();
const getBordersSizeOffsets = (computedStyle, calcEnds = true) => {
  if (computedStyle.getPropertyValue("box-sizing") === "border-box") {
    return void 0;
  }
  const left = pxToNumber(computedStyle.getPropertyValue("border-left-width"));
  if (left === void 0) {
    console.error("Splitpanes Error: Fail to parse container `border-left-width`.");
    return void 0;
  }
  const top = pxToNumber(computedStyle.getPropertyValue("border-top-width"));
  if (top === void 0) {
    console.error("Splitpanes Error: Fail to parse container `border-top-width`.");
    return void 0;
  }
  const result = { left, top };
  if (calcEnds) {
    const right = pxToNumber(computedStyle.getPropertyValue("border-right-width"));
    if (right === void 0) {
      console.error("Splitpanes Error: Fail to parse container `border-right-width`.");
      return void 0;
    }
    const bottom = pxToNumber(computedStyle.getPropertyValue("border-bottom-width"));
    if (bottom === void 0) {
      console.error("Splitpanes Error: Fail to parse container `border-bottom-width`.");
      return void 0;
    }
    const resultExtended = result;
    resultExtended.right = right;
    resultExtended.bottom = bottom;
  }
  return result;
};
function elementRectWithoutBorder(element, computedStyle) {
  if (!computedStyle) {
    computedStyle = calcComputedStyle(element);
  }
  const rect = getElementRect(element);
  const borderOffsets = getBordersSizeOffsets(computedStyle, true) || { left: 0, top: 0, right: 0, bottom: 0 };
  return {
    width: rect.width - borderOffsets.left - borderOffsets.right,
    height: rect.height - borderOffsets.top - borderOffsets.bottom,
    left: rect.left + borderOffsets.left,
    top: rect.top + borderOffsets.top
  };
}
const positionDiff = (to, from) => ({
  left: to.left - from.left,
  top: to.top - from.top
});
function getGlobalMousePosition(event) {
  const eventMouse = event;
  const eventTouch = event;
  const { clientX, clientY } = "ontouchstart" in window && eventTouch.touches ? eventTouch.touches[0] : eventMouse;
  return { left: clientX, top: clientY };
}
function sumPartial(arr, start, end, valueFunction) {
  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += valueFunction(arr[i], i);
  }
  return sum;
}
function forEachPartial(arr, start, end, callback) {
  for (let i = start; i < end; i++) {
    callback(arr[i], i);
  }
}
const css = {
  code: 'div.splitpanes--horizontal.splitpanes--dragging{cursor:row-resize}div.splitpanes--vertical.splitpanes--dragging{cursor:col-resize}.splitpanes{display:flex;height:100%;width:100%}.splitpanes--vertical{flex-direction:row}.splitpanes--horizontal{flex-direction:column}.splitpanes--dragging *{-webkit-user-select:none;-moz-user-select:none;user-select:none}.splitpanes__pane{height:100%;overflow:hidden;width:100%}.splitpanes--vertical .splitpanes__pane{transition:width .2s ease-out}.splitpanes--horizontal .splitpanes__pane{transition:height .2s ease-out}.splitpanes--vertical>.splitpanes__pane{transition:width .2s ease-out}.splitpanes--horizontal>.splitpanes__pane{transition:height .2s ease-out}.splitpanes--dragging .splitpanes__pane{pointer-events:none;transition:none}.splitpanes--freeze .splitpanes__pane{transition:none}.splitpanes__splitter{touch-action:none}.splitpanes--vertical>.splitpanes__splitter{min-width:1px}.splitpanes--horizontal>.splitpanes__splitter{min-height:1px}.splitpanes.default-theme .splitpanes__pane{background-color:#f2f2f2}.splitpanes.default-theme .splitpanes__splitter{background-color:#fff;box-sizing:border-box;flex-shrink:0;position:relative}.splitpanes.default-theme .splitpanes__splitter:after,.splitpanes.default-theme .splitpanes__splitter:before{background-color:rgba(0,0,0,.15);content:"";left:50%;position:absolute;top:50%;transition:background-color .3s}.splitpanes.default-theme .splitpanes__splitter:hover:after,.splitpanes.default-theme .splitpanes__splitter:hover:before{background-color:rgba(0,0,0,.25)}.splitpanes.default-theme .splitpanes__splitter:first-child{cursor:auto}.default-theme.splitpanes .splitpanes .splitpanes__splitter{z-index:1}.default-theme .splitpanes--vertical>.splitpanes__splitter,.default-theme.splitpanes--vertical>.splitpanes__splitter{border-left:1px solid #eee;cursor:col-resize;width:7px}.default-theme .splitpanes--vertical>.splitpanes__splitter:after,.default-theme .splitpanes--vertical>.splitpanes__splitter:before,.default-theme.splitpanes--vertical>.splitpanes__splitter:after,.default-theme.splitpanes--vertical>.splitpanes__splitter:before{height:30px;transform:translateY(-50%);width:1px}.default-theme .splitpanes--vertical>.splitpanes__splitter:before,.default-theme.splitpanes--vertical>.splitpanes__splitter:before{margin-left:-2px}.default-theme .splitpanes--vertical>.splitpanes__splitter:after,.default-theme.splitpanes--vertical>.splitpanes__splitter:after{margin-left:1px}.default-theme .splitpanes--horizontal>.splitpanes__splitter,.default-theme.splitpanes--horizontal>.splitpanes__splitter{border-top:1px solid #eee;cursor:row-resize;height:7px}.default-theme .splitpanes--horizontal>.splitpanes__splitter:after,.default-theme .splitpanes--horizontal>.splitpanes__splitter:before,.default-theme.splitpanes--horizontal>.splitpanes__splitter:after,.default-theme.splitpanes--horizontal>.splitpanes__splitter:before{height:1px;transform:translateX(-50%);width:30px}.default-theme .splitpanes--horizontal>.splitpanes__splitter:before,.default-theme.splitpanes--horizontal>.splitpanes__splitter:before{margin-top:-2px}.default-theme .splitpanes--horizontal>.splitpanes__splitter:after,.default-theme.splitpanes--horizontal>.splitpanes__splitter:after{margin-top:1px}',
  map: null
};
const KEY = {};
const Splitpanes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $veryFirstPaneKey, $$unsubscribe_veryFirstPaneKey;
  let $showFirstSplitter, $$unsubscribe_showFirstSplitter;
  let $isHorizontal, $$unsubscribe_isHorizontal;
  let { id = void 0 } = $$props;
  let { horizontal = false } = $$props;
  let { pushOtherPanes = true } = $$props;
  let { dblClickSplitter = true } = $$props;
  let { rtl = "auto" } = $$props;
  let { firstSplitter = false } = $$props;
  let { style = null } = $$props;
  let { theme = "default-theme" } = $$props;
  let { class: clazz = "" } = $$props;
  const dispatch = createEventDispatcher();
  let container;
  let isReady = false;
  let isAwaitingPaneReset = false;
  let isMouseDown = false;
  let isDragging = false;
  let activeSplitter = -1;
  let clickedSplitter = -1;
  let timeoutId;
  let panes = new Array();
  let isHorizontal = writable(horizontal);
  $$unsubscribe_isHorizontal = subscribe(isHorizontal, (value) => $isHorizontal = value);
  const showFirstSplitter = writable(firstSplitter);
  $$unsubscribe_showFirstSplitter = subscribe(showFirstSplitter, (value) => $showFirstSplitter = value);
  const veryFirstPaneKey = writable(void 0);
  $$unsubscribe_veryFirstPaneKey = subscribe(veryFirstPaneKey, (value) => $veryFirstPaneKey = value);
  let activeSplitterElement = null;
  let activeSplitterDrag = null;
  let ssrPaneDefinedSizeSum = 0;
  let ssrPaneUndefinedSizeCount = 0;
  function ssrRegisterPaneSize(size) {
    if (size == null) {
      ++ssrPaneUndefinedSizeCount;
    } else {
      ssrPaneDefinedSizeSum += size;
    }
  }
  const onPaneInit = (key) => {
    if ($veryFirstPaneKey === void 0) {
      set_store_value(veryFirstPaneKey, $veryFirstPaneKey = key, $veryFirstPaneKey);
    }
    return {
      undefinedPaneInitSize: BROWSER ? 0 : (100 - ssrPaneDefinedSizeSum) / ssrPaneUndefinedSizeCount
    };
  };
  setContext(KEY, {
    showFirstSplitter,
    veryFirstPaneKey,
    isHorizontal,
    ssrRegisterPaneSize: BROWSER ? void 0 : ssrRegisterPaneSize,
    onPaneInit,
    clientOnly: BROWSER ? { onPaneAdd, onPaneRemove } : void 0
  });
  function onPaneAdd(pane) {
    let index = -1;
    Array.from(pane.element.parentNode.children).some((el) => {
      if (el.className.includes("splitpanes__pane")) index++;
      return el === pane.element;
    });
    if (index === 0) {
      set_store_value(veryFirstPaneKey, $veryFirstPaneKey = pane.key, $veryFirstPaneKey);
    }
    panes.splice(index, 0, pane);
    for (let i = 0; i < panes.length; i++) {
      panes[i].index = i;
    }
    if (isReady) {
      tickAndResetPaneSizes().then(() => {
        pane.isReady = true;
        dispatch("pane-add", { index, panes: prepareSizeEvent() });
      });
    }
    const paneForward = (cb, includingFirst = true) => (value) => {
      if (includingFirst || pane.index > 0) {
        cb(value, pane);
      }
    };
    return {
      onSplitterDown: paneForward(onMouseDown, false),
      onSplitterClick: paneForward(onSplitterClick, false),
      onSplitterDblClick: paneForward(onSplitterDblClick),
      onPaneClick: paneForward(onPaneClick),
      reportGivenSizeChange: paneForward(reportGivenSizeChange)
    };
  }
  async function onPaneRemove(key) {
    const index = panes.findIndex((p) => p.key === key);
    if (index >= 0) {
      const removed = panes.splice(index, 1)[0];
      for (let i = 0; i < panes.length; i++) {
        panes[i].index = i;
      }
      if (index === 0) {
        set_store_value(veryFirstPaneKey, $veryFirstPaneKey = panes.length > 0 ? panes[0].key : void 0, $veryFirstPaneKey);
      }
      if (isReady) {
        await tickAndResetPaneSizes();
        dispatch("pane-remove", { removed, panes: prepareSizeEvent() });
      }
    }
  }
  function onPaneClick(_event, pane) {
    dispatch("pane-click", pane);
  }
  function reportGivenSizeChange(newGivenSize, pane) {
    pane.setSz(newGivenSize);
    tickAndResetPaneSizes();
  }
  if (BROWSER) {
    onDestroy(() => {
      if (isReady) {
        unbindEvents();
      }
      isReady = false;
    });
  }
  function isRTL(containerComputedStyle) {
    if (rtl === "auto") {
      try {
        return (containerComputedStyle ?? calcComputedStyle(container)).direction === "rtl";
      } catch (err) {
      }
    }
    return rtl === true;
  }
  function bindEvents() {
    document.body.style.cursor = isHorizontal ? "col-resize" : "row-resize";
    document.addEventListener("mousemove", onMouseMove, { passive: false });
    document.addEventListener("mouseup", onMouseUp);
    if ("ontouchstart" in window) {
      document.addEventListener("touchmove", onMouseMove, { passive: false });
      document.addEventListener("touchend", onMouseUp);
    }
  }
  function unbindEvents() {
    document.body.style.cursor = "";
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    if ("ontouchstart" in window) {
      document.removeEventListener("touchmove", onMouseMove);
      document.removeEventListener("touchend", onMouseUp);
    }
  }
  const isSplitterElement = (node) => node.nodeType === Node.ELEMENT_NODE && node.classList.contains("splitpanes__splitter");
  function getOrientedDiff(drag, elementSize, isRTL2) {
    let tdrag = drag[horizontal ? "top" : "left"];
    if (isRTL2 && !horizontal) tdrag = elementSize - tdrag;
    return tdrag;
  }
  const getCurrentDimensionName = () => getDimensionName(horizontal);
  function onMouseDown(event, splitterPane) {
    isMouseDown = true;
    activeSplitter = splitterPane.index;
    splitterPane.setSplitterActive(true);
    const paneElement = splitterPane.element;
    let activeSplitterNode = paneElement;
    while (activeSplitterNode != null) {
      activeSplitterNode = activeSplitterNode.previousSibling;
      if (isSplitterElement(activeSplitterNode)) {
        break;
      }
    }
    if (activeSplitterNode == null) {
      console.error("Splitpane Error: Active splitter wasn't found!");
      return;
    }
    activeSplitterElement = activeSplitterNode;
    const globalMousePosition = getGlobalMousePosition(event);
    const splitterRect = getElementRect(activeSplitterElement);
    activeSplitterDrag = getOrientedDiff(positionDiff(globalMousePosition, splitterRect), splitterRect[getCurrentDimensionName()], isRTL());
    bindEvents();
  }
  function onMouseMove(event) {
    if (isMouseDown) {
      event.preventDefault();
      isDragging = true;
      const globalMousePosition = getGlobalMousePosition(event);
      const containerComputedStyle = calcComputedStyle(container);
      const containerRectWithoutBorder = elementRectWithoutBorder(container, containerComputedStyle);
      const containerSizeWithoutBorder = containerRectWithoutBorder[getCurrentDimensionName()];
      const _isRTL = isRTL(containerComputedStyle);
      const currentMouseDrag = positionDiff(globalMousePosition, containerRectWithoutBorder);
      const tdrag = getOrientedDiff(currentMouseDrag, containerSizeWithoutBorder, _isRTL);
      calculatePanesSize(tdrag, containerSizeWithoutBorder);
      dispatch("resize", prepareSizeEvent());
    }
  }
  function onMouseUp() {
    if (isDragging) {
      dispatch("resized", prepareSizeEvent());
    }
    isMouseDown = false;
    const pane = panes[activeSplitter];
    pane.setSplitterActive(false);
    setTimeout(
      () => {
        isDragging = false;
        unbindEvents();
      },
      100
    );
  }
  function onSplitterClick(event, splitterPane) {
    if ("ontouchstart" in window) {
      event.preventDefault();
      const splitterIndex = splitterPane.index;
      if (dblClickSplitter) {
        if (clickedSplitter === splitterIndex) {
          if (timeoutId) clearTimeout(timeoutId);
          timeoutId = null;
          onSplitterDblClick(event, splitterPane);
          clickedSplitter = -1;
        } else {
          clickedSplitter = splitterIndex;
          timeoutId = setTimeout(
            () => {
              clickedSplitter = -1;
            },
            500
          );
        }
      }
    }
    if (!isDragging) dispatch("splitter-click", splitterPane);
  }
  function onSplitterDblClick(_event, splitterPane) {
    if (dblClickSplitter) {
      const splitterIndex = splitterPane.index;
      let totalMinSizes = 0;
      for (let i = 0; i < panes.length; i++) {
        const pane = panes[i];
        if (i !== splitterIndex) {
          totalMinSizes += pane.min();
        }
      }
      const maxExtendedSize = Math.min(Math.max(0, 100 - totalMinSizes), splitterPane.max());
      const totalMaxExtendedPlusMinSizes = totalMinSizes + maxExtendedSize;
      if (totalMaxExtendedPlusMinSizes >= 100) {
        for (let i = 0; i < panes.length; i++) {
          const pane = panes[i];
          if (pane !== splitterPane) {
            pane.setSz(pane.min());
          } else {
            pane.setSz(100 - totalMinSizes);
          }
        }
      } else {
        let leftSpare = 100 - totalMaxExtendedPlusMinSizes;
        splitterPane.setSz(maxExtendedSize);
        const giveBest = (pane) => {
          const min = pane.min();
          const max = pane.max();
          const szExtra = Math.min(Math.max(0, leftSpare), max - min);
          pane.setSz(min + szExtra);
          leftSpare -= szExtra;
        };
        for (let i = splitterIndex - 1; i >= 0; i--) giveBest(panes[i]);
        for (let i = splitterIndex + 1; i < panes.length; i++) giveBest(panes[i]);
        if (leftSpare != 0) {
          console.warn("Splitpanes: there is a left spare size after computation of splitter double click, which means there are issues on the size constains of the panes.");
        }
      }
      dispatch("pane-maximize", splitterPane);
      dispatch("resized", prepareSizeEvent());
    }
    isMouseDown = false;
  }
  const prepareSizeEvent = () => panes.map((pane) => ({
    min: pane.min(),
    max: pane.max(),
    size: pane.sz(),
    snap: pane.snap()
  }));
  function getCurrentDragPercentage(tdrag, containerSizeWithoutBorder) {
    const splitterSize = (node) => getElementRect(node)[getCurrentDimensionName()];
    const activeSplitterSize = splitterSize(activeSplitterElement);
    let splittersTotalSizeBefore = 0;
    let currentBeforeNode = activeSplitterElement.previousSibling;
    while (currentBeforeNode != null) {
      if (isSplitterElement(currentBeforeNode)) {
        splittersTotalSizeBefore += splitterSize(currentBeforeNode);
      }
      currentBeforeNode = currentBeforeNode.previousSibling;
    }
    let splittersTotalSizeAfter = 0;
    let currentAfterNode = activeSplitterElement.nextSibling;
    while (currentAfterNode != null) {
      if (isSplitterElement(currentAfterNode)) {
        splittersTotalSizeAfter += splitterSize(currentAfterNode);
      }
      currentAfterNode = currentAfterNode.nextSibling;
    }
    const totalSplitterBefore = splittersTotalSizeBefore + activeSplitterDrag;
    const totalSplitter = splittersTotalSizeBefore + activeSplitterSize + splittersTotalSizeAfter;
    return (tdrag - totalSplitterBefore) / (containerSizeWithoutBorder - totalSplitter) * 100;
  }
  function calculatePanesSize(tdrag, containerSizeWithoutBorder) {
    let paneBeforeIndex = activeSplitter - 1;
    let paneBefore = panes[paneBeforeIndex];
    let paneAfterIndex = activeSplitter;
    let paneAfter = panes[paneAfterIndex];
    let sums = {
      prevPanesSize: sumPrevPanesSize(paneBeforeIndex),
      nextPanesSize: sumNextPanesSize(paneAfterIndex),
      prevReachedMinPanes: 0,
      nextReachedMinPanes: 0
    };
    const minDrag = 0 + (pushOtherPanes ? 0 : sums.prevPanesSize);
    const maxDrag = 100 - (pushOtherPanes ? 0 : sums.nextPanesSize);
    const mouseDragPercentage = Math.max(Math.min(getCurrentDragPercentage(tdrag, containerSizeWithoutBorder), maxDrag), minDrag);
    const paneBeforeSnap = sums.prevPanesSize + paneBefore.min() + paneBefore.snap();
    const paneAfterSnap = 100 - (sums.nextPanesSize + paneAfter.min() + paneAfter.snap());
    let dragPercentage = mouseDragPercentage;
    let snapped = false;
    if (mouseDragPercentage <= paneBeforeSnap) {
      if (mouseDragPercentage > sums.prevPanesSize + paneBefore.min()) {
        dragPercentage = Math.max(paneBefore.min() + sums.prevPanesSize, 100 - (paneAfter.max() + sums.nextPanesSize));
        snapped = true;
      }
    } else if (mouseDragPercentage >= paneAfterSnap) {
      if (mouseDragPercentage < 100 - sums.nextPanesSize - paneAfter.min()) {
        dragPercentage = Math.min(100 - (paneAfter.min() + sums.nextPanesSize), paneBefore.max() + sums.prevPanesSize);
        snapped = true;
      }
    }
    const paneBeforeMaxReached = paneBefore.max() < 100 && dragPercentage >= paneBefore.max() + sums.prevPanesSize;
    const paneAfterMaxReached = paneAfter.max() < 100 && dragPercentage <= 100 - (paneAfter.max() + sums.nextPanesSize);
    if (paneBeforeMaxReached || paneAfterMaxReached) {
      if (paneBeforeMaxReached) {
        paneBefore.setSz(paneBefore.max());
        paneAfter.setSz(Math.max(100 - paneBefore.max() - sums.prevPanesSize - sums.nextPanesSize, 0));
      } else {
        paneBefore.setSz(Math.max(100 - paneAfter.max() - sums.prevPanesSize - sums.nextPanesSize, 0));
        paneAfter.setSz(paneAfter.max());
      }
    } else {
      if (pushOtherPanes && !snapped) {
        const vars = doPushOtherPanes(sums, dragPercentage);
        if (!vars) {
          return;
        }
        ({ sums, paneBeforeIndex, paneAfterIndex } = vars);
        paneBefore = panes[paneBeforeIndex];
        paneAfter = panes[paneAfterIndex];
      }
      if (paneBeforeIndex != null) {
        paneBefore.setSz(Math.min(Math.max(dragPercentage - sums.prevPanesSize - sums.prevReachedMinPanes, paneBefore.min()), paneBefore.max()));
      }
      if (paneAfterIndex != null) {
        paneAfter.setSz(Math.min(Math.max(100 - dragPercentage - sums.nextPanesSize - sums.nextReachedMinPanes, paneAfter.min()), paneAfter.max()));
      }
    }
  }
  function doPushOtherPanes(sums, dragPercentage) {
    const splitterIndex = activeSplitter - 1;
    let paneBeforeIndex = splitterIndex;
    let paneAfterIndex = splitterIndex + 1;
    if (dragPercentage < sums.prevPanesSize + panes[paneBeforeIndex].min()) {
      paneBeforeIndex = findPrevExpandedPane(splitterIndex)?.index;
      sums.prevReachedMinPanes = 0;
      if (paneBeforeIndex < splitterIndex) {
        forEachPartial(panes, paneBeforeIndex + 1, splitterIndex + 1, (pane) => {
          pane.setSz(pane.min());
          sums.prevReachedMinPanes += pane.min();
        });
      }
      sums.prevPanesSize = sumPrevPanesSize(paneBeforeIndex);
      if (paneBeforeIndex == null) {
        sums.prevReachedMinPanes = 0;
        panes[0].setSz(panes[0].min());
        forEachPartial(panes, 1, splitterIndex + 1, (pane) => {
          pane.setSz(pane.min());
          sums.prevReachedMinPanes += pane.min();
        });
        panes[paneAfterIndex].setSz(100 - sums.prevReachedMinPanes - panes[0].min() - sums.prevPanesSize - sums.nextPanesSize);
        return null;
      }
    }
    if (dragPercentage > 100 - sums.nextPanesSize - panes[paneAfterIndex].min()) {
      paneAfterIndex = findNextExpandedPane(splitterIndex)?.index;
      sums.nextReachedMinPanes = 0;
      if (paneAfterIndex > splitterIndex + 1) {
        forEachPartial(panes, splitterIndex + 1, paneAfterIndex, (pane) => {
          pane.setSz(pane.min());
          sums.nextReachedMinPanes += pane.min();
        });
      }
      sums.nextPanesSize = sumNextPanesSize(paneAfterIndex);
      const panesCount = panes.length;
      if (paneAfterIndex == null) {
        sums.nextReachedMinPanes = 0;
        panes[panesCount - 1].setSz(panes[panesCount - 1].min());
        forEachPartial(panes, splitterIndex + 1, panesCount - 1, (pane) => {
          pane.setSz(pane.min());
          sums.nextReachedMinPanes += pane.min();
        });
        panes[paneBeforeIndex].setSz(100 - sums.prevPanesSize - sums.nextReachedMinPanes - panes[panesCount - 1].min() - sums.nextPanesSize);
        return null;
      }
    }
    return { sums, paneBeforeIndex, paneAfterIndex };
  }
  const getSizeOfPane = (pane) => pane.sz();
  const sumPrevPanesSize = (splitterIndex) => sumPartial(panes, 0, splitterIndex, getSizeOfPane);
  const sumNextPanesSize = (splitterIndex) => sumPartial(panes, splitterIndex + 1, panes.length, getSizeOfPane);
  const findPrevExpandedPane = (splitterIndex) => [...panes].reverse().find((p) => p.index < splitterIndex && p.sz() > p.min());
  const findNextExpandedPane = (splitterIndex) => panes.find((p) => p.index > splitterIndex + 1 && p.sz() > p.min());
  async function tickAndResetPaneSizes() {
    isAwaitingPaneReset = true;
    await tick();
    if (isAwaitingPaneReset) {
      resetPaneSizes();
      isAwaitingPaneReset = false;
    }
  }
  function resetPaneSizes() {
    equalize();
    if (isReady) dispatch("resized", prepareSizeEvent());
  }
  function equalize() {
    if (panes.length === 0) {
      return;
    }
    const panesCount = panes.length;
    let leftToAllocate = 100;
    let definedSizesCount = 0;
    let undefinedSizesNotReadyCount = 0;
    let undefinedSizesSum = 0;
    let ungrowable = [];
    let unshrinkable = [];
    for (let i = 0; i < panesCount; i++) {
      const pane = panes[i];
      const sz = pane.sz();
      if (pane.givenSize == null) {
        if (pane.isReady) {
          undefinedSizesSum += sz;
          if (sz >= pane.max()) ungrowable.push(pane);
          if (sz <= pane.min()) unshrinkable.push(pane);
        } else {
          undefinedSizesNotReadyCount += 1;
        }
      } else {
        leftToAllocate -= sz;
        definedSizesCount++;
        ungrowable.push(pane);
        unshrinkable.push(pane);
      }
    }
    const undefinedSizesCount = panesCount - definedSizesCount;
    const undefinedSizesReadyCount = undefinedSizesCount - undefinedSizesNotReadyCount;
    let undefinedSizesNotReadySz;
    let undefinedScaleFactor;
    if (undefinedSizesReadyCount > 0) {
      undefinedSizesNotReadySz = undefinedSizesSum / undefinedSizesReadyCount;
      if (undefinedSizesNotReadySz > 0.1 && leftToAllocate > 0.1) {
        undefinedSizesSum += undefinedSizesNotReadyCount * undefinedSizesNotReadySz;
        undefinedScaleFactor = leftToAllocate / undefinedSizesSum;
      } else {
        undefinedSizesNotReadySz = 0;
        undefinedScaleFactor = 1;
      }
    } else {
      undefinedSizesNotReadySz = leftToAllocate / undefinedSizesCount;
      undefinedScaleFactor = 1;
    }
    if (leftToAllocate + undefinedSizesSum > 0.1) {
      leftToAllocate = 100;
      for (let i = 0; i < panesCount; i++) {
        const pane = panes[i];
        if (pane.givenSize == null) {
          const currentSz = pane.isReady ? pane.sz() : undefinedSizesNotReadySz;
          const sz = Math.max(Math.min(currentSz * undefinedScaleFactor, pane.max()), pane.min());
          pane.setSz(sz);
        }
        leftToAllocate -= pane.sz();
      }
      if (Math.abs(leftToAllocate) > 0.1) {
        leftToAllocate = readjustSizes(leftToAllocate, ungrowable, unshrinkable);
      }
    }
    if (!isFinite(leftToAllocate)) {
      console.warn("Splitpanes: Internal error, sizes might be NaN as a result.");
    } else if (Math.abs(leftToAllocate) > 0.1) {
      console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }
  }
  function readjustSizes(leftToAllocate, ungrowable, unshrinkable) {
    const panesCount = panes.length;
    const panesSizableCount = panesCount - (leftToAllocate > 0 ? ungrowable.length : unshrinkable.length);
    if (panesSizableCount <= 0) {
      return leftToAllocate;
    }
    const equalSpaceToAllocate = leftToAllocate / panesSizableCount;
    if (panes.length === 1) {
      panes[0].setSz(100);
      leftToAllocate = 0;
    } else for (let i = 0; i < panes.length; i++) {
      const pane = panes[i];
      const sz = pane.sz();
      if (leftToAllocate > 0 && !ungrowable.includes(pane)) {
        const newPaneSize = Math.max(Math.min(sz + equalSpaceToAllocate, pane.max()), pane.min());
        const allocated = newPaneSize - sz;
        leftToAllocate -= allocated;
        pane.setSz(newPaneSize);
      } else if (!unshrinkable.includes(pane)) {
        const newPaneSize = Math.max(Math.min(sz + equalSpaceToAllocate, pane.max()), pane.min());
        const allocated = newPaneSize - sz;
        leftToAllocate -= allocated;
        pane.setSz(newPaneSize);
      }
    }
    return leftToAllocate;
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0) $$bindings.horizontal(horizontal);
  if ($$props.pushOtherPanes === void 0 && $$bindings.pushOtherPanes && pushOtherPanes !== void 0) $$bindings.pushOtherPanes(pushOtherPanes);
  if ($$props.dblClickSplitter === void 0 && $$bindings.dblClickSplitter && dblClickSplitter !== void 0) $$bindings.dblClickSplitter(dblClickSplitter);
  if ($$props.rtl === void 0 && $$bindings.rtl && rtl !== void 0) $$bindings.rtl(rtl);
  if ($$props.firstSplitter === void 0 && $$bindings.firstSplitter && firstSplitter !== void 0) $$bindings.firstSplitter(firstSplitter);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0) $$bindings.theme(theme);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  $$result.css.add(css);
  set_store_value(isHorizontal, $isHorizontal = horizontal, $isHorizontal);
  set_store_value(showFirstSplitter, $showFirstSplitter = firstSplitter, $showFirstSplitter);
  $$unsubscribe_veryFirstPaneKey();
  $$unsubscribe_showFirstSplitter();
  $$unsubscribe_isHorizontal();
  return `<div${add_attribute("id", id, 0)} class="${[
    escape(`splitpanes ${theme || ""} ${clazz || ""}`, true),
    (horizontal ? "splitpanes--horizontal" : "") + " " + (!horizontal ? "splitpanes--vertical" : "") + " " + (isMouseDown || isDragging ? "splitpanes--dragging" : "") + " splitpanes--freeze"
  ].join(" ").trim()}"${add_attribute("style", style, 0)}${add_attribute("this", container, 0)}>${!BROWSER ? `${validate_component(GatheringRound, "GatheringRound").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : ``} ${slots.default ? slots.default({}) : ``} </div>`;
});
const carefullCallbackGenerator = (callbackObjectGetter, callbackName) => (value) => {
  const callbackObject = callbackObjectGetter();
  if (callbackObject != null) {
    callbackObject[callbackName](value);
  }
};
const carefullCallbackSource = (callbackObjectGetter) => carefullCallbackGenerator.bind(null, callbackObjectGetter);
const Pane = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dimension;
  let style;
  let $isHorizontal, $$unsubscribe_isHorizontal;
  let $veryFirstPaneKey, $$unsubscribe_veryFirstPaneKey;
  let $showFirstSplitter, $$unsubscribe_showFirstSplitter;
  const { ssrRegisterPaneSize, onPaneInit, clientOnly: clientOnlyContext, isHorizontal, showFirstSplitter, veryFirstPaneKey } = getContext(KEY);
  $$unsubscribe_isHorizontal = subscribe(isHorizontal, (value) => $isHorizontal = value);
  $$unsubscribe_showFirstSplitter = subscribe(showFirstSplitter, (value) => $showFirstSplitter = value);
  $$unsubscribe_veryFirstPaneKey = subscribe(veryFirstPaneKey, (value) => $veryFirstPaneKey = value);
  let { size = null } = $$props;
  let { minSize = 0 } = $$props;
  let { maxSize = 100 } = $$props;
  let { snapSize = 0 } = $$props;
  let { class: clazz = "" } = $$props;
  const key = {};
  const gathering = !BROWSER && hasContext(gatheringKey);
  const { undefinedPaneInitSize } = !gathering ? onPaneInit(key) : {};
  let element;
  let sz = size ?? undefinedPaneInitSize;
  let clientCallbacks = void 0;
  const carefullClientCallbacks = BROWSER ? carefullCallbackSource(() => clientCallbacks) : void 0;
  const reportGivenSizeChangeSafe = (size2) => {
    if (size2 != sz) {
      carefullClientCallbacks("reportGivenSizeChange")(size2);
    }
  };
  if (gathering) {
    ssrRegisterPaneSize(size);
  } else if (BROWSER) {
    onDestroy(() => {
      clientOnlyContext.onPaneRemove(key);
    });
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.minSize === void 0 && $$bindings.minSize && minSize !== void 0) $$bindings.minSize(minSize);
  if ($$props.maxSize === void 0 && $$bindings.maxSize && maxSize !== void 0) $$bindings.maxSize(maxSize);
  if ($$props.snapSize === void 0 && $$bindings.snapSize && snapSize !== void 0) $$bindings.snapSize(snapSize);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  {
    {
      if (BROWSER && size != null) {
        reportGivenSizeChangeSafe(size);
      }
    }
  }
  dimension = getDimensionName($isHorizontal);
  style = `${dimension}: ${sz}%;`;
  $$unsubscribe_isHorizontal();
  $$unsubscribe_veryFirstPaneKey();
  $$unsubscribe_showFirstSplitter();
  return `${!gathering ? ` ${$veryFirstPaneKey !== key || $showFirstSplitter ? `   <div class="${"splitpanes__splitter " + escape("", true)}"></div>` : ``}     <div${add_attribute("class", `splitpanes__pane ${clazz || ""}`, 0)}${add_attribute("style", style, 0)}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
export {
  Pane as P,
  Splitpanes as S
};
