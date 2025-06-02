<script lang="ts">
    import { Pagination } from 'bits-ui'
    import { tv } from 'tailwind-variants'
    import { paginationTheme, type PaginationProps } from './'
    import uiConfig from '#uiconfig'
    import { Button } from '$lib/components/button'

    let {
        page = $bindable(1),
        size = 'md',
        color = 'neutral',
        variant = 'outline',
        activeColor = 'primary',
        activeVariant = 'solid',
        ellipsisIcon,
        prevIcon,
        nextIcon,
        disabled,
        showControls = true,
        perPage = 10,
        siblingCount = 2,
        count = 0,
        slotPrev,
        slotNext,
        class: className,
        ui,
        ...restProps
    }: PaginationProps = $props()

    const {
        onPageChange,
        loop,
        orientation
    } = restProps as Pagination.RootProps

    const rootProps = $derived({
        siblingCount,
        page,
        perPage,
        count,
        onPageChange,
        loop,
        orientation
    })

    const uiPagination = $derived(
        tv({
            extend: tv(paginationTheme),
            ...(uiConfig?.ui?.pagination || {})
        })({})
    )

    const uiRoot = $derived(uiPagination.root({
        class: [className?.toString(), ui?.root]
    }))

    const uiList = $derived(uiPagination.list({
        class: ui?.list
    }))

    const uiPrev = $derived(uiPagination.prev({
        class: ui?.prev
    }))

    const uiItem = $derived(uiPagination.item({
        class: ui?.item
    }))

    const uiLabel = $derived(uiPagination.label())

    const uiNext = $derived(uiPagination.next({
        class: ui?.next
    }))

    const uiEllipsis = $derived(uiPagination.ellipsis({
        class: ui?.ellipsis
    }))
</script>

<Pagination.Root {...rootProps} bind:page class={uiRoot}>
    {#snippet children({ pages, currentPage })}
        <div class={uiList}>
            {#if showControls || slotPrev}
                <Pagination.PrevButton>
                    {#snippet child({ props })}
                        <Button
                            {...props}
                            {size}
                            {color}
                            {variant}
                            {disabled}
                            square
                            icon={prevIcon || uiConfig.icon.chevronLeft}
                            class={uiPrev}
                        />
                    {/snippet}
                </Pagination.PrevButton>
            {/if}

            {#each pages as page (page.key)}
                {#if page.type === 'ellipsis'}
                    <Button
                        {size}
                        {color}
                        {variant}
                        {disabled}
                        square
                        icon={ellipsisIcon || uiConfig.icon.ellipsis}
                        class={uiEllipsis}
                    />
                {:else}
                    <Pagination.Page {page} class={uiItem}>
                        {#snippet child({ props })}
                            <Button
                                {...props}
                                {size}
                                {disabled}
                                color={currentPage === page.value ? activeColor : color}
                                variant={currentPage === page.value ? activeVariant : variant}
                                square
                                label={String(page.value)}
                                ui={{ label: uiLabel }}
                            />
                        {/snippet}
                    </Pagination.Page>
                {/if}
            {/each}

            {#if showControls || slotNext}
                <Pagination.NextButton>
                    {#snippet child({ props })}
                        <Button
                            {...props}
                            {size}
                            {color}
                            {variant}
                            {disabled}
                            square
                            icon={nextIcon || uiConfig.icon.chevronRight}
                            class={uiNext}
                        />
                    {/snippet}
                </Pagination.NextButton>
            {/if}
        </div>
    {/snippet}
</Pagination.Root>