import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
const router = new Router({
    mode: 'history',
    base: '/',
    routes: [

        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () => import(/* webpackChunkName: "Main" */'@/layout/main.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================

              {
                    path: '/',
                    name: 'home',
                    component: () => import(/* webpackChunkName: "Home" */'@/pages/Home.vue')
                },
                {
                    path: '/live-view',
                    name: 'liveView',
                    component: () => import(/* webpackChunkName: "LiveView" */'@/pages/LiveView.vue')
                },
                {
                    path: 'error-404',
                    name: 'page-error-404',
                    component: () => import(/* webpackChunkName: "Error" */'@/errors/Error404')
                }
            ]
        },
        {
            path: '*',
            redirect:{
                name:'page-error-404'
            }
        }
    ]
});

export default router
