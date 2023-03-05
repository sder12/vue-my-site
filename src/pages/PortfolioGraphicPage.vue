<script>
import { store } from '../store';
export default {
    name: 'PortfolioGraphicPage',
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
                    <h3>Graphic <br>
                        Designer</h3>
                    <p>Here you take a look at my projects </p>
                </div>
                <div class="col-6">
                    <ul class="d-flex w-75">
                        <li v-for="(graphic, index) in this.store.skillsGraphic" :key="index">
                            <img :src="getImage(`../assets/img/skills/graphic/${graphic}.png`)" :alt="graphic"
                                class="ms-skills">
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