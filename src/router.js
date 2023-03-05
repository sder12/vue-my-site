import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import ResumePage from './pages/ResumePage.vue';
import ContactPage from './pages/ContactPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'about',
            component: ResumePage,
        },
        {
            path: '/contact-me',
            name: 'contact',
            component: ContactPage,
        },
        //404 NOT FOUND
        // {
        //     path: "/:pathMatch(.*)*",
        //     name: "not-found",
        //     component: NotFound,
        //    }
    ],
});
export { router };