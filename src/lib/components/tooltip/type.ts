import type { TooltipRootProps, TooltipContentProps, TooltipTriggerProps } from 'bits-ui'
import type { Snippet } from 'svelte'
import type { ClassValue } from 'svelte/elements'
import type { tooltipTheme } from './theme'

export interface TooltipSlots {
	slotContent?: Snippet
}

export interface TooltipProps extends TooltipRootProps, Omit<TooltipTriggerProps, 'disabled'>, TooltipSlots {
	text?: string
	portal?: boolean
	arrow?: boolean
	forceMount?: boolean
	class?: ClassValue
	triggerProps?: TooltipTriggerProps
	contentProps?: TooltipContentProps
	ui?: Partial<typeof tooltipTheme['slots']>
}