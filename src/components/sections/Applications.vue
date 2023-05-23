<template>
	<section class="py-8">
		<div class="container">
			<h2 class="font-bold text-2xl lg:text-3xl text-center mb-10 lg:mb-16">{{ applications.title }}</h2>
			<div class="grid lg:grid-cols-3 gap-8">
				<div
						v-for="(item, index) in applications.apps"
						:key="index"
						class="flex flex-col items-center text-center gap-y-6 px-9 py-7 ring-1 ring-primary rounded"
				>
					<NuxtIcon :name="item.icon" class="text-4xl text-primary" />
					<h3 class="font-bold text-lg">{{ item.title }}</h3>
					<p class="">{{ item.text }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { useI18n } from "vue-i18n"

	const { tm } = useI18n()
	const applications = tm('applications')
</script>
