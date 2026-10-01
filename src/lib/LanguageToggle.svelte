<script lang="ts">
	import { page } from '$app/stores';
	import { locale } from '$lib/i18n/i18n-svelte';
	import type { Locales } from '$lib/i18n/i18n-types';

	// Labels stay in their own language so each is readable to its speakers.
	const LANGUAGES: { locale: Locales; label: string }[] = [
		{ locale: 'en', label: 'English' },
		{ locale: 'es', label: 'Español' }
	];

	$: whiteLabel = $page.params.whiteLabel;
</script>

<!-- Full reload: some links (e.g. Results' mfbLink) read the locale once at mount. -->
<nav class="language-toggle" aria-label="Language / Idioma">
	{#each LANGUAGES as language (language.locale)}
		{#if language.locale === $locale}
			<span class="current" lang={language.locale} aria-current="page">{language.label}</span>
		{:else}
			<a
				href="/{whiteLabel}/{language.locale}"
				lang={language.locale}
				hreflang={language.locale}
				data-sveltekit-reload>{language.label}</a
			>
		{/if}
	{/each}
</nav>

<style>
	.language-toggle {
		display: flex;
		justify-content: flex-end;
		gap: 0.75rem;
		padding: 0.5rem 1rem;
		font-size: 1.1rem;
	}

	.current {
		font-weight: bold;
		color: var(--primary-color);
	}

	a {
		color: var(--primary-color);
	}
</style>
