import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const response = await fetch(`/_products/recommended.json`)

    if(!response.ok)
    {
	    error(404, 'Not found');
    }

    const { products } = await response.json();

    return { products }
};
