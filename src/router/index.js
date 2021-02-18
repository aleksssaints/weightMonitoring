import Vue from 'vue'
import Router from 'vue-router'
import Editing from '@/components/Editing'
import Graph from '@/components/Graph'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Editing',
      component: Editing
    },
    {
      path: '/graph',
      name: 'Graph',
      component: Graph
    }
  ]
})
