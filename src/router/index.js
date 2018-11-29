import Contact from '@/screens/contact'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/screens/login/loginV'
import Router from 'vue-router'
import Shops from '@/screens/shop/ShopLists'
import ShopDetails from '@/screens/shop/shopDetails/Details'

import Vue from 'vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/shops',
      name: 'shops',
      component: Shops
      // children: [{
      //   path: '/shop-details/:id',
      //   name: 'shopDetails',
      //   component: Contact
      // }]
    },
    {
      path: '/shop-details/:id',
      name: 'shopDetails',
      component: ShopDetails
    }
  ]
})
