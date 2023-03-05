<script>
export default {
    name: 'NotFound',
}
</script>

<template>
    <main class="container-fluid text-center ms-bg">
        <div>
            <img src="../assets/img/stars/star-warning.svg" alt="star-warning">
            <h2>Warning 404</h2>
            <p>page not found</p>
            <router-link :to="{ name: 'home' }" class="ms-btn ms-btn-purple">Go back home</router-link>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    height: calc(100vh - var(--header-footer-height));

    div {
        padding-top: 10%;
    }
}
</style>