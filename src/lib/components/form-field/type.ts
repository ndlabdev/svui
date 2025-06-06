import type { Snippet } from 'svelte'
import type { ClassValue } from 'svelte/elements'
import type { formFieldTheme } from './theme'

export interface FormFieldSlots {
	slotLabel?: Snippet
	slotHint?: Snippet
	slotDescription?: Snippet
	slotHelp?: Snippet
	slotError?: Snippet
	children?: Snippet
}

export interface FormFieldProps extends FormFieldSlots {
	as?: keyof HTMLElementTagNameMap
	name?: string
	size?: keyof typeof formFieldTheme['variants']['size']
	label?: string
	description?: string
	help?: string
	error?: string | boolean
	hint?: string
	required?: boolean
	class?: ClassValue | undefined | null
	ui?: Partial<typeof formFieldTheme['slots']>
}

export interface FormFieldContext {
	name?: string
	size?: keyof typeof formFieldTheme['variants']['size']
	hint?: string
	description?: string
	help?: string
	error?: string | boolean
	id?: string
}