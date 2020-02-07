import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import BestManagers from '../views/BestManagers.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {navCanBeTransparent: true}
    },
    {
        path: '/best-managers',
        name: 'best-managers',

        component: BestManagers,

    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
