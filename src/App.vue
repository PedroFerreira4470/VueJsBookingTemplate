<template>
<div class="wrapper">
  <app-sidebar></app-sidebar>
  <app-content></app-content>
</div>
</template>

<script>
import AppSidebar from './views/app/AppSideBar'
import AppContent from './views/app/AppContent'
export default {
  components: {
    AppContent,
    AppSidebar
  },
    created() {
    this.$store
      .dispatch("bookingModule/fetchAsync", { self: this })
      .then(
        (response) => {
          console.log("fetched");
        },
        (error) => {
          console.error("not fetched");
        }
      );
  },
}
</script>

<style scoped>
  @import "./assets/css/style.css";
</style>
