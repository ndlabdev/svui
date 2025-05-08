import type { Snippet } from 'svelte'
import type { HTMLAttributes } from 'svelte/elements'

import type { cardTheme } from './theme'

export interface CardProps extends HTMLAttributes<HTMLDivElement>{
	header?: Snippet
	footer?: Snippet
	ui?: Partial<typeof cardTheme['slots']>
}