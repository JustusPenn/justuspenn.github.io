import { createRouter, createWebHistory } from "vue-router";

import MainLayout from '../layout/MainLayout.vue'

import Index from '../pages/Index.vue';
import Portfolio from '../pages/Portfolio.vue';
import Contact from '../pages/Contact.vue';
import NotFound from '../pages/NotFound.vue';

const routes = [
    {
        path: '/main',
        component: MainLayout,
        children: [
            {
                path: '/',
                component: Index,
                name: 'index'
            },
            {
                path: '/portfolio',
                component: Portfolio,
                name: 'portfolio'
            },
            {
                path: '/contact',
                component: Contact,
                name: 'contact'
            },
            {
                path: '/:pathMatch(.*)',
                component: NotFound,
                name: 'notfound'
            },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;