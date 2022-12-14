<template>
	<div>
		Hi, {{ width  }}
	</div>
</template>

<script>
import useWindowSizes from "../composables/window-sizes";

export default {
	setup() {
		return useWindowSizes();
	},
};
</script>

<style lang="scss" scoped></style>
