<template>
  <div class="sidebar">
    <h2>
      <router-link to="/">
        <font-awesome-icon :icon="['fas', 'plane']" :transform="{ rotate: 42 }"></font-awesome-icon>K2
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
          <font-awesome-icon :icon="['fas', 'book']" />&#160;Bookings
        </a>
        <div class="collapse" id="sideBarToggleBookings">
          <div class="bg-darkBlue">
            <router-link to="/booking/create">
              <font-awesome-icon :icon="['fas', 'plus-circle']" />&#160;Create
            </router-link>
            <hr />
            <router-link to="/booking">
              <font-awesome-icon :icon="['fas', 'book-open']" />&#160;List
            </router-link>
          </div>
        </div>
      </li>
      <li>
        <router-link to="/">
          <font-awesome-icon :icon="['fas', 'box']"></font-awesome-icon>&#160;Cargo
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <font-awesome-icon :icon="['fas', 'dolly-flatbed']" />&#160;Shipments
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <font-awesome-icon :icon="['fas', 'info-circle']" />&#160;About
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
