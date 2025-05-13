import type { AccordionRootProps, AccordionItemPropsWithoutHTML } from 'bits-ui'
import { type Snippet } from 'svelte'
import type { accordionTheme } from './theme'

export interface AccordionSlots {
	leading?: Snippet
}

export type AccordionProps = Omit<AccordionRootProps, 'orientation'> & AccordionSlots & {
	trailingIcon?: string
	forceMount?: boolean
	items?: AccordionItemPropsWithoutHTML & {
		icon?: string
		trailingIcon?: string
		label?: string
		content?: string
		value?: string
		disabled?: boolean
		slot?: {
			component: any
			props: Record<string, unknown>
		}
	}[]
	ui?: Partial<typeof accordionTheme['slots']>
}