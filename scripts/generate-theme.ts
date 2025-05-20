import fs from 'fs'
import path from 'path'
import allColors from 'tailwindcss/colors'
import { defaultColors } from '../src/themes'

export async function generateTheme() {
    const userConfigPath = path.resolve(process.cwd(), 'src/ui.config.ts')
    let userColors: Record<string, string> = {}

    // Load ui.config.ts if it exists
    if (fs.existsSync(userConfigPath)) {
        try {
            const userConfigModule = await import(`file://${userConfigPath}?t=${Date.now()}`)
            const config = userConfigModule.default || {}
            userColors = config.colors || {}
        } catch (error) {
            console.error('[svui] ❌ Failed to load ui.config.ts:', error)
        }
    }

    const mergedColors = { ...defaultColors, ...userColors }

    // === Generate theme.css ===
    const lines: string[] = ['@theme default inline {']
    for (const [key, name] of Object.entries(mergedColors)) {
        const tailwindColor = (allColors as Record<string, any>)[name]

        if (typeof tailwindColor === 'object') {
            lines.push(`  --color-${key}: ${tailwindColor['500']};`)

            for (const [shade, value] of Object.entries(tailwindColor)) {
                lines.push(`  --color-${key}-${shade}: ${value};`)
            }
        } else {
            lines.push(`  --color-${key}: ${tailwindColor};`)
        }
    }

    lines.push(`--radius-xs: calc(var(--ui-radius) * 0.5);
		--radius-sm: var(--ui-radius);
		--radius-md: calc(var(--ui-radius) * 1.5);
		--radius-lg: calc(var(--ui-radius) * 2);
		--radius-xl: calc(var(--ui-radius) * 3);
		--radius-2xl: calc(var(--ui-radius) * 4);
		--radius-3xl: calc(var(--ui-radius) * 6);
		--text-color-dimmed: var(--ui-text-dimmed);
		--text-color-muted: var(--ui-text-muted);
		--text-color-toned: var(--ui-text-toned);
		--text-color-default: var(--ui-text);
		--text-color-highlighted: var(--ui-text-highlighted);
		--text-color-inverted: var(--ui-text-inverted);
		--background-color-default: var(--ui-bg);
		--background-color-muted: var(--ui-bg-muted);
		--background-color-elevated: var(--ui-bg-elevated);
		--background-color-accented: var(--ui-bg-accented);
		--background-color-inverted: var(--ui-bg-inverted);
		--background-color-border: var(--ui-border);
		--border-color-default: var(--ui-border);
		--border-color-muted: var(--ui-border-muted);
		--border-color-accented: var(--ui-border-accented);
		--border-color-inverted: var(--ui-border-inverted);
		--border-color-bg: var(--ui-bg);
		--ring-color-default: var(--ui-border);
		--ring-color-muted: var(--ui-border-muted);
		--ring-color-accented: var(--ui-border-accented);
		--ring-color-inverted: var(--ui-border-inverted);
		--ring-color-bg: var(--ui-bg);
		--ring-offset-color-default: var(--ui-border);
		--ring-offset-color-muted: var(--ui-border-muted);
		--ring-offset-color-accented: var(--ui-border-accented);
		--ring-offset-color-inverted: var(--ui-border-inverted);
		--ring-offset-color-bg: var(--ui-bg);
		--divide-color-default: var(--ui-border);
		--divide-color-muted: var(--ui-border-muted);
		--divide-color-accented: var(--ui-border-accented);
		--divide-color-inverted: var(--ui-border-inverted);
		--divide-color-bg: var(--ui-bg);
		--outline-color-default: var(--ui-border);
		--outline-color-inverted: var(--ui-border-inverted);
		--stroke-default: var(--ui-border);
		--stroke-inverted: var(--ui-border-inverted);
		--fill-default: var(--ui-border);
		--fill-inverted: var(--ui-border-inverted);`)
    lines.push('}')
    const themeCss = lines.join('\n')

    const themeOutputPath = path.resolve(process.cwd(), 'src/generated/theme.css')
    fs.mkdirSync(path.dirname(themeOutputPath), { recursive: true })
    fs.writeFileSync(themeOutputPath, themeCss, 'utf8')

    console.log('[svui] ✅ theme.css generated at src/generated/theme.css')
}

// CLI support
if (import.meta.url === `file://${process.argv[1]}`) {
    generateTheme().catch(console.error)
}
