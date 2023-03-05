<script>
import { store } from '../store';
export default {
    name: 'PortfolioWebPage',
    data() {
        return {
            store
        }
    },
    methods: {
        getImage(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },
    }
}
</script>

<template>
    <main class="container-fluid">
        <!-- Introduction -->
        <section class="container">
            <div class="row">
                <div class="col-6">
                    <h2 class="ms-border-bottom">Works</h2>
                    <h3>Jr. Full Stack <br>
                        Web Developer</h3>
                    <p>Here you take a look at my projects </p>
                </div>
                <div class="col-6">
                    <ul class="d-flex">
                        <li v-for="(dev, index) in this.store.skillsDev" :key="index">
                            <img :src="getImage(`../assets/img/skills/dev/${dev}.png`)" :alt="dev" class="ms-skills">
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- Works -->
        <section class="row">
            <div class="col-8 ms-bg-black">secondo</div>
            <div class="col-4 ms-bg-purple">secondo</div>
            <div class="col-4 ms-bg-orange">secondo</div>
            <div class="col-8 ms-bg-yellow">secondo</div>
        </section>
    </main>
</template>
<style lang="scss" scoped></style>
