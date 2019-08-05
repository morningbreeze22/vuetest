<template>
  <div id="app">
      <Header id="basic-header">
        <div id="WelcomeMessage">
          {{welcomeMessage}}
        </div>
          <div id="Timeboard">
            <div id="time">
              {{date}}
            </div>
          </div>
      </Header>
      <div id="content">
        <div id="navi">
          <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
            <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
          </a-button>
          <a-menu
            :defaultSelectedKeys="['1']"
            :defaultOpenKeys="['sub1']"
            mode="inline"
            theme="dark"
            :inlineCollapsed="collapsed"
          >
            <a-menu-item key="1">
              <a-icon type="pie-chart" />
              <span>Clickgame</span>
              <router-link to="/clickgame"></router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <a-icon type="desktop" />
              <span>Option 2</span>
            </a-menu-item>
            <a-menu-item key="3">
              <a-icon type="inbox" />
              <span>Option 3</span>
            </a-menu-item>
          </a-menu>
      </div>
      <div id="router">
        <router-view></router-view>
      </div>
      </div>
      <vue-live2d :modelPath="modelpath" :width="live2dwidth" :height="live2dheight"></vue-live2d>
      <vue-canvas-nest :config="{count: 88, opacity: 1}" ></vue-canvas-nest>
      <div class="basic-footer">
        <footer>
          <a-divider>Designed by</a-divider>
          <p>Jim</p>
          <br>
          2019
          </footer>
      </div>
      
  </div>
</template>

<script>
import vueCanvasNest from 'vue-canvas-nest'
import { setInterval } from 'timers';
export default {
  name: 'App',
  data () {
    return {
      collapsed: false,
      welcomeMessage: '          Welcome!Traveller',
      date: new Date(),
      live2dwidth: 222,
      live2dheight: 222,
      modelpath: [
        {
        order: 1,
        path: "static/live2dw/live2d-widget-model-wanko/assets/wanko.model.json",
        isScale: false,
        isMove: true,
        }
      ]
    }
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    },
  },
  components: { vueCanvasNest },
  mounted () {
    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.date = new Date(); // 修改数据date
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}

</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%
}
#basic-header{
  background-color: #24292e;
  color: hsla(0,0%,100%,.7);
  line-height: 2;
  padding: 16px;
  z-index: 32;
  height: 10%;
}
#Timeboard{
  width: 25%;
  height: 100%;
  float: left;
  position: relative;
}
#time{
  position: absolute;
  right :0;
  bottom: 0;
  font-size: 15px;
}
#WelcomeMessage{
  width: 75%;
  height: 100%;
  float: left;
  font-size: 35px;
}
#bannder{
  height:100%;
  width:100%;
}
#content{
  height: 85%;
  width: 100%;
}
#navi{
  width: 200px;
  height: 85%;
  float:left;
}
#router{
  width: 85%;
  height: 100%;
  float: left;
}
#basic-footer{
    left:0;
    right:0;
    height:10%;
    width:100%;
    bottom:0;
    position :relative;
    text-align: center;
}
</style>
