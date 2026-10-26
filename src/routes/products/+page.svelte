<script>
import { resolve } from "$app/paths";
let { data } = $props();

import H2 from "#lib/components/text/H2.svelte"
import H3 from "#lib/components/text/H3.svelte"

import Card from "./Card.svelte";
</script>

<main>
    <H2>Our Categories:</H2>
    <div class="grid md:grid-cols-2 max-w-7xl mx-auto gap-4">
        <a
            class="w-full bg-fuchsia-200 p-3 rounded-xl min-h-24 flex justify-center items-center text-3xl font-display"
            href={resolve("/products/candy")}
        ><span>Candy</span></a>
        <a

            class="w-full bg-fuchsia-200 p-3 rounded-xl min-h-24 flex justify-center items-center text-3xl font-display"
            href={resolve("/products/drinks")}
        ><span>Drinks</span></a>
    </div>

    <H3>Recommendations: </H3>
    <div class="grid gap-1.5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {#each data.products as product (product.id)}
                <Card url={product.url} product={product}/>
        {/each}
    </div>
</main>
