<script>
import { page } from "$app/state";

import Logo from "./NavBar/Logo.svelte";
import Button from "./NavBar/Button.svelte"

const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
]
</script>

<nav 
    class=" bg-fuchsia-200 rounded-tr-xl rounded-br-xl sticky p-2 lg:top-2 lg:w-xs"
>
    <div>
        <Logo/>
        <div class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 grid gap-2">
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
