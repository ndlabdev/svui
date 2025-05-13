import type { HTMLAttributes } from 'svelte/elements'
import type { avatarTheme } from './theme'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
	as?: keyof HTMLElementTagNameMap
	src?: string
	alt?: string
	text?: string
	icon?: string
	size?: keyof typeof avatarTheme['variants']['size']
	ui?: Partial<typeof avatarTheme['slots']>
}