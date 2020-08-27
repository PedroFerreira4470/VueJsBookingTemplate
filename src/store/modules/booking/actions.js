import bookingApi from '../../../api/bookingAPI'

export const deleteAsync = async (
  { dispatch, commit, getters, rootGetters },
  booking
) => {
  await bookingApi.deleteBooking(booking)
  await commit('DELETE_BOOKING', booking)
}
export const selectedBooking = async (
  { dispatch, commit, getters, rootGetters },
  bookingId
) => {
  var booking = await bookingApi.getBooking(bookingId)
  commit('SET_SELECTED_BOOKINGS', booking)
}

export const postBookingAsync = async (
  { dispatch, commit, getters, rootGetters },
  booking
) => {
  booking.bookingNumber = Math.floor(Math.random() * 1000000 + 100)
  return new Promise((resolve, reject) => {
    bookingApi
      .postBooking(booking)
      .then(response => {
        commit('POST_BOOKING', response.data)
        resolve(response)
      })
      .catch(error => {
        console.log(error)
        reject(error.response.data.errors)
      })
  })
}

export const removeselectedBookingAsync = async ({
  dispatch,
  commit,
  getters,
  rootGetters
}) => {
  commit('REMOVE_SELECTED_BOOKINGS')
}
export const fetchAsync = async ({
  dispatch,
  commit,
  getters,
  rootGetters
}) => {
  var bookings = await bookingApi.getBookings()
  commit('FETCH_BOOKINGS', bookings)
}
