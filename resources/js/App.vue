<template>
	<nav class="py-2 border-bottom">
		<div class="container">
			<router-link :to="{ name: 'posts' }">Home</router-link> |
			<router-link :to="{ name: 'posts.create' }">Create post</router-link>
			{{ width }} |
			{{ windowSizes.width }}
		</div>
	</nav>
	<div class="container mt-2">
		<router-view />
	</div>
</template>
<script>
import useWindowSizes from "./composables/window-sizes";
import { computed } from "vue";

export default {
	setup() {
		let fake = Math.random();
		let width = computed(() => fake * 100);
		// let { width: windowSize, height } = useWindowSizes();
		let windowSizes = useWindowSizes();

		// return { width, height };
		return { width, windowSizes };
	},
};
</script>
