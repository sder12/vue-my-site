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
            <div class="row">
                <!-- TITLE -->
                <div id="title" class="col-6">
                    <h1 class="ps-5">Hello!<br>
                        I am Sara <br>
                        <img src="../assets/img/&.svg" alt="and">
                        this is my <br>
                        website!
                    </h1>
                </div>

                <!-- PRESENTATION -->
                <div class=" col-6 d-flex flex-column justify-content-end align-items-start pe-5">
                    <p>
                        Welcome to my website portfolio! <br>
                        My name is Sara, and I am a Junior full stack web developer and graphic designer with a passion
                        for creating beautiful and functional websites. <br>
                        On this site, you will be able to see my works
                        and my personal resume. <br>
                        Thank you for visiting, and have a great day!
                    </p>
                    <a href="" class="ms-btn ms-btn-black mt-2"> DOWNLOAD CV</a>
                </div>
            </div>
        </section>

        <section id="presentation" class="container ms-border-bottom">
            <div class="row">
                <!-- SELFIE + TEXT -->
                <div class="col-6 ms-border-right">
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
                <div id="career" class="col-6 d-flex flex-column justify-content-center">
                    <div class="ms-border-bottom">
                        <h3>Jr. Full Stack <br>
                            Web
                            Developer</h3>
                        <a href="" class="ms-btn ms-btn-purple mt-3">VIEW PROJECTS</a>
                    </div>
                    <div>
                        <h3>Graphic <br>
                            Designer</h3>
                        <a href="" class="ms-btn ms-btn-orange mt-3">VIEW PROJECTS</a>
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
                <div class="col-6">
                    <h3>Skills</h3>
                </div>
                <div class="col-6">
                    <div>
                        <span>Web developer</span>
                        <ul class="d-flex">
                            <li v-for="(dev, index) in this.store.skillsDev" :key="index">
                                <img :src="getImage(`../assets/img/skills/dev/${dev}.png`)" :alt="dev">
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span>Graphic Designer</span>
                        <ul class="d-flex">
                            <li v-for="(graphic, index) in this.store.skillsGraphic" :key="index">
                                <img :src="getImage(`../assets/img/skills/graphic/${graphic}.png`)" :alt="graphic">
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

#presentation {
    #career div {
        padding: 3rem 2rem;
    }
}
</style>