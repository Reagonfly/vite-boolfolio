<script >
import axios from 'axios';
import PostCard from './PostCard.vue';

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
        components:{
            PostCard
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
                        <PostCard :post="post" :baseUrl="baseUrl" />
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
