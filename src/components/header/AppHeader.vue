<template>
	<header class="relative h-[500px] md:h-[750px] flex flex-col">
		<Carousel />
		<div class="relative h-full w-full top-0 left-0 flex flex-col">
			<div
					class="absolute w-full h-full bg-black/[0.7] transition duration-300"
					:class="[showBackdrop ? 'opacity-100 z-10' : 'opacity-0 z-0']"
			/>
			<TopNav />
			<NavBar @toggle="showBackdrop = !showBackdrop" />
			<NewsBar />
		</div>
	</header>
</template>

<script setup lang="ts">
	const showBackdrop = ref(false);
</script>
