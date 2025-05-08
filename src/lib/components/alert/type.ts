import type { HTMLAttributes } from 'svelte/elements'
import type { Component, Snippet } from 'svelte'

import type { alertTheme } from './theme'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
	title?: string
	description?: string
	icon?: Component
	color?: keyof typeof alertTheme['variants']['color']
	variant?: keyof typeof alertTheme['variants']['variant']
	orientation?: keyof typeof alertTheme['variants']['orientation']
	close?: boolean
	closeIcon?: Component
	slotLeading?: Snippet
	slotTitle?: Snippet
	slotDescription?: Snippet
	slotClose?: Snippet
	ui?: Partial<typeof alertTheme['slots']>
}