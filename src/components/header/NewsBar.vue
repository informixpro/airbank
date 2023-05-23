<template>
	<section class="hidden md:block mt-auto z-10">
		<div class="container">
			<div class="grid grid-cols-3 gap-x-8 mb-6">
				<NewsArticle
						v-for="(item, index) in articles"
						:key="index"
						:article="item"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	const { data:articles } = await useAsyncData('blog', () => queryContent('/blog').find())
</script>
