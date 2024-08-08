import remarkGfm from 'remark-gfm';
import type { Plugin } from '../types';
export declare const gfmPlugin: (options?: Parameters<typeof remarkGfm>[0]) => Plugin;
