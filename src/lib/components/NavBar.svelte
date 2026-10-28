<script>
import { page } from "$app/state";

import Logo from "./NavBar/Logo.svelte";
import NavButton from "./NavBar/NavButton.svelte"

import Button from "#lib/components/Button.svelte";

const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
]


function handleClick()
{
    alert("this hasn't been implemented yet since it's just a prototype");
}
</script>

<nav 
    class=" bg-fuchsia-200 rounded-tr-xl rounded-br-xl sticky p-2 max-h-screen top-0 lg:w-xs grid gap-2"
>
    <div>
        <Logo/>
        <div class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 grid gap-2">
            {#each links as link (link.href)}
                <NavButton 
                    href={link.href} 
                    label={link.label}
                    active={page.url.pathname === link.href}
                />
            {/each}
        </div>
    </div>
    <div class="mt-auto">
        <Button class="w-full" onclick={handleClick}>Login</Button>
    </div>
</nav>
