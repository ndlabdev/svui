import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements'
import type { Snippet } from 'svelte'

import type { SizeType, ColorType, VariantType } from '$lib/types'

type HTMLAttributesWithoutAbort = Omit<HTMLButtonAttributes, 'on:abort'> &
	Omit<HTMLAnchorAttributes, 'on:abort'>

export interface ButtonProps extends HTMLAttributesWithoutAbort {
	leading?: Snippet
	trailing?: Snippet
	label?: string
	loading?: boolean
	color?: ColorType
	variant?: VariantType
	size?: SizeType
	block?: boolean
}
