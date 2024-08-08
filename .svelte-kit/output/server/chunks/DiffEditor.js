import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute } from "./ssr.js";
import "monaco-editor";
import "monaco-editor/esm/vs/basic-languages/python/python.contribution.js";
import "monaco-editor/esm/vs/basic-languages/go/go.contribution.js";
import "monaco-editor/esm/vs/basic-languages/shell/shell.contribution.js";
import "monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js";
import "monaco-editor/esm/vs/basic-languages/sql/sql.contribution.js";
import "monaco-editor/esm/vs/language/typescript/monaco.contribution.js";
import "monaco-languageclient";
import "vscode/services";
import "monaco-editor/esm/vs/editor/editor.api.js";
import { b as buildWorkerDefinition, E as EditorTheme } from "./EditorTheme.js";
const DiffEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  buildWorkerDefinition("../../../workers", import.meta.url);
  let { automaticLayout = true } = $$props;
  let { fixedOverflowWidgets = true } = $$props;
  let { defaultLang = void 0 } = $$props;
  let { defaultModifiedLang = void 0 } = $$props;
  let { defaultOriginal = void 0 } = $$props;
  let { defaultModified = void 0 } = $$props;
  let { readOnly = false } = $$props;
  let diffDivEl = null;
  function setupModel(lang, original, modified, modifiedLang) {
  }
  function setOriginal(code) {
  }
  function getOriginal() {
    return "";
  }
  function setModified(code) {
  }
  function getModified() {
    return "";
  }
  function show() {
  }
  function hide() {
  }
  if ($$props.automaticLayout === void 0 && $$bindings.automaticLayout && automaticLayout !== void 0) $$bindings.automaticLayout(automaticLayout);
  if ($$props.fixedOverflowWidgets === void 0 && $$bindings.fixedOverflowWidgets && fixedOverflowWidgets !== void 0) $$bindings.fixedOverflowWidgets(fixedOverflowWidgets);
  if ($$props.defaultLang === void 0 && $$bindings.defaultLang && defaultLang !== void 0) $$bindings.defaultLang(defaultLang);
  if ($$props.defaultModifiedLang === void 0 && $$bindings.defaultModifiedLang && defaultModifiedLang !== void 0) $$bindings.defaultModifiedLang(defaultModifiedLang);
  if ($$props.defaultOriginal === void 0 && $$bindings.defaultOriginal && defaultOriginal !== void 0) $$bindings.defaultOriginal(defaultOriginal);
  if ($$props.defaultModified === void 0 && $$bindings.defaultModified && defaultModified !== void 0) $$bindings.defaultModified(defaultModified);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0) $$bindings.readOnly(readOnly);
  if ($$props.setupModel === void 0 && $$bindings.setupModel && setupModel !== void 0) $$bindings.setupModel(setupModel);
  if ($$props.setOriginal === void 0 && $$bindings.setOriginal && setOriginal !== void 0) $$bindings.setOriginal(setOriginal);
  if ($$props.getOriginal === void 0 && $$bindings.getOriginal && getOriginal !== void 0) $$bindings.getOriginal(getOriginal);
  if ($$props.setModified === void 0 && $$bindings.setModified && setModified !== void 0) $$bindings.setModified(setModified);
  if ($$props.getModified === void 0 && $$bindings.getModified && getModified !== void 0) $$bindings.getModified(getModified);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.hide === void 0 && $$bindings.hide && hide !== void 0) $$bindings.hide(hide);
  return `${validate_component(EditorTheme, "EditorTheme").$$render($$result, {}, {}, {})} <div class="${escape($$props.class, true) + " editor"}"${add_attribute("this", diffDivEl, 0)}></div>`;
});
export {
  DiffEditor as D
};
