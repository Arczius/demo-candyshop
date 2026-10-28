<script>
    let {
        onclick,
        children,
        class: className = "",
    } = $props();
</script>

<button
    {onclick}
    class={`hover:cursor-pointer bg-fuchsia-300 p-4 rounded-lg shadow font-display text-xl ${className}`}
>
    {@render children?.()}
</button>
