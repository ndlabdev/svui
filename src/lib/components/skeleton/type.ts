import type { HTMLAttributes } from 'svelte/elements'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    /**
	 * The element or component this component should render as.
	 * @defaultValue 'div'
	 */
	as?: keyof HTMLElementTagNameMap
}