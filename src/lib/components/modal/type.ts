import type { DialogRootProps } from 'bits-ui'
import type { Snippet } from 'svelte'
import type { modalTheme } from './theme'
import type { ButtonProps } from '$lib/components/button'

export interface ModalSlots {
	slotTitle?: Snippet
	slotDescription?: Snippet
	slotHeader?: Snippet
	slotClose?: Snippet
	slotFooter?: Snippet
	slotBody?: Snippet
}

export interface ModalProps extends DialogRootProps, ModalSlots {
	title?: string
	description?: string
	overlay?: boolean
	transition?: boolean
	fullscreen?: boolean
	portal?: boolean | string | HTMLElement
	close?: boolean | Partial<ButtonProps>
	closeIcon?: string
	dismissible?: boolean
	ui?: keyof typeof modalTheme['slots']
}