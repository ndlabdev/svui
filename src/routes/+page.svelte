<script>
    import Accordion from '$lib/components/accordion/Accordion.svelte'
    import AccordionItem from '$lib/components/accordion/AccordionItem.svelte'
    import Alert from '$lib/components/alert/Alert.svelte'
    import Avatar from '$lib/components/avatar/Avatar.svelte'
    import AvatarGroup from '$lib/components/avatar-group/AvatarGroup.svelte'
    import Badge from '$lib/components/badge/Badge.svelte'
    import Button from '$lib/components/button/Button.svelte'
    import ButtonGroup from '$lib/components/button-group/ButtonGroup.svelte'
    import Card from '$lib/components/card/Card.svelte'
    import Chip from '$lib/components/chip/Chip.svelte'
    import Container from '$lib/components/container/Container.svelte'
    import Drawer from '$lib/components/drawer/Drawer.svelte'
    import Input from '$lib/components/input/Input.svelte'
    import Link from '$lib/components/link/Link.svelte'
    import Modal from '$lib/components/modal/Modal.svelte'
    import Pagination from '$lib/components/pagination/Pagination.svelte'
    import Placeholder from '$lib/components/Placeholder.svelte'
    import Separator from '$lib/components/separator/Separator.svelte'
    import Skeleton from '$lib/components/skeleton/Skeleton.svelte'
    import Slideover from '$lib/components/slideover/Slideover.svelte'
    import Tooltip from '$lib/components/tooltip/Tooltip.svelte'
    import Heading from '$lib/components/typography/Heading.svelte'

    const items = [
        {
            value: '1',
            custom: true,
            icon: 'lucide:smile',
            trailingIcon: 'lucide:plus',
            label: 'What is the meaning of life?',
            content:
                'To become a better person, to help others, and to leave the world a better place than you found it.'
        },
        {
            value: '2',
            custom: true,
            label: 'How do I become a better person?',
            content:
                'Read books, listen to podcasts, and surround yourself with people who inspire you.'
        },
        {
            value: '3',
            label: 'What is the best way to help others?',
            content: 'Give them your time, attention, and love.'
        }
    ]

    let accordionValue = $state(['1', '2'])
    let page = $state(1)

    const avatarGroupItems = [
        {
            src: 'https://github.com/ndlabdev.png'
        },
        {
            src: 'https://github.com/ndlabdev.png',
            tooltipProps: {
                text: 'ndlabdev'
            }
        },
        {
            src: 'https://github.com/ndlabdev.png',
            tooltipProps: {
                text: 'ndlabdev'
            },
            chipProps: {
                inset: true
            }
        },
        {
            src: 'https://github.com/ndlabdev.png',
            tooltipProps: {
                text: 'ndlabdev'
            },
            chipProps: {
                inset: true
            },
            linkProps: {
                href: 'https://github.com/ndlabdev',
                target: '_blank',
                class: 'hover:ring-primary transition',
                raw: true
            }
        },
        {
            src: 'https://github.com/ndlabdev.png',
            chipProps: {
                inset: true
            }
        },
        {
            src: 'https://github.com/ndlabdev.png',
            linkProps: {
                href: 'https://github.com/ndlabdev',
                target: '_blank',
                class: 'hover:ring-primary transition',
                raw: true
            }
        },
        {
            src: 'https://github.com/ndlabdev.png',
            chipProps: {
                inset: true
            },
            linkProps: {
                href: 'https://github.com/ndlabdev',
                target: '_blank',
                class: 'hover:ring-primary transition',
                raw: true
            }
        }
    ]

    let value = $state('npx nuxt module add ui')
    let copied = $state(false)

    function copy() {
        console.log(value)
        navigator.clipboard.writeText(value)
        copied = true

        setTimeout(() => {
            copied = false
        }, 2000)
    }
</script>

