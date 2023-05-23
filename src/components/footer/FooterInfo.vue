<template>
	<div class="grid md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 py-6">
		<div class="space-y-6">
			<h3 class="text-xl text-white font-bold">{{ info.left.header }}</h3>
			<div class="grid lg:grid-cols-2 gap-x-6 gap-y-6">
				<div class="flex items-center space-x-4">
					<NuxtIcon :name="$tm('footer.info.left.icon')" class="text-primary text-3xl" />
					<span class="text-primary font-black text-xl">{{ info.left.phone }}</span>
				</div>
				<div class="flex items-center justify-self-start space-x-2">
					<NuxtIcon name="chevron" class="text-primary"/>
					<AppLink :to="info.left.call.to">
						<span class="underline text-white hover:text-primary">{{ info.left.call.title }}</span>
					</AppLink>
				</div>
			</div>
		</div>
		<div class="space-y-6">
			<h3 class="text-xl text-white font-bold">{{ info.right.header }}</h3>
			<div class="flex flex-wrap gap-4">
				<AppLink
						v-for="(item, index) in info.right.stores"
						:key="index"
						:to="item.to"
				>
					<template #prepend>
						<NuxtIcon :name="`stores/${item.icon}`" filled class="text-white" />
					</template>
				</AppLink>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useI18n } from "vue-i18n"
	const { tm } = useI18n()
	const info = tm('footer.info')
</script>
