import { createRouter, createWebHistory } from "vue-router";
import PostAll from "../views/posts/All.vue";
import PostsCreate from "../views/posts/Create.vue";
import Some from "../views/Some.vue";

let routes = [
	{
		path: "/",
		component: PostAll,
		name: "posts",
	},
	{
		path: "/create",
		component: PostsCreate,
		name: "posts.create",
	},
	{
		path: "/some",
		component: Some,
		name: "some",
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
