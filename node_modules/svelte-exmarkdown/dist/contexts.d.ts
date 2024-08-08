/// <reference types="svelte" />
import { type Readable } from 'svelte/store';
import type { ComponentsMap, HastNode } from './types';
export declare const getComponentsMap: () => Readable<ComponentsMap>;
export declare const setComponentsContext: (value: Readable<ComponentsMap>) => Readable<ComponentsMap>;
export declare const createComponentsContextValue: (init: ComponentsMap) => {
    set: (this: void, value: ComponentsMap) => void;
    subscribe: (this: void, run: import("svelte/store").Subscriber<ComponentsMap>, invalidate?: import("svelte/store").Invalidator<ComponentsMap> | undefined) => import("svelte/store").Unsubscriber;
};
export declare const getAstNode: () => Readable<HastNode>;
export declare const setAstContext: (value: Readable<HastNode>) => Readable<HastNode>;
export declare const createAstContextValue: (init: HastNode) => {
    set: (this: void, value: import("./types").HastRoot | import("./types").HastElement | import("./types").HastDoctype | import("./types").HastComment | import("./types").HastText | import("./types").HastRaw) => void;
    subscribe: (this: void, run: import("svelte/store").Subscriber<import("./types").HastRoot | import("./types").HastElement | import("./types").HastDoctype | import("./types").HastComment | import("./types").HastText | import("./types").HastRaw>, invalidate?: import("svelte/store").Invalidator<import("./types").HastRoot | import("./types").HastElement | import("./types").HastDoctype | import("./types").HastComment | import("./types").HastText | import("./types").HastRaw> | undefined) => import("svelte/store").Unsubscriber;
};
