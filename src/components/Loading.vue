<template>
<div class="fa-4x center">
  <font-awesome-icon icon="spinner" spin ></font-awesome-icon>
  <p>{{spinningTitle}}</p>
</div>
</template>

<script>
export default {
  props: {
    spinningTitle: String
  }
}
</script>
