import { defaultColors } from './colors'

let cached: Record<string, string> | null = null

export function getMergedColors(): Record<string, string> | null {
	if (cached) return cached

	try {
		const userConfig = require(`${process.cwd()}/ui.config.ts`)?.default
		cached = { ...defaultColors, ...(userConfig?.colors || {}) }
	} catch {
		cached = defaultColors
	}

	return cached
}
