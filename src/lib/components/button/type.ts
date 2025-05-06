import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements'
import type { Snippet } from 'svelte'

import type { ColorName } from '$lib/types/colors'
import type { SizeType, VariantType } from '$lib/types'

type HTMLAttributesWithoutAbort = Omit<HTMLButtonAttributes, 'on:abort'> &
	Omit<HTMLAnchorAttributes, 'on:abort'>

export interface ButtonProps extends HTMLAttributesWithoutAbort {
	leading?: Snippet
	trailing?: Snippet
	label?: string
	loading?: boolean
	color?: ColorName
	variant?: VariantType
	size?: SizeType
	block?: boolean
}
