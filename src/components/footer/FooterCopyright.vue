<template>
	<div class="grid justify-items-center lg:justify-items-start lg:grid-cols-4 gap-6 py-6">
		<NuxtLink to="/">
			<Logo  class="w-36 "/>
		</NuxtLink>
		<p class="text-sm text-white text-center lg:text-left lg:col-span-2">{{ copy.title }}</p>
		<div class="flex space-x-4">
			<AppLink
					v-for="(item, index) in copy.socials"
					:key="index"
					:to="item.to"
					class="text-white hover:text-primary"
			>
				<template #prepend>
					<NuxtIcon :name="`socials/${item.icon}`" class="text-2xl" />
				</template>
			</AppLink>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useI18n } from "vue-i18n"
	const { tm } = useI18n()
	const copy = tm('footer.copy')
</script>
