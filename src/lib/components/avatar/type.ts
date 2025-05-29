import type { HTMLAttributes } from 'svelte/elements'
import type { avatarTheme } from './theme'
import type { ChipProps } from '$lib/components/chip'
import type { TooltipProps } from '$lib/components/tooltip'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
	as?: keyof HTMLElementTagNameMap
	src?: string
	alt?: string
	text?: string
	icon?: string
	chipProps?: ChipProps
	tooltipProps?: TooltipProps
	size?: keyof typeof avatarTheme['variants']['size']
	ui?: Partial<typeof avatarTheme['slots']>
}