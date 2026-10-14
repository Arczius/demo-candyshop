<script>
import { page } from "$app/state";

import Logo from "./NavBar/Logo.svelte";
import Button from "./NavBar/Button.svelte"

const links = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
]
</script>

<nav class="h-96 w-xs bg-fuchsia-200 rounded-tr-xl rounded-br-xl mt-1 mb-1 sticky top-0.5 p-2 ">
    <div>
        <Logo/>
        <div class="grid gap-2">
            {#each links as link (link.href)}
                <Button 
                    href={link.href} 
                    label={link.label}
                    active={page.url.pathname === link.href}
                />
            {/each}
        </div>
    </div>
</nav>
