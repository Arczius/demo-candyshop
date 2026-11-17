<script>
let {
    class: className = '',
    children
} = $props();
</script>

<main class="flex justify-center items-center md:min-h-screen p-1 pt-2 md:p-0">
    <div class="max-w-xl bg-fuchsia-200 shadow rounded-2xl p-6 h-fit {className}">
        {@render children?.()}
    </div>
</main>
