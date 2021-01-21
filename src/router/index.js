import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Index',
  component: Index,
  redirect: '/Home',
  children: [{
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/MovieList',
      name: 'MovieList',
      component: () => import('../views/MovieList.vue')
    },
    {
      path: '/RobotTest',
      name: 'RobotText',
      component: () => import('../components/RobotTest.vue')
    },
    {
      path: '/movieDetail/:movieId',
      name: 'MovieDetail',
      component: () => import('../views/MovieDetail.vue')
    }
  ]
},
{
  path: '/loginPage',
  name: 'LoginPage',
  component: () => import('../views/LoginPage.vue')
},]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router