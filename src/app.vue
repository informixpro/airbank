<script setup lang="ts">
	import {useContentStore} from "~/stores/content"

	await useContentStore().getContent()
</script>

<template>
	<NuxtLayout>
		<NuxtLoadingIndicator />
		<NuxtPage />
	</NuxtLayout>
</template>
