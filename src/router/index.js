import Vue from 'vue'
import Router from 'vue-router'
import Books from '@/components/Books'
import AddBook from '@/components/AddBook'
import EditBook from '@/components/EditBook'
import Login from '@/components/Login'

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
    },
    {
      path: '/edit/:id',
      name: 'EditBook',
      component: EditBook
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
