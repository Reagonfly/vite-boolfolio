<script >
import axios from 'axios';

    export default{
        data(){
            return{
                posts: [],
                loading: true,
                baseUrl: 'http://127.0.0.1:8000'
            }
        },
        methods:{
            getPosts(){
                this.loading = true;
                axios.get(`${this.baseUrl}/api/posts`).then((response) => {
                    if(response.data.success){
                        this.posts = response.data.results
                        this.loading = false;
                    }
                    else{
                        
                    }
                });
            }
        },
        mounted(){
            this.getPosts()
        }
    }
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center"><strong>Boolpress</strong></h2>
            </div>
            <h3>Posts List:</h3>
            <div v-if="loading" class="col-12 d-flex justify-content-center flex-wrap">
                <div class="loader"></div>
            </div>
            <div v-else class="col-12">
                <div class="row d-flex flex-wrap justify-content-center">
                    <div class="col-3" v-for="post in posts" :key="post.id">
                        <div class="card my-3">
                            <div class="card-body">
                                <div class="img-top">
                                    <img class="img-fluid" :src="post.cover_image != null ? `${baseUrl}/${post.cover_image}` : 'https://via.placeholder.com/600x400'" :alt="post.title">
                                </div>
                                <div class="card-title">
                                    <h4>{{ post.title }}</h4>
                                </div>
                                <div class="card-text">
                                    {{ post.excerpt }}
                                </div>
                                <a href="#" class="btn btn-sm btn-secondary">Continue To Read</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
