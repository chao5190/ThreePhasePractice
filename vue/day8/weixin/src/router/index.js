import Vue from 'vue'
import 'weui'
import '../assets/style.css'
import Router from 'vue-router'
import Main from '../pages/main/main.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/contact/contact.vue')
    },
    {
      path: '/recover',
      name: 'recover',
      component: () => import('../pages/recover/recover.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('../pages/mine/mine.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../pages/detail/detail.vue')
    }
  ]
})
