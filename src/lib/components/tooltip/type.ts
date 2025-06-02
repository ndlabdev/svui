import type { TooltipRootProps, TooltipContentProps } from 'bits-ui'
import type { Snippet } from 'svelte'
import type { ClassValue } from 'svelte/elements'
import type { tooltipTheme } from './theme'

export interface TooltipSlots {
	slotContent?: Snippet
	children?: Snippet<[{ props: Record<string, unknown> }]>
}

export interface TooltipProps extends Omit<TooltipRootProps, 'children'>, TooltipSlots {
	text?: string
	portal?: boolean
	arrow?: boolean
	forceMount?: boolean
	class?: ClassValue
	contentProps?: TooltipContentProps
	ui?: Partial<typeof tooltipTheme['slots']>
}