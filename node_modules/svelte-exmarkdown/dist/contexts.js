import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';
const componentsContextKey = 'components';
export const getComponentsMap = () => getContext(componentsContextKey);
export const setComponentsContext = (value) => setContext(componentsContextKey, value);
export const createComponentsContextValue = (init) => {
    const { set, subscribe } = writable(init);
    return { set, subscribe };
};
const astContextKey = 'ast';
export const getAstNode = () => getContext(astContextKey);
export const setAstContext = (value) => setContext(astContextKey, value);
export const createAstContextValue = (init) => {
    const { set, subscribe } = writable(init);
    return { set, subscribe };
};
