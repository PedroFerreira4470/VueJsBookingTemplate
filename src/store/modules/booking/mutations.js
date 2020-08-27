import Vue from 'vue'

export const mutations = {
  // we can use the ES2015 computed property name feature
  // to use a constant as the function name
  FETCH_BOOKINGS (state, bookings) {
    state.bookings = bookings
  },
  SET_SELECTED_BOOKINGS (state, bookingSelected) {
    state.selectedBooking = bookingSelected
  },
  REMOVE_SELECTED_BOOKINGS (state) {
    state.selectedBooking = null
  },
  POST_BOOKING (state, booking) {
    state.bookings.push(booking)
  },
  SAVE_BOOKING (state, booking) {
    const index = state.bookings.findIndex(p => p.id === booking.id)
    if (index === -1) {
      state.bookings.push(booking)
    } else {
      Vue.set(state.bookings, index, booking)
    }
  },
  DELETE_BOOKING (state, booking) {
    const index = state.bookings.findIndex(p => p.id === booking.id)
    state.bookings.splice(index, 1)
  }
}
