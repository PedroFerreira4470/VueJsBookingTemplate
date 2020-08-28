import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      // ...Guard
      next()
    }
  },
  {
    path: '/about/:id(\\d+)?',
    name: 'About',
    alias: ['/aboutMe', '/abou'],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/NotFound',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  },
  {
    path: '*', redirect: to => '/NotFound'
  }

]
