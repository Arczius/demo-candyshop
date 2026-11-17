<script>
    import { onMount } from 'svelte';
    import SearchItem from './Search/SearchItem.svelte';

    let search = $state('');
    let drinks = $state([]);
    let candy = $state([]);

    let filteredDrinks = $derived(
        drinks.filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase())
        )
    );

    let filteredCandy = $derived(
        candy.filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase())
        )
    );

    onMount(async () => {
        const [drinksResponse, candyResponse] = await Promise.all([
            fetch('/_products/drinks.json'),
            fetch('/_products/candy.json')
        ]);

        drinks = (await drinksResponse.json()).products;
        candy = (await candyResponse.json()).products;
    });
</script>

<div class="grid">
    {#if search.trim()}

        <div class="max-h-32 lg:max-h-48 overflow-y-scroll p-2 rounded-t bg-white">
            {#if filteredDrinks.length === 0 && filteredCandy.length === 0}
                <p>No products found</p>
            {/if}

            {#each filteredDrinks as product (product.id)}
                <SearchItem
                    title={product.name}
                    image_url={product.image_url}
                    link="/products/drinks/{product.id}"
                />
            {/each}

            {#each filteredCandy as product (product.id)}
                <SearchItem
                    title={product.name}
                    image_url={product.image_url}
                    link="/products/candy/{product.id}"
                />
            {/each}

    </div>
        {/if}
    <input
        bind:value={search}
        class="bg-white p-2 rounded shadow border-black border w-full"
        type="text"
        placeholder="Search products..."
    />
</div>
