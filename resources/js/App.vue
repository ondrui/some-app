<template>
	<nav class="py-2 border-bottom">
		<div class="container">
			<router-link :to="{ name: 'posts' }">Home</router-link> |
			<router-link :to="{ name: 'posts.create' }">Create post</router-link>
		</div>
	</nav>
	<div class="container mt-2">
		<router-view />
	</div>
</template>
