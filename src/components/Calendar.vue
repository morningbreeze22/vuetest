<template>
  <div class="hello">
    {{msg}}<br>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      msg: 'helloworld!',
      time: new Date(Date.now())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
