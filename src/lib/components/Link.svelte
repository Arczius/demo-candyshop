<script>
let {
    href,
    target = "_self",
    class: className = '',
    children
} = $props();
</script>

<a {href} {target} class="text-blue-400 underline visited:text-blue-900 {className}">
    {@render children?.()}
</a>
