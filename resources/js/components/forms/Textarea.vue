<template>
	<label :for="id" class="form-label">{{ label }} {{ width }} {{ height }}</label>
	<textarea
		class="form-control"
		:class="inputClasses"
		:id="id"
		:name="name"
		v-model="form[name]"
		:rows="rows"
	></textarea>
	<div v-if="hasError" class="invalid-feedback">
		{{ errorText }}
	</div>
</template>
<script>
import baseInput from "../../mixins/base-input";
import windowSizes from "../../mixins/window-sizes";

export default {
	mixins: [baseInput, windowSizes],
	computed: {
		rows() {
			return parseInt(this.width / 40);
		}
	},
};
</script>
