import type { WithoutChild, DialogRootProps, DialogContentProps } from 'bits-ui'
import type { Snippet } from 'svelte'
import type { ClassValue } from 'svelte/elements'
import type { modalTheme } from './theme'
import type { ButtonProps } from '$lib/components/button'

export interface ModalSlots {
	slotTitle?: Snippet
	slotDescription?: Snippet
	slotHeader?: Snippet
	slotClose?: Snippet
	slotFooter?: Snippet
	slotBody?: Snippet
	slotContent?: Snippet
}

export interface ModalProps extends DialogRootProps, ModalSlots {
	title?: string
	description?: string
	overlay?: boolean
	transition?: boolean
	fullscreen?: boolean
	portal?: boolean
	close?: boolean | Partial<ButtonProps>
	closeIcon?: string
	dismissible?: boolean
	contentProps?: WithoutChild<DialogContentProps>
	class?: ClassValue | undefined | null
	ui?: Partial<typeof modalTheme['slots']>
}