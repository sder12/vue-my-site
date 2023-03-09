<script>
import { store } from '../store';
export default {
    name: 'HomePage',
    data() {
        return {
            store,
            currentSliderLeft: 0,
            currentSliderRight: 1,
            sliderWorks: [
                {
                    title: 'Boolbnb',
                    cover: '/img/works/developer/boolbnb-cover.png',
                },
                {
                    title: 'Spotify',
                    cover: '/img/works/developer/spotify-cover.png',
                },
                {
                    title: 'Discord',
                    cover: '/img/works/developer/discord-cover.png',
                },
                {
                    title: 'Boolzap',
                    cover: '/img/works/developer/boolzapp-cover.png',
                },
                {
                    title: 'Bakery',
                    cover: '/img/works/developer/bakery-cover.png',
                },
                {
                    title: 'Dropbox',
                    cover: '/img/works/developer/dropbox-cover.png',
                },

            ]
        }
    },
    methods: {
        getImage(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },
        prevSlide() {
            if (this.currentSliderLeft == 0) {
                this.currentSliderLeft = this.sliderWorks.length - 1;
            } else {
                this.currentSliderLeft--
            }

            if (this.currentSliderRight == 0) {
                this.currentSliderRight = this.sliderWorks.length - 1;
            } else {
                this.currentSliderRight--
            }
        },
        nextSlide() {
            if (this.currentSliderLeft < this.sliderWorks.length - 1) {
                this.currentSliderLeft++
            } else {
                this.currentSliderLeft = 0;
            }
            if (this.currentSliderRight < this.sliderWorks.length - 1) {
                this.currentSliderRight++;
            } else {
                this.currentSliderRight = 0;
            }
        }

    },

}
</script>

<template>
    <main class="container-fluid px-md-4 px-lg-5">


        <!-- JUMBOTRON -->
        <section id="jumbotron" class="ms-border-bottom col-12">
            <div class="row py-5">
                <!-- TITLE -->
                <div id="title" class="col-12  col-lg-6">
                    <h1 class="ps-3">Hello!<br>
                        I am Sara <br>
                        <img src="../assets/img/&.svg" alt="and">
                        this is my <br>
                        website!
                    </h1>
                </div>
                <!-- PRESENTATION -->
                <div class="col-12 col-lg-6 d-flex flex-column justify-content-end align-items-start">
                    <p class="ps-0 pe-0">
                        Welcome to my website portfolio! <br>
                        My name is Sara, and I am a <strong>Junior Full Stack Web Developer</strong> and
                        <strong> Graphic Designer</strong>
                        with a passion
                        for creating beautiful and functional websites. <br>
                        On this site, you will be able to see my works
                        and my personal resume. <br>
                        Thank you for visiting, and have a great day!
                    </p>
                    <!-- Btn cv -->
                    <div>
                        <a href="#" onclick="window.open('/Cetto_Sara.pdf','_blank'); return false;"
                            class="ms-btn ms-btn-black mt-2">
                            <i class="bi bi-file-earmark-arrow-down fs-5"></i> Italian CV
                        </a>
                    </div>

                </div>
            </div>
        </section>
        <!-- /JUMBOTRON -->




        <!-- PRESENTATION -->
        <section id="presentation" class="ms-border-bottom col-12">
            <div class="row d-flex">
                <!-- SELFIE PRESENTATION -->
                <div class="col-12 col-lg-6 ms-bg py-3 px-3 d-flex flex-column">

                    <!-- selfie -->
                    <img src="../assets/img/sara-foto.png" alt="sara-foto" class="my-5 w-50  align-self-end">
                    <!-- text -->
                    <p class="w-75 align-self-center">
                        Hi there, my name is Sara and I live in Trento, Italy. I studied graphic design, but
                        over
                        the
                        last
                        few years, I've become passionate about the world of web development. I've learned
                        various
                        front-end
                        and back-end languages and technologies, and I enjoy using them to create beautiful and
                        functional
                        websites.
                    </p>


                </div>
                <!-- CARREER -->
                <div id="career" class="col col-12 col-lg-6 d-flex flex-lg-column justify-content-center ">
                    <div class="row">
                        <div id="bg-star-dev" class="ms_jr-border">
                            <h3>Jr. Full Stack <br>
                                Web
                                Developer</h3>
                            <router-link :to="{ name: 'works-developer' }" class="ms-btn ms-btn-purple mt-3">VIEW
                                PROJECTS</router-link>
                        </div>
                        <div id="bg-star-graphic">
                            <h3>Graphic <br>
                                Designer</h3>

                            <router-link :to="{ name: 'works-graphic' }" class="ms-btn ms-btn-orange mt-3">VIEW
                                PROJECTS</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- / PRESENTATION -->

        <!-- SLIDER -->
        <section id="works" class="ms-border-bottom col-12">
            <div class="row">
                <h3 class="text-center mb-4">Works</h3>
                <!-- slider -->
                <div class="col-12 d-flex justify-content-center">
                    <div class="slider position-relative d-flex justify-content-center ">
                        <div id="slider-images" class="d-flex justify-content-center align-items-center gap-3">
                            <img :src="getImage(sliderWorks[currentSliderLeft].cover)"
                                :alt="sliderWorks[currentSliderLeft].title">
                            <img :src="getImage(sliderWorks[currentSliderRight].cover)"
                                :alt="sliderWorks[currentSliderRight].title" class="second-slider-img">
                        </div>
                        <div id="slider-controls" class="d-flex justify-content-between">
                            <a class="fs-1" @click="prevSlide">
                                <i class=" bi bi-arrow-left-circle"></i>
                            </a>
                            <a class="fs-1" @click="nextSlide">
                                <i class=" bi bi-arrow-right-circle"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- /SLIDER -->

        <!-- SKILLS TECHNOLOGIES -->
        <section id="skills">
            <div class="row ms-bg">
                <div class="col-12 col-md-5">
                    <h3>Skills</h3>
                </div>
                <div class="col-12 col-md-7">
                    <div class="mb-5 ms-border-bottom">
                        <span class="fw-semibold">Web developer</span>
                        <ul class="d-flex flex-wrap pe-md-5 pt-3 gap-md-2">
                            <li v-for="(dev, index) in this.store.skillsDev" :key="index" class="col-4 col-md-2">
                                <img :src="getImage(`/img/skills/dev/${dev}.png`)" :alt="dev" class="ms-skills">
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span class="fw-semibold">Graphic Designer</span>
                        <ul class="d-flex flex-wrap pe-md-5 gap-md-2">
                            <li v-for="(graphic, index) in this.store.skillsGraphic" :key="index" class="col-4 col-md-2">
                                <img :src="getImage(`/img/skills/graphic/${graphic}.png`)" :alt="graphic" class="ms-skills">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!-- / SKILLS TECHNOLOGIES -->

    </main>
</template>

<style lang="scss" scoped>
section {
    padding: 2rem 2rem;
}

//JUMBOTRON - TITLE
#title {
    background-image: url('../assets/img/stars/star-accent.svg');
    background-repeat: no-repeat;
    background-size: 5em;
    background-position: 1em 7em;

    img {
        width: .9em;
    }
}

// CAREER
#career div {
    padding: 3rem 2rem;
}

section #career {
    #bg-star-dev {
        background-image: url('../assets/img/stars/star-primary.svg');
    }

    #bg-star-graphic {
        background-image: url('../assets/img/stars/star-secondary.svg');

    }

    #bg-star-dev,
    #bg-star-graphic {
        background-repeat: no-repeat;
        background-size: 4em;
        background-position: .3em 2em;
    }
}

.ms_jr-border {
    border-bottom: 1px solid var(--darkColor);
}

// SKILLS
#skills .row {
    padding: 3em 2em;

    &>div:first-child {
        background-image: url('../assets/img/stars/star-accent.svg');
        background-repeat: no-repeat;
        background-size: 4em;

        h3 {
            padding: .5em 0;
        }
    }
}

// SLIDER
#slider-images {
    width: 90%;

    img {
        width: calc(90% / 2);
        height: auto;
    }
}

#slider-images .second-slider-img {
    display: block;
}

#slider-controls {
    width: 100%;
    position: absolute;
    top: 40%;
    left: 0;

    a {
        cursor: pointer;
    }

}




//MEDIA QUERY
@media screen and (max-width: 992px) {
    .ms_jr-border {
        border-bottom: 0px solid var(--darkColor);
    }

    #slider-images .second-slider-img {
        display: none;
    }

    #slider-images {
        width: 100%;

        img {
            width: 80%;
            height: auto;
        }
    }


}


@media screen and (max-width: 576px) {
    h1 {
        font-size:
            2.8rem !important;
    }

    #title {
        background-position: .2em 8em;

        img {
            width: .9em;
        }
    }
}
</style>