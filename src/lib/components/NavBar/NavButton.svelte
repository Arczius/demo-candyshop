<script>
let {
    href,
    label,
    active = false
} = $props();

const base = "py-3 text-center block rounded shadow font-display text-xl"
</script>

<a {href}>
    {#if active}
        <span class="bg-amber-500 hover:bg-amber-600 {base}">
            {label}
        </span>
    {:else}
        <span class="bg-amber-300 hover:bg-amber-400 {base}">
            {label}
        </span>
    {/if}
</a>
