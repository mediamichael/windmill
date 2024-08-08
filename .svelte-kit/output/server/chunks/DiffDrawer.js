import { c as create_ssr_component, v as validate_component, e as escape } from "./ssr.js";
import { A as Alert } from "./Alert.js";
import { B as Button, o as orderedJsonStringify, c as cleanValueProperties, n as orderedYamlStringify } from "./toast.js";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import "./common.js";
import { T as Tabs, a as Tab } from "./Tabs.js";
import { D as DiffEditor } from "./DiffEditor.js";
import { s as scriptLangToEditorLang } from "./scripts.js";
import { L as Loader_2 } from "./loader-2.js";
const DiffDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let contentType = void 0;
  let diffType = void 0;
  let diffViewer;
  let { restoreDeployed = async () => {
  } } = $$props;
  let { restoreDraft = async () => {
  } } = $$props;
  let data = void 0;
  function openDrawer() {
    data = void 0;
    contentType = void 0;
    diffType = void 0;
    diffViewer.openDrawer();
  }
  function closeDrawer() {
    diffViewer.closeDrawer();
  }
  function prepareDiff(data2) {
    const metadata = structuredClone(cleanValueProperties(data2));
    const content = metadata["content"];
    if (metadata["content"] !== void 0) {
      metadata["content"] = "check content diff";
    }
    return {
      lang: data2.language ? scriptLangToEditorLang(data2.language) : void 0,
      content,
      metadata: orderedYamlStringify(metadata)
    };
  }
  function setDiff(diff) {
    if (diff.mode === "normal") {
      const { deployed, draft, current, defaultDiffType, button } = diff;
      data = {
        mode: "normal",
        deployed: !deployed.draft_only ? prepareDiff(deployed) : void 0,
        draft: draft ? prepareDiff(draft) : void 0,
        current: prepareDiff(current),
        path: draft?.path || deployed?.path,
        button
      };
      if (defaultDiffType && data[defaultDiffType]) {
        diffType = defaultDiffType;
      } else if (data.deployed) {
        diffType = "deployed";
      } else if (data.draft) {
        diffType = "draft";
      }
    } else {
      const { original, current, title, button } = diff;
      data = {
        title,
        mode: "simple",
        original: prepareDiff(original),
        current: prepareDiff(current),
        button
      };
      diffType = "custom";
    }
  }
  function updateContentType(data_, diffType_) {
    if (!data_) return;
    if (!diffType_) return;
    const dataType = diffType_ === "custom" ? "original" : diffType_;
    contentType = data_[dataType]?.content !== data_.current.content ? "content" : data_[dataType]?.metadata !== data_.current.metadata ? "metadata" : void 0;
  }
  if ($$props.restoreDeployed === void 0 && $$bindings.restoreDeployed && restoreDeployed !== void 0) $$bindings.restoreDeployed(restoreDeployed);
  if ($$props.restoreDraft === void 0 && $$bindings.restoreDraft && restoreDraft !== void 0) $$bindings.restoreDraft(restoreDraft);
  if ($$props.openDrawer === void 0 && $$bindings.openDrawer && openDrawer !== void 0) $$bindings.openDrawer(openDrawer);
  if ($$props.closeDrawer === void 0 && $$bindings.closeDrawer && closeDrawer !== void 0) $$bindings.closeDrawer(closeDrawer);
  if ($$props.setDiff === void 0 && $$bindings.setDiff && setDiff !== void 0) $$bindings.setDiff(setDiff);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      updateContentType(data, diffType);
    }
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "1200px", this: diffViewer },
      {
        this: ($$value) => {
          diffViewer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Diff" }, {}, {
            actions: () => {
              return `${data?.button ? `${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                default: () => {
                  return `${escape(data.button.text)}`;
                }
              })}` : ``} `;
            },
            default: () => {
              return `<div class="flex flex-col gap-4 h-full">${diffType && data ? `${validate_component(Tabs, "Tabs").$$render(
                $$result,
                {
                  wrapperClass: "shrink-0",
                  selected: diffType
                },
                {
                  selected: ($$value) => {
                    diffType = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `${data.mode === "simple" ? `${validate_component(Tab, "Tab").$$render($$result, { value: "custom" }, {}, {
                      default: () => {
                        return `${escape(data.title)}`;
                      }
                    })}` : `${validate_component(Tab, "Tab").$$render(
                      $$result,
                      {
                        value: "deployed",
                        disabled: !data.deployed
                      },
                      {},
                      {
                        default: () => {
                          return `${escape("Deployed <> Current")}${escape(!data.deployed ? " (no deployed version)" : "")}`;
                        }
                      }
                    )} ${validate_component(Tab, "Tab").$$render($$result, { value: "draft", disabled: !data.draft }, {}, {
                      default: () => {
                        return `${escape("Latest saved draft <> Current")}${escape(!data.draft ? " (no draft)" : "")}`;
                      }
                    })}`}`;
                  }
                }
              )}` : ``} ${data?.mode === "normal" ? `${diffType === "draft" ? `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  size: "xs",
                  color: "light",
                  variant: "border",
                  wrapperClasses: "self-start",
                  disabled: orderedJsonStringify(data.draft) === orderedJsonStringify(data.current)
                },
                {},
                {
                  default: () => {
                    return `Restore to latest saved draft`;
                  }
                }
              )}` : `${diffType === "deployed" ? `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  size: "xs",
                  color: "light",
                  variant: "border",
                  wrapperClasses: "self-start",
                  disabled: !data.draft && orderedJsonStringify(data.deployed) === orderedJsonStringify(data.current)
                },
                {},
                {
                  default: () => {
                    return `Restore to deployed${escape(data.draft ? " and discard draft" : "")}`;
                  }
                }
              )}` : ``}`}` : ``} ${data ? `${contentType ? (() => {
                let content = data.mode === "normal" ? diffType === "draft" ? data.draft?.content : data.deployed?.content : data.original?.content, metadata = data.mode === "normal" ? diffType === "draft" ? data.draft?.metadata : data.deployed?.metadata : data.original?.metadata, lang = data.mode === "normal" ? diffType === "draft" ? data.draft?.lang : data.deployed?.lang : data.original?.lang;
                return `   <div class="flex flex-col h-full gap-4">${data.current.content !== void 0 ? `${validate_component(Tabs, "Tabs").$$render(
                  $$result,
                  { selected: contentType },
                  {
                    selected: ($$value) => {
                      contentType = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `${validate_component(Tab, "Tab").$$render(
                        $$result,
                        {
                          value: "content",
                          disabled: content === data.current.content
                        },
                        {},
                        {
                          default: () => {
                            return `Content${escape(content === data.current.content ? " (no changes)" : "")}`;
                          }
                        }
                      )} ${validate_component(Tab, "Tab").$$render(
                        $$result,
                        {
                          value: "metadata",
                          disabled: metadata === data.current.metadata
                        },
                        {},
                        {
                          default: () => {
                            return `Metadata${escape(metadata === data.current.metadata ? " (no changes)" : "")}`;
                          }
                        }
                      )}`;
                    }
                  }
                )}` : ``} <div class="flex-1">${contentType === "content" ? `${validate_component(DiffEditor, "DiffEditor").$$render(
                  $$result,
                  {
                    automaticLayout: true,
                    class: "h-full",
                    defaultLang: lang,
                    defaultModifiedLang: data.current.lang,
                    defaultOriginal: content,
                    defaultModified: data.current.content,
                    readOnly: true
                  },
                  {},
                  {}
                )}` : `${contentType === "metadata" ? `${validate_component(DiffEditor, "DiffEditor").$$render(
                  $$result,
                  {
                    automaticLayout: true,
                    class: "h-full",
                    defaultLang: "yaml",
                    defaultOriginal: metadata,
                    defaultModified: data.current.metadata,
                    readOnly: true
                  },
                  {},
                  {}
                )}` : ``}`}</div></div>`;
              })() : `${validate_component(Alert, "Alert").$$render($$result, { title: "No changes detected" }, {}, {
                default: () => {
                  return `${diffType === "draft" ? `There are no differences between latest saved draft and current` : `${diffType === "deployed" ? `There are no differences between deployed and current` : `${diffType === "custom" ? `There are no differences` : ``}`}`}`;
                }
              })}`}` : `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}`}</div>`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  DiffDrawer as D
};
