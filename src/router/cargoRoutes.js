import CargoEdit from '../views/cargoViews/Edit.vue'

export default [
  {
    path: '/booking/:bookingId/cargo',
    name: 'CargoEdit',
    component: CargoEdit,
    beforeEnter: (to, from, next) => {
      // ...Guard
      next()
    }
  }
]
