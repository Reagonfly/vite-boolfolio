<script>
import axios from 'axios';
import PostCard from '../components/PostCard.vue';
import { store } from '../store';

    export default{
        name: "PostList",
        data(){
            return{
                store,
                posts: [],     
                currentPage: 1,
                lastPage: null,
                loading: true
            }
        },
        components:{
            PostCard
        },
        methods:{
            getPosts(post_page){
                this.loading = true;
                axios.get(`${this.store.baseUrl}/api/posts`, { params: { page: post_page }}).then((response) => {
                    if(response.data.success){
                        this.posts = response.data.results.data;
                        this.currentPage = response.data.results.current_page;
                        this.lastPage = response.data.results.last_page;
                        this.loading = false;
                    }
                    else{
                      // Gestione dell'errore  
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
                <h2 class="text-center mt-3"><strong>Boolpress</strong></h2>
            </div>
            <h3>Posts List:</h3>
            <div v-if="loading" class="col-12 d-flex justify-content-center flex-wrap">
                <div class="loader"></div>
            </div>
            <div v-else class="col-12">
                <div class="row d-flex flex-wrap justify-content-center">
                    <div class="col-3" v-for="post in posts" :key="post.id">
                        <PostCard :post="post" />
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

</style>
