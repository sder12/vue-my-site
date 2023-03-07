<script>
import { store } from '../store'
export default {
    name: 'ResumePage',
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
    <main class="container-fluid container-lg">

        <div class="row">

            <!-- LEFT -->
            <section class="col-12 col-md-4 my-5 ms-border-right">
                <!-- TITLE -->
                <div id="title">
                    <h1>Sara Cetto</h1>
                    <p>Here you can read my cv or downloading it, by clicking
                        the button belove:</p>
                    <a href="#" class="ms-btn ms-btn-black"> DOWNLOAD CV</a>
                </div>
                <!-- CONTACT-->
                <div id="contact" class="ms-bg text-center py-5">
                    <img src="../assets/img/sara-foto.png" alt="sara-foto">
                    <p class="my-3">Currently based in Trento, Italy.</p>
                    <ul class="d-flex justify-content-center gap-3">
                        <li v-for="(social, index) in this.store.socials" :key="index">
                            <a :href="social.link" target="_blank">
                                <img :src="getImage(`../assets/img/social/${social.image}`)" :alt="social.name">
                            </a>
                        </li>
                    </ul>
                    <a href=""> sara.cetto@gmail.com</a>
                </div>
                <!-- SKILLS -->
                <div id="skills">
                    <div class="mb-5">
                        <p class="fw-bold">Web developer</p>
                        <ul class="d-flex flex-wrap">
                            <li v-for="(dev, index) in this.store.skillsDev" :key="index">
                                <img :src="getImage(`../assets/img/skills/dev/${dev}.png`)" :alt="dev" class="ms-skills">
                            </li>
                        </ul>
                </div>
                <div>
                    <p class="fw-bold">Graphic Designer</p>
                    <ul class="d-flex flex-wrap">
                        <li v-for="(graphic, index) in this.store.skillsGraphic" :key="index">
                            <img :src="getImage(`../assets/img/skills/graphic/${graphic}.png`)" :alt="graphic"
                                class="ms-skills">
                        </li>
                    </ul>
                    </div>
                </div>
            </section>

            <!-- RIGHT -->
            <section class="col-12 col-md-8 my-5">
                <!-- PRESENTATION -->
                <!-- <div id="presentation" class="d-flex justify-content-end pe-5">
                                                                                                                    <p class="col col-6 d-none d-md-block">
                                                                                                                        Durante il mio percorso di studi
                                                                                                                        di grafica sono entrata pù volte
                                                                                                                        in contatto con il mondo della programmazione. Sono rimasta affascinata dalle sue potenzialità,
                                                                                                                        in particolare quando applicate alla programmazione web.
                                                                                                                        Per questo ho deciso di ampliare
                                                                                                                        le mie conoscenze mettendomi
                                                                                                                        in gioco in questo settore.</p>
                                                                                                                </div> -->

                <!-- EDUCATION -->
                <div id="education" class="mt-4">
                    <h3 class="ms-bg py-3 px-4">Education</h3>
                    <div class="row py-4 ps-5" v-for="(education, index) in store.educations" :key="index">
                        <div class="col-1 d-none d-md-block">
                            <img :src="getImage(`../assets/img/education/${education.image}`)" :alt="education.title">
                        </div>
                        <div class="col-10">
                            <p class="title mb-1">{{ education.title }}</p>
                            <p class="subtitle mb-1">{{ education.subtitle }}</p>
                            <p class="translation mb-1" v-if="education.translation"> {{ education.translation }}</p>
                            <p class="period">{{ education.period }}</p>
                            <p class="description">{{ education.description }}</p>
                        </div>
                    </div>

                </div>
                <!-- EXPERIENCE -->
                <div id="experience" class="mt-4">
                    <h3 class="ms-bg py-3 px-4">Experience</h3>
                    <div class="row py-4 ps-5" v-for="(experience, index) in store.experiences" :key="index">
                        <div class="col-1 d-none d-md-block">
                            <img v-if="experience.image" :src="getImage(`../assets/img/education/${experience.image}`)"
                                :alt="experience.title">
                        </div>
                        <div class="col-10">
                            <p class="title mb-1">{{ experience.title }}</p>
                            <p class="subtitle mb-1">{{ experience.subtitle }}</p>
                            <p class="period">{{ experience.period }}</p>
                            <p class="description" v-if="experience.description">{{ experience.description }}</p>
                        </div>
                    </div>
                </div>

                <!-- LANGUAGE -->
                <div id="languages" class="mt-4">
                    <h3 class="ms-bg py-3 px-4">Languages</h3>
                    <ul class="d-flex justify-content-center gap-4 my-5 mx-4">
                        <li v-for="(language, index) in store.languages" :key="index"
                            class="d-flex flex-wrap flex-column align-items-center gap-2">
                            <img :src="getImage(`../assets/img/languages/${language.image}`)" :alt="language.name">
                            <span class="text-center">{{ language.level }}</span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>

    </main>
</template>

<style lang="scss" scoped>
#title {
    padding: 2rem 5rem;
    background-image: url('../assets/img/stars/star-accent.svg');
    background-repeat: no-repeat;
    background-size: 4em;
    background-position: 3em 1em;

    img {
        width: .9em;
    }
}

#contact li img {
    width: 2em;
}

#skills {
    padding: 2em 4em;
}

#education {
    img {
        width: 4em;
    }


    .title {
        color: var(--secondaryColor);
        font-weight: bold;
    }

    .subtitle {
        font-weight: bold;
    }

    .period {
        font-style: italic;
    }

    .translation {
        color: grey;
    }
}

#experience {
    .title {
        color: var(--primaryColor);
        font-weight: bold;
    }

    .subtitle {
        font-weight: bold;
    }

    .period {
        font-style: italic;
    }
}
</style>