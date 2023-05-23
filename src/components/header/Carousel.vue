<template>
	<div class="absolute w-full h-full">
		<Swiper
				:modules="[Autoplay]"
				:loop="true"
				:autoplay="{ delay: 14500, disableOnInteraction: true }"
				:speed="1400"
				:slides-per-view="1"
				:class="'w-full h-full'"
		>
			<SwiperSlide
					v-for="(item, index) in slider"
					:key="index"
			>
				<CarouselSlide :slide="item" />
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<script setup lang="ts">
	import { Swiper, SwiperSlide } from 'swiper/vue'
	import { Autoplay } from 'swiper'
	import 'swiper/css'
	import { useI18n } from "vue-i18n"

	const { tm } = useI18n()
	const slider = tm('header.slider')
</script>
