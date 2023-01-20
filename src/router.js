import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import AbouUsPage from './pages/AboutUsPage.vue';
import ProjectListPage from './pages/ProjectListPage.vue';
import SingleProjectPage from './pages/SingleProjectPage.vue';
import ContactUsPage from './pages/ContactUsPage.vue';
import NotFound from './pages/NotFound.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AbouUsPage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectListPage
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProjectPage
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactUsPage
        },
        {
            //IL NOT-FOUND VA MESSO PER ULTIMO
            // path: '/*', sembra questo metodo non funzioni più bene
            path: "/:pathMatch(.*)*",
            name: 'not-found',
            component: NotFound
        }
    ]
});

export {router};