import type { HTMLAnchorAttributes, HTMLAreaAttributes } from 'svelte/elements'

export interface LinkProps extends HTMLAnchorAttributes {
	as?: string
	type?: HTMLButtonElement['type']
	custom?: boolean
	disabled?: boolean
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

export interface LinkBaseProps extends HTMLAnchorAttributes {
	as?: string
	type?: HTMLButtonElement['type']
	disabled?: boolean
	active?: boolean
}