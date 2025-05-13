import type colors from 'tailwindcss/colors'
import type icon from '../themes/icon'
import type { accordionTheme } from '$lib/components/accordion/theme'
import type { alertTheme } from '$lib/components/alert/theme'
import type { buttonTheme } from '$lib/components/button/theme'
import type { cardTheme } from '$lib/components/card/theme'
import type { separatorTheme } from '$lib/components/separator/theme'
import type { skeletonTheme } from '$lib/components/skeleton/theme'
import type { headingTheme } from '$lib/components/typography/theme'
import type { ColorType } from '$lib/types'

export interface UiConfig {
	icon: Partial<Record<keyof typeof icon, string>>
	colors?: Partial<Record<ColorType, keyof typeof colors>>
	ui?: {
		accordion?: {
			slots?: Partial<typeof accordionTheme['slots']>
		}
		alert?: {
			slots?: Partial<typeof alertTheme['slots']>
		}
		button?: {
			slots?: Partial<typeof buttonTheme['slots']>
		}
		card: {
			slots?: Partial<typeof cardTheme['slots']>
		}
		separator?: {
			slots?: Partial<typeof separatorTheme['slots']>
		}
		skeleton?: {
			slots?: Partial<typeof skeletonTheme['slots']>
		}
		typography?: {
			slots?: Partial<typeof headingTheme['slots']>
		}
	}
}

declare global {
	const ui: UiConfig
}

export {}
