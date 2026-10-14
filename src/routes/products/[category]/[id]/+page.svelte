<script lang="ts">
    import type { PageProps } from './$types';

    import ProductImage from './ProductImage.svelte';
    let { data }: PageProps = $props();
</script>

<svelte:head>
    <title>{data.product.name} | Candyshop</title>
    <meta name="description" content={data.product.description} />
</svelte:head>

<article class="my-0 mx-auto max-w-7xl grid xl:flex gap-4 xl:py-8">
    <ProductImage product={data.product}/>
    
    <div>
        <h2 class="text-2xl font-bold">{data.product.name}</h2>
        <p>€{data.product.price.toFixed(2)}</p>
        
        <section>
            <h3 class="font-bold text-m">Description</h3>
            <p>{data.product.description}</p>
        </section>
    </div>
</article>
