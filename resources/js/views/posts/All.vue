<template>
    <div>
        <div v-for="post in posts" :key="post.id" class="card mt-3">
            <div class="card-body">
                <div class="h5 card-title">
                    {{ post.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: null,
        };
    },
    computed: {
        loaded() {
            return this.posts !== null;
        },
    },
    async created() {
        let response = await fetch("posts");
        this.posts = await response.json();
        console.log(this.posts);
    },
};
</script>

<style lang="scss" scoped></style>
