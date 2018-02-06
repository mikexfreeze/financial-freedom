import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import home from '@/views/home/home.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css/animate.min.css'
import BootstrapVue from 'bootstrap-vue'
// import money from 'v-money'

Vue.use(BootstrapVue);
Vue.use(Router)
// register directive v-money and component <money>
// Vue.use(money, {precision: 4})

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: HelloWorld
    },
    {
      path: '/home',
      name: '主页',
      component: home
    },
  ]
})

export default router
