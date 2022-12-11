<template>
	<form @submit.prevent="send" v-if="loaded">
		<div class="mb-3">
			<AppSelect
			:form="form"
			name="category_id"
			label="Category"
			:options="categories"
			/>
			<AppInput :form="form" name="title" label="Title" />
			<AppTextarea :form="form" name="content" label="Content" />
		</div>
		<button class="btn btn-success">Create post</button>
	</form>
</template>

<script>
import Form from "vform";
import AppInput from "../../components/forms/Input.vue";
import AppTextarea from "../../components/forms/Textarea.vue";
import AppSelect from "../../components/forms/Select.vue";

export default {
	components: {
		AppInput,
		AppTextarea,
		AppSelect,
	},
	data: () => ({
		categories: null,
		form: new Form({
			category_id: "",
			title: "",
			content: "",
		}),
	}),
	computed: {
		loaded() {
			return this.categories !== null;
		},
	},
	methods: {
		async send() {
			try {
				await this.form.post("/posts");
				this.$router.push("/");
			} catch (e) {
				// 422 silense, other is error
			}
		},
	},
	async created() {
		let response = await fetch("/categories");
		const a = await response.json();
		const obj = {};
		a.forEach((item, index, arr) => {
			obj[item.id] = item.name;
		});
		this.categories = obj;
	},
};
</script>

<style lang="scss" scoped></style>
