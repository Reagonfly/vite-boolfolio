<script>
export default {
    name: 'NotFound'
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center mt-5 py-5">
                <h1 class="text-danger">PAGE NOT FOUND</h1>
                <router-link :to="{ name: 'post_list'}" class="btn btn-sm btn-success align-self-center">
                        <strong class="text-white">Back To List!</strong>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/generals.scss' as *;   
</style>