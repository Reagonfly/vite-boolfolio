import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import PostMain from './components/PostMain.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        }
    ]
});

export { router };