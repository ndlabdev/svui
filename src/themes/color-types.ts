import { defaultColors } from './colors'

export type ColorKey = keyof typeof defaultColors | (string & {})
export const predefinedColorKeys = Object.keys(defaultColors) as ColorKey[]
