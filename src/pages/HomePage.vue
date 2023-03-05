<script>
import { store } from '../store';
export default {
    name: 'HomePage',
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

        <section id="jumbotron" class="container ms-border-bottom ">
            <div class="row py-5">
                <!-- TITLE -->
                <div id="title" class="col col-lg-6">
                    <h1 class="ps-5">Hello!<br>
                        I am Sara <br>
                        <img src="../assets/img/&.svg" alt="and">
                        this is my <br>
                        website!
                    </h1>
                </div>

                <!-- PRESENTATION -->
                <div class="col col-lg-6 d-flex flex-column justify-content-end align-items-start pe-5">
                    <p class="ps-5 ps-lg-0 pe-lg-4">
                        Welcome to my website portfolio! <br>
                        My name is Sara, and I am a Junior Full Stack Web Developer and Graphic Designer with a passion
                        for creating beautiful and functional websites. <br>
                        On this site, you will be able to see my works
                        and my personal resume. <br>
                        Thank you for visiting, and have a great day!
                    </p>
                    <div class="ps-5 ps-lg-0">
                        <a href="" class="ms-btn ms-btn-black mt-2"> DOWNLOAD CV</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="presentation" class="container ms-border-bottom">
            <div class="row">
                <!-- SELFIE + TEXT -->
                <div class="col col-lg-6 ms-border-right">
                    <div class="ms-bg py-4 px-5 me-2 d-flex flex-column">
                        <img src="../assets/img/sara-foto.png" alt="sara-foto" class="my-5 w-50 align-self-end">
                        <p class="w-75 align-self-center">
                            On this website, you will find examples of my work in both web development and graphic
                            design, including websites, logos, print materials, and more. <br>
                            I approach each project with creativity,
                            attention to detail, and a dedication to delivering high-quality results.</p>
                    </div>
                </div>
                <!-- CARREER -->
                <div id="career" class="col col-lg-6 d-flex flex-column justify-content-center">
                    <div class="ms-border-bottom" id="bg-star-dev">
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
        </section>

        <section id="works" class="container ms-border-bottom">
            <div class="row">
                <h3 class="text-center">Works</h3>
                <div class="col-12 d-flex justify-content-center">
                    <div>IMG - img - img</div>
                </div>
            </div>
        </section>


        <section id="skills" class="container">
            <div class="row ms-bg">
                <div class="col-12 col-md-5">
                    <h3>Skills</h3>
                </div>
                <div class="col-12 col-md-7">
                    <div class="mb-5 ms-border-bottom">
                        <span class="fw-semibold">Web developer</span>
                        <ul class="d-flex flex-wrap pe-md-5 pt-3 gap-md-2">
                            <li v-for="(dev, index) in this.store.skillsDev" :key="index" class="col-4 col-md-2">
                                <img :src="getImage(`../assets/img/skills/dev/${dev}.png`)" :alt="dev" class="ms-skills">
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span class="fw-semibold">Graphic Designer</span>
                        <ul class="d-flex flex-wrap pe-md-5 gap-md-2">
                            <li v-for="(graphic, index) in this.store.skillsGraphic" :key="index" class="col-4 col-md-2">
                                <img :src="getImage(`../assets/img/skills/graphic/${graphic}.png`)" :alt="graphic"
                                    class="ms-skills">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
section {
    padding: 2rem 2rem;
}

//TITLE
#title {
    background-image: url('../assets/img/stars/star-accent.svg');
    background-repeat: no-repeat;
    background-size: 5em;
    background-position: 1em 7em;

    img {
        width: .9em;
    }
}

//PRESENTATION
#presentation {
    #career div {
        padding: 3rem 2rem;
    }
}

// CAREER
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
</style>