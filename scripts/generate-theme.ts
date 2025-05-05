import fs from 'fs'
import path from 'path'
import { defaultColors } from '../src/themes'
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

	// === Generate theme.css ===
	const lines: string[] = ['@theme static {']
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

	// === Generate colors-safelist.css ===
	const colorKeys = Object.keys(mergedColors)
	const basePrefixes = [
		'bg', 'text', 'border', 'ring', 'outline',
		'decoration', 'stroke', 'fill', 'accent',
		'divide', 'placeholder', 'shadow'
	]
	const variants = ['hover:', 'focus:', 'focus-visible:', 'active:', 'disabled:', 'aria-disabled:', '']

	// ✅ dùng brace-expanded shades
	const shadeStr = '-{50,{100..900..100},950}'

	const generateSafelistLines = (
		prefix: string,
		includeVariants = true,
		includeShades = true
	): string[] => {
		const variantStr = includeVariants ? `{${variants.join(',')}}` : ''

		const noShade = `${variantStr}${prefix}-{${colorKeys.join(',')}}`
		const withShade = `${variantStr}${prefix}-{${colorKeys.join(',')}}${includeShades ? shadeStr : ''}`

		const lines = [`@source inline("${noShade}");`]
		if (includeShades) {
			lines.push(`@source inline("${withShade}");`)
		}

		return lines
	}

	const safelistLines = basePrefixes.flatMap((prefix) =>
		generateSafelistLines(prefix, true, prefix !== 'shadow')
	)

	const safelistOutputPath = path.resolve('src/generated/colors-safelist.css')
	fs.writeFileSync(safelistOutputPath, safelistLines.join('\n'), 'utf8')

	console.log('[svui] ✅ colors-safelist.css generated at src/generated/colors-safelist.css')
}

// CLI support
if (import.meta.url === `file://${process.argv[1]}`) {
	generateTheme().catch(console.error)
}
