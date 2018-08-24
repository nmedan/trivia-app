import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import Trivia from './components/TriviaApp.vue'
import {store} from '../store'



Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', redirect: '/trivia' },
  { path: '/trivia', component: Trivia, name: 'trivia' },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
