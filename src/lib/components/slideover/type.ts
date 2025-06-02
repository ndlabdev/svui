import type { WithoutChild, DialogRootProps, DialogContentProps } from 'bits-ui'
import type { Snippet } from 'svelte'
import type { ClassValue } from 'svelte/elements'
import type { slideoverTheme } from './theme'
import type { ButtonProps } from '$lib/components/button'

export interface SlideoverSlots {
	slotTitle?: Snippet
	slotDescription?: Snippet
	slotHeader?: Snippet
	slotClose?: Snippet
	slotFooter?: Snippet
	slotBody?: Snippet
	slotContent?: Snippet
	children?: Snippet<[{ props: Record<string, unknown> }]>
}

export interface SlideoverProps extends Omit<DialogRootProps, 'children'>, SlideoverSlots {
	title?: string
	description?: string
	overlay?: boolean
	transition?: boolean
	portal?: boolean
	close?: boolean | Partial<ButtonProps>
	closeIcon?: string
	dismissible?: boolean
	side?: keyof typeof slideoverTheme['variants']['side']
	contentProps?: WithoutChild<DialogContentProps>
	class?: ClassValue | undefined | null
	ui?: Partial<typeof slideoverTheme['slots']>
}