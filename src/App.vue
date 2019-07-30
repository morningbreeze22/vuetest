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
        <Live2d :modelData="mdata"
        :on-move="handleMove" />
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
      welcomeMessage: 'Welcome!Traveller',
      date: new Date(),
      mdata: {
        name: "wanko", // 模型名称
        model: "./static/live2dw/live2d-widget-model-wanko/assets/moc/wanko.moc", // 模型文件地址
        textures: [
             "./static/live2dw/live2d-widget-model-wanko/assets/moc/wanko.1024/texture_00.png", // 材质素材地址
        ],
        hit_areas:[{"name":"body","id":"D_REF.PT_SOBA_01"}],
        layout:{"center_x":0,"y":1.8,"width":2.9},
        motions:{"idle":[{"file":"./static/live2dw/live2d-widget-model-wanko/assets/mtn/idle_01.mtn","fade_in":500,"fade_out":200},{"file":"./static/live2dw/live2d-widget-model-wanko/assets/mtn/idle_02.mtn","fade_in":500,"fade_out":200},{"file":"./static/live2dw/live2d-widget-model-wanko/assets/mtn/idle_03.mtn","fade_in":500,"fade_out":200},{"file":"./static/live2dw/live2d-widget-model-wanko/assets/mtn/idle_04.mtn","fade_in":500,"fade_out":200}],"shake":[{"file":"./static/live2dw/live2d-widget-model-wanko/assets/mtn/shake_01.mtn","fade_in":500,"fade_out":0},{"file":"./static/live2dw/live2d-widget-model-wanko/assets/mtn/shake_02.mtn","fade_in":500,"fade_out":0}],"tap_body":[{"file":"./static/live2dw/live2d-widget-model-wanko/assets/mtn/touch_01.mtn","fade_in":500,"fade_out":0},{"file":"./static/live2dw/live2d-widget-model-wanko/assets/mtn/touch_02.mtn","fade_in":500,"fade_out":0},{"file":"./static/live2dw/live2d-widget-model-wanko/assets/mtn/touch_03.mtn","fade_in":500,"fade_out":0}]}
        },
        handleMove: function(){},
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
</style>
