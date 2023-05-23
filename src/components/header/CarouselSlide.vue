<template>
	<div class="relative w-full h-full z-20">
		<NuxtImg
				class="w-full h-full object-cover"
				:src="slide.image"
				:alt="'illustration'"
				sizes="sm:100vw xl:1920px"
				provider="ipx"
		/>
	</div>
	<div class="absolute h-full w-full top-0 left-0 flex flex-col justify-center z-30">
		<div class="container">
			<h2 class="font-secondary font-thin text-white text-4xl md:text-5xl w-2/3 leading-[1.2] lg:leading-[1.2] lg:text-6xl xl:w-1/3">
				{{ slide.title }}</h2>
			<div class="flex items-start gap-x-4 mt-6">
				<NuxtIcon :name="slide.icon" class="text-primary text-5xl" />
				<div class="flex flex-col">
					<h3 class="text-white font-medium text-lg">{{ slide.author.name }}</h3>
					<p class="text-primary font-medium text-sm">{{ slide.author.position }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		slide: {
			title: string
			image: string
			icon: string
			author: {
				name: string
				position: string
			}
		}
	}>()
</script>
