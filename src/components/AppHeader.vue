<script>
export default {
    name: 'AppHeader',
    data(){
        return{
            menuItems:[
                {
                    label: 'Homepage',
                    routeName: 'homepage'
                },
                {
                    label: 'Blog',
                    routeName: 'post_list'
                },
                {
                    label: 'Contacts',
                    routeName: 'contacts'
                }
            ]
        }
    }
}
</script>

<template lang="">
    <nav class="navbar navbar-expand-md nav-bg">
        <div class="container">
            <div class="navbar-brand">
                <img src="/img/logo.png" class="img-fluid" alt="logo">
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                        <router-link :to="{name: item.routeName}" class="nav-link">
                            {{ item.label }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    @use '../styles/generals.scss' as *;

    .nav-bg{
        background-color: rgb(34, 61, 112);
        .navbar-nav{
            .nav-link{
                color: #fff;
            }
        }
    }
</style>