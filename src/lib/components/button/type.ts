import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

type HTMLAttributesWithoutAbort = Omit<HTMLButtonAttributes, 'on:abort'> &
	Omit<HTMLAnchorAttributes, 'on:abort'>;

export interface ButtonProps extends HTMLAttributesWithoutAbort{
	label?: string
	loading?: boolean
}