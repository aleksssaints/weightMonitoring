import Vue from 'vue'
import Router from 'vue-router'
import Editing from '@/components/Editing'
import Graph from '@/components/Graph'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/editing',
      name: 'Editing',
      component: Editing
    },
    {
      path: '/graph',
      name: 'Graph',
      component: Graph
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
