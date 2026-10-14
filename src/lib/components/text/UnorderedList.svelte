<script>
let {
    items
} = $props();
</script>

<ul class="list-disc">
    {#each items as item (item.label)}
        <li class="ml-4">
            <b>{item.label}:</b> {item.description}
        </li>
    {/each}
</ul>
