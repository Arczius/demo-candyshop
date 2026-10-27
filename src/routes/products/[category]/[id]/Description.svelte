<script>
import Paragraph from '#lib/components/text/Paragraph.svelte';
import H3 from "#lib/components/text/H3.svelte";

let {
    content
} = $props();
</script>


<section>
    <H3>Description</H3>
    <Paragraph>{content}</Paragraph>
</section>
