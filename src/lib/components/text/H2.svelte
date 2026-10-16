<script>
let {
    children
} = $props();
</script>

<h2 class="font-display text-4xl first-letter:uppercase">
{@render children?.()}
</h2>
