import type { Snippet } from 'svelte'
import type { ClassValue } from 'svelte/elements'

export interface ContainerProps {
	as?: keyof HTMLElementTagNameMap
	class?: ClassValue
	children?: Snippet
}