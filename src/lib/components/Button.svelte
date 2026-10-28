<script>
    let {
        onclick,
        children,
        class: className = "",
    } = $props();
</script>

<button
    {onclick}
    class={`hover:cursor-pointer bg-fuchsia-300 hover:bg-fuchsia-200 p-4 rounded-lg shadow font-display text-xl ${className}`}
>
    {@render children?.()}
</button>
