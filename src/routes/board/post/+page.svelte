<script lang="ts">
    async function subscribe(event: Event) {
        const form = event.target as HTMLFormElement;
        const data = new FormData(form);

        await fetch('/board/post', {
            method: 'POST',
            body: data
        })
    }
</script>

<h1 class="text-4xl">News Letter</h1>

<form on:submit|preventDefault={subscribe}>
    <input type="email" name="email">
    <button type="submit">확인</button>
</form>