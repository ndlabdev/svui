import type { HTMLAttributes } from 'svelte/elements'
import type { AvatarProps } from '$lib/components/avatar'
import type { separatorTheme } from '$lib/components/separator'

/**
 * Props for the Separator component.
 *
 * Separates content horizontally or vertically, with optional label or icon.
 */
export interface SeparatorProps extends HTMLAttributes<HTMLElement> {
	/**
	 * The element or component this component should render as.
	 * @defaultValue 'div'
	 */
	as?: keyof HTMLElementTagNameMap
	/**
	 * The size of the separator line.
	 * Affects the thickness (horizontal: border-t, vertical: border-s).
	 *
	 * @defaultValue 'xs'
	 */
	size?: keyof typeof separatorTheme['variants']['size']

	/**
	 * The color of the separator border.
	 * Maps to theme color tokens (e.g. primary, secondary).
	 *
	 * @defaultValue 'secondary'
	 */
	color?: keyof typeof separatorTheme['variants']['color']

	/**
	 * The border style of the separator line.
	 *
	 * @defaultValue 'solid'
	 */
	type?: keyof typeof separatorTheme['variants']['type']

	/**
	 * The orientation of the separator line.
	 * Horizontal (left to right) or vertical (top to bottom).
	 *
	 * @defaultValue 'horizontal'
	 */
	orientation?: keyof typeof separatorTheme['variants']['orientation']

	/**
	 * Optional icon to render within the separator.
	 * Appears inline with the line and label (if any).
	 */
	icon?: string

	/**
	 * The avatar to be displayed inside the button.
	 * Can be used if you don't want to specify leading or trailing icon specifically.
	 *
	 * @example
	 * ```svelte
	 * <Separator avatar="{{
	 *       src: 'https://github.com/nuxt.png'
	 *     }}" />
	 * ```
	 */
	avatar?: AvatarProps;

	/**
	 * Optional text label to display with the separator.
	 * Will be centered between lines (horizontal) or between rows (vertical).
	 */
	label?: string

	/**
	 * Override theme slots for separator (e.g. root, border, icon).
	 * Useful for customizing internal layout or styles.
	 */
	ui?: Partial<typeof separatorTheme['slots']>
}
