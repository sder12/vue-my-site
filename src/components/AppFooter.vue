<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
    <footer class="container-fluid ">
        <div class="row d-flex justify-content-end">
            <div class="col-12 d-flex justify-content-start">
                <span class="pe-3">SARA CETTO</span>
                <span class="pe-2">© 2023</span>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
footer {
    min-height: var(--footer-height);

    .row div {
        border-top: 1px solid var(--darkColor);
        padding-top: .4em;

        span {
            font-weight: bold;
            font-size: .8rem;
        }
    }
}
</style>