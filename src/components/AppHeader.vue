<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">

                <a class="navbar-brand" href="#">
                    <img src="../assets/img/logo.svg" alt="logo-img">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul class="nav navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">HOME</a>
                    </li>


                    <!-- <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                                                WORKS </a>
                                                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                                 <a class="dropdown-item" href="#">Graphic portfolio</a>
                                                                 <a class="dropdown-item" href="#">Dev portfolio</a>
                                                          </div>
                                                </li> -->

                        <li class="nav-item ms-dropdown">
                            <a class="nav-link" href="#">WORKS</a>
                            <ul class="ms-dropdown-menu">
                                <li><a href="#">FrontBack Developer</a></li>
                                <li><a href="#">Graphic Designer</a></li>
                            </ul>
                        </li>


                        <li class="nav-item">
                            <a class="nav-link" href="#">ABOUT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">CONTACT</a>
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