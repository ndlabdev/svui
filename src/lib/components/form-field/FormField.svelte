<script lang="ts">
    import { useId, Label } from 'bits-ui'
    import { setContext } from 'svelte'
    import { tv } from 'tailwind-variants'
    import { formFieldTheme, type FormFieldProps, type FormFieldContext } from '.'
    import uiConfig from '#uiconfig'

    const {
        as = 'div',
        name,
        size,
        label,
        description,
        hint,
        help,
        error,
        required,
        children,
        slotLabel,
        slotDescription,
        slotError,
        slotHelp,
        slotHint,
        class: className,
        ui
    }: FormFieldProps = $props()

    const id = useId()
    setContext<FormFieldContext>('form-field', {
        error,
        name,
        size,
        hint,
        help,
        description,
        id
    })

    const uiFormField = $derived(
        tv({
            extend: tv(formFieldTheme),
            ...(uiConfig?.ui?.formField || {})
        })({
            size,
            required
        })
    )

    const uiRoot = $derived(uiFormField.root({
        class: [className?.toString(), ui?.root]
    }))

    const uiWrapper = $derived(uiFormField.wrapper({
        class: ui?.wrapper
    }))

    const uiLabelWrapper = $derived(uiFormField.labelWrapper({
        class: ui?.labelWrapper
    }))

    const uiLabel = $derived(uiFormField.label({
        class: ui?.label
    }))

    const uiHint = $derived(uiFormField.hint({
        class: ui?.hint
    }))

    const uiDescription = $derived(uiFormField.description({
        class: ui?.description
    }))

    const uiContainer = $derived(uiFormField.container({
        class: ui?.container
    }))

    const uiError = $derived(uiFormField.error({
        class: ui?.error
    }))

    const uiHelp = $derived(uiFormField.help({
        class: ui?.help
    }))
</script>

<svelte:element this={as} class={uiRoot}>
    <div class={uiWrapper}>
        {#if label || slotLabel}
            <div class={uiLabelWrapper}>
                {#if slotLabel}
                    {@render slotLabel?.()}
                {:else}
                    <Label.Root for={id} class={uiLabel}>{label}</Label.Root>
                {/if}

                {#if hint || slotHint}
                    <span id={`${id}-hint`} class={uiHint}>
                        {#if slotHint}
                            {@render slotHint?.()}
                        {:else}
                            {hint}
                        {/if}
                    </span>
                {/if}
            </div>

            {#if description || slotDescription}
                <p id={`${id}-description`} class={uiDescription}>
                    {#if slotDescription}
                        {@render slotDescription?.()}
                    {:else}
                        {description}
                    {/if}
                </p>
            {/if}
        {/if}

        <div class={(label || slotLabel || description || slotDescription) && uiContainer}>
            {@render children?.()}

            {#if typeof error === 'string' && error}
                <p id={`${id}-error`} class={uiError}>
                    {#if slotError}
                        {@render slotError?.()}
                    {:else}
                        {error}
                    {/if}
                </p>
            {:else if help || slotHelp}
                <p class={uiHelp}>
                    {#if slotHelp}
                        {@render slotHelp?.()}
                    {:else}
                        {help}
                    {/if}
                </p>
            {/if}
        </div>
    </div>
</svelte:element>