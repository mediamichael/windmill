import { SvelteComponentTyped } from "svelte";
import type { HastNode } from './types';
declare const __propDef: {
    props: {
        astNode: HastNode;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RendererProps = typeof __propDef.props;
export type RendererEvents = typeof __propDef.events;
export type RendererSlots = typeof __propDef.slots;
export default class Renderer extends SvelteComponentTyped<RendererProps, RendererEvents, RendererSlots> {
}
export {};
