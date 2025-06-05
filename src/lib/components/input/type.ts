import type { Snippet } from 'svelte'
import type { HTMLAttributes, HTMLInputAttributes } from 'svelte/elements'
import type { inputTheme } from './theme'
import type { AvatarProps } from '$lib/components/avatar'

export interface InputSlots {
	slotLeading?: Snippet
	slotTrailing?: Snippet
}

export interface InputProps extends HTMLAttributes<HTMLDivElement>, InputSlots {
	as?: keyof HTMLElementTagNameMap
	id?: string
	name?: string
	type?: HTMLInputAttributes['type']
	placeholder?: string
	icon?: string
	avatar?: AvatarProps;
	leadingIcon?: string
	trailingIcon?: string
	loadingIcon?: string
	loading?: boolean
	value?: null | string | number | bigint
	color?: keyof typeof inputTheme['variants']['color']
	variant?: keyof typeof inputTheme['variants']['variant']
	size?: keyof typeof inputTheme['variants']['size']
	required?: boolean
	autocomplete?: HTMLInputAttributes['autocomplete']
	autofocus?: boolean
	autofocusDelay?: number
	disabled?: boolean
	highlight?: boolean
	ui?: Partial<typeof inputTheme['slots']>
}