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
                    col: 7,
                    tech: 'HTML  CSS  JS  ILLUSTRATOR',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    git: "https://fontsie.net/",
                    btnText: "fontsie.net"
                },
                {
                    title: "Seasar",
                    cover: "seasar-cover.png",
                    bgcolor: "yellow",
                    col: 5,
                    tech: 'ILLUSTRATOR  FONTLAB',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    git: "https://www.behance.net/gallery/133868807/SEASAR-typeface",
                    btnText: "behance"
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
            <div class="row pt-5 pb-2">
                <div class="col-12 col-sm-10 col-md-6 col-lg-6 pt-5 pb-3 bg-star">
                    <h2 class="ms-border-bottom w-50 pb-3">Works</h2>
                    <h3>Graphic <br>
                        Designer</h3>
                    <p>Here you can take a look at my projects. <br>
                        I approach each project with creativity,
                        attention to detail, and a dedication to delivering high-quality results. </p>
                </div>
                <div class="col-12 col-sm-10 col-md-6 col-lg-6 pb-3 align-self-center">
                    <ul class="d-flex flex-wrap w-100">
                        <li v-for="(graphic, index) in this.store.skillsGraphic" :key="index">
                            <img :src="getImage(`/img/skills/graphic/${graphic}.png`)" :alt="graphic" class="ms-skills">
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- Works -->
        <section class="row">
            <!-- STATIC -->
            <div v-for="(work, index) in graphicWorks" :key="index"
                :class="`ms-bg-${work.bgcolor} col-12 col-md-${work.col}`"
                class="dev-works d-flex align-items-center justify-content-center position-relative">

                <!-- Visible Img -->
                <img class=" cover_img" :src="getImage(`/img/works/graphic/${work.cover}`)" :alt="work.title">

                <!-- HOVER-->
                <div class="hover_img d-flex flex-column justify-content-center align-items-center">
                    <h2>{{ work.title }}</h2>

                    <p class="w-75 text-center">{{ work.description }}</p>

                    <p id="tech" class="fw-bold">{{ work.tech }}</p>



                    <div class="d-flex gap-3">
                        <a :href="work.git" target="_blank" class="ms-btn ms-btn-yellow my-3">{{ work.btnText }}</a>
                        <!-- <a href="#" class="ms-btn ms-btn-orange my-3">details</a> -->
                    </div>
                </div>
                <!-- / HOVER-->

            </div>
            <!-- / STATIC -->
        </section>

        <!-- WORK IN PROGRESS -->
        <section id="work-in-progress" class="col-12 d-flex justify-content-center align-items-center gap-4">
            <i class="bi bi-cone fs-1"></i>
            <h4 class="text-center my-5">
                Work in progress
            </h4>
            <div>
                <div class="snippet" data-title="dot-flashing">
                    <div class="stage">
                        <div class="dot-flashing"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- WORK IN PROGRESS -->

    </main>
</template>


<style lang="scss" scoped>
i {
    color: var(--secondaryColor);
}

.bg-star {
    background-image: url('../assets/img/stars/star-secondary.svg');
    background-repeat: no-repeat;
    background-size: 4em;
    background-position: 0em 2em;

    img {
        width: .9em;
    }
}

#tech {
    word-spacing: 1rem;
}

.dev-works {
    padding: 2rem 10rem;
    cursor: pointer;

    &:hover .hover_img {
        opacity: 1;
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


//DOT FLASHING
.dot-flashing {
    position: relative;
    bottom: 0;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: var(--darkColor);
    color: var(--darkColor);
    animation: dot-flashing 1s infinite linear alternate;
    animation-delay: 0.5s;
}

.dot-flashing::before,
.dot-flashing::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
}

.dot-flashing::before {
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: var(--darkColor);
    color: var(--darkColor);
    animation: dot-flashing 1s infinite alternate;
    animation-delay: 0s;
}

.dot-flashing::after {
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: var(--darkColor);
    color: var(--darkColor);
    animation: dot-flashing 1s infinite alternate;
    animation-delay: 1s;
}

@keyframes dot-flashing {
    0% {
        background-color: var(--darkColor);
    }

    50%,
    100% {
        background-color: rgba(100, 100, 100, 0.2);
    }
}


//MEDIA QUERY
@media screen and (max-width: 880px) {
    .dev-works {
        padding: 6rem .4rem;


        .hover_img p {
            font-size: 1rem;
        }

        .hover_img h2 {
            font-size: 3rem;
        }
    }
}

@media screen and (max-width: 1200px) {
    .dev-works {
        padding: 4rem 3rem;
    }
}
</style>