<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import Sidebar from '../components/Sidebar.svelte';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex gap-1.5 bg-fuchsia-100 min-h-screen">
	<Sidebar/>	
	<div class="w-full px-1.5">
		{@render children()}
	</div>
</div>
