import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
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