import type { PaginationRootProps } from 'bits-ui'
import type { Snippet } from 'svelte'
import type { ClassValue } from 'svelte/elements'
import type { paginationTheme } from './theme'
import type { ButtonProps } from '$lib/components/button'

export interface PaginationSlots {
	slotPrev?: Snippet
	slotNext?: Snippet
	slotEllipsis?: Snippet
}

export interface PaginationProps extends PaginationRootProps, PaginationSlots {
	as?: HTMLElementTagNameMap
	firstIcon?: string
	prevIcon?: string
	nextIcon?: string
	lastIcon?: string
	disabled?: boolean
	ellipsisIcon?: string
	color?: ButtonProps['color']
	variant?: ButtonProps['variant']
	activeColor?: ButtonProps['color']
	activeVariant?: ButtonProps['variant']
	size?: ButtonProps['size']
	showControls?: boolean
	class?: ClassValue | undefined | null
	ui?: Partial<typeof paginationTheme['slots']>
}