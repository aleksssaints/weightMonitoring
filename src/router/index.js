import Vue from 'vue'
import Router from 'vue-router'
import Editing from '@/components/Editing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Editing',
      component: Editing
    }
  ]
})
