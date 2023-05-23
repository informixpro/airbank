<template>
  <section class="container">
		<div class="grid lg:grid-cols-2">
			<div class="h-full flex flex-col justify-center py-12">
				<div class="space-y-8">
					<h2 class="font-bold text-2xl lg:text-3xl text-gray-20">{{ branch.header }}</h2>
					<div class="space-y-4">
						<h3 class="font-bold text-xl text-gray-20">{{ branch.address.title }}</h3>
						<p class="text-gray-20" v-html="branch.address.description" />
					</div>
					<div class="space-y-4">
						<h3 class="font-bold text-xl text-gray-20" v-html="branch.openHours.title" />
						<ul class="space-y-4">
							<li
									v-for="(item, index) in branch.openHours.days"
									:key="index"
									class="flex items-center gap-x-4"
							>
								<span class="ring-1 ring-gray-86 font-bold rounded-s py-1 px-4">{{ item.title }}</span>
								<span class="">{{ item.value }}</span>
							</li>
						</ul>
						<ul class="flex flex-wrap gap-x-8 gap-y-4 pt-8">
							<li
									v-for="(item, index) in branch.openHours.features"
									:key="index"
									class="flex flex-col items-center gap-y-4"
							>
									<span class="flex items-center justify-center rounded-full w-12 h-12 ring-1 ring-gray-86">
										<NuxtIcon :name="item.icon" class="text-2xl text-gray-20" />
									</span>
								<p class="">{{item.text}}</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="h-full w-auto lg:w-[50vw] lg:max-h-[36rem]">
				<NuxtImg
						class="w-full h-full object-cover"
						:src="`images/office/${branch.image}`"
						:alt="'illustration'"
						sizes="sm:100vw xl:500px"
						provider="ipx"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { useI18n } from "vue-i18n"

	const { tm } = useI18n()
	const branch = tm('branch')
</script>
