<script>

import { store } from '../store';

export default {
    name: 'PostCard',
    props:{
        post: Object
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template lang="">
        <div class="card m-4">
            <div class="card-body">
                <div class="img-top">
                    <img class="img-fluid" :src="post.cover_image != null ? `${store.baseUrl}/storage/${post.cover_image}` : 'https://via.placeholder.com/250x200'" :alt="post.title">
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
                <router-link :to="{ name: 'single_post', params: { slug: post.slug}}" class="btn btn-sm btn-secondary">Continue to Read</router-link>
            </div>
        </div>
</template>

<style lang="scss" scoped>
    @use '../styles/generals.scss' as *;

</style>