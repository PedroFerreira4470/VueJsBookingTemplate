import Home from '../views/Home.vue'
import BookingList from '../views/bookingViews/List.vue'
import BookingCreate from '../views/bookingViews/Create.vue'
import BookingDetail from '../views/bookingViews/Detail.vue'
import BookingEdit from '../views/bookingViews/Edit.vue'

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
    path: '/booking',
    name: 'Booking',
    alias: ['/bookings'],
    component: BookingList,
    beforeEnter: (to, from, next) => {
      // ...Guard
      next()
    }
  },
  {
    path: '/booking/create',
    name: 'BookingCreate',
    alias: ['/bookings/create'],
    component: BookingCreate,
    beforeEnter: (to, from, next) => {
      // ...Guard
      next()
    }
  },
  {
    path: '/booking/detail/:id(\\d+)',
    name: 'BookingDetail',
    alias: ['/bookings/details/:id(\\d+)', '/booking/details/:id(\\d+)'],
    component: BookingDetail,
    beforeEnter: (to, from, next) => {
      // ...Guard
      next()
    }
  },
  {
    path: '/booking/edit/:id(\\d+)',
    name: 'BookingEdit',
    alias: ['/bookings/edit/:id(\\d+)', '/booking/edit/:id(\\d+)'],
    component: BookingEdit,
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