<Container>
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

        <div class="col-span-12">
            <!--        <Link href="/" exact raw class="text-2xl" activeClass="font-bold" inactiveClass="text-muted">-->
            <!--            Home-->
            <!--        </Link>-->

            <!--        <Link href="/about" exact raw class="text-2xl" activeClass="font-bold" inactiveClass="text-muted">-->
            <!--            About-->
            <!--        </Link>-->

            <Link href="/">
                Home
            </Link>

            <Link href="/about#theme" exactHash>
                About
            </Link>
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
                avatar={{
                    src: 'https://github.com/nuxt.png',
                    size: 'sm'
                }}
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
                icon="lucide:terminal"
                actions={[{
                    label: 'Action',
                    color: 'error',
                    onclick: () => {
                        console.log('Action clicked')
                    }
                }]}
            />
        </div>

        <div class="col-span-12">
            <Separator color="primary" />
            <Separator color="error" label="or" />
            <Separator icon="lucide:heart" ui={{ icon: 'size-4' }} />
            <Separator
                avatar={{
                    src: 'https://github.com/nuxt.png',
                    size: 'sm'
                }}
            />
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

            <Card as="article" variant="subtle">
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
            <Button label="Primary Disabled" color="error" disabled />
        </div>

        <div class="col-span-3">
            <Button>Primary</Button>
        </div>

        <div class="col-span-3">
            <Button variant="outline" color="error">Outline Error</Button>
        </div>

        <div class="col-span-3">
            <Button variant="ghost" color="success">Ghost Success</Button>
        </div>

        <div class="col-span-3">
            <Button size="md" icon="lucide:heart" label="With Icon Left" />
        </div>

        <div class="col-span-3">
            <Button size="md" trailingIcon="lucide:heart" label="With Icon Right" />
        </div>

        <div class="col-span-3">
            <Button href="https://svelte.dev" target="_blank" icon="lucide:heart" trailingIcon="lucide:heart">Link Button</Button>
        </div>

        <div class="col-span-3">
            <Button loading>Loading</Button>
        </div>

        <div class="col-span-3">
            <Button loading label="Waiting..." />
        </div>

        <div class="col-span-3">
            <Button loading label="Waiting..." loadingIcon='lucide:loader' />
        </div>

        <div class="col-span-3">
            <Button label="Button block" block />
        </div>

        <div class="col-span-3">
            <Chip size="3xl" text={5} position="bottom-left">
                <Button
                    avatar={{
                        src: 'https://github.com/benjamincanac.png'
                    }}
                    label="Label"
                />
            </Chip>
        </div>

        <div class="col-span-12">
            <div class="mx-4">
                <Accordion
                    value={accordionValue}
                    items={items}
                    forceMount
                    type="multiple"
                >
                    {#snippet slotItem(item)}
                        <AccordionItem {item} value="1">
                            <div>Item 1 --- {item.value}</div>
                        </AccordionItem>

                        <AccordionItem {item} value="2">
                            <div>Item 2 --- {item.value}</div>
                        </AccordionItem>
                    {/snippet}
                </Accordion>
            </div>
        </div>

        <div class="col-span-12">
            <Avatar src="https://github.com/benjamincanac.png" size="xl" />
            <Avatar size="xl" />
            <Avatar icon="lucide:image" size="md" />
            <Avatar text="+1" size="md" />
            <Avatar alt="Benjamin Canac" size="md" />

            <Chip inset>
                <Avatar alt="Benjamin Canac" size="xl" />
            </Chip>

            <Chip inset>
                <Avatar alt="Benjamin Canac" src="https://github.com/benjamincanac.png" size="xl" />
            </Chip>
        </div>

        <div class="col-span-12">
            <Badge label="Badge">Badge</Badge>
            <Badge label="Badge" />
            <Badge color="error" label="Badge" />
            <Badge color="secondary" variant="outline">Badge</Badge>
            <Badge label="Badge" size="xl" />
            <Badge icon="lucide:rocket">Badge</Badge>
            <Badge trailingIcon="lucide:arrow-right">Badge</Badge>
            <Badge
                avatar={{src: 'https://github.com/nuxt.png'}}
                size="md"
                color="secondary"
                variant="outline"
            >
                Badge
            </Badge>
            <Badge class="font-bold rounded-full">Badge</Badge>
        </div>

        <div class="col-span-12">
            <Modal title="Primary Modal">
                {#snippet child({ props })}
                    <Button {...props}>Primary</Button>
                {/snippet}

                {#snippet slotBody()}
                    Body
                {/snippet}

                {#snippet slotFooter()}
                    Footer
                {/snippet}
            </Modal>

            <Modal title="First Modal">
                {#snippet child({ props })}
                    <Button {...props}>First Modal</Button>
                {/snippet}

                {#snippet slotBody()}
                    <Modal title="Second Modal">
                        {#snippet child({ props })}
                            <Button {...props}>Second Modal</Button>
                        {/snippet}

                        {#snippet slotBody()}
                            <Modal title="Third Modal">
                                {#snippet child({ props })}
                                    <Button {...props}>Third Modal</Button>
                                {/snippet}

                                {#snippet slotBody()}
                                    Body
                                {/snippet}

                                {#snippet slotFooter()}
                                    Footer
                                {/snippet}
                            </Modal>
                        {/snippet}

                        {#snippet slotFooter()}
                            Footer
                        {/snippet}
                    </Modal>
                {/snippet}

                {#snippet slotFooter()}
                    Footer
                {/snippet}
            </Modal>
        </div>

        <div class="col-span-12">
            <Drawer
                title="Drawer Title"
                description="Drawer Description"
                shouldScaleBackground
                setBackgroundColorOnScale
            >
                {#snippet child({ props })}
                    <Button {...props}>Open Drawer</Button>
                {/snippet}

                {#snippet slotBody()}
                    <Placeholder class="h-48" />
                {/snippet}

                {#snippet slotFooter()}
                    Footer
                {/snippet}
            </Drawer>
        </div>

        <div class="col-span-12">
            <Slideover
                title="Slideover Title"
                description="Slideover Description"
            >
                {#snippet child({ props })}
                    <Button {...props}>Open slideover</Button>
                {/snippet}

                {#snippet slotBody()}
                    <Placeholder class="h-full" />
                {/snippet}
            </Slideover>
        </div>

        <div class="col-span-12">
            <Tooltip text="Tooltip Text" delayDuration={200} arrow>
                {#snippet child({ props })}
                    <Button {...props}>Tooltip</Button>
                {/snippet}
            </Tooltip>
        </div>

        <div class="col-span-12">
            <AvatarGroup items={avatarGroupItems} max={10} />
        </div>

        <div class="col-span-12">
            <ButtonGroup size="xl">
                <Button color="neutral" variant="subtle" label="Button" />
                <Button color="neutral" variant="outline" icon="lucide:chevron-down" />
            </ButtonGroup>

            <ButtonGroup size="xl" orientation="vertical">
                <Button color="neutral" variant="subtle" label="Submit" />
                <Button color="neutral" variant="outline" label="Cancel" />
            </ButtonGroup>
        </div>

        <div class="col-span-12">
            <Pagination bind:page count={100} />
        </div>

        <div class="col-span-12">
            <div class="col-span-12">
                <Input
                    avatar={{
                        src: 'https://github.com/nuxt.png'
                    }} trailingIcon="lucide:heart" size="md" variant="soft" placeholder="Search..." />

                <Input ui={{ trailing: 'pr-0.5' }} bind:value>
                    {#snippet slotTrailing()}
                        <Tooltip text="Copy to clipboard" contentProps={{ side: 'right' }}>
                            {#snippet child({ props })}
                                <Button
                                    {...props}
                                    color={copied ? 'success' : 'neutral'}
                                    variant="link"
                                    icon={copied ? 'lucide:copy-check' : 'lucide:copy'}
                                    aria-label="Copy to clipboard"
                                    onclick={() => copy()}
                                />
                            {/snippet}
                        </Tooltip>
                    {/snippet}
                </Input>
            </div>
        </div>

        <div class="col-span-12">
            <div class="mb-16"></div>
        </div>
    </div>
</Container>
