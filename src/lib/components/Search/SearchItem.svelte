<script>
let {
    image_url = "",
    title = "",
    link = ""
} = $props();
</script>

<a
    href={link}
    class="flex items-center bg-white hover:bg-gray-200 p-1"
>
    <img
        src={image_url}
        alt="product picture for {title}"
        class="min-w-12 w-12 min-h-12 h-12 object-contain"
    />
    <p>{title}</p>
</a>
