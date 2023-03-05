<script>
import { store } from '../store';
export default {
    name: 'ContactPage',
    data() {
        return {
            store
        }
    },
    methods: {
        getImage(imgPath) {
            return new URL(`../assets/img/social/${imgPath}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <main class="container">
        <div class="row mt-5">

            <section class="col-5 ms-border-right">
                <!-- TITLE -->
                <h1>Contact <br> Me</h1>
                <div class="my-5">
                    <p>Thank you for taking the time to visit my portfolio website!</p>
                    <p>
                        If you have any questions
                        or inquiries, please don't hesitate to contact me using the form.
                    </p>
                    <p> I look forward to hearing from you!</p>
                </div>
                <!-- SOCIAL -->
                <div id="social" class="ms-bg ">
                    <ul class="d-flex justify-content-center py-4 px-3">
                        <li v-for="(social, index) in this.store.socials" :key="index" class="me-4">
                            <a :href="social.link" target="_blank">
                                <img :src="getImage(social.image)" :alt="social.name" :id="`social-svg-${social.name}`">
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <!-- FORM send email -->
            <section id="form" class="col-7">
                <form class="px-5" @submit.prevent="submitForm">
                    <!-- TO -->
                    <div class="mb-3 row">
                        <label for="staticEmail" class="col-2 col-form-label">To:</label>
                        <div class="col-10">
                            <input type="text" readonly class="form-control-plaintext" id="staticEmail"
                                value="sara.cetto@gmail.com">
                        </div>
                    </div>
                    <!-- FROM email -->
                    <div class="mb-3 row">
                        <label for="email" class="col-2 col-form-label">From: </label>
                        <div class="col-10">
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                                placeholder="email">
                        </div>
                    </div>
                    <!-- TEXT -->
                    <div class="mb-3 row">
                        <label for="email" class="col-2 col-form-label"></label>
                        <div class="col-10">
                            <textarea class="form-control" id="text" rows="4"
                                placeholder="Please type your message here..."></textarea>
                        </div>
                    </div>
                    <!-- SEND btn -->
                    <div class="d-flex justify-content-end">
                        <button type="submit" class="ms-btn ms-btn-orange">Send</button>
                    </div>
                </form>
            </section>

        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    height: calc(100vh - var(--header-footer-height));
    overflow: auto;

    section {
        padding: 3rem 1rem;

        p {
            margin: .3em 0em;
        }
    }

    .social-svg:hover path {
        fill: red;
    }


    #social li {
        width: 1.8em;

        &:hover {
            filter: contrast(30%);
        }
    }


    #form {
        padding-left: 3rem;
        padding-right: 3rem;
    }
}
</style>