<script>
    import Loader from '@lucide/svelte/icons/loader'
    import Activity from '@lucide/svelte/icons/activity'

    import Card from '$lib/components/card/Card.svelte'
    import Alert from '$lib/components/alert/Alert.svelte'
    import Button from '$lib/components/button/Button.svelte'
    import Heading from '$lib/components/typography/Heading.svelte'
    import Separator from '$lib/components/separator/Separator.svelte'
    import Skeleton from '$lib/components/skeleton/Skeleton.svelte'
</script>

<div class="grid grid-cols-12 gap-2">
    <div class="col-span-12">
        <Heading tag="blockquote">"After all," he said, "everyone enjoys a good joke, so it's only fair that
            they should pay for the privilege."</Heading>
        <Heading tag="p" variant="small">they should pay for the privilege</Heading>
        <Heading tag="p" variant="muted">they should pay for the privilege</Heading>
        <Heading tag="h1" label="Heading" />
        <Heading tag="p" label="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio nam quibusdam quis, quos reiciendis repellat repudiandae! Aperiam at delectus dignissimos earum, fugiat fugit nemo nihil nostrum quis saepe vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio nam quibusdam quis, quos reiciendis repellat repudiandae! Aperiam at delectus dignissimos earum, fugiat fugit nemo nihil nostrum quis saepe vel." />
        <Heading tag="h2" label="Heading 2" class="mt-10" />
    </div>

    <div class="col-span-3">
        <Button label="Primary Label" />
    </div>

    <div class="col-span-3">
        <Alert
            color="secondary"
            variant="subtle"
            title="Heads up!"
            description="You can change the primary color in your app config."
            icon={Activity}
            actions={[{
                label: 'Action',
                onclick: () => {
                    console.log('Action clicked')
                }
            }]}
        />
    </div>

    <div class="col-span-3">
        <Alert
            title="Heads up!"
            description="You can change the primary color in your app config."
            orientation="horizontal"
            icon={Activity}
            actions={[{
                label: 'Action',
                color: 'danger',
                onclick: () => {
                    console.log('Action clicked')
                }
            }]}
        />
    </div>

    <div class="col-span-12">
        <Separator color="primary" />
        <Separator color="danger" label="or" />
        <Separator icon={Activity} />
        <Separator color="primary" orientation="vertical" />
    </div>

    <div class="col-span-6">
        <Skeleton as="div" class="h-4 w-[250px]" />
    </div>

    <div class="col-span-12">
        <Card as="article">
            {#snippet header()}
                Header
            {/snippet}

            Body

            {#snippet footer()}
                Footer
            {/snippet}
        </Card>
    </div>

    <div class="col-span-3">
        <Button label="Primary Disabled" color="danger" disabled />
    </div>

    <div class="col-span-3">
        <Button>Primary</Button>
    </div>

    <div class="col-span-3">
        <Button variant="outline" color="danger">Outline Danger</Button>
    </div>

    <div class="col-span-3">
        <Button variant="ghost" color="success">Ghost Success</Button>
    </div>

    <div class="col-span-3">
        <Button size="md" leading={Activity} label="With Icon Left" />
    </div>

    <div class="col-span-3">
        <Button size="md" trailing={Activity} label="With Icon Right" />
    </div>

    <div class="col-span-3">
        <Button href="https://svelte.dev" target="_blank">Link Button</Button>
    </div>

    <div class="col-span-3">
        <Button loading>Loading</Button>
    </div>

    <div class="col-span-3">
        <Button loading label="Waiting..." />
    </div>

    <div class="col-span-3">
        <Button loading label="Waiting..." loadingIcon={Loader} />
    </div>

    <div class="col-span-3">
        <Button label="Button block" block />
    </div>
</div>