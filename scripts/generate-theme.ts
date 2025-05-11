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
    const lines: string[] = ['@theme {']
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
