<template>
	<nav class="py-2 border-bottom">
		<div class="container">
			<router-link :to="{ name: 'posts' }">Home</router-link> |
			<router-link :to="{ name: 'posts.create' }">Create post</router-link>
			{{ width }}
		</div>
	</nav>
	<div class="container mt-2">
		<router-view />
	</div>
</template>
<script>
import windowSizes from "./mixins/window-sizes";

export default {
	mixins: [windowSizes],
};
</script>
