import type { Snippet } from 'svelte'
import type { HTMLAttributes } from 'svelte/elements'
import type { cardTheme } from './theme'

export interface CardProps extends HTMLAttributes<HTMLElement>{
	/**
	 * The element or component this component should render as.
	 * @defaultValue 'div'
	 */
	as?: keyof HTMLElementTagNameMap
	header?: Snippet
	footer?: Snippet
	variant?: keyof typeof cardTheme['variants']['variant']
	ui?: Partial<typeof cardTheme['slots']>
}