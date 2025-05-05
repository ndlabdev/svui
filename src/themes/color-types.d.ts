import { defaultColors } from './colors';
export type ColorKey = keyof typeof defaultColors | (string & {});
export declare const predefinedColorKeys: ColorKey[];
