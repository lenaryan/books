<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {

    }
  }
}
</script>

<style>
h1 {
    font-size: 50px;
}
</style>