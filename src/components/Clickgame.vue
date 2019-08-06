<template>
  <div id="bg">
    <div id="title">
      <h1>CLICK MOUSE TO SHOOT THE EMEMY AND SCORED!</h1>
    </div>
    <div id="startdiv">
      <img id="human" src="../assets/gameresources/human.png" height="150" width="100"/><br>
      <router-link to="/game/start">
      <img id="start" v-on:mouseover="changeActive()" v-on:mouseout="removeActive()" src="../assets/pixelstart.png"/>
      </router-link>
    </div>
  </div>
</template>


<script>
export default {
    name: "Clickgame",
    data () {
        return {
        }
    },
    methods: {
      changeActive(){
        var s=document.getElementById("start");
        s.classList.add('animated');
        s.classList.add('pulse');
        s.classList.add('infinite');
      },
      removeActive(){
        var s=document.getElementById("start");
        s.classList.remove('pulse');
      }
    }
}
</script>

<style>
#bg{
  margin:10px;
  padding: 40px;
  height:700px;
  width:1440px;
  margin-left: 50px;
  background: url("../assets/clickgame-bg3.png") no-repeat;
  background-size:100% 100%;
  position:relative;
}
#title{
  font-size: 32px;
  position: absolute;
  top: 100px;
  left:300px;
  right:300px;
}
#startdiv{
  position:absolute;
  text-align: center;
  bottom: 120px;
  left: 300px;
  right:300px;
}
</style>