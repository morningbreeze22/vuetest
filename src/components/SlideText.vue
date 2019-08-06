<template>
<div>
  <p style='font-size:24px' class='animated slideInUp slideOutUp' v-if="showslide"> {{msg}}</p>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:{
      msg:{
          required:true
      },
      showslide:{
          required:true
      }
  },
  data () {
    return {
    }
  }
}
</script>


<style>

</style>
