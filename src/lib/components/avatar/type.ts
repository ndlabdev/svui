import type { HTMLAttributes } from 'svelte/elements'
import type { avatarTheme } from './theme'
import type { ChipProps } from '$lib/components/chip'
import type { LinkProps } from '$lib/components/link'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
	as?: keyof HTMLElementTagNameMap
	src?: string
	alt?: string
	text?: string
	icon?: string
	chipProps?: ChipProps
	linkProps?: LinkProps
	size?: keyof typeof avatarTheme['variants']['size']
	ui?: Partial<typeof avatarTheme['slots']>
}