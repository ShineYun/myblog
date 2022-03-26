<template>
  <Headbar msg="Welcome to Your Vue.js App"/>
  <router-view></router-view>
<!--  <Copyright></Copyright>-->
</template>

<script>

import Headbar from "@/components/Headbar";
// import Copyright from "@/components/Copyright";
export default {
  name: 'App',
  components: {
    Headbar,
    // Copyright,
  }
}
</script>

<style>

::-webkit-scrollbar {
  width: 5px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  /*-webkit-box-shadow:inset006pxrgba(0,0,0,0.3);*/
  border-radius:10px;
  background: rgba(0, 0, 0, .1);
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius:10px;
  background:rgba(0,0,0,0.3);
  /*-webkit-box-shadow:inset006pxrgba(0,0,0,0.5);*/
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vh;
  /*overflow: hidden;*/
  /*min-width: 1000px;*/
  background-image: url("https://pic3.zhimg.com/v2-9dfb9bd28656a13d7d57793c853dfb52_1440w.jpg?source=172ae18b");
  background-repeat: no-repeat;
}
</style>
