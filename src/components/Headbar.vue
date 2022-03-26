<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
  >

    <el-menu-item index="1">Home</el-menu-item>
    <el-menu-item index="2">Category</el-menu-item>
    <el-menu-item index="3">TimeLine</el-menu-item>
    <el-menu-item index="4">Info</el-menu-item>
    <div id="userShow">
      <p>ShineYun</p>
      <img id="avatar" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
    </div>
  </el-menu>
</template>


<script>
export default {
  name: "headBar",
}

</script>

<style lang="less">

.el-menu-demo {
  display: flex;
  flex-direction: row;
  /*justify-content: center;*/
  align-items: center;
}
#userShow{
  display: flex;
  flex-direction: row;
  /*justify-content: center;*/
  align-items: center;
  position: absolute;
  right: 20px;
  & #avatar{
    margin-left: 20px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
}


</style>

