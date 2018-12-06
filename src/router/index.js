import { Contact, Form, Login, ShopDetails, ShopV, Shops } from '@/screens'
import HelloWorld from '@/components/HelloWorld'
import Router from 'vue-router'
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
      path: '/',
      name: 'shop',
      component: ShopV,
      children: [
        {
          path: 'shop-lists',
          name: 'shops',
          component: Shops
        },
        {
          path: 'shop-details/:id',
          name: 'shopDetails',
          component: ShopDetails
        },
        {
          path: 'shop-add',
          name: 'shopForm',
          component: Form
        }
      ]
    }
  ]
})
