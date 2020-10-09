import Vue from 'vue'
import Router from 'vue-router'
import Books from '@/components/Books'
import AddBook from '@/components/AddBook'
import EditBook from '@/components/EditBook'
import Login from '@/components/Login'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
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
      component: AddBook,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:id',
      name: 'EditBook',
      component: EditBook,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  // check if route requires auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    // check auth state of user
    let user = firebase.auth().currentUser
    if (user) {
      //user signed in, proceed to route
      next()
    } else {
      //no way
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router