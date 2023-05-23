<template>
	<section class="py-12 lg:py-16">
		<div class="container">
			<div class="grid lg:grid-cols-3 gap-x-6 gap-y-8">
				<div
						v-for="(item, index) in cta"
						:key="index"
						class="flex flex-col items-center text-center gap-y-6"
				>
					<NuxtIcon :name="item.icon" class="text-4xl lg:text-6xl text-primary" />
					<p class="font-bold text-xl">{{ item.title }}</p>
					<AppLink
							:to="item.action.to"
							class="font-bold ring-1 ring-primary px-12 py-4 mt-auto rounded hover:bg-primary hover:text-white hover:ring-0"
					>
						{{ item.action.title }}
					</AppLink>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { useI18n } from "vue-i18n"

	const { tm } = useI18n()
	const cta = tm('cta')
</script>
