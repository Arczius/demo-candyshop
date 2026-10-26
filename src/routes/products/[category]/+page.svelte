<script>
import H2 from "#lib/components/text/H2.svelte"
let { data } = $props();
import { page } from '$app/state';

import Card from "../Card.svelte";
</script>

<main>
    <H2>{page.params.category}</H2>

    <div class="grid gap-1.5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {#each data.products as product (product.id)}
                <Card url="/products/{page.params.category}/{product.id}" product={product}/>
        {/each}
    </div>
</main>
