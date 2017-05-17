import Vue from 'vue'
import Vuex from 'vuex'
import App from './component/List.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/store_index'
Vue.use(VueAxios, axios)
Vue.use(Vuex)
new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: {
        App
    }
})