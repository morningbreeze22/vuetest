import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Clickgame from '@/components/Clickgame'
import Game from '@/components/Game'
import Start from '@/components/Start'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      component: Game,
      children: [
         {
            path: 'start',
            name: 'Start',
            component: Start
          }
      ]
    }
  ]
})
