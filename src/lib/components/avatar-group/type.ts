import type { HTMLAttributes } from 'svelte/elements'
import type { avatarGroupTheme } from './theme'

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
	as?: keyof HTMLElementTagNameMap
	max?: number | string
	size?: keyof typeof avatarGroupTheme['variants']['size']
	ui?: Partial<typeof avatarGroupTheme['slots']>
}