<template>
  <div>
    <h3 class="text-center">Booking Display</h3>
    <table class="table table-sm table-striped table-bordered">
      <tr>
        <th>ID</th>
        <th>Booking Number</th>
        <th>Client</th>
        <th>Origin</th>
        <th>Destination</th>
        <th>Created by</th>
      </tr>
      <tbody>
        <tr v-for="(booking) in bookings" :key="booking.id">
          <td>{{ booking.id }}</td>
          <td>{{ booking.bookingNumber }}</td>
          <td>{{ booking.client }}</td>
          <td>{{ booking.locations.origin }}</td>
          <td>{{ booking.locations.destination }}</td>
          <td>{{ fullName(booking.createdBy) }}</td>
          <td>
            <router-link
              tag="button"
              class="btn btn-sm btn-primary"
              v-bind:to="`/booking/edit/${booking.id}`"
            >Edit</router-link>
            <button class="ml-2 btn btn-sm btn-danger" v-on:click="deleteBooking(booking)">Cancel</button>
            <div class="btn-sm btn-group" role="group">
              <button
                v-bind:id="`btnGroupActions${booking.id}`"
                type="button"
                class="btn btn-sm btn-dark dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Other Actions</button>
              <div class="dropdown-menu" v-bind:aria-labelledby="`btnGroupActions${booking.id}`">
                <router-link
                  tag="button"
                  class="dropdown-item"
                  v-bind:to="`/booking/detail/${booking.id}`"
                >Details</router-link>
                <button class="dropdown-item">Shipments</button>
                <button class="dropdown-item">Log</button>
              </div>
            </div>
          </td>
        </tr>
        <tr v-if="bookings.length === 0">
          <td colspan="6" class="text-center">No data</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const {
  mapState: bookingState,
  mapActions: bookingActions
} = createNamespacedHelpers('bookingModule')

export default {
  computed: {
    ...bookingState({
      bookings: (state) => state.bookings
    })
  },
  methods: {
    ...bookingActions({
      deleteBooking: 'deleteAsync'
    }),
    fullName (param) {
      return `${param.firstName} ${param.lastName}`
    }
  }
}
</script>

//state
//this.$store.state.bookingModule.bookings
//getter
//this.$store.getters['bookingModule/getOrderedBookingsByClient']
//action
//this.$store.dispatch('bookingModule/deleteAsync', booking)

// deleteBooking (booking) {
//   return this.$store.dispatch('bookingModule/deleteAsync', booking)
//        this.$store.commit('bookingModule/DELETE_BOOKING',booking)
// },

//computed
// bookings () {
//   return this.$store.getters['bookingModule/getOrderedBookingsByClient']
// }

// processBookings(newBookings) {
    //  this.bookings.splice(0)
    // this.bookings.push(...newBookings)
// },
