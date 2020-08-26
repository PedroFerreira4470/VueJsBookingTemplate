import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicRoutes from './basicRoutes'

Vue.use(VueRouter)

const routes = [
  ...BasicRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

// routes can also have childrens like /product/list or /product/create or /product/12
// use guards to restrict
