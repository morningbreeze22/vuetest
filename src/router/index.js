import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Clickgame from '@/components/Clickgame'
import Game from '@/components/Game'
import Start from '@/components/Start'
import UserLayout from '@/components/UserLayout'
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import RegisterResult from '@/components/user/RegisterResult'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      redirect: '/user/login'
    },
    {
      path: '/clickgame',
      name: 'Clickgame',
      component: Clickgame
    },
    {
      path: '/game',
      name: 'Game',
      component: Game,
      children: [
         {
            path: 'start',
            name: 'Start',
            component: Start
          }
      ]
    },
    {
      path: '/user',
      name: UserLayout,
      component: UserLayout,
      children:[
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        },
        {
          path: 'register-result',
          name: 'registerResult',
          component: RegisterResult
        }
      ]
    }
  ]
})
