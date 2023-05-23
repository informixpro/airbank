<template>
	<NuxtLink
			:to="to"
			class="inline-flex items-center justify-self-start gap-x-2 transition"
	>
		<slot name="prepend"></slot>
		<slot></slot>
		<slot name="append"></slot>
	</NuxtLink>
</template>

<script setup lang="ts">
	defineProps<{
		to: string
	}>()
</script>
