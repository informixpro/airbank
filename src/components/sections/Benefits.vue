<template>
  <section class="bg-primary py-8">
		<div class="container">
			<div class="grid lg:grid-cols-3 gap-y-6">
				<div
						v-for="(item, index) in benefits"
						:key="index"
						class="text-center space-y-2"
				>
					<p class="font-semibold text-black text-md">{{ item.title }}</p>
					<p class="font-black text-white text-2xl lg:text-4xl">{{ item.text }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { useI18n } from "vue-i18n"

	const { tm } = useI18n()
	const benefits = tm('benefits')
</script>
