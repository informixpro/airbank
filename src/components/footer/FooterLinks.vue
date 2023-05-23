<template>
	<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 space-y-2 py-6">
		<div
			v-for="(item, index) in navigation"
			:key="index"
			class="flex items-center justify-self-start space-x-2"
		>
			<NuxtIcon name="chevron" class="text-primary"/>
			<AppLink :to="item.to">
				<span class="underline text-white hover:text-primary">{{ item.title }}</span>
			</AppLink>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useI18n } from "vue-i18n"
	const { tm } = useI18n()
	const navigation = tm('footer.navigation')
</script>
