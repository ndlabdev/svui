import type { HTMLAttributes } from 'svelte/elements'
import type { badgeTheme } from './theme'
import type { AvatarProps } from '$lib/components/avatar'

export interface BadgeSlots {
	leading?: boolean
	trailing?: boolean
}

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, BadgeSlots {
	as?: keyof HTMLElementTagNameMap
	label?: string | number
	icon?: string;
	leadingIcon?: string;
	trailingIcon?: string;
	avatar?: AvatarProps;
	color?: keyof typeof badgeTheme['variants']['color']
	size?: keyof typeof badgeTheme['variants']['size']
	variant?: keyof typeof badgeTheme['variants']['variant']
	square?: boolean
	ui?: Partial<typeof badgeTheme['slots']>
}