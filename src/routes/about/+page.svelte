<script>
    import Link from '$lib/components/link/Link.svelte'
</script>

<div class="grid grid-cols-12">
    <div class="col-span-12">
        <Link href="/" exactHash raw class="text-2xl" activeClass="font-bold" inactiveClass="text-muted">
            Home
        </Link>

        <Link href="/about" exactHash raw class="text-2xl" activeClass="font-bold" inactiveClass="text-muted">
            About
        </Link>
    </div>
</div>