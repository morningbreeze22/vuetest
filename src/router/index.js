import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Clickgame from '@/components/Clickgame'
import Game from '@/components/Game'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/clickgame',
      name: 'Clickgame',
      component: Clickgame
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/start',
      name: 'Start',
      component: Start
    }
  ]
})
