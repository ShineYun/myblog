<template>
  <Headbar msg="Welcome to Your Vue.js App"/>
  <router-view></router-view>
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
  min-width: 1000px;
}
</style>
