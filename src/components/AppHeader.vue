<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">


                <router-link :to="{ name: 'home' }" class="navbar-brand">
                    <img src="../assets/logo.svg" alt="logo-img">
                </router-link>


                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul class="nav navbar-nav">
                        <li class="nav-item">
                            <router-link :to="{ name: 'home' }" class="nav-link">HOME</router-link>
                        </li>

                        <li class="nav-item ms-dropdown">
                            <a class="nav-link" href="#">WORKS</a>
                            <ul class="ms-dropdown-menu">
                                <li>
                                    <router-link :to="{ name: 'works-developer' }" class="nav-link">Developer</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'works-graphic' }" class="nav-link">Graphic
                                        Designer</router-link>
                                </li>
                            </ul>
                        </li>


                        <li class="nav-item">
                            <router-link :to="{ name: 'about' }" class="nav-link">ABOUT</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'contact' }" class="nav-link">CONTACT</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </header>
</template>

<style lang="scss">
header {
    border-bottom: 2px solid var(--darkColor);
    padding: 0 1em;
    height: var(--header-height);

    // LOGO
    .navbar-brand img {
        height: calc(var(--header-height) - 20px);
    }

    // NAVBAR
    .navbar-nav>li {
        margin-left: 4em;

        a {
            color: var(--darkColor);
            font-weight: bold;
            font-size: 1rem;
            letter-spacing: 1px;
        }

    }

    //CUSTOM
    .ms-dropdown-menu {
        display: none;
        position: absolute;
        z-index: 1;
        background-color: var(--lightColor);
        padding: .5rem .8rem;
    }

    .ms-dropdown:hover .ms-dropdown-menu {
        display: block;
    }

    .ms-dropdown:focus .ms-dropdown-menu {
        display: block;
    }

}
</style>