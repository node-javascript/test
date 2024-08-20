<script lang="ts">
	import type { Post_test } from '@prisma/client';

    export let data;
    const posts: Post_test[] = data.posts;

</script>
<h1 class="text-4xl">Board</h1>
<!-- <per>{JSON.stringify(data, null, 2)}</per> -->

<p class="my-4">게시글 : { data.posts.length } 개</p>

{#each posts as {slug, title} }
    <ul>
        <li><a href="/board/{slug}">{title}</a></li>
    </ul>
{/each}