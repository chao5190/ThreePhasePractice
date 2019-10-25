import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Weibo from '../views/Weibo.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import axios from 'axios'
import qs from 'qs'
Vue.use(Router)

let router = new Router({
  routes: [{
      path: '/weibo',
      name: 'weibo',
      component: Weibo
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
  mode: "hash",
  base: process.env.BASE_URL
})
router.beforeEach(async (to, from, next) => {


  try {
    let statue = await axios.post('http://localhost:3000/autologin', qs.stringify({
      token: 'eyJ1c2VybmFtZSI6IjEyMyIsInBhc3N3b3JkIjoiNDU2In0'
    }))
    console.log(statue);

    if (statue.data) {
      console.log("asd");
      next()
    } else {
      if (to.name == 'login') {
        next()
      } else {
        router.push({
          name: 'login'
        })
      }
    }
  } catch (error) {
    console.log(error);

    next()
  }

})
export default router
