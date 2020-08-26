import Vue from 'vue'
import Vuex from 'vuex'
import { bookingModule } from './modules/booking'
Vue.use(Vuex)

export default new Vuex.Store({
  // !when using v-model in form, check: vuex.vuejs.org/guide/forms.html
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    bookingModule: bookingModule
  }
})

//* TODO HOT Reload

//* more
// #: When adding new properties to an Object, you should either:
// Vue.set(obj, 'newProp', 123)
// state.obj = { ...state.obj, newProp: 123 }

// Action vs mutations
// Instead of mutating the state, actions commit mutations (that can rollback).
// Actions can contain arbitrary asynchronous operations mutations cant.

// call action
// dispatch with an object
// store.dispatch({
//   type: 'incrementAsync',
//   amount: 10
// })

// call actions in components
// import { mapActions } from 'vuex'

// export default {
//
//   methods: {
//     ...mapActions([
//       'increment', // map `this.increment()` to `this.$store.dispatch('increment')`

// ? `mapActions` also supports payloads:
//       'incrementBy' // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
//     ]),
//     ...mapActions({
//       add: 'increment' // map `this.add()` to `this.$store.dispatch('increment')`
//     })
//   }
// }
