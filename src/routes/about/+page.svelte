<script>
import H2 from "#lib/components/text/H2.svelte";
import H3 from "#lib/components/text/H3.svelte";
import Paragraph from "#lib/components/text/Paragraph.svelte";
import UnorderedList from "#lib/components/text/UnorderedList.svelte";

const list = [
    {
        label: "Easy ordering",
        description: "Select your favorite products and complete your purchase in just a few simple steps."
    },
    {
        label: "Personalized recommendations",
        description: "Discover new products based on your tastes and preferences."
    },
    {
        label: "Flexible delivery",
        description: "Choose a delivery option that fits your schedule, including convenient pickup points."
    },
    {
        label: "Multiple payment options",
        description: "Pay securely using the payment method that works best for you."
    }
];
</script>

<svelte:head>
    <title>SweetSpot - About</title>
</svelte:head>

<main>
    <H2>SweetSpot</H2>
    <H3>Your favorite treats, without the hassle.</H3>
    <Paragraph>
        At SweetSpot, we believe shopping for your favorite snacks should be simple and enjoyable. That's why we make it easy to discover and order your favorite candy, snacks, and drinks online.
    </Paragraph>
    <Paragraph>
        As a parent, life can get busy. Finding time to visit a store with young children isn't always easy. With our online store, you can browse and order your favorite products from the comfort of your home, whether you're using your phone or computer.
    </Paragraph>

    <H3>
        Shopping made easy
    </H3>
    <Paragraph>
        We want everyone to find what they're looking for without the hassle. That's why convenience is at the heart of SweetSpot.
    </Paragraph>
    
    <UnorderedList items={list}/>

    <H3>
        Discover something new
    </H3>

    <Paragraph>
        From familiar favorites to exciting new flavors, there's always something to discover. Our product recommendations help you find new treats you'll love.
    </Paragraph>

    <H3>
        Less hassle, more enjoyment
    </H3>

    <Paragraph>
        Whether you're looking for snacks for a cozy movie night, a treat for the family, or simply something delicious for yourself, SweetSpot makes shopping quick and convenient.
    </Paragraph>

    <b>Discover your favorites and make every moment a little sweeter! 🍬</b>
    
</main>
