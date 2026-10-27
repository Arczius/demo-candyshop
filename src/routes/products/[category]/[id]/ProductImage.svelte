<script>
    let {
        product
    } = $props();
</script>

<div class="rounded-2xl p-4 bg-fuchsia-200">
    <img
        class="xl:min-w-sm max-w-sm max-h-96 object-contain shake"
        src={product.image_url}
        alt="product picture for {product.name}"
    />
</div>
