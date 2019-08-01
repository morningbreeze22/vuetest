<template>
    <div id="bg">
        <div id="play">
            <router-view></router-view>
        </div>
    </div>
</template>


<script>
export default {
    name: "Game",
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
  position:relative;
}
</style>