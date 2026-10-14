<script>
import { page } from "$app/state";
</script>

<div class="flex h-full items-center justify-center">
    <div>
        <h2 class="text-4xl font-bold">
            {page.status} {page.error?.message}
        </h2>
        <p>click <a href="/" class="text-blue-400 underline visited:text-blue-900">here</a> to go back home</p>
    </div>
</div>
