<script setup lang="ts">
	import {useContentStore} from "~/stores/content"

	const {content: {meta}} = useContentStore()
</script>

<template>
	<div>
		<Html :lang="$i18n.locale">
		<Head>
			<Title>{{ meta.title }}</Title>
		</Head>
		<Body class="antialiased">
		<AppHeader />
		<main  class="flex flex-col overflow-x-hidden">
			<slot />
		</main>
		<AppFooter />
		</Body>
		</Html>
	</div>
</template>
