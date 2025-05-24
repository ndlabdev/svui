import type { TooltipRootProps, TooltipContentProps } from 'bits-ui'
import type { Snippet } from 'svelte'
import type { ClassValue } from 'svelte/elements'
import type { tooltipTheme } from './theme'

export interface TooltipSlots {
	slotContent?: Snippet
}

export interface TooltipProps extends TooltipRootProps, TooltipSlots {
	text?: string
	portal?: boolean
	arrow?: boolean
	class?: ClassValue
	contentProps?: TooltipContentProps
	ui?: Partial<typeof tooltipTheme['slots']>
}