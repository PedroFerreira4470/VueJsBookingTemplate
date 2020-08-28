<template>
  <div>
    <div v-if="form === null && editing === true">
      <loading spinningTitle="Loading Booking..."></loading>
    </div>
    <div v-else>
      <div class="container">
        <h2>{{editing ? `Editing Booking ${form.bookingNumber}` : "Creating New Booking"}}</h2>
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
            <select
              class="form-control"
              v-model="form.airports.destination"
              id="airportDestinationId"
            >
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
            :disabled="loadingSubmitForm"
            type="button"
            class="btn btn-success"
            @click.prevent="nextStep"
          >Next step</button>
          <button
            v-if="step === totalsteps"
            :disabled="loadingSubmitForm"
            class="btn btn-success ml-2"
            type="submit"
          >
            <font-awesome-icon v-if="loadingSubmitForm" icon="spinner" spin />
            {{submitText}}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import lookupApi from "../../../src/api/lookupAPI";
import loading from "../../components/Loading";
import Vue from "vue";

function getInitialForm() {
  return {
    id: null,
    bookingNumber: null,
    client: null,
    locations: {
      origin: null,
      destination: null,
    },
    airports: {
      origin: null,
      destination: null,
    },
    createdBy: { firstName: "Pedro", lastName: "Ferreira" },
  };
}

export default {
  components: {
    loading,
  },
  async created() {
    this.setupClientsLookup();
    this.setupLocationsLookup();
    this.setupAirportsLookup();
  },
  data() {
    return {
      loadingSubmitForm: false,
      editing: false,
      step: 1,
      totalsteps: 3,
      form: null,
      clientsLookup: [],
      airportsLookup: [],
      locationsLookup: [],
      errors: [],
    };
  },
  computed: {
    submitText() {
      let  submitText = this.editing ? "Edit Booking" : "Create Booking"
      if(this.loadingSubmitForm){
          return submitText + "..."
      }else{
         return submitText
      }
    },
  },
  methods: {
    checkForm(e) {
      this.loadingSubmitForm = true;
      this.errors = [];
      if (!this.form.client) {
        this.errors.push("Client required.");
      }
      if (!this.form.locations.origin) {
        this.errors.push("Locations origin required.");
      }
      if (!this.form.locations.destination) {
        this.errors.push("Locations destination required.");
      }
      if (!this.form.airports.origin) {
        this.errors.push("Airports origin required.");
      }
      if (!this.form.airports.destination) {
        this.errors.push("Airports destination  required.");
      }

      if (this.errors.length === 0) {
        let moduleAction = 'bookingModule/postBookingAsync';
        if("id" in this.$route.params){
          moduleAction = 'bookingModule/putBookingAsync'
        }
        setTimeout(() => {
          this.$store
            .dispatch(moduleAction, this.form)
            .then((response) => {
              console.log(response);
              const booking = response.data;
              this.$router.push(`/booking/detail/${booking.id}`);
            })
            .catch((error) => {
              console.log(error);
              alert("error");
            })
            .finally(() => {
              this.loadingSubmitForm = false;
            });
        }, 1500);
      }
    },
    getBooking() {
      return this.$store.dispatch(
        "bookingModule/getBookingById",
        this.$route.params.id
      );
    },
    nextStep() {
      this.step++;
    },
    previousStep() {
      this.step--;
    },
    setupClientsLookup() {
      lookupApi
        .clientsLookup()
        .then((response) => (this.clientsLookup = response));
    },
    setupLocationsLookup() {
      lookupApi
        .locationsLookup()
        .then((response) => (this.locationsLookup = response));
    },
    setupAirportsLookup() {
      lookupApi
        .airportsLookup()
        .then((response) => (this.airportsLookup = response));
    },
  },
  watch: {
    $route: {
      async handler(to, from) {
        if ("id" in to.params) {
          this.editing = true;
          this.form = await this.getBooking();
        } else {
          this.editing = false;
          this.form = getInitialForm();
          this.step = 1;
        }
      },
      immediate: true,
    },
  },
};
</script>

<style scoped></style>
