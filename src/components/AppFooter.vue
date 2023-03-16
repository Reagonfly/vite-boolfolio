<script>
export default {
    name: 'AppFooter'
}
</script>

<template lang="">
    <footer class="background-footer">
        <div class="container">
            <div class="row mt-3 d-flex justify-content-between">
                <div class="col-4">
                    <div class="logo d-flex align-self-center">
                        <img src="/img/logo.png" class="img-fluid" alt="logo">
                    </div>
                </div>
                <div class="col-4">
                    Menu
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    @use '../styles/generals.scss' as *;

    
    .background-footer{
        background-color: grey;
        padding: 10px;
    }
</style>