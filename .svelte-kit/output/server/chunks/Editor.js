import { c as create_ssr_component, s as subscribe, d as createEventDispatcher, o as onDestroy, v as validate_component, e as escape, b as add_attribute, a as set_store_value } from "./ssr.js";
import { y as sleep, s as sendUserToast } from "./toast.js";
import * as vscode from "vscode";
import "monaco-editor";
import "monaco-editor/esm/vs/basic-languages/python/python.contribution.js";
import "monaco-editor/esm/vs/basic-languages/go/go.contribution.js";
import "monaco-editor/esm/vs/basic-languages/shell/shell.contribution.js";
import "monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js";
import "monaco-editor/esm/vs/basic-languages/sql/sql.contribution.js";
import "monaco-editor/esm/vs/basic-languages/graphql/graphql.contribution.js";
import "monaco-editor/esm/vs/basic-languages/powershell/powershell.contribution.js";
import "monaco-editor/esm/vs/basic-languages/php/php.contribution.js";
import "monaco-editor/esm/vs/language/typescript/monaco.contribution.js";
import "monaco-editor/esm/vs/basic-languages/css/css.contribution.js";
import { MonacoLanguageClient } from "monaco-languageclient";
import { toSocket, WebSocketMessageReader, WebSocketMessageWriter } from "vscode-ws-jsonrpc";
import { RequestType, ErrorAction, CloseAction } from "vscode-languageclient";
import { MonacoBinding } from "y-monaco";
import { g as codeCompletionLoading, w as workspaceStore, l as lspTokenStore, c as codeCompletionSessionEnabled, f as copilotInfo, j as dbSchemas, k as formatOnSave } from "./stores2.js";
import { c as createHash, l as langToExt } from "./SimpleEditor.js";
import { b as buildWorkerDefinition, E as EditorTheme } from "./EditorTheme.js";
import { U as UserService } from "./services.gen.js";
import "monaco-graphql/esm/initializeMode.js";
import { g as getNonStreamingCompletion } from "./lib.js";
import "vscode/services";
import "monaco-editor/esm/vs/editor/editor.api.js";
import "./infer.js";
const systemPrompt = `You are a code completion assistant, return the code that should go instead of the <completion_tokens>.

- Only return the completion tokens. Do not include the surrounding code.
- Wrap the completion tokens in a code block (\`\`\`{language}
<completion_tokens>
\`\`\`).
- Maintain correct indentation based on the context. Take into account whether there are whitespaces or tabs before the completion tokens.
- You might need to add additional line breaks at the beginning or end of the completion tokens to make the code syntactically correct.
- Pay attention to not include tokens that are already present in the code, particularly after the completion like parenteses, brackets, etc.
- Return None with no code block if you think the code is already complete.

Examples:

User:
\`\`\`typescript
function greet() {
  <completion_tokens>
}
\`\`\`
Assistant:
\`\`\`typescript
console.log('Hello, world!')
\`\`\`

User:
\`\`\`python
def main(name: str):
    // log the name <completion_tokens>
\`\`\`
Assistant:
\`\`\`python

    print(name)
\`\`\`

User:
\`\`\`typescript
function multiplyNumbers(<completion_tokens>)
\`\`\`
Assistant:
\`\`\`typescript
number1: number, number2: number
\`\`\`

User:
\`\`\`python
def greet():
    <completion_tokens>
\`\`\`
Assistant:
\`\`\`python
print("Hello World!")
\`\`\`

User:
\`\`\`typescript
function multiplyNumbers(number1: number, number2: number) {<completion_tokens>}
\`\`\`
Assistant:
\`\`\`typescript

  return number1 * number2

\`\`\`


`;
const prompt = `\`\`\`{language}
{before}<completion_tokens>{after}
\`\`\`
`;
async function editorCodeCompletion(before, after, lang, abortController) {
  codeCompletionLoading.set(true);
  const messages = [
    {
      role: "system",
      content: systemPrompt
    },
    {
      role: "user",
      content: prompt.replace("{language}", lang).replace("{before}", before).replace("{after}", after)
    }
  ];
  try {
    const result = await getNonStreamingCompletion(messages, abortController);
    const match = result.match(/```[a-zA-Z]+\n([\s\S]*?)\n```/);
    let completion = match?.[1] || "";
    return completion;
  } catch (err) {
    if (err.message !== "Request was aborted.") {
      console.log(err);
    }
  } finally {
    codeCompletionLoading.set(false);
  }
}
const css = {
  code: '.editor{padding:0}.yRemoteSelection{background-color:rgba(250,129,0,.5)}.yRemoteSelectionHead{border-bottom:2px solid orange;border-left:2px solid orange;border-top:2px solid orange;box-sizing:border-box;height:100%;position:absolute}.yRemoteSelectionHead:after{border:3px solid orange;border-radius:4px;content:" ";left:-4px;position:absolute;top:-5px}',
  map: null
};
const Editor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filePath;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $lspTokenStore, $$unsubscribe_lspTokenStore;
  let $codeCompletionSessionEnabled, $$unsubscribe_codeCompletionSessionEnabled;
  let $copilotInfo, $$unsubscribe_copilotInfo;
  let $dbSchemas, $$unsubscribe_dbSchemas;
  let $$unsubscribe_formatOnSave;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_lspTokenStore = subscribe(lspTokenStore, (value) => $lspTokenStore = value);
  $$unsubscribe_codeCompletionSessionEnabled = subscribe(codeCompletionSessionEnabled, (value) => $codeCompletionSessionEnabled = value);
  $$unsubscribe_copilotInfo = subscribe(copilotInfo, (value) => $copilotInfo = value);
  $$unsubscribe_dbSchemas = subscribe(dbSchemas, (value) => $dbSchemas = value);
  $$unsubscribe_formatOnSave = subscribe(formatOnSave, (value) => value);
  let divEl = null;
  let editor;
  let { lang } = $$props;
  let { code = "" } = $$props;
  let { cmdEnterAction = void 0 } = $$props;
  let { formatAction = void 0 } = $$props;
  let { automaticLayout = true } = $$props;
  let { websocketAlive = {
    pyright: false,
    ruff: false,
    deno: false,
    go: false,
    shellcheck: false
  } } = $$props;
  let { shouldBindKey = true } = $$props;
  let { fixedOverflowWidgets = true } = $$props;
  let { path = void 0 } = $$props;
  let { yContent = void 0 } = $$props;
  let { awareness = void 0 } = $$props;
  let { folding = false } = $$props;
  let { args = void 0 } = $$props;
  let { useWebsockets = true } = $$props;
  let { listenEmptyChanges = false } = $$props;
  let { small = false } = $$props;
  let { scriptLang } = $$props;
  let { disabled = false } = $$props;
  const rHash = createHash();
  function computePath(path2) {
    if (path2 == "" || path2 == void 0 || path2.startsWith("/")) {
      return rHash;
    } else {
      return path2;
    }
  }
  let initialPath = path;
  let websockets = [];
  let languageClients = [];
  let websocketInterval;
  let lastWsAttempt = /* @__PURE__ */ new Date();
  let nbWsAttempt = 0;
  createEventDispatcher();
  let destroyed = false;
  const uri = lang != "go" && lang != "typescript" && lang != "python" ? `file:///${filePath ?? rHash}.${langToExt(lang)}` : `file:///tmp/monaco/${createHash()}.${langToExt(lang)}`;
  console.log("uri", uri);
  buildWorkerDefinition("../../../workers", import.meta.url);
  function getCode() {
    return "";
  }
  function insertAtCursor(code2) {
  }
  function arrowDown() {
  }
  function backspace() {
  }
  function insertAtBeginning(code2) {
  }
  function insertAtLine(code2, line) {
  }
  function getSelectedLines() {
  }
  function onDidChangeCursorSelection(f) {
  }
  function show() {
  }
  function hide() {
  }
  function setCode(ncode, noHistory = false) {
    code = ncode;
  }
  function append(code2) {
  }
  async function format() {
  }
  let command = void 0;
  function updateSchema() {
    const newSchemaRes = lang === "graphql" ? args?.api : args?.database;
    if (typeof newSchemaRes === "string") {
      $dbSchemas[newSchemaRes.replace("$res:", "")];
    }
  }
  let copilotCompletor = void 0;
  let copilotTs = Date.now();
  let abortController = void 0;
  function addCopilotSuggestions() {
    if (copilotCompletor) {
      copilotCompletor.dispose();
    }
    copilotCompletor = vscode.languages.registerInlineCompletionItemProvider({ pattern: "**" }, {
      async provideInlineCompletionItems(model2, position, context, token) {
        abortController?.abort();
        const textUntilPosition = model2.getText(new vscode.Range(0, 0, position.line, position.character));
        let items = [];
        const lastChar = textUntilPosition[textUntilPosition.length - 1];
        if (textUntilPosition.trim().length > 5 && lastChar.match(/[\(\{\s:=]/)) {
          const textAfterPosition = model2.getText(new vscode.Range(position.line, position.character, model2.lineCount + 1, 1));
          const thisTs = Date.now();
          copilotTs = thisTs;
          await sleep(200);
          if (copilotTs === thisTs) {
            abortController?.abort();
            abortController = new AbortController();
            token.onCancellationRequested(() => {
              abortController?.abort();
            });
            const insertText = await editorCodeCompletion(textUntilPosition, textAfterPosition, lang, abortController);
            if (insertText) {
              items = [
                {
                  insertText,
                  range: new vscode.Range(position.line, position.character, position.line, position.character)
                }
              ];
            }
          }
        }
        return { items, commands: [] };
      }
    });
  }
  const outputChannel = {
    name: "Language Server Client",
    appendLine: (msg) => {
      console.log(msg);
    },
    append: (msg) => {
      console.log(msg);
    },
    clear: () => {
    },
    replace: () => {
    },
    show: () => {
    },
    hide: () => {
    },
    dispose: () => {
    }
  };
  async function reloadWebsocket() {
    console.log("reloadWebsocket");
    await closeWebsockets();
    function createLanguageClient(transports, name, initializationOptions, middlewareOptions) {
      const client = new MonacoLanguageClient({
        name,
        clientOptions: {
          outputChannel,
          documentSelector: [lang],
          errorHandler: {
            error: () => ({ action: ErrorAction.Continue }),
            closed: () => ({ action: CloseAction.Restart })
          },
          markdown: { isTrusted: true },
          workspaceFolder: name != "deno" ? {
            uri: vscode.Uri.parse(uri),
            name: "windmill",
            index: 0
          } : void 0,
          initializationOptions,
          middleware: {
            workspace: {
              configuration: middlewareOptions ?? ((params, token, next) => {
                return [{ enabled: true }];
              })
            }
          }
        },
        connectionProvider: {
          get: () => {
            return Promise.resolve(transports);
          }
        }
      });
      return client;
    }
    async function connectToLanguageServer(url, name, initOptions, middlewareOptions) {
      try {
        const webSocket = new WebSocket(url);
        websockets.push(webSocket);
        webSocket.onopen = async () => {
          const socket = toSocket(webSocket);
          const reader = new WebSocketMessageReader(socket);
          const writer = new WebSocketMessageWriter(socket);
          const languageClient = createLanguageClient({ reader, writer }, name, initOptions, middlewareOptions);
          const om = webSocket.onmessage;
          webSocket.onmessage = (e) => {
            om && om.apply(webSocket, [e]);
            if (destroyed) {
              webSocket.close();
              console.log("Stopping client early because of mismatch");
            }
          };
          languageClients.push(languageClient);
          if (name == "go") {
            const om2 = webSocket.onmessage;
            webSocket.onmessage = (e) => {
              om2 && om2.apply(webSocket, [e]);
              const js = JSON.parse(e.data);
              if (js.method == "window/showMessage" && js.params.message == "completed") {
                console.log("reloading websocket after go get");
                reloadWebsocket();
              }
            };
          }
          reader.onClose(async () => {
            try {
              console.log("CLOSE");
              websocketAlive[name] = false;
              await languageClient.stop();
            } catch (err) {
              console.error(err);
            }
          });
          socket.onClose((_code, _reason) => {
            websocketAlive[name] = false;
          });
          try {
            console.log("starting client");
            await languageClient.start();
            console.log("started client");
          } catch (err) {
            console.log("err at client");
            console.error(err);
            return;
          }
          lastWsAttempt = /* @__PURE__ */ new Date();
          nbWsAttempt = 0;
          if (name == "deno") {
            command && command.dispose();
            command = void 0;
            try {
              command = vscode.commands.registerCommand("deno.cache", (uris = []) => {
                languageClient.sendRequest(new RequestType("deno/cache"), {
                  referrer: { uri },
                  uris: uris.map((uri2) => ({ uri: uri2 }))
                });
              });
            } catch (err) {
              console.warn(err);
            }
          }
          websocketAlive[name] = true;
        };
      } catch (err) {
        console.error(`connection to ${name} language server failed`);
      }
    }
    const wsProtocol = "ws";
    const hostname = getHostname();
    let encodedImportMap = "";
    if (useWebsockets) {
      if (lang == "typescript" && scriptLang === "deno") {
        let root = await genRoot(hostname);
        const importMap = { imports: { "file:///": root + "/" } };
        if (filePath && filePath.split("/").length > 2) {
          let path_splitted = filePath.split("/");
          for (let c = 0; c < path_splitted.length; c++) {
            let key = "file://./";
            for (let i = 0; i < c; i++) {
              key += "../";
            }
            let url = path_splitted.slice(0, -c - 1).join("/");
            let ending = c == path_splitted.length - 1 ? "" : "/";
            importMap["imports"][key] = `${root}/${url}${ending}`;
          }
        }
        encodedImportMap = "data:text/plain;base64," + btoa(JSON.stringify(importMap));
        await connectToLanguageServer(
          `${wsProtocol}://${window.location.host}/ws/deno`,
          "deno",
          {
            certificateStores: null,
            enablePaths: [],
            config: null,
            importMap: encodedImportMap,
            internalDebug: false,
            lint: false,
            path: null,
            tlsCertificate: null,
            unsafelyIgnoreCertificateErrors: null,
            unstable: true,
            enable: true,
            codeLens: {
              implementations: true,
              references: true,
              referencesAllFunction: false
            },
            suggest: {
              autoImports: true,
              completeFunctionCalls: false,
              names: true,
              paths: true,
              imports: {
                autoDiscover: true,
                hosts: { "https://deno.land": true }
              }
            }
          },
          () => {
            return [{ enable: true }];
          }
        );
      } else if (lang === "python") {
        await connectToLanguageServer(`${wsProtocol}://${window.location.host}/ws/pyright`, "pyright", {}, (params, token, next) => {
          if (params.items.find((x) => x.section === "python")) {
            return [
              {
                analysis: {
                  useLibraryCodeForTypes: true,
                  autoImportCompletions: true,
                  diagnosticSeverityOverrides: { reportMissingImports: "none" },
                  typeCheckingMode: "basic"
                }
              }
            ];
          }
          if (params.items.find((x) => x.section === "python.analysis")) {
            return [
              {
                useLibraryCodeForTypes: true,
                autoImportCompletions: true,
                diagnosticSeverityOverrides: { reportMissingImports: "none" },
                typeCheckingMode: "basic"
              }
            ];
          }
          return next(params, token);
        });
        connectToLanguageServer(`${wsProtocol}://${window.location.host}/ws/ruff`, "ruff", {}, void 0);
      } else if (lang === "go") {
        connectToLanguageServer(`${wsProtocol}://${window.location.host}/ws/go`, "go", { "build.allowImplicitNetworkAccess": true }, void 0);
      } else if (lang === "shell") {
        connectToLanguageServer(
          `${wsProtocol}://${window.location.host}/ws/diagnostic`,
          "shellcheck",
          {
            linters: {
              shellcheck: {
                command: "shellcheck",
                debounce: 100,
                args: ["--format=gcc", "-"],
                offsetLine: 0,
                offsetColumn: 0,
                sourceName: "shellcheck",
                formatLines: 1,
                formatPattern: [
                  "^[^:]+:(\\d+):(\\d+):\\s+([^:]+):\\s+(.*)$",
                  {
                    line: 1,
                    column: 2,
                    message: 4,
                    security: 3
                  }
                ],
                securities: {
                  error: "error",
                  warning: "warning",
                  note: "info"
                }
              }
            },
            filetypes: { shell: "shellcheck" }
          },
          void 0
        );
      } else {
        closeWebsockets();
      }
      websocketInterval && clearInterval(websocketInterval);
      websocketInterval = setInterval(
        () => {
          if (document.visibilityState == "visible") {
            if (!lastWsAttempt || (/* @__PURE__ */ new Date()).getTime() - lastWsAttempt.getTime() > 6e4 && nbWsAttempt < 2) {
              if (!websocketAlive.deno && !websocketAlive.pyright && !websocketAlive.go && !websocketAlive.shellcheck && !websocketAlive.ruff && scriptLang != "bun") {
                console.log("reconnecting to language servers");
                lastWsAttempt = /* @__PURE__ */ new Date();
                nbWsAttempt++;
                reloadWebsocket();
              } else {
                if (nbWsAttempt >= 2) {
                  sendUserToast("Giving up on establishing smart assistant connection", true);
                  clearInterval(websocketInterval);
                }
              }
            }
          }
        },
        5e3
      );
    }
  }
  let pathTimeout = void 0;
  function getHostname() {
    return "SSR";
  }
  function handlePathChange() {
    console.log("path changed, reloading language server", initialPath, path);
    initialPath = path;
    pathTimeout && clearTimeout(pathTimeout);
    pathTimeout = setTimeout(reloadWebsocket, 1e3);
  }
  async function closeWebsockets() {
    command && command.dispose();
    command = void 0;
    console.debug(`disposing ${websockets.length} language clients and closing websockets`);
    for (const x of languageClients) {
      try {
        await x.dispose();
      } catch (err) {
        console.debug("error disposing language client", err);
      }
    }
    languageClients = [];
    for (const x of websockets) {
      try {
        await x.close();
      } catch (err) {
        console.debug("error closing websocket", err);
      }
    }
    console.debug("done closing websockets");
    websockets = [];
    websocketInterval && clearInterval(websocketInterval);
  }
  let model = void 0;
  let monacoBinding = void 0;
  let initialized = false;
  function addAction(id, label, callback, keybindings = []) {
  }
  onDestroy(() => {
    console.log("destroying editor");
    destroyed = true;
    websocketInterval && clearInterval(websocketInterval);
    copilotCompletor && copilotCompletor.dispose();
  });
  async function genRoot(hostname) {
    let token = $lspTokenStore;
    if (!token) {
      let expiration = /* @__PURE__ */ new Date();
      expiration.setHours(expiration.getHours() + 72);
      const newToken = await UserService.createToken({
        requestBody: {
          label: "Ephemeral lsp token",
          expiration: expiration.toISOString()
        }
      });
      set_store_value(lspTokenStore, $lspTokenStore = newToken, $lspTokenStore);
      token = newToken;
    }
    let root = hostname + "/api/scripts_u/tokened_raw/" + $workspaceStore + "/" + token;
    return root;
  }
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0) $$bindings.lang(lang);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
  if ($$props.cmdEnterAction === void 0 && $$bindings.cmdEnterAction && cmdEnterAction !== void 0) $$bindings.cmdEnterAction(cmdEnterAction);
  if ($$props.formatAction === void 0 && $$bindings.formatAction && formatAction !== void 0) $$bindings.formatAction(formatAction);
  if ($$props.automaticLayout === void 0 && $$bindings.automaticLayout && automaticLayout !== void 0) $$bindings.automaticLayout(automaticLayout);
  if ($$props.websocketAlive === void 0 && $$bindings.websocketAlive && websocketAlive !== void 0) $$bindings.websocketAlive(websocketAlive);
  if ($$props.shouldBindKey === void 0 && $$bindings.shouldBindKey && shouldBindKey !== void 0) $$bindings.shouldBindKey(shouldBindKey);
  if ($$props.fixedOverflowWidgets === void 0 && $$bindings.fixedOverflowWidgets && fixedOverflowWidgets !== void 0) $$bindings.fixedOverflowWidgets(fixedOverflowWidgets);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
  if ($$props.yContent === void 0 && $$bindings.yContent && yContent !== void 0) $$bindings.yContent(yContent);
  if ($$props.awareness === void 0 && $$bindings.awareness && awareness !== void 0) $$bindings.awareness(awareness);
  if ($$props.folding === void 0 && $$bindings.folding && folding !== void 0) $$bindings.folding(folding);
  if ($$props.args === void 0 && $$bindings.args && args !== void 0) $$bindings.args(args);
  if ($$props.useWebsockets === void 0 && $$bindings.useWebsockets && useWebsockets !== void 0) $$bindings.useWebsockets(useWebsockets);
  if ($$props.listenEmptyChanges === void 0 && $$bindings.listenEmptyChanges && listenEmptyChanges !== void 0) $$bindings.listenEmptyChanges(listenEmptyChanges);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0) $$bindings.small(small);
  if ($$props.scriptLang === void 0 && $$bindings.scriptLang && scriptLang !== void 0) $$bindings.scriptLang(scriptLang);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.getCode === void 0 && $$bindings.getCode && getCode !== void 0) $$bindings.getCode(getCode);
  if ($$props.insertAtCursor === void 0 && $$bindings.insertAtCursor && insertAtCursor !== void 0) $$bindings.insertAtCursor(insertAtCursor);
  if ($$props.arrowDown === void 0 && $$bindings.arrowDown && arrowDown !== void 0) $$bindings.arrowDown(arrowDown);
  if ($$props.backspace === void 0 && $$bindings.backspace && backspace !== void 0) $$bindings.backspace(backspace);
  if ($$props.insertAtBeginning === void 0 && $$bindings.insertAtBeginning && insertAtBeginning !== void 0) $$bindings.insertAtBeginning(insertAtBeginning);
  if ($$props.insertAtLine === void 0 && $$bindings.insertAtLine && insertAtLine !== void 0) $$bindings.insertAtLine(insertAtLine);
  if ($$props.getSelectedLines === void 0 && $$bindings.getSelectedLines && getSelectedLines !== void 0) $$bindings.getSelectedLines(getSelectedLines);
  if ($$props.onDidChangeCursorSelection === void 0 && $$bindings.onDidChangeCursorSelection && onDidChangeCursorSelection !== void 0) $$bindings.onDidChangeCursorSelection(onDidChangeCursorSelection);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.hide === void 0 && $$bindings.hide && hide !== void 0) $$bindings.hide(hide);
  if ($$props.setCode === void 0 && $$bindings.setCode && setCode !== void 0) $$bindings.setCode(setCode);
  if ($$props.append === void 0 && $$bindings.append && append !== void 0) $$bindings.append(append);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0) $$bindings.format(format);
  if ($$props.reloadWebsocket === void 0 && $$bindings.reloadWebsocket && reloadWebsocket !== void 0) $$bindings.reloadWebsocket(reloadWebsocket);
  if ($$props.addAction === void 0 && $$bindings.addAction && addAction !== void 0) $$bindings.addAction(addAction);
  $$result.css.add(css);
  filePath = computePath(path);
  path != initialPath && (scriptLang == "deno" || scriptLang == "bun" || scriptLang == "bunnative") && handlePathChange();
  lang && args && $dbSchemas && updateSchema();
  $copilotInfo.exists_openai_resource_path && $copilotInfo.code_completion_enabled && $codeCompletionSessionEnabled && initialized && addCopilotSuggestions();
  !$codeCompletionSessionEnabled && copilotCompletor && copilotCompletor.dispose();
  {
    if (yContent && awareness && model && editor) {
      monacoBinding && monacoBinding.destroy();
      monacoBinding = new MonacoBinding(yContent, model, /* @__PURE__ */ new Set([editor]), awareness);
    }
  }
  $$unsubscribe_workspaceStore();
  $$unsubscribe_lspTokenStore();
  $$unsubscribe_codeCompletionSessionEnabled();
  $$unsubscribe_copilotInfo();
  $$unsubscribe_dbSchemas();
  $$unsubscribe_formatOnSave();
  return `${validate_component(EditorTheme, "EditorTheme").$$render($$result, {}, {}, {})} <div class="${escape($$props.class, true) + " editor " + escape(disabled ? "disabled" : "", true)}"${add_attribute("this", divEl, 0)}></div>`;
});
export {
  Editor as E
};
