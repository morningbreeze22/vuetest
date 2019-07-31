<template>
  <div id="app">
    <a-Layout>
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
      <a-Layout>
        <vue-live2d :modelPath="modelpath"></vue-live2d>
        <router-view></router-view>
      </a-Layout>
      <Footer id="footer">footer</Footer>
      <vue-canvas-nest :config="{count: 88, opacity: 1}" ></vue-canvas-nest>
    </a-Layout>  
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
      welcomeMessage: 'Welcome!Traveller',
      date: new Date(),
      modelpath: [
        {
        order: 1,
        path: "static/live2dw/live2d-widget-model-wanko/assets/wanko.model.json",
        isScale: false
        }
      ]
    }
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
}
#basic-header{
  background-color: #24292e;
  color: hsla(0,0%,100%,.7);
  line-height: 2;
  padding: 16px;
  z-index: 32;
  height: 80px;
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
#footer{
  bottom: 0px;
}
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255,255,255,.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
