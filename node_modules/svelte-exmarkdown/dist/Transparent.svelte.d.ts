import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TransparentProps = typeof __propDef.props;
export type TransparentEvents = typeof __propDef.events;
export type TransparentSlots = typeof __propDef.slots;
export default class Transparent extends SvelteComponentTyped<TransparentProps, TransparentEvents, TransparentSlots> {
}
export {};
