<script lang="ts">
    import type { Post_test } from '@prisma/client';

    export let data;
    const post: Post_test = data.post;   

    function formatDate(date: Date) {
        // 날짜 표현 바꾸기
        return new Intl.DateTimeFormat('ko', {dateStyle: 'long'}).format(date);
    }
</script>
<h1 class="text-4xl mb-4">Board Detail</h1>
<hgroup>
    <h1 class="text-2xl">{post.title}</h1>
    <h2 class="text-xl">{formatDate(post.createdAt)}</h2>
</hgroup>

<div class="content">
    {@html post.content}
</div>
