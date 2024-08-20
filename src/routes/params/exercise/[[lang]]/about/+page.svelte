<script lang="ts">
    import { page } from '$app/stores';
</script>

<h1>Dimensions</h1>
<h2>[lang]/about</h2>

<p>lang :: {$page.params.lang}</p>

<hr >
<p>[lang]에서 lang이 없으면, 에러발생, not found</p>
<p>[[lang]]에서 lang은 undefined이면, 에러가 발생하지 않음</p>