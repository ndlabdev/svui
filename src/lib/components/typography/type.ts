import type { HTMLAttributes } from 'svelte/elements'

import type { headingTheme } from './theme'

export interface HeadingProps extends HTMLAttributes<HTMLElement> {
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'blockquote'
	variant?: 'lead' | 'large' | 'small' | 'muted'
	label?: string
	ui?: typeof headingTheme['slots']
}
