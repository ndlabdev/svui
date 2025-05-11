import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements'
import type { buttonTheme } from './theme'
import type { SizeType, ColorType, VariantType } from '$lib/types'

type HTMLAttributesWithoutAbort = Omit<HTMLButtonAttributes, 'on:abort'> &
	Omit<HTMLAnchorAttributes, 'on:abort'>

export interface ButtonProps extends HTMLAttributesWithoutAbort {
	/**
	 * A component rendered before the button label.
	 * Typically used for leading icons.
	 *
	 * @example
	 * ```svelte
	 * <Button leading={IconArrowLeft} />
	 * ```
	 */
	leading?: boolean
	leadingIcon?: string

	/**
	 * A component rendered after the button label.
	 * Typically used for trailing icons.
	 *
	 * @example
	 * ```svelte
	 * <Button trailing={IconChevronRight} />
	 * ```
	 */
	trailing?: boolean
	trailingIcon?: string

	/**
	 * The main label of the button.
	 * If not provided, the default `<slot />` content will be rendered.
	 *
	 * @example
	 * ```svelte
	 * <Button label="Submit" />
	 * ```
	 */
	label?: string

	/**
	 * If true, the button will enter a loading state:
	 * disables interactions and renders the `loadingIcon` instead of content.
	 *
	 * @defaultValue false
	 *
	 * @example
	 * ```svelte
	 * <Button loading label="Saving..." />
	 * ```
	 */
	loading?: boolean
	loadingIcon?: string

	/**
	 * The color theme for the button, e.g. `'primary'`, `'danger'`, `'info'`, etc.
	 * This value is mapped to Tailwind color utilities.
	 *
	 * @defaultValue 'primary'
	 *
	 * @example
	 * ```svelte
	 * <Button color="danger" />
	 * ```
	 */
	color?: ColorType

	/**
	 * The visual style of the button.
	 *
	 * - `solid`: filled background
	 * - `outline`: bordered with transparent background
	 * - `ghost`: transparent background, no border
	 * - `link`: styled as a text link
	 * - `soft`: subtle background
	 * - `subtle`: even more minimal than soft
	 *
	 * @defaultValue 'solid'
	 *
	 * @example
	 * ```svelte
	 * <Button variant="outline" />
	 * ```
	 */
	variant?: VariantType

	/**
	 * The size of the button.
	 * Accepts predefined sizes such as `'sm'`, `'md'`, `'lg'`, `'xl'`.
	 *
	 * @defaultValue 'md'
	 *
	 * @example
	 * ```svelte
	 * <Button size="lg" />
	 * ```
	 */
	size?: SizeType

	/**
	 * If true, the button expands to full width.
	 *
	 * @defaultValue false
	 *
	 * @example
	 * ```svelte
	 * <Button block label="Continue" />
	 * ```
	 */
	block?: boolean

	/**
	 * The HTML element or component to render this button as when it's not a link.
	 *
	 * Useful when rendering buttons as `<div>`, `<span>`, or custom components.
	 *
	 * @defaultValue 'button'
	 *
	 * @example
	 * ```svelte
	 * <Button tag="div" />
	 * ```
	 */
	tag?: string

	/**
	 * An optional override for internal UI class slots, typically derived from your theme config.
	 * You can customize layout, spacing, or element-specific styles.
	 *
	 * @example
	 * ```ts
	 * ui={{
	 *   base: 'inline-flex gap-2',
	 *   icon: 'text-sm',
	 *   label: 'font-medium'
	 * }}
	 * ```
	 */
	ui?: Partial<typeof buttonTheme['slots']>
}
