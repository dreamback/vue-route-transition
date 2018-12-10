import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/rate',
      component: r => require(['@/pages/rate'], r)
    },
    {
      path: '/button',
      component: r => require(['@/pages/button'], r)
    },
    {
      path: '/address',
      component: r => require(['@/pages/address'], r)
    },
    {
      path: '/demo',
      component: r => require(['@/pages/demo'], r)
    }
  ]
})
