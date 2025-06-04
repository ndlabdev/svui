import type { WithoutChild, WithoutChildren } from 'bits-ui'
import type { Snippet } from 'svelte'
import type { ClassValue } from 'svelte/elements'
import type { DrawerRootProps, DrawerContentProps, DrawerTriggerProps } from 'vaul-svelte'
import type { drawerTheme } from './theme'

export interface DrawerSlots {
	slotTitle?: Snippet
	slotDescription?: Snippet
	slotHeader?: Snippet
	slotFooter?: Snippet
	slotBody?: Snippet
	slotContent?: Snippet
	children?: Snippet<[{ props: Record<string, unknown> }]>
}

export interface DrawerProps extends DrawerSlots, WithoutChildren<DrawerTriggerProps>, Pick<DrawerRootProps, 'activeSnapPoint' | 'closeThreshold' | 'shouldScaleBackground' | 'setBackgroundColorOnScale' | 'scrollLockTimeout' | 'fixed' | 'dismissible' | 'modal' | 'open' | 'defaultOpen' | 'nested' | 'direction' | 'noBodyStyles' | 'handleOnly' | 'preventScrollRestoration' | 'snapPoints'> {
	as?: string
	title?: string
	description?: string
	inset?: boolean
	overlay?: boolean
	handle?: boolean
	portal?: boolean
	class?: ClassValue | undefined | null
	triggerProps?: WithoutChild<DrawerTriggerProps>
	contentProps?: WithoutChild<DrawerContentProps>
	ui?: Partial<typeof drawerTheme['slots']>
}