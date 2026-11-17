<!-- page needs to look like image name amountOfItem remove line by line and last the price and an checkout button, save in a state-->

<script lang="ts">
    import type { PageProps } from "./$types";
    let { data }: PageProps = $props();
    let cart = $state(data.cart);
    import Card from "./Card.svelte";
    
    import Container from "#lib/components/Container.svelte";
    import Button from "#lib/components/Button.svelte";

    let TotalPrice = $derived(
        cart.reduce((total, item) => total + item.price * item.quantity, 0)
    )

    function Alert() {
        alert("this is not implemented")
    }
    
    function updateCart() {
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    
    function increase(id: number) {
        const item = cart.find(item => item.id === id)
        
        if (item) {
            item.quantity++;
        }

        updateCart();
    }
    
    function decrease(id: number) {
        const item = cart.find(item => item.id === id)
        
        if (item) {
            item.quantity--;
            
            if (item.quantity <= 0) {
                cart = cart.filter(item => item.id !== id);
            }
        }
        
        updateCart();
    }
    
    function remove(id: number) {
        cart = cart.filter(item => item.id !== id);
        
        updateCart();
    }
</script>

<Container>
    {#if cart.length === 0}
    <div class="flex flex-col items-center justify-center py-16 text-center">
        <h2 class="text-2xl font-bold">Your cart is empty!</h2>
        <p class="mt-2 text-gray-600">
            Looks like you haven't added any sweets yet.
        </p>
    </div>
    {:else}
        <div class="flex flex-col gap-4">
            {#each cart as item (item.id)}
            <Card
                    product={item}
                    onIncrease={() => increase(item.id)}
                    onDecrease={() => decrease(item.id)}
                    onRemove={() => remove(item.id)}
                />
            {/each}

            <div class="mt-6 flex flex-col items-end gap-4 border-t border-fuchsia-200 pt-6">

                <div class="flex items-center gap-4 text-xl font-bold">
                        <span>Total:</span>
                        <span>€ {TotalPrice.toFixed(2)}</span>
                </div>
            </div>
        </div>

        <Button onclick={Alert}>
            checkout
        </Button>
    {/if}
</Container>