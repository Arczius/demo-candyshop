<script lang="ts">
    import H3 from "#lib/components/text/H3.svelte";

    let {
        product,
        onIncrease,
        onDecrease,
        onRemove
    } = $props();

    let itemTotal = $derived(product.price * product.quantity);
</script>

<div class="flex items-center gap-3 rounded-xl bg-fuchsia-100 p-3 shadow-sm">

    <img
        class="h-24 w-20 shrink-0 rounded-lg bg-white object-contain p-2"
        src={product.image_url}
        alt={`Product picture for ${product.name}`}
    />

    <div class="min-w-0 flex-1">
        <H3>{product.name}</H3>
        <p class="text-sm text-gray-600">
            € {product.price.toFixed(2)} each
        </p>
    </div>

    <div class="flex shrink-0 flex-col items-center gap-1">
        <button
            onclick={onIncrease}
            class="h-7 w-8 rounded-md bg-fuchsia-300 hover:bg-fuchsia-400 cursor-pointer"
        >
            +
        </button>

        <span class="font-semibold">{product.quantity}</span>

        <button
            onclick={onDecrease}
            class="h-7 w-8 rounded-md bg-fuchsia-300 hover:bg-fuchsia-400 cursor-pointer"
        >
            -
        </button>
    </div>

    <div class="min-w-16 text-right">
        <p class="text-xs text-gray-600">Total</p>
        <p class="font-semibold">
            € {itemTotal.toFixed(2)}
        </p>
    </div>

    <button
        onclick={onRemove}
        class="shrink-0 px-1 text-3xl font-bold text-red-500 hover:text-red-700"
        aria-label={`Remove ${product.name}`}
    >
        x
    </button>

</div>
