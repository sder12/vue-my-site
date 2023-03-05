import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import ResumePage from './pages/ResumePage.vue';
import ContactPage from './pages/ContactPage.vue';
import PortfolioWebPage from './pages/PortfolioWebPage.vue';
import PortfolioGraphicPage from './pages/PortfolioGraphicPage.vue';
import NotFound from './pages/NotFound.vue';

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
        }
        ,
        {
            path: '/works/developer',
            name: 'works-developer',
            component: PortfolioWebPage,
        }
        ,
        {
            path: '/works/graphic-designer',
            name: 'works-graphic',
            component: PortfolioGraphicPage,
        },


        //404 NOT FOUND
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound,
        }
    ],
});
export { router };