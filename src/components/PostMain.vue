<script >
import axios from 'axios';

    export default{
        data(){
            return{
                posts: [],
                loading: true,
                baseUrl: 'http://127.0.0.1:8000',
                currentPage: 1,
                lastPage: null
            }
        },
        methods:{
            getPosts(post_page){
                this.loading = true;
                axios.get(`${this.baseUrl}/api/posts`, { params: { page: post_page }}).then((response) => {
                    if(response.data.success){
                        this.posts = response.data.results.data;
                        this.currentPage = response.data.results.current_page;
                        this.lastPage = response.data.results.last_page;
                        this.loading = false;
                    }
                    else{
                        
                    }
                });
            }
        },
        mounted(){
            this.getPosts(this.currentPage);
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
                                    <img class="img-fluid" :src="post.cover_image != null ? `${baseUrl}/storage/${post.cover_image}` : 'https://via.placeholder.com/400x300'" :alt="post.title">
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
                                            <span class="mx-1 btn btn-sm btn-primary" v-for="tag in post.tags"> {{ tag.name }} </span>                                            
                                        </em>
                                    </p>
                                </div>
                                <div class="card-text py-2">
                                    {{ post.excerpt }}
                                </div>
                                <a href="#" class="btn btn-sm btn-secondary my-2">Continue To Read</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <nav>
                            <ul class="pagination d-flex justify-content-around">
                                <li :class="currentPage === 1 ? 'disabled' : 'page-item'">
                                    <button class="page-link btn btn-sm" @click="getPosts(currentPage - 1)">Previous page</button>
                                </li>
                                <li :class="currentPage === i ? 'disabled' : 'page-item'" v-for="i in lastPage">
                                    <button class="page-link btn btn-sm" @click="getPosts(i)">{{ i }}</button>
                                </li>
                                <li :class="currentPage === lastPage ? 'disabled' : 'page-item'">
                                    <button class="page-link btn btn-sm" @click="getPosts(currentPage + 1)">Next page</button>
                                </li>
                            </ul>
                        </nav>
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
