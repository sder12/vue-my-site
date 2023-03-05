<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
    <footer class="container-fluid">
        <div class="row d-flex justify-content-end">
            <div class="col-12 col-lg-6 col-md-8 d-flex justify-content-between ">
                <span class="ps-2">SARA CETTO</span>
                <span class="pe-2">© 2023</span>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
footer {
    min-height: var(--footer-height);

    .row div {
        border-top: 2px solid var(--darkColor);
        padding-top: .4em;

        span {
            font-weight: bold;
            font-size: .9rem;
        }
    }
}
</style>