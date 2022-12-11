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
import { Form } from "vform";

export default {
	props: {
		form: { type: Form, required: true },
		name: { type: String, required: true },
		label: { type: String, required: true },
	},
	computed: {
		id() {
			return `field-${this.name}`;
		},
		hasError() {
			return this.form.errors.has(this.name);
		},
		errorText() {
			return this.hasError ? this.form.errors.get(this.name) : null;
		},
		inputClasses() {
			return {
				"is-invalid": this.hasError,
			};
		},
	},
};
</script>
