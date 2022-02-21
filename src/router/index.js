import Vue from 'vue'
import VueRouter from 'vue-router'
import Ranking from '../views/ranking/Ranking.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    //TODO add ranking url
    name: 'Ranking',
    component: Ranking
  },
  {
    path: '/:userId',
    name: 'UserDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/userDetails/UserDetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
