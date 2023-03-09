<script>
export default {
    name: "ChevronToTop",
    methods: {
        backToTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }
    }
}
</script>

<template>
    <a href="#" id="ms_chevron" v-scroll="backToTop">
        <i class="bi bi-arrow-up-circle-fill fs-2"></i>
    </a>
    <go-top>ciao</go-top>
</template>

<style lang="scss" scoped>
//Chevron go to top page
#ms_chevron {
    position: fixed;
    bottom: var(--footer-height);
    right: .4em;
    padding: .5em 1em .1em;
    color: var(--darkColor);
    cursor: pointer;
}
</style>