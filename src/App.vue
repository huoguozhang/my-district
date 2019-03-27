<template>
  <div id="app">
    <myDistrict></myDistrict>
  </div>
</template>

<script>
import myDistrict from '../package/myDistrict'
export default {
  name: 'app',
  components: {
    myDistrict
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
