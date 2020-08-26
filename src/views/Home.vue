<template>
  <div>
    <message-example msg="Welcome To Aerial K2"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MessageExample from '@/components/MessageExample.vue'

export default {
  name: 'Home',
  components: {
    MessageExample
  }
}
</script>
