import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import PostList from './pages/PostList.vue';
import SinglePost from './pages/SinglePost.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/blog',
            name: 'post_list',
            component: PostList
        },
        {
            path: '/blog/:slug',
            name: 'single_post',
            component: SinglePost
        },
        {
            path: '/*',
            name: 'not_found',
            component: NotFound
        }
    ]
});

export { router };