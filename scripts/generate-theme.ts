import fs from 'fs'
import path from 'path'
import { defaultColors } from '../src/themes/colors.js'
import allColors from 'tailwindcss/colors'

export async function generateTheme() {
	const userConfigPath = path.resolve(process.cwd(), 'ui.config.ts')
	let userColors: Record<string, string> = {}

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

	const css = lines.join('\n')

	const outputPath = path.resolve(process.cwd(), 'src/generated/theme.css');
	fs.mkdirSync(path.dirname(outputPath), { recursive: true })
	fs.writeFileSync(outputPath, css, 'utf8')

	console.log('[svui] ✅ theme.css generated at svui/generated/theme.css')
}

// CLI support
if (import.meta.url === `file://${process.argv[1]}`) {
	generateTheme().catch(console.error)
}
