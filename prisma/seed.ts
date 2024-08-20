import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

type ReadPost = {
    title: string
    body: string
}

async function getPost() {
    const response = await fetch('http://dummyjson.com/posts')
    const { posts } = await response.json();
    return posts as ReadPost[]
}

function slugify(text: string) {
    return text
        .replace(/\s/g, '-')
        .replace(/[^a-zA-Z0-9-]/g, '')
        .toLowerCase()
}

async function main() {
    const posts = await getPost();

    // console.log(JSON.stringify(posts));

    for (const post of posts) {
        // console.log('[title] ' + post.title);
        // console.log('[body] ' + post.body);
        // console.log('[slug] ' + slugify(post.title));

        await prisma.post_test.create({
            data: {
                title: post.title,
                content: post.body,
                slug: slugify(post.title)
            }
        });
        console.log(`Created user with id: ${slugify(post.title)}`);
    }
}

main()