<template>
	<nav
			class="
        container
        py-8
        mx-auto
        lg:flex lg:justify-between lg:items-center
        z-10
      "
	>
		<div class="flex items-center justify-between">
			<NuxtLink to="/">
				<Logo class="w-40 " />
			</NuxtLink>
			<div class="flex lg:hidden" @click="toggleNav">
				<button
						type="button"
						class="
              text-gray-100
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
				>
					<NuxtIcon name="toggle" class="text-xl text-white" />
				</button>
			</div>
		</div>
		<div
				:class="showMenu ? 'flex' : 'hidden'"
				class="
          flex-col
          items-center
          mt-8
          space-y-4
          lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:mt-0
          transition-all duration-500
        "
		>
			<AppLink
					v-for="(item, index) in navBar"
					:key="index"
					:to="item.to"
					:class="{'disabled': index > 1}"
					class="
						text-xl lg:text-base
						flex-col
						text-white
						transition
						menu
						group
					"
			>
				<template v-if="item.icon" #prepend>
					<NuxtIcon :name="`${item.icon}`" class="text-xl text-primary" />
				</template>
				<span>{{ item.title }}</span>
				<span class="block mt-3 w-full max-w-0 menu-item group-hover:max-w-full transition-all h-0.5 bg-primary"></span>
			</AppLink>
		</div>
	</nav>
</template>

<script setup lang="ts">
	import { useI18n } from "vue-i18n"

	const emit = defineEmits(['toggle'])
	const { tm } = useI18n()
	const navBar = tm('header.navBar')
	const showMenu = ref(false);
	const toggleNav = () => {
		emit('toggle')
		return (showMenu.value = !showMenu.value)
	};
</script>

<style lang="scss">
 .menu.router-link-active,
 .menu.router-link-exact-active .menu-item {
	 @apply max-w-full
 }
 .disabled {
	 @apply pointer-events-none opacity-50
 }
</style>
