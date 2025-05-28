import type { AccordionRootProps, AccordionItemPropsWithoutHTML } from 'bits-ui'
import { type Snippet } from 'svelte'
import type { accordionTheme } from './theme'

export interface AccordionItem extends AccordionItemPropsWithoutHTML {
	icon?: string
	trailingIcon?: string
	label?: string
	content?: string
	value?: string
	custom?: boolean
	disabled?: boolean
}

export interface AccordionSlots {
	leading?: Snippet
	slotItem?: Snippet<[item: AccordionItem]>
}

export type AccordionProps = Omit<AccordionRootProps, 'orientation'> & AccordionSlots & {
	trailingIcon?: string
	forceMount?: boolean
	items?: AccordionItem[]
	ui?: Partial<typeof accordionTheme['slots']>
}

export interface AccordionItemProps {
	item: AccordionItem
	value: string
	children?: Snippet
}