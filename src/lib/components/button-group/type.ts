import type { Snippet } from 'svelte'
import type { ClassValue } from 'svelte/elements'
import type { buttonGroupTheme } from './theme'

export interface ButtonGroupProps {
	as?: keyof HTMLElementTagNameMap
	size?: keyof typeof buttonGroupTheme['variants']['size']
	orientation?: keyof typeof buttonGroupTheme['variants']['orientation']
	class?: ClassValue | undefined | null
	children?: Snippet
	ui?: Partial<typeof buttonGroupTheme['slots']>
}

export interface ButtonGroupContext {
	size?: keyof typeof buttonGroupTheme['variants']['size']
	orientation?: keyof typeof buttonGroupTheme['variants']['orientation']
}