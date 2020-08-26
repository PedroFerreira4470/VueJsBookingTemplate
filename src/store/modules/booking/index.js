import * as getters from './getters'
import * as actions from './actions'
import { mutations } from './mutations'
import { state } from './state'

export const bookingModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

// store.commit('a/increment'); "a/" because namepsace is true
// store.commit('b/login'); //e.g format mutation
// store.dispatch('b/login');//e.g format action
// store.getters['b/login'];//e.g format getter

// more pratical example action method
// ! checkout ({ commit, state }, products) {
// ? save the items currently in the cart
// !   const savedCartItems = [...state.cart.added]
// ? send out checkout request, and optimistically
// ? clear the cart
// !   commit(types.CHECKOUT_REQUEST)
// ? the shop API accepts a success callback and a failure callback
// !   shop.buyProducts(
// !     products,
// ? handle success
// !     () => commit(types.CHECKOUT_SUCCESS),
// ? handle failure
// !     () => commit(types.CHECKOUT_FAILURE, savedCartItems)
// !   )
// ! }

// * example how to call in components
// import { createNamespacedHelpers } from 'vuex'

// const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')

// export default {
//   computed: {
//     // look up in `some/nested/module`
//     ...mapState({
//       a: state => state.a,
//       b: state => state.b
//     })
//   },
//   methods: {
//     // look up in `some/nested/module`
//     ...mapActions([
//       'foo',
//       'bar'
//     ])
//   }
// }
