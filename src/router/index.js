import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Suggested from '../views/Suggested.vue'
import Page from '../views/Page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/suggested',
    name: 'Suggested',
    component: Suggested
  },
  {
    path: '/page/:id', conponent: Page
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
