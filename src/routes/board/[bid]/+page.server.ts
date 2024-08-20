import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import db from '$lib/server/dbase';

export const load: PageServerLoad = async ({ params }) => {

    const post = await db.post_test.findUnique({
        where: { slug: params.bid }
    })

    if (!post) {
        throw error(404, 'Post not found');
    }

    return { post }
}