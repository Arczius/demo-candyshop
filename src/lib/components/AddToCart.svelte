<script>
    import Button from "./Button.svelte";

    let { product } = $props();

    function AddToCart() {
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');

        const existing = cart.find(item => item.id === product.id);

        if (existing) {
            existing.quantity++;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));

    }
</script>

<Button onclick={AddToCart}>
    Add to cart
</Button>