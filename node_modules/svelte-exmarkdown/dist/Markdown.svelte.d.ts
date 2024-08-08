import { SvelteComponentTyped } from "svelte";
import type { Plugin } from './types';
declare const __propDef: {
    props: {
        md: string;
        plugins?: Plugin[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MarkdownProps = typeof __propDef.props;
export type MarkdownEvents = typeof __propDef.events;
export type MarkdownSlots = typeof __propDef.slots;
export default class Markdown extends SvelteComponentTyped<MarkdownProps, MarkdownEvents, MarkdownSlots> {
}
export {};
