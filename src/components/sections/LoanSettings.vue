<template>
  <section class="bg-gray-93 py-12">
    <div class="container space-y-14 max-w-3xl">
      <h2 class="font-bold text-4xl text-center">{{ loan.header }}</h2>
			<div class="space-y-6 mx-auto">
				<div class="flex flex-col md:flex-row gap-y-6 justify-between items-center mb-10 md:mb-0">
					<span class="font-bold">{{ loan.amount }}</span>
					<span class="bg-white rounded px-4 py-2">{{ amount }} Kč</span>
				</div>
				<Slider
						v-model="amount"
						v-bind="options.amount"
				/>
				<div class="flex justify-between">
					<span>{{options.amount.min}} Kč</span>
					<span>{{options.amount.max}} Kč</span>
				</div>
			</div>
			<div class="space-y-6 mx-auto">
				<div class="flex flex-col md:flex-row gap-y-6 justify-between items-center mb-10 md:mb-0">
					<span class="font-bold">{{ loan.duration }}</span>
					<span class="bg-white rounded px-4 py-2">{{ duration }} měsíců</span>
				</div>
				<Slider
						v-model="duration"
						v-bind="options.duration"
				/>
				<div class="flex justify-between">
					<span>{{options.duration.min}} měsíců</span>
					<span>{{options.duration.max}} měsíců</span>
				</div>
			</div>
		</div>
  </section>
</template>

<script setup lang="ts">
	import Slider from "@vueform/slider";
	import { useI18n } from "vue-i18n"

	const { tm } = useI18n()
	const loan = tm('loan')
	const amount = useState<number>('amount', () => 400000)
	const duration = useState<number>('duration', () => 36)
	const options = ref({
		amount: {
			min: 5000,
			max: 900000,
			step: 5000,
			showTooltip: 'drag',
			lazy: false,
		},
		duration: {
			min: 6,
			max: 96,
			interval: 3,
			showTooltip: 'drag',
			lazy: false,
		}
	})
</script>

<style src="@vueform/slider/themes/default.css"></style>

<style lang="css">
	:root {
		--slider-connect-bg: #99cc33;
		--slider-tooltip-bg: black;
		--slider-height: 1.5rem;
		--slider-radius: 0;

		--slider-handle-bg: black;
		--slider-handle-border: none;
		--slider-handle-width: 2.2rem;
		--slider-handle-height: 3.25rem;
		--slider-handle-radius: 0;
		--slider-handle-shadow: 0 0 0 5px #ededed;
		--slider-handle-shadow-active: none;
		--slider-handle-ring-width: 0;
	}
</style>
