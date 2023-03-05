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
    <main class="container">
        <div class="row">

            <!-- LEFT -->
            <section class="col-4 ms-border-right">
                <div>
                    <h1>Sara Cetto</h1>
                    <p>Here you can read my cv or downloading it, by clicking
                        the button belove:</p>
                    <a href="#" class="ms-btn ms-btn-black"> DOWNLOAD CV</a>
                </div>
                <div class="ms-bg">
                    <img src="../assets/img/sara-foto.png" alt="sara-foto">
                    <p>Currently based in Trento, Italy.</p>
                    <ul class="d-flex justify-content-center">
                        <li v-for="(social, index) in this.store.socials" :key="index">
                            <a :href="social.link" target="_blank">
                                <img :src="getImage(`../assets/img/social/${social.image}`)" :alt="social.name">
                            </a>
                        </li>
                    </ul>

                    <a href=""> sara.cetto@gmail.com</a>
                </div>

                <!-- SKILLS -->
                <div>
                    <p>Web developer</p>
                    <ul class="d-flex">
                        <li v-for="(dev, index) in this.store.skillsDev" :key="index">
                            <img :src="getImage(`../assets/img/skills/dev/${dev}.png`)" :alt="dev">
                        </li>
                    </ul>
                </div>
                <div>
                    <p>Graphic Designer</p>
                    <ul class="d-flex">
                        <li v-for="(graphic, index) in this.store.skillsGraphic" :key="index">
                            <img :src="getImage(`../assets/img/skills/graphic/${graphic}.png`)" :alt="graphic">
                        </li>
                    </ul>
                </div>
            </section>

            <!-- RIGHT -->
            <section class="col-8">
                <!-- PRESENTATION -->
                <div>
                    <p>Durante il mio percorso di studi
                        di grafica sono entrata pù volte
                        in contatto con il mondo della programmazione. Sono rimasta affascinata dalle sue potenzialità,
                        in particolare quando applicate alla programmazione web.
                        Per questo ho deciso di ampliare
                        le mie conoscenze mettendomi
                        in gioco in questo settore.</p>
                </div>

                <!-- EDUCATION -->
                <div>
                    <h3 class="ms-bg">Education</h3>
                    <div class="row ms-border-bottom" v-for="(education, index) in store.educations" :key="index">
                        <div class="col-1">
                            <img :src="getImage(`../assets/img/education/${education.image}`)" :alt="education.title">
                        </div>
                        <div class="col-10">
                            <p>{{ education.title }}</p>
                            <p>{{ education.subtitle }}</p>
                            <p v-if="education.translation"> {{ education.translation }}</p>
                            <p>{{ education.period }}</p>
                            <p>{{ education.description }}</p>
                        </div>
                    </div>

                </div>
                <!-- EXPERIENCE -->
                <div>
                    <h3 class="ms-bg">Experience</h3>
                    <div class="row ms-border-bottom" v-for="(experience, index) in store.experiences" :key="index">
                        <div class="col-1">
                            <img v-if="experience.image" :src="getImage(`../assets/img/education/${experience.image}`)"
                                :alt="experience.title">
                        </div>
                        <div class="col-10">
                            <p>{{ experience.title }}</p>
                            <p>{{ experience.subtitle }}</p>
                            <p>{{ experience.period }}</p>
                            <p v-if="experience.description">{{ experience.description }}</p>
                        </div>
                    </div>
                </div>

                <!-- LANGUAGE -->
                <div>
                    <h3 class="ms-bg">Languages</h3>
                    <ul class="d-flex justify-content-center gap-5">
                        <li v-for="(language, index) in store.languages" :key="index" class="d-flex flex-column gap-2">
                            <img :src="getImage(`../assets/img/languages/${language.image}`)" :alt="language.name">
                            <span class="text-center">{{ language.level }}</span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>