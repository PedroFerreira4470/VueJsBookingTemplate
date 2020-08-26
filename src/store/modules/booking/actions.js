import bookingApi from '../../../api/bookingAPI';

export const deleteAsync = async ({ dispatch, commit, getters, rootGetters }, booking) => {
  await bookingApi.deleteBooking(booking)
  await commit('DELETE_BOOKING', booking)
}

export const selectAsync = async ({ dispatch, commit, getters, rootGetters }, booking) => {
  await commit('SELECT_BOOKING',booking)
}

export const fetchAsync = async ({ dispatch, commit, getters, rootGetters }) => {
    var bookings = await bookingApi.getBookings();
    commit('FETCH_BOOKINGS',bookings) 
} 

