import type { HTMLAttributes } from 'svelte/elements'
import type { avatarGroupTheme } from './theme'
import type { AvatarProps } from '$lib/components/avatar'

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
	as?: keyof HTMLElementTagNameMap
	items: AvatarProps[]
	max?: number | string
	size?: keyof typeof avatarGroupTheme['variants']['size']
	ui?: Partial<typeof avatarGroupTheme['slots']>
}