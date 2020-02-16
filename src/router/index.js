import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RateBestManagers from '../views/RateBestManagers'
import IdentifyBestManagers from '../views/IdentifyBestManagers'
import EnsureBestManagers from '../views/EnsureBestManagers'

Vue.prototype.$scrollToTop = () => window.scrollTo(0,0);

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {navCanBeTransparent: true}
    },
    {
        path: '/rate-best-managers',
        name: 'rate-best-managers',
        component: RateBestManagers
    },
    {
        path: '/identify-best-managers',
        name: 'identify-best-managers',
        component: IdentifyBestManagers
    },
    {
        path: '/ensure-best-managers',
        name: 'ensure-best-managers',
        component: EnsureBestManagers
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
