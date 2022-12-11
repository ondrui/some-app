<template>
	<label :for="id" class="form-label">{{ label }}</label>
	<select
		class="form-select"
		:class="inputClasses"
		:id="id"
		:name="name"
		v-model="form[name]"
	>
		<option value="" disabled>Не выбрана</option>
		<option v-for="text, value in options" :key="value" :value="value">
		{{ text }}
		</option>
</select>
	<div v-if="hasError" class="invalid-feedback">
		{{ errorText }}
	</div>
</template>
<script>
import baseInput from "../../mixins/base-input";

export default {
	mixins: [baseInput],
	props: {
		options: { type: Object, required: true },
	},
};
</script>
