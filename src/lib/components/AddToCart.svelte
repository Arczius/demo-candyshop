<script>
    import Button from "./Button.svelte";

    let { product } = $props();

    let quantity = $state(
        typeof localStorage !== "undefined"
            ? JSON.parse(localStorage.getItem("cart") || "[]")
                .find(item => item.id === product.id)?.quantity ?? 0
            : 0
    );

    function updateCart(newQuantity) {
        let cart = JSON.parse(localStorage.getItem("cart") || "[]");

        const existing = cart.find(item => item.id === product.id);

        if (newQuantity <= 0) {
            cart = cart.filter(item => item.id !== product.id);
            newQuantity = 0;
        } else if (existing) {
            existing.quantity = newQuantity;
        } else {
            cart.push({
                ...product,
                quantity: newQuantity
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        quantity = newQuantity;
    }

    function AddToCart() {
        updateCart(quantity + 1);
    }

    function RemoveFromCart() {
        updateCart(quantity - 1);
    }
</script>

<div class="flex items-center gap-2">
    {#if quantity === 0}
        <Button onclick={AddToCart}>
            Add to cart
        </Button>
    {:else}
        <div class="flex items-center gap-3">
            <Button onclick={RemoveFromCart}>-</Button>

            <span class="min-w-6 text-center">{quantity}</span>

            <Button onclick={AddToCart}>+</Button>
        </div>
    {/if}
</div>
