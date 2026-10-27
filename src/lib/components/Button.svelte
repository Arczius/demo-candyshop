<script>
let {
    onclick,
    children
} = $props();
</script>

<button 
    onclick={onclick}
    class="hover:cursor-pointer bg-fuchsia-300 p-4 rounded-lg shadow font-display text-xl"
>
{@render children?.()}
</button>
