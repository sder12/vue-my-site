<script>

export default {
    name: 'AppHeader',
    data() {
        return {
            visibleWorklg: false,
            visibleWorksm: false,
            hamburgerNavVisible: true,

        }
    },

    methods: {
        lgWorkClick() {
            this.visibleWorklg = !this.visibleWorklg
        },
        smWorkClick() {
            this.visibleWorksm = !this.visibleWorksm
        },
        closeDropWorkslg() {
            this.visibleWorklg = false
        },
        clickHamburger() {
            this.hamburgerNavVisible = !this.hamburgerNavVisible
        },
        closeDropWorksSm() {
            this.hamburgerNavVisible = true
        }


    }
}
</script>

<template>
    <header class="container-fluid d-flex justify-content-between align-items-center px-4">

        <div id="ms_logo">
            <router-link :to="{ name: 'home' }" v-on:click="closeDropWorkslg">
                <img src="../assets/logo.svg" alt="logo-img">
            </router-link>
        </div>


        <!-- LG NAVBAR -->
        <div id="ms_nav" class="d-none d-sm-block">
            <ul class="d-flex align-items-center">
                <!-- home -->
                <li>
                    <router-link :to="{ name: 'home' }" class="nav-link" v-on:click="closeDropWorkslg"
                        active-class="active-link">
                        HOME
                    </router-link>
                </li>
                <!-- works -->
                <li class="position-relative">
                    <div v-on:click="lgWorkClick" :class="visibleWorklgActive ? 'active-link' : ''">
                        <a class="d-flex align-items-center jsutify-content-center" href="#">
                            WORKS <i class="bi bi-chevron-down d-none d-md-block"></i>
                        </a>
                    </div>
                    <!-- works dropmenu -->
                    <div id="ms_nav-drop-lg" class="d-flex flex-column gap-2 mt-1 py-3 px-2"
                        :class="visibleWorklg ? 'd-block' : 'd-none'">
                        <router-link :to="{ name: 'works-developer' }" v-on:click="closeDropWorkslg"
                            active-class="active-work-link">WEB DEVELOPER</router-link>
                        <router-link :to="{ name: 'works-graphic' }" v-on:click="closeDropWorkslg"
                            active-class="active-work-link">GRAPHIC DESIGNER</router-link>
                    </div>
                </li>
                <!-- about -->
                <li>
                    <router-link :to="{ name: 'about' }" class="nav-link" v-on:click="closeDropWorkslg"
                        active-class="active-link">ABOUT</router-link>
                </li>
                <!-- contact -->
                <li>
                    <router-link :to="{ name: 'contact' }" class="nav-link" v-on:click="closeDropWorkslg"
                        active-class="active-link">CONTACT</router-link>
                </li>
            </ul>
        </div>
        <!-- / LG NAVBAR -->


        <!-- SM NAVABAR -->
        <div class="d-block d-sm-none">
            <!-- hamburger or close icon -->
            <h2 v-on:click="clickHamburger" v-if="hamburgerNavVisible == false" class="btn-nav-sm">
                <i class="bi bi-x-lg"></i>
            </h2>
            <h2 v-on:click="clickHamburger" v-else class="btn-nav-sm">
                <i class="bi bi-list"></i>
            </h2>
            <!-- navbar -->
            <ul id="ms_nav-drop" :class="hamburgerNavVisible ? 'd-none' : 'd-block'">
                <!-- home -->
                <li>
                    <router-link :to="{ name: 'home' }" class="nav-link" v-on:click="closeDropWorksSm"
                        active-class="active-md-link">HOME</router-link>
                </li>
                <!-- works -->
                <li id="ms_nav-drop-work">
                    <span v-on:click="smWorkClick">
                        WORKS <i class="bi bi-chevron-down"></i>
                    </span>
                    <!-- works dropmenu -->
                    <ul :class="visibleWorksm ? 'd-block' : 'd-none'">
                        <li>
                            <router-link :to="{ name: 'works-developer' }" v-on:click="closeDropWorksSm"
                                active-class="active-md-link">• Web Developer</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'works-graphic' }" v-on:click="closeDropWorksSm"
                                active-class="active-md-link">• Graphic Designer</router-link>
                        </li>
                    </ul>
                </li>
                <!-- about -->
                <li>
                    <router-link :to="{ name: 'about' }" class="nav-link" v-on:click="closeDropWorksSm"
                        active-class="active-md-link">ABOUT</router-link>
                </li>
                <!-- contact -->
                <li>
                    <router-link :to="{ name: 'contact' }" class="nav-link" v-on:click="closeDropWorksSm"
                        active-class="active-md-link">CONTACT</router-link>
                </li>
            </ul>
        </div>
        <!-- / SM NAVABAR -->
    </header>
</template>



<style lang="scss">
header {
    border-bottom: 2px solid var(--darkColor);
    height: var(--header-height);
}

//LOGO
#ms_logo img {
    height: calc(var(--header-height) - 10px);
}

// ACTIVE LINK
.active-link {
    border-top: 1px solid black;
}

.active-md-link,
.active-work-link {
    background-color: white;
}


// NAVBAR
#ms_nav {
    height: var(--header-height);

    ul {
        height: var(--header-height);

        &>li {
            margin-left: 4em;

            a {
                color: var(--darkColor);
                font-weight: bold;
                font-size: 1rem;
                letter-spacing: 1px;
            }

        }

    }
}

//HAMBURGER ICONS
.btn-nav-sm {
    font-size: 3rem;
    line-height: 3rem;
    margin-top: .5rem;
}

// NAVBAR - drops
#ms_nav-drop-lg {
    position: absolute;
    z-index: 99;
    top: 3em;
    left: 0em;
    background-color: var(--bgColor);
    width: 300%;
}

#ms_nav-drop {
    position: absolute;
    z-index: 99;
    top: var(--header-height);
    left: 0;
    background-color: var(--bgColorDarker);
    padding: 1.2em 3em 2em;
    width: 90%;

    &>li {
        margin-top: .5em;
        color: var(--darkColor);
        font-weight: bold;
        font-size: 1.2rem;
        letter-spacing: 1px;
        padding: .5em .3em;
    }

    #ms_nav-drop-work {
        ul {
            padding-top: .3em;

            li {
                padding: .4em 1em;
                font-size: 1rem;
            }
        }
    }
}
</style>