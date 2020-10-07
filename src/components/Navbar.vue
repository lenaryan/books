<template>
  <nav class="deep-purple darken-3">
    <div class="nav-wrapper container">
      <ul>
        <li><router-link :to="{ name: 'Books' }">Книги</router-link></li>
        <li><router-link :to="{ name: 'AddBook' }">Добавить новую</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
