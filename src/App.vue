<template>
  <Headbar msg="Welcome to Your Vue.js App"/>

</template>

<script>

import Headbar from "@/components/Headbar";
export default {
  name: 'App',
  components: {
    Headbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
