<script>
import { page } from "$app/state";
import Link from "#lib/components/Link.svelte";
</script>

<svelte:head>
    <title>Error {page.status}</title>
</svelte:head>

<div class="flex h-full items-center justify-center">
    <div class="grid">
        <h2 class="text-4xl font-bold">
            {page.status} {page.error?.message}
        </h2>
        <p class="text-center">click <Link href="/">here</Link> to go back home</p>
    </div>
</div>
