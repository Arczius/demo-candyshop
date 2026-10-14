import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
    const response = await fetch(`/_products/${params.category}.json`)

    if(!response.ok)
    {
	    error(404, 'Not found');
    }

    const products = await response.json();

    return { products }

};
