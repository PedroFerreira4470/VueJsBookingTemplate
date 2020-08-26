import api from './API'

export default {
  async getBookings () {
    return (await api.get('/bookings')).data
  },
  async deleteBooking (booking) {
    return await api.delete(`/bookings/${booking.id}`)
  }
}
