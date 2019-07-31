<template>
  <div id="bg">
    <div id="title"></div>
    <div id="start">
      <router-link to="/game"></router-link>
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
}
</script>

<style>
#bg{
  margin:10px;
  padding: 40px;
  height:700px;
  width:1440px;
  margin: 0px;
  background: url("../assets/clickgame-bg3.png") no-repeat;
  background-size:100% 100%;
}
</style>