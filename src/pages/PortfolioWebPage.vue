<script>
import { store } from '../store';
export default {
    name: 'PortfolioWebPage',
    data() {
        return {
            store,
            developerWorks: [
                //col 5 7
                {
                    //BOOLBNB
                    title: "Boolbnb",
                    cover: "boolbnb-cover.png",
                    bgcolor: "orange",
                    col: 7,
                    tech: 'HTML CSS JS PHP VUE LARAVEL API',
                    more: 'FullStack - Responsive - Figma - Team Work',
                    descriptionLong: 'The Airbnb replica project involved creating a web platform with two connected projects, consisting of front-end and back-end components. The front-end was designed using the Vue framework and built with HTML, CSS, and JavaScript, while the back-end was created with Laravel and PHP. The graphics for the website were designed using Figma, and the server was hosted locally on MAMP. This combination of tools and technologies allowed for a customized and functional Airbnb replica with both front-end and back-end capabilities.',
                    description: 'The Airbnb replica project involved creating a web platform with two connected projects, consisting of front-end and back-end components. The front-end was designed using the Vue framework and built with HTML, CSS, and JavaScript, while the back-end was created with Laravel and PHP.',
                    descriptionSm: 'Airbnb replica: made with Vue & Laravel.',
                    git: "https://github.com/sder12/vue-boolbnb",
                },
                {
                    //MY SITE
                    title: "My site",
                    cover: "my-site-cover.png",
                    bgcolor: "yellow",
                    col: 5,
                    tech: 'HTML CSS JS VUE',
                    more: 'Responsive - Figma',
                    description: "The portfolio website project was created using HTML, CSS, and JavaScript, with the Vue framework utilized to enhance the site's functionality and user experience. The site is designed to be responsive, ensuring that it is accessible and easily navigable across various devices and screen sizes.",
                    descriptionSm: 'My portfolio project. Designed with Figma and developed with Vue.',
                    git: "https://github.com/sder12/vue-my-site",
                },
                {
                    //BAKERY
                    title: "Bakery",
                    cover: "bakery-cover.png",
                    bgcolor: "purple",
                    col: 6,
                    tech: 'HTML CSS JS VUE',
                    more: 'Responsive',
                    description: "The Bakery website is an example of a website that combines multiple technologies including HTML, CSS, and JavaScript. It also utilizes the Vue framework and provides dynamic components such as galleries' sliders. The website is responsive, it can adapt its design to different screen sizes, ensuring optimal user experience on desktops, laptops, tablets, and mobile devices.",
                    descriptionSm: 'Single page website made with Vue',
                    git: "https://github.com/sder12/proj-html-vuejs",
                },

                {
                    //BOOLZAPP
                    title: "Boolzapp",
                    cover: "boolzapp-cover.png",
                    bgcolor: "black",
                    col: 6,
                    tech: 'HTML CSS JS VUE',
                    more: '',
                    description: 'The project involves creating a replica of the WhatsApp Web website using HTML, CSS, and JavaScript. The platform will allow users to send messages to others and receive responses after a period of time, mirroring the core functionality of the original WhatsApp Web site. ',
                    descriptionSm: 'Replica of WhatsApp website with its functionality: send messages, receive a replay after a set time',
                    git: "https://github.com/sder12/vue-boolzapp",
                },
                {
                    //LOGO
                    title: "Logo",
                    cover: "logo-cover.png",
                    bgcolor: "yellow",
                    col: 5,
                    tech: 'HTML CSS',
                    more: 'Responsive',
                    description: 'The homepage of a hypothetical site was created using only HTML and CSS, with media queries utilized to ensure a responsive layout.',
                    descriptionSm: 'The homepage of a hypothetical site was created using only HTML and CSS, with media queries utilized to ensure a responsive layout.',
                    git: "https://github.com/sder12/htmlcss-responsive-layout",
                },

                {
                    //SPOTIFY
                    title: "Spotify",
                    cover: "spotify-cover.png",
                    bgcolor: "orange",
                    col: 7,
                    tech: 'HTML CSS',
                    more: 'WebApp - Reponsive',
                    description: 'A website replica of the Spotify homepage created using HTML and CSS to design a web application that closely resembles the original site, featuring various sections such as the sidebar, personalized recommendations, and recently played tracks. ',
                    descriptionSm: 'Spotify homepage replica: sidebar, personalized recommendations, and recently played tracks.',
                    git: "https://github.com/sder12/html-css-spotifyweb",
                },
                {
                    //DROPBOX
                    title: "Dropbox",
                    cover: "dropbox-cover.png",
                    bgcolor: "black",
                    col: 7,
                    tech: 'HTML CSS',
                    more: '',
                    description: "Using HTML and CSS, a project has been created that closely resembles the Dropbox homepage, featuring a layout and design that replicates the original site's appearance ",
                    descriptionSm: 'Using HTML and CSS, a project has been created that closely resembles the Dropbox homepage',
                    git: "https://github.com/sder12/htmlcss-dropbox",
                },

                {
                    //PLAYSTATION
                    title: "Playstation",
                    cover: "playstation-cover.png",
                    bgcolor: "purple",
                    col: 5,
                    tech: 'HTML CSS',
                    more: 'Responsive',
                    description: "A replica of the Playstation homepage created with HTML and CSS' languages. Bootstrap was used to construct the responsive layout.",
                    descriptionSm: 'A replica of the Playstation homepage created with HTML, CSS and Bootstrap',
                    git: "https://github.com/sder12/htmlcss-playstation",
                },

                {
                    //DISCORD
                    title: "Discord",
                    cover: "discord-cover.png",
                    bgcolor: "yellow",
                    col: 6,
                    tech: 'HTML CSS',
                    more: '',
                    description: 'Using HTML and CSS, a project replica of the Discord homepage designed with varoius sections.',
                    descriptionSm: 'Replica of Discord homepage with HTML and CSS.',
                    git: "https://github.com/sder12/htmlcss-discord",
                },
                {
                    //DC COMICS
                    title: "Dc-comics",
                    cover: "dc-comics-cover.png",
                    bgcolor: "orange",
                    col: 6,
                    tech: 'HTML CSS JS VUE',
                    more: '',
                    description: 'The DC Comics website replica is an example of a website that uses HTML, CSS, JavaScript, and the Vue framework to create an interactive and visually appealing replica of the original DC Comics homepage. ',
                    descriptionSm: 'DC Comics website homepage made with Vue framework',
                    git: "https://github.com/sder12/vite-comics",
                },

                {
                    //BOOLFIX
                    title: "Boolfix",
                    cover: "boolfix-cover.png",
                    bgcolor: "purple",
                    col: 7,
                    tech: 'HTML CSS',
                    more: 'API',
                    description: 'Recreating the Netflix homepage using HTML, CSS, and API calls.',
                    descriptionSm: 'Recreating the Netflix homepage using HTML, CSS, and API calls.',
                    git: "https://github.com/sder12/vite-boolflix",
                },
                {
                    //PORTFOLIO FAKE
                    title: "Portfolio fake",
                    cover: "portfolio-fake.png",
                    bgcolor: "black",
                    col: 5,
                    tech: 'HTML CSS',
                    more: 'Responsive',
                    description: 'A project that simulates a portfolio webiste. The languages used were HTML CSS with Bootstrap to create the responsive layout.',
                    descriptionSm: 'A project that simulates a portfolio webiste.',
                    git: "https://github.com/sder12/html-css-bootstrap-freelancer",
                },

                // {
                //     //ACCADEMY
                //     title: "Boolean Accademy",
                //     cover: "accademy-cover.png",
                //     bgcolor: "yellow",
                //     col: 6,
                //     tech: 'HTML CSS',
                //     more: 'Responsive',
                //     description: 'Boolean Academy is a website built using HTML and CSS that features a responsive layout, allowing it to adjust its design based on the device or screen size being used to access it.',
                //     git: "https://github.com/sder12/html-css-resp-wannabe",
                // },

            ],
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
        <!-- INTRODUCTION -->
        <section class="container">
            <div class="row pt-5 pb-3">
                <!-- Text -->
                <div class="col-12 col-sm-10 col-md-6 col-lg-6 pt-5 pb-3  bg-star">
                    <h2 class="ms-border-bottom w-50 pb-3">Works</h2>
                    <h3>Jr. Full Stack <br>
                        Web Developer</h3>
                    <p>Here you can take a look at my projects. <br>
                        I approach each project with creativity,
                        attention <br> to detail, and a dedication to delivering high-quality results. </p>
                </div>
                <!-- Tech -->
                <div class="col-12 col-sm-10 col-md-6 col-lg-6 pb-3 align-self-center">
                    <ul class="d-flex flex-wrap w-100 ">
                        <li v-for="(dev, index) in this.store.skillsDev" :key="index">
                            <img :src="getImage(`/img/skills/dev/${dev}.png`)" :alt="dev" class="ms-skills">
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- / INTRODUCTION -->



        <!-- WORKS -->
        <section class="row">
            <!-- SINGLE WORK  -->
            <div v-for="(work, index) in developerWorks" :key="index"
                :class="`ms-bg-${work.bgcolor} col-12 col-lg-${work.col}`"
                class="dev-works d-flex align-items-center justify-content-center position-relative">

                <!-- Visible Img -->
                <img class=" cover_img" :src="getImage(`/img/works/developer/${work.cover}`)" :alt="work.title">

                <!-- HOVER-->
                <div class="hover_img d-flex flex-column justify-content-center align-items-center">
                    <h2 class="text-center">{{ work.title }}</h2>

                    <p class="w-75 text-center d-none d-sm-block">{{ work.description }}</p>
                    <p class="w-75 text-center d-block d-sm-none">{{ work.descriptionSm }}</p>

                    <p id="tech" class="fw-bold w-75 text-center">{{ work.tech }}</p>

                    <p v-show="work.more" class="fw-bold">{{ work.more }}</p>
                    <div class="d-flex gap-3">
                        <a :href="work.git" target="_blank" class="ms-btn ms-btn-yellow my-3">github link</a>
                        <!-- <a href="#" class="ms-btn ms-btn-orange my-3">details</a> -->
                    </div>
                </div>
                <!-- / HOVER-->
            </div>
            <!-- / SINGLE WORK -->
        </section>
        <!-- / WORKS -->
    </main>
</template>

<style lang="scss" scoped>
// INTRODUCTION text
.bg-star {
    background-image: url('../assets/img/stars/star-primary.svg');
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

// WORKS
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
