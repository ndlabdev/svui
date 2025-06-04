import type { Snippet } from 'svelte'
import type { HTMLAttributes } from 'svelte/elements'
import type { chipTheme } from './theme'

export interface ChipSlots {
	slotContent?: Snippet
	child?: Snippet<[{ props: Record<string, unknown> }]>
}

export interface ChipProps extends HTMLAttributes<HTMLElement>, ChipSlots {
	as?: keyof HTMLElementTagNameMap
	text?: string | number
	show?: boolean
	color?: keyof typeof chipTheme['variants']['color']
	size?: keyof typeof chipTheme['variants']['size']
	position?: keyof typeof chipTheme['variants']['position']
	inset?: boolean
	standalone?: boolean
	ui?: Partial<typeof chipTheme['slots']>
}