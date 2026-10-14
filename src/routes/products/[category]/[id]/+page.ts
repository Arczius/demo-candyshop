import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
    const response = await fetch(`/_products/${params.category}.json`);

    if (!response.ok) {
        error(404, 'Category not found');
    }

    const data = await response.json();
    const product = data.products.find(
        (product: { id: number }) => product.id === Number(params.id)
    );

    if (!product) {
        error(404, 'Product not found');
    }

    return { product };
};
