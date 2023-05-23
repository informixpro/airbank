<template>
	<section class="py-8">
		<div class="container">
			<h2 class="font-bold text-2xl lg:text-3xl text-center  mb-4 lg:mb-10">{{ faq.title }}</h2>
			<div class="max-w-3xl mx-auto divide-y divide-gray-86">
				<div
						v-for="(item, index) in faq.questions"
						:key="index"
						class="flex gap-x-6 py-6"
				>
					<NuxtIcon name="question" class="text-primary text-3xl" />
					<div class="space-y-4">
						<h3 class="font-bold">{{ item.title }}</h3>
						<p>{{ item.text }}</p>
					</div>
				</div>
			</div>
			<div class="w-full  text-center mt-6">
				<div class="inline-flex items-center justify-self-start space-x-2">
					<NuxtIcon name="chevron" class="text-primary" />
					<AppLink :to="faq.all.to">
						<span class="underline  hover:text-primary">{{ faq.all.title }}</span>
					</AppLink>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { useI18n } from "vue-i18n"

	const { tm } = useI18n()
	const faq = tm('faq')
</script>
