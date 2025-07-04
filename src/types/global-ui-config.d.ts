import type colors from 'tailwindcss/colors'
import type icon from '../themes/icon'
import type { accordionTheme } from '$lib/components/accordion/theme'
import type { alertTheme } from '$lib/components/alert/theme'
import type { avatarTheme } from '$lib/components/avatar'
import type { avatarGroupTheme } from '$lib/components/avatar-group/theme'
import type { badgeTheme } from '$lib/components/badge'
import type { buttonTheme } from '$lib/components/button/theme'
import type { buttonGroupTheme } from '$lib/components/button-group'
import type { cardTheme } from '$lib/components/card/theme'
import type { chipTheme } from '$lib/components/chip'
import type { containerTheme } from '$lib/components/container/theme'
import type { drawerTheme } from '$lib/components/drawer/theme'
import type { inputTheme } from '$lib/components/input/theme'
import type { linkTheme } from '$lib/components/link/theme'
import type { modalTheme } from '$lib/components/modal'
import type { paginationTheme } from '$lib/components/pagination/theme'
import type { separatorTheme } from '$lib/components/separator/theme'
import type { skeletonTheme } from '$lib/components/skeleton/theme'
import type { slideoverTheme } from '$lib/components/slideover/theme'
import type { tooltipTheme } from '$lib/components/tooltip/theme'
import type { headingTheme } from '$lib/components/typography/theme'

type ThemeConfig<T> = {
	slots?: Partial<T['slots']>
	defaultVariants: Partial<T['defaultVariants']>
}

export interface UiConfig {
	icon: Partial<Record<keyof typeof icon, string>>
	colors?: Partial<Record<'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'neutral', keyof typeof colors>>
	ui?: {
		accordion?: ThemeConfig<typeof accordionTheme>
		avatar?: ThemeConfig<typeof avatarTheme>
		avatarGroup?: ThemeConfig<typeof avatarGroupTheme>
		alert?: ThemeConfig<typeof alertTheme>
		badge?: ThemeConfig<typeof badgeTheme>
		button?: ThemeConfig<typeof buttonTheme>
		buttonGroup?: ThemeConfig<typeof buttonGroupTheme>
		chip?: ThemeConfig<typeof chipTheme>
		card?: ThemeConfig<typeof cardTheme>
		container?: ThemeConfig<typeof containerTheme>
		drawer?: ThemeConfig<typeof drawerTheme>
		separator?: ThemeConfig<typeof separatorTheme>
		skeleton?: ThemeConfig<typeof skeletonTheme>
		slideover?: ThemeConfig<typeof slideoverTheme>
		typography?: ThemeConfig<typeof headingTheme>
		pagination?: ThemeConfig<typeof paginationTheme>
		tooltip?: ThemeConfig<typeof tooltipTheme>
		link?: ThemeConfig<typeof linkTheme>
		modal?: ThemeConfig<typeof modalTheme>
		input?: ThemeConfig<typeof inputTheme>
	}
}

declare global {
	const ui: UiConfig
}

export {}
