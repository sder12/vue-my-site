<script>
import { store } from '../store';
export default {
    name: 'PortfolioGraphicPage',
    data() {
        return {
            store,
            graphicWorks: [
                {
                    title: "Fontsie",
                    cover: "fontsie-cover.png",
                    bgcolor: "purple",
                    col: 6,
                    tech: 'HTML CSS JS AI',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    git: "https://github.com/sder12/vue-boolzapp",
                },
                {
                    title: "Boolzapp",
                    cover: "boolzapp-cover.png",
                    bgcolor: "yellow",
                    col: 6,
                    tech: 'HTML CSS JS',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    git: "https://github.com/sder12/vue-boolzapp",
                },
            ]
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
            <div class="row pt-5 pb-3">
                <div class="col-6 py-5 bg-star">
                    <h2 class="ms-border-bottom w-50">Works</h2>
                    <h3>Graphic <br>
                        Designer</h3>
                    <p>Here you take a look at my projects </p>
                </div>
                <div class="col-6 py-5">
                    <ul class="d-flex flex-wrap w-75">
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
            <!-- STATIC -->
            <div v-for="(work, index) in graphicWorks" :key="index" :class="`ms-bg-${work.bgcolor} col-${work.col}`"
                class="dev-works d-flex align-items-center justify-content-center position-relative">

                <!-- Visible Img -->
                <img class=" cover_img" :src="getImage(`../assets/img/works/graphic/${work.cover}`)" :alt="work.title">

                <!-- HOVER-->
                <div class="hover_img d-flex flex-column justify-content-center align-items-center">
                    <h2>{{ work.title }}</h2>

                    <p class="w-75 text-center">{{ work.description }}</p>

                    <p class="fw-bold">{{ work.tech }}</p>
                    <div class="d-flex gap-3">
                        <a :href="work.git" target="_blank" class="ms-btn ms-btn-yellow my-3">fontsie.net</a>
                        <a href="#" class="ms-btn ms-btn-orange my-3">details</a>
                    </div>
                </div>
                <!-- / HOVER-->

            </div>
            <!-- / STATIC -->
        </section>
    </main>
</template>


<style lang="scss" scoped>
.bg-star {
    background-image: url('../assets/img/stars/star-secondary.svg');
    background-repeat: no-repeat;
    background-size: 4em;
    background-position: 0em 2em;

    img {
        width: .9em;
    }
}



.dev-works {
    height: 30em;
    cursor: pointer;

    &:hover .hover_img {
        opacity: 1;
    }

    .cover_img {
        height: 25em;

    }



    //HOVER
    .hover_img {
        opacity: 0;
        color: white;
        background-color: rgba(0, 0, 0, 0.829);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>