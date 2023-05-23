<template>
	<section class="py-12 lg:py-16">
		<div class="container">
			<div class="lg:flex lg:ring-1 ring-gray-86">
				<div class="w-[256px] mx-auto lg:h-auto lg:flex-shrink-0">
					<NuxtImg
							class="w-full h-full object-cover "
							:src="`images/${quote.image}`"
							:alt="'illustration'"
							sizes="sm:256px xl:256px"
							provider="ipx"
					/>
				</div>

				<div class="pt-6 lg:px-14 lg:py-10 space-y-11">
					<h3 class="font-bold text-lg">{{ quote.text }}</h3>
					<div class="flex gap-x-6">
						<NuxtIcon name="slash" class="text-primary text-5xl" />
						<div class="flex flex-col">
							<h3 class="text-lg">{{ quote.name }}</h3>
							<p class="text-primary">{{ quote.position }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { useI18n } from "vue-i18n"

	const { tm } = useI18n()
	const quote = tm('quote')
</script>
