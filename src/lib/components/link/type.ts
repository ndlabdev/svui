import type { Snippet } from 'svelte'
import type { HTMLAnchorAttributes } from 'svelte/elements'

export interface LinkProps extends HTMLAnchorAttributes {
	external?: boolean
	rel?: 'noopener' | 'noreferrer' | 'nofollow' | 'sponsored' | 'ugc' | (string & {}) | null
	noRel?: boolean
	children: Snippet;
}

export interface LinkBaseProps extends LinkProps {
	as?: string
	type?: string
	disabled?: boolean
	onClick?: ((e: MouseEvent) => void | Promise<void>) | Array<((e: MouseEvent) => void | Promise<void>)>
	href?: string
	goto?: (e: MouseEvent) => void
	active?: boolean
	isExternal?: boolean
}