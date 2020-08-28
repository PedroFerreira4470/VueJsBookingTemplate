import BookingList from '../views/bookingViews/List.vue'
import BookingDetail from '../views/bookingViews/Detail.vue'
import BookingEdit from '../views/bookingViews/Edit.vue'

export default [
  {
    path: '/booking',
    name: 'Booking',
    component: BookingList,
    beforeEnter: (to, from, next) => {
      // ...Guard
      next()
    }
  },
  {
    path: '/booking/create',
    name: 'BookingCreate',
    component: BookingEdit,
    beforeEnter: (to, from, next) => {
      // ...Guard
      next()
    }
  },
  {
    path: '/booking/detail/:id(\\d+)',
    name: 'BookingDetail',
    component: BookingDetail,
    beforeEnter: (to, from, next) => {
      // ...Guard
      next()
    }
  },
  {
    path: '/booking/edit/:id(\\d+)',
    name: 'BookingEdit',
    component: BookingEdit,
    beforeEnter: (to, from, next) => {
      // ...Guard
      next()
    }
  }
]
