<script lang="ts">
    import { page } from '$app/stores';
</script>

<h1>Dimensions</h1>
<h2>http://localhost:4000/image/100x200</h2>
<p>width :: {$page.params.width}</p>
<p>height :: {$page.params.height}</p>