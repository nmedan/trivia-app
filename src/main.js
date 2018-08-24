import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Trivia from './components/TriviaApp.vue'



Vue.config.productionTip = false

Vue.use(VueRouter)

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
  render: h => h(App)
}).$mount('#app')
