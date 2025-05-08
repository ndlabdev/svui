import type { HTMLAttributes } from 'svelte/elements'
import type { Component, Snippet } from 'svelte'

import type { alertTheme } from './theme'

import type { ButtonProps } from '$lib/components/button'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
	title?: string
	description?: string
	icon?: Component
	color?: keyof typeof alertTheme['variants']['color']
	variant?: keyof typeof alertTheme['variants']['variant']
	orientation?: keyof typeof alertTheme['variants']['orientation']
	close?: boolean | Partial<ButtonProps>
	closeIcon?: Component
	actions?: ButtonProps[]
	slotLeading?: Snippet
	slotTitle?: Snippet
	slotDescription?: Snippet
	slotActions?: Snippet
	slotClose?: Snippet
	ui?: Partial<typeof alertTheme['slots']>
}