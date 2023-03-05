<script>
export default {
    name: 'ContactPage'
}
</script>

<template>
    <main class="container">
        <div class="row">

            <section class="col-5 ms-border-right">
                <h1>Contact <br> Me</h1>
                <p class="pe-5 py-4">Thank you for taking the time to visit my portfolio website! If you have any questions
                    or
                    inquiries,
                    please don't hesitate to contact me using the form.
                    I look forward to hearing from you!</p>
                <!-- SOCIAL -->
                <div class="ms-bg">
                    social
                </div>
            </section>

            <!-- FORM send email -->
            <section id="form" class="col-7">
                <form class="px-5">
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
        padding: 5rem 1rem;
    }

    #form {
        padding-left: 3rem;
        padding-right: 3rem;
    }
}
</style>