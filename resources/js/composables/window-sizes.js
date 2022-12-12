import { ref, onMounted, onUnmounted } from "vue";

export default () => {
	let width = ref(0);
	let height = ref(0);
	const handler =() => {
		width.value = window.innerWidth;
		height.value = window.innerHeight;
	};
	onMounted(() => {
		handler();
		window.addEventListener("resize", handler);
	});
	onUnmounted(() => {
		window.removeEventListener("resize", handler);
	});
	return { width, height };
};
