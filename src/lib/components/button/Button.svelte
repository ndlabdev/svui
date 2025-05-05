<script lang="ts">
	import { buttonTheme, type ButtonProps } from '.'

	let {
		children,
		leading,
		trailing,
		label,
		color = 'primary',
		variant = 'solid',
		size = 'md',
		...restProps
	}: ButtonProps = $props()

	const ui = $derived(buttonTheme({
		color,
		variant,
		size,
	}))
</script>

<button
	class={ui.base()}
	{...restProps}
>
	{@render leading?.()}

	{#if children}
		{@render children?.()}
	{:else}
		{#if label}
			<span class={ui.label()}>{label}</span>
		{/if}
	{/if}

	{@render trailing?.()}
</button>
