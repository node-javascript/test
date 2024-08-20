import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import db from '$lib/server/dbase';

export const load: PageServerLoad = (async (event) => {
    // const { locals } = event;

    const posts = await db.post_test.findMany({
        // Prisma 테이크에 지정
        // 0~30까지의 렌덤 수를 발생시켜, 가져오는 레코드 수를 변경
        take: Math.round(Math.random() * 30)
    });

    if (!posts) {
        throw error(404, 'Post not found');
    }

    return { posts };
});