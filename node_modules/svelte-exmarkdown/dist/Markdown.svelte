<script>import {
  createComponentsContextValue,
  setComponentsContext
} from "./contexts";
import Renderer from "./Renderer.svelte";
import { createParser, nonNullable } from "./utils";
export let md;
export let plugins = [];
let parse;
$:
  parse = createParser(plugins);
const componentsContextValue = createComponentsContextValue({});
$:
  componentsContextValue.set({
    ...plugins.map((plugin) => plugin.renderer).filter(nonNullable).reduce((acc, cur) => ({ ...acc, ...cur }), {})
  });
setComponentsContext(componentsContextValue);
let result;
$:
  result = parse(md);
</script>

<Renderer astNode={result} />
