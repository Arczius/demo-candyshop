<script lang="ts">
    import type { PageProps } from './$types';

    import H2 from "#lib/components/text/H2.svelte";
    import Paragraph from '#lib/components/text/Paragraph.svelte';

    import ProductImage from './ProductImage.svelte';
    import Description from './Description.svelte';

    let { data }: PageProps = $props();
</script>

<svelte:head>
    <title>{data.product.name} | SweetSpot</title>
    <meta name="description" content={data.product.description} />
</svelte:head>

<article class="my-0 mx-auto max-w-7xl grid xl:flex gap-4 xl:py-4">
    <ProductImage product={data.product}/>
    
    <div>
        <H2>{data.product.name}</H2>
        <Paragraph>€ {data.product.price.toFixed(2)}</Paragraph>
        <Description content={data.product.description}/>
    </div>
</article>
