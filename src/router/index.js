import Vue from 'vue'
import Router from 'vue-router'
import Books from '@/components/Books'
import AddBook from '@/components/AddBook'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Books',
      component: Books
    },
    {
      path: '/add',
      name: 'AddBook',
      component: AddBook
    }
  ]
})
