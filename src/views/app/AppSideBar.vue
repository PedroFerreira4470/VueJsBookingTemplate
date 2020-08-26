<template>
  <div class="sidebar">
    <h2>
      <router-link to="/">
        <font-awesome-icon :icon="['fas', 'plane']" :transform="{ rotate: 42 }"></font-awesome-icon>Aerial
      </router-link>
    </h2>
    <ul>
      <li>
        <!-- <router-link to="/booking">
          <font-awesome-icon :icon="['fas', 'book']" ></font-awesome-icon>
          Bookings
        </router-link>-->
            <a
              type="button"
              data-toggle="collapse"
              data-target="#sideBarToggleBookings"
              aria-controls="sideBarToggleBookings"
              aria-expanded="false"
            >
            <font-awesome-icon :icon="['fas', 'book']" ></font-awesome-icon>
              Bookings
            </a>
          <div class="collapse" id="sideBarToggleBookings">
            <div class="bg-darkBlue">
              <router-link to="/booking/create">
                <font-awesome-icon :icon="['fas', 'plus-circle']" ></font-awesome-icon>
                Create
              </router-link>
              <hr>
              <router-link to="/booking">
                <font-awesome-icon :icon="['fas', 'book-open']" ></font-awesome-icon>
                List
              </router-link>
            </div>
          </div>
      </li>
      <li>
        <router-link to="/">
          <font-awesome-icon :icon="['fas', 'dolly-flatbed']"></font-awesome-icon>Shipments
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <font-awesome-icon :icon="['fas', 'info-circle']"></font-awesome-icon>About
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
