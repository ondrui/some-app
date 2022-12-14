import { ref } from "vue";

let width = ref(0);
	let height = ref(0);
	const handler =() => {
		width.value = window.innerWidth;
		height.value = window.innerHeight;
		console.log("updated");
	};
	handler();
	window.addEventListener("resize", handler);

export default () => {
	return { width, height };
};
// export default () => {
// 	let width = ref(0);
// 	let height = ref(0);
// 	const handler =() => {
// 		width.value = window.innerWidth;
// 		height.value = window.innerHeight;
// 		console.log("updated");
// 	};
// 	onMounted(() => {
// 		handler();
// 		window.addEventListener("resize", handler);
// 	});
// 	onUnmounted(() => {
// 		window.removeEventListener("resize", handler);
// 	});
// 	return { width, height };
// };
