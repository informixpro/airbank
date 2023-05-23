<template>
	<section class="pt-3 hidden lg:block z-10">
		<div class="container">
			<nav class="flex justify-end space-x-4">
				<AppLink
						v-for="(item, index) in topNav"
						:key="index"
						:to="item.to"
						class="
							inline-flex
							px-5 py-2
							text-sm
							text-white
							bg-transparent
							rounded-sm
							ring-2 ring-white/[.25]
							focus:outline-none
							transition
							hover:bg-white/[.10]
						"
				>
					<template v-if="item.icon" #prepend>
						<NuxtIcon :name="`${item.icon}`" class="text-xl text-primary" />
					</template>
					<span>{{ item.title }}</span>
				</AppLink>
			</nav>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { useI18n } from "vue-i18n"

	const { tm } = useI18n()
	const topNav = tm('header.topNav')
</script>
