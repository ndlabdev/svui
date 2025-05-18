import type { HTMLAnchorAttributes, HTMLAreaAttributes } from 'svelte/elements'
import type { ButtonProps } from '$lib/components/button'

export type LinkProps<T extends HTMLAnchorAttributes = HTMLAnchorAttributes> = T & {
	as?: string
	type?: ButtonProps['type']
	disabled?: ButtonProps['disabled']
	active?: boolean
	activeClass?: string
	inactiveClass?: string
	exact?: boolean
	exactQuery?: boolean | 'partial'
	exactHash?: boolean
	noRel?: boolean
	raw?: boolean
	ariaCurrentValue?: HTMLAreaAttributes['aria-current']
}
