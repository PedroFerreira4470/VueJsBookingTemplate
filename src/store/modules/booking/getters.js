export const getBookings = (state, getters, rootState, rootGetters) => {
  return state.bookings
}

export const getOrderedBookingsByClient = (state, getters, rootState, rootGetters) => {
  return state.bookings.concat().sort((bk1, bk2) => compare(bk1.client, bk2.client))

  function compare (obj1, obj2) {
    const a = obj1.toUpperCase()
    const b = obj2.toUpperCase()
  
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    }
    return 0
  }
}
