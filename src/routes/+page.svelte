<script lang="ts">
    import { page } from '$app/stores';
    import type { T_user } from '$lib/types';

    // export let data;
    // const user: T_user = data.user;

    const clickHandler = () => {
        alert('click Event')
    }
</script>
<!-- <pre>
    {JSON.stringify($page, null, 2)}
</pre> -->

<h1 class="text-4xl">Main Page</h1>

<!-- Alert -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={clickHandler}
    class="border-2 p-6 max-w-sm mx-auto mt-12 bg-white rounded-xl shadow-lg flex items-center space-x-4">
    <div class="shrink-0">
        <img src="/images/cat_w_01.png" width="46px" height="46px" alt="logo">
    </div>
    <div >
        <div class="text-xl font-medium text-black">Alter Message</div>
        <p class="text-gray-500">안녕. 공지 메시지 입니다.</p>
    </div>
</div>