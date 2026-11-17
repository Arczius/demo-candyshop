import { browser } from '$app/env';
import type { PageLoad } from '../$types';

export const load: PageLoad = async () => {
    let cart = [];

    if (browser) {
        cart = JSON.parse(localStorage.getItem('cart') || '[]');
    }

    return { cart };
};