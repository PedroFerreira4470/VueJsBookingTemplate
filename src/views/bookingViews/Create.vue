<template>
  <div class="container">
    <form id="bookingCreateForm" @submit.prevent="checkForm">
      <div v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>
      <section class="form-group" v-if="step == 1">
        <h3>Step 1</h3>
        <label for="clientLookupId">Booking Main Client</label>
        <select class="form-control" v-model="form.client" id="clientLookupId">
          <option
            v-for="client in clientsLookup"
            :value="client.name"
            :key="client.id"
          >{{ client.name }}</option>
        </select>
      </section>
      <section class="form-group" v-if="step == 2">
        <h3>Step 2</h3>
        <h4>Locations</h4>
        <label for="locationOriginId">Origin</label>
        <select class="form-control" v-model="form.locations.origin" id="locationOriginId">
          <option
            v-for="location in locationsLookup"
            :value="location.name"
            :key="location.id"
          >{{ location.name }}</option>
        </select>

        <label for="locationDestinationId">Destination</label>
        <select
          class="form-control"
          v-model="form.locations.destination"
          id="locationDestinationId"
        >
          <option
            v-for="location in locationsLookup"
            :value="location.name"
            :key="location.id"
          >{{ location.name }}</option>
        </select>
      </section>

      <section class="form-group" v-if="step == 3">
        <h3>Step 3</h3>
        <h4>Airports</h4>
        <label for="airportOriginId">Origin</label>
        <select class="form-control" v-model="form.airports.origin" id="airportOriginId">
          <option
            v-for="airport in airportsLookup"
            :value="airport.name"
            :key="airport.id"
          >{{ airport.name }}</option>
        </select>

        <label for="airportDestinationId">Destination</label>
        <select class="form-control" v-model="form.airports.destination" id="airportDestinationId">
          <option
            v-for="airport in airportsLookup"
            :value="airport.name"
            :key="airport.id"
          >{{ airport.name }}</option>
        </select>
      </section>
      <button
        v-if="step !== 1"
        type="button"
        class="btn btn-danger"
        @click.prevent="previousStep"
      >Previous step</button>
      <button
        v-if="step !== totalsteps"
        type="button"
        class="btn btn-success"
        @click.prevent="nextStep"
      >Next step</button>
      <button v-if="step === totalsteps" :disabled="loading" class="btn btn-success" type="submit">
        <font-awesome-icon v-if="loading" icon="spinner" spin />
        {{this.loading == false ? "Submit" : "Creating..."}}
      </button>
    </form>
  </div>
</template>

<script>
import lookupApi from '../../../src/api/lookupAPI'
export default {
  created () {
    this.setupClientsLookup()
    this.setupLocationsLookup()
    this.setupAirportsLookup()
  },
  data () {
    return {
      loading: false,
      step: 1,
      totalsteps: 3,
      form: {
        id: null,
        bookingNumber: null,
        client: null,
        locations: {
          origin: null,
          destination: null
        },
        airports: {
          origin: null,
          destination: null
        },
        createdBy: { firstName: 'Pedro', lastName: 'Ferreira' }
      },
      clientsLookup: [],
      airportsLookup: [],
      locationsLookup: [],
      errors: []
    }
  },
  methods: {
    checkForm (e) {
      this.loading = true
      this.errors = []
      if (!this.form.client) {
        this.errors.push('Client required.')
      }
      if (!this.form.locations.origin) {
        this.errors.push('Locations origin required.')
      }
      if (!this.form.locations.destination) {
        this.errors.push('Locations destination required.')
      }
      if (!this.form.airports.origin) {
        this.errors.push('Airports origin required.')
      }
      if (!this.form.airports.destination) {
        this.errors.push('Airports destination  required.')
      }

      if (this.errors.length === 0) {
        this.$store
          .dispatch('bookingModule/postBookingAsync', this.form)
          .then((response) => {
            alert('created')
          })
          .catch((error) => {
            alert('error')
          })
          .finally(() => {
            this.loading = false
          })
      }
    },
    nextStep () {
      this.step++
    },
    previousStep () {
      this.step--
    },
    setupClientsLookup () {
      lookupApi
        .clientsLookup()
        .then((response) => (this.clientsLookup = response))
    },
    setupLocationsLookup () {
      lookupApi
        .locationsLookup()
        .then((response) => (this.locationsLookup = response))
    },
    setupAirportsLookup () {
      lookupApi
        .airportsLookup()
        .then((response) => (this.airportsLookup = response))
    }
  }
}
</script>

<style scoped></style>
