<script lang="ts">
	import { marked } from 'marked';

	export let content: string;

	$: html = marked.parseInline(content) as string;
</script>

<span class="markdown">{@html html}</span>

<style>
	.markdown :global(strong) {
		font-family: 'Oswald', sans-serif;
		font-weight: 700;
		color: var(--primary-color);
	}
</style>
