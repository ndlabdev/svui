import type { AccordionRootProps, AccordionItemPropsWithoutHTML } from 'bits-ui'
import type { Snippet } from 'svelte'
import type { accordionTheme } from './theme'

export interface AccordionSlots {
	leading?: Snippet
	content?: boolean
	body?: boolean
}

export type AccordionProps = AccordionRootProps & AccordionSlots & {
	trailingIcon?: string
	forceMount?: boolean
	items?: AccordionItemPropsWithoutHTML & {
		icon?: string
		trailingIcon?: string
		label?: string
		content?: string
		value?: string
		disabled?: boolean
	}[]
	ui?: Partial<typeof accordionTheme['slots']>
}