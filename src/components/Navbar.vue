<template>
  <nav class="deep-purple darken-3">
    <div class="nav-wrapper container">
      <ul>
        <li><router-link :to="{ name: 'Books' }">Книги</router-link></li>
        <li v-if="user"><router-link :to="{ name: 'AddBook' }">Добавить новую</router-link></li>
        <li v-else class="right"><router-link :to="{ name: 'Login' }">Войти</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Navbar',
  data () {
    return {
      user: null
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
      }
    })
  }
}
</script>

<style>

</style>
