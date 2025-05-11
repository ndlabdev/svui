import type { Snippet } from 'svelte'
import type { HTMLAttributes } from 'svelte/elements'
import type { alertTheme } from './theme'
import type { ButtonProps } from '$lib/components/button'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * The element or HTML tag the alert should render as.
	 * Common values are 'div', 'section', 'aside', etc.
	 *
	 * @defaultValue 'div'
	 */
	as?: keyof HTMLElementTagNameMap

	/**
	 * The title text of the alert.
	 * This can be replaced using `slotTitle` if custom markup is needed.
	 */
	title?: string

	/**
	 * The description or supporting text of the alert.
	 * This can be replaced using `slotDescription`.
	 */
	description?: string

	/**
	 * The icon component displayed at the start of the alert.
	 * This can be replaced with `slotLeading` for full customization.
	 */
	icon?: string

	/**
	 * The color of the alert, mapped to theme tokens.
	 * e.g. 'primary', 'success', 'danger', 'warning', etc.
	 */
	color?: keyof typeof alertTheme['variants']['color']

	/**
	 * The visual variant of the alert.
	 * e.g. 'solid', 'outline', 'soft', etc.
	 */
	variant?: keyof typeof alertTheme['variants']['variant']

	/**
	 * Layout orientation: vertical stacks content, horizontal arranges inline.
	 *
	 * @defaultValue 'vertical'
	 */
	orientation?: keyof typeof alertTheme['variants']['orientation']

	/**
	 * If true, shows a close button.
	 * You can pass `Partial<ButtonProps>` to customize the close button.
	 */
	close?: boolean | Partial<ButtonProps>

	/**
	 * Custom icon component to use in the close button.
	 */
	closeIcon?: string

	/**
	 * Optional array of button props to render action buttons at the end of the alert.
	 * Replaced if `slotActions` is provided.
	 */
	actions?: ButtonProps[]

	/**
	 * Slot to override the default icon container (leading section).
	 */
	slotLeading?: Snippet

	/**
	 * Slot to override the default title rendering.
	 */
	slotTitle?: Snippet

	/**
	 * Slot to override the default description rendering.
	 */
	slotDescription?: Snippet

	/**
	 * Slot to override the default actions section.
	 */
	slotActions?: Snippet

	/**
	 * Slot to override the close button.
	 */
	slotClose?: Snippet

	/**
	 * Custom classes to override individual alert slots (like icon, title, content).
	 */
	ui?: Partial<typeof alertTheme['slots']>
}
