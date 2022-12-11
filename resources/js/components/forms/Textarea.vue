<template>
	<label :for="id" class="form-label">{{ label }}</label>
	<textarea
		class="form-control"
		:class="inputClasses"
		:id="id"
		:name="name"
		v-model="form[name]"
	></textarea>
	<div v-if="hasError" class="invalid-feedback">
		{{ errorText }}
	</div>
</template>
<script>
import baseInput from "../../mixins/base-input";

export default {
	mixins: [baseInput],
};
</script>
