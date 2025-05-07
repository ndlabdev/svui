import { defaultColors } from './colors'

export async function resolveColors() {
    try {
        const userModule = await import(
            /* @vite-ignore */ `file://${process.cwd()}/ui.config.ts?t=${Date.now()}`
        )
        return { ...defaultColors, ...(userModule.default?.colors || {}) }
    } catch {
        return defaultColors
    }
}
