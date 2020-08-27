import api from './API'

export default {
  async getBookings () {
    return (await api.get('/bookings')).data
  },
  async getBooking (bookingid) {
    return (await api.get(`/bookings/${bookingid}`)).data
  },
  async postBooking (booking) {
    return (await api.post('/bookings', booking))
  },
  async deleteBooking (booking) {
    return await api.delete(`/bookings/${booking.id}`)
  }

}
