<script>
    import Link from '$lib/components/link/Link.svelte'
</script>

<div class="grid grid-cols-12 gap-2">
    <Link href="/">
        Home
    </Link>

    <Link href="/about" exact>
        About
    </Link>
</div>