<script>
    let {
        product
    } = $props();
</script>

<div>
    <img class="xl:min-w-sm" src={product.image_url} alt="Picture for {product.name}">
</div>
