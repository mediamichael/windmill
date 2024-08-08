import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        __tag: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SvgElementProps = typeof __propDef.props;
export type SvgElementEvents = typeof __propDef.events;
export type SvgElementSlots = typeof __propDef.slots;
export default class SvgElement extends SvelteComponentTyped<SvgElementProps, SvgElementEvents, SvgElementSlots> {
}
export {};
