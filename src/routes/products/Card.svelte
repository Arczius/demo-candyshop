<script>
import {resolve} from "$app/paths";

import H4 from "#lib/components/text/H4.svelte";
import Paragraph from "#lib/components/text/Paragraph.svelte";

let { url, product } = $props();
</script>

<a href={resolve(url)} class="shadow bg-fuchsia-200 p-1.5 rounded-xl"> 
    <img src={product.image_url} alt="" class="rounded-xl pb-2">
    <H4>
        {product.name}
    </H4>
    <Paragraph>€ {product.price.toFixed(2)}</Paragraph>
</a>
