<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'SinglePost',
    data(){
        return{
            store,
            post: null,
            loading: true
        }
    },
    mounted(){
        this.loading = true;
        axios.get(`${this.store.baseUrl}/api/posts/${this.$route.params.slug}`).then((response)=>{
            if(response.data.success){
                this.post = response.data.post
                this.loading = false;
            }
            else{
                $this.$router.push({name: 'not_found'})
            }
        })
    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-between my-3" v-if="loading">
                <div class="loader"></div>
            </div>
            <div class="col-12" v-else>
                <div class="card d-flex justify-content-between my-3">
                    <div class="card-img-top" v-if="post.cover_img">
                        <img class="img-fluid" :src="post.cover_image != null ? `${store.baseUrl}/storage/${post.cover_image}` : 'https://via.placeholder.com/250x200'" :alt="post.title">
                    </div>
                    <div class="card-title">
                        <h2>Post Title: {{ post.title }}</h2>
                    </div>
                    <div class="card-body">
                        <h5>Author:</h5>
                        <p>
                            {{ post.author }}
                        </p>
                        <p v-if="post.category">
                            <h5>Category:</h5>
                            <p>
                                {{ post.category.name }}
                            </p>
                        </p>
                        <p v-if="post.tags.length > 0">
                            <em>
                                <h5>Tags:</h5>
                                <span v-for="tag in post.tags" class="btn btn-sm btn-success mx-1"> 
                                    {{ tag.name }}
                                </span>
                            </em>
                        </p>
                        <h5 class="mt-3">Content:</h5>
                        <p>
                            {{ post.content }}
                        </p>
                    </div>
                    <router-link :to="{ name: 'post_list'}" class="btn btn-sm btn-secondary align-self-center">
                        <strong class="text-white">Back To List</strong>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/generals.scss' as *;

    img{
        max-width: 300px;
    }
</style>