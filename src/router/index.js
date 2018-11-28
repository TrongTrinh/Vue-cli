import Contact from '@/screens/contact'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/screens/login/loginV'
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
    }
  ]
})
