<script>
import { resolve } from "$app/paths";

import H4 from "#lib/components/text/H4.svelte";

let { url, product } = $props();
</script>

<a href={resolve(url)} class="shadow bg-fuchsia-200 p-1.5 rounded-xl"> 
    <img
        class="rounded-t-xl bg-white py-2 max-h-52 w-full object-contain"
        src={product.image_url}
        alt="product picture for {product.name}"
    >
    <H4>
        {product.name}
    </H4>
    <p>€ {product.price.toFixed(2)}</p>
</a>
