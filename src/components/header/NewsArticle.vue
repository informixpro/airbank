<template>
	<article>
			<div class="md:inline-flex text-white text-sm font-bold bg-black/[0.55] tracking-widest rounded-sm px-2 py-1 mb-2">
				{{ article.date }}
			</div>
			<h3 class="font-bold text-white text-xl hover:underline mb-2">
				<RouterLink :to="article._path">
					{{ article.title }}
				</RouterLink>
			</h3>
			<p class="text-white">{{ article.description }}</p>
	</article>
</template>

<script setup lang="ts">
	import {IArticle} from "~/types";
	defineProps<{
		article?: IArticle
	}>()
</script>
