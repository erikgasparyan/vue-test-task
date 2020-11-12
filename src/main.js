import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// Vue Router
import router from './router/router'
// Vuex Store
import store from './store/store'
Vue.use(VueAxios, axios)
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
Vue.use(IconsPlugin)
import App from './App.vue'
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
