<template>
  <div>
    <div v-if="booking === null">
      <loading spinningTitle="Loading Booking Details..."></loading>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <h3 class="card-header">Booking Number: {{booking.bookingNumber}}</h3>
            <div class="card-body col-12">
              <div class="mb-4">
                <router-link
                  tag="button"
                  type="button"
                  class="btn btn-info"
                  v-bind:to="`/booking/edit/${booking.id}`"
                >
                  <font-awesome-icon :icon="['fas', 'cog']"></font-awesome-icon>Edit Booking
                </router-link>
                <button type="button" class="btn btn-info ml-3">
                  <font-awesome-icon :icon="['fas', 'cog']"></font-awesome-icon>
                  {{booking.shipments ? "Edit" : "Create"}} Shipments
                </button>
                <router-link
                  tag="button"
                  type="button"
                  class="btn btn-info ml-3"
                  v-bind:to="`/booking/${booking.id}/cargo`"
                >
                  <font-awesome-icon :icon="['fas', 'cog']"></font-awesome-icon>
                  {{booking.cargo ? "Edit" : "Create"}} Cargo
                </router-link>
              </div>
              <div class="card-columns">
                <div class="card text-white bg-primary">
                  <h5 class="card-header">Client</h5>
                  <div class="card-body">
                    <p class="card-text">Name: {{ booking.client }}</p>
                    <hr />
                    <p class="card-text">More Information About Client. Goes here</p>
                  </div>
                </div>
                <div class="card text-white bg-secondary">
                  <h5 class="card-header">Locations</h5>
                  <div class="card-body">
                    <p class="card-text">Origin: {{booking.locations.origin}}</p>
                    <p class="card-text">More Information: Here</p>
                    <hr />
                    <p class="card-text">Destination: {{booking.locations.destination}}</p>
                    <p class="card-text">More Information: Here</p>
                  </div>
                </div>
                <div class="card text-white bg-success">
                  <h5 class="card-header">Airports</h5>
                  <div class="card-body">
                    <p class="card-text">Origin: {{booking.airports.origin}}</p>
                    <p class="card-text">More Information: Here</p>
                    <hr />
                    <p class="card-text">Destination: {{booking.airports.destination}}</p>
                    <p class="card-text">More Information: Here</p>
                  </div>
                </div>
                <div class="card text-white bg-success">
                  <h5 class="card-header">Cargo</h5>
                  <div class="card-body">
                    <p class="card-text">No Cargo</p>
                  </div>
                </div>
                <div class="card text-white bg-success">
                  <h5 class="card-header">Shipments</h5>
                  <div class="card-body">
                    <p class="card-text">No shipments</p>
                  </div>
                </div>
                <div class="card text-white bg-dark">
                  <h5 class="card-header">Created By</h5>
                  <div class="card-body">
                    <p class="card-text">User: {{fullName(booking.createdBy)}}</p>
                    <p class="card-text">Date: {{getNow()}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loading from '../../components/Loading'
export default {
  components: {
    loading
  },
  computed: {
    booking () {
      return this.$store.state.bookingModule.booking
    }
  },
  created () {
    setTimeout(() => {
      this.$store.dispatch(
        'bookingModule/selectedBooking',
        this.$route.params.id
      )
    }, 1000)
  },
  methods: {
    fullName (param) {
      return `${param.firstName} ${param.lastName}`
    },
    getNow () {
      return new Date()
    }
  },
  beforeDestroy () {
    this.$store.dispatch('bookingModule/removeSelectedBookingAsync')
  }
}
</script>

<style scoped>
</style>
