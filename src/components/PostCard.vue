<script>
    export default {
        name: 'PostCard',
        props:{
            post: Object,
            baseUrl: String
        }
    }
</script>

<template lang="">
        <div class="card m-4">
            <div class="card-body">
                <div class="img-top">
                    <img class="img-fluid" :src="post.cover_image != null ? `${baseUrl}/storage/${post.cover_image}` : 'https://via.placeholder.com/250x200'" :alt="post.title">
                </div>
                <div class="card-author py-2">
                    <h4>{{ post.author }}</h4>
                </div>
                <div class="card-title py-2">
                    <h4>{{ post.title }}</h4>
                    <p>
                        <strong>Category:</strong> {{ post.category.name }}
                    </p>
                    <p>
                        <em>
                            <strong>Tags: </strong>
                            <span class="mx-1 btn btn-sm btn-success" v-for="tag in post.tags"> {{ tag.name }} </span>                                            
                        </em>
                    </p>
                </div>
                <div class="card-text py-2">
                    {{ post.excerpt }}
                </div>
                <a href="#" class="btn btn-sm btn-secondary my-2">Continue To Read</a>
            </div>
        </div>
</template>

<style lang="scss" scoped>
    @use '../styles/generals.scss' as *;

</style>