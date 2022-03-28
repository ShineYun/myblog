<template>
  <div id="head-bar-menu">
    <div class="my-menu-demo" >
      <router-link
          v-for="page of pageList"
          :key="page.index"
          :to="page.to"
      >
        <div :class="['my-menu-item', { 'active-menu-item':activeIndex == page.index}]">{{page.name}}</div>
      </router-link>

    </div>
      <div id="userShow">
        <router-link to="/info" >
        <p>ShineYun - Blog</p>
        </router-link>
        <router-link to="/info">
        <img id="avatar" src="https://avatars.githubusercontent.com/u/44264278?s=400&u=7fad505b09aefe3673b4dbf1d7aceddea4d24ca4&v=4">
        </router-link>
      </div>
  </div>
</template>


<script>
export default {
  name: "headBar",
  data() {
    return {
      activeIndex: 1,
      pageList: [
        {
          index: 1,
          to: '/',
          name: 'Index'
        },
        {
          index: 2,
          to: '/category',
          name: 'Category'
        },
        {
          index: 3,
          to: '/timeline',
          name: 'TimeLine'
        },
        {
          index: 4,
          to: '/info',
          name: 'Info'
        },
      ]
    }
  },
  watch: {
    $route(to) {
      // console.log(to);
      this.activeIndex = to.meta.index
    }
  }
}

</script>

<style lang="less">

a {
  text-decoration : none
}

.my-menu-demo {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 30%;
  height: 100%;
  & a{
    height: 100%;
  }
}

.my-menu-item {
  padding: 0px 20px;
  height: 100%;
  display: flex;
  align-items: center;
  color: #000;
  //伪类 当光标位于所在时
  &:hover {
    background-color:  rgba(#faecd8,30%);
    transition: 0.3s;

  }
}

.active-menu-item{
  color:  #b88230;
  border-bottom: 2px solid #b88230;
}

#head-bar-menu{
  display: flex;
  width: 100vw;
  height: 60px;
  align-items: center;
  background: rgb(144 200 200 / 60%);
}
#userShow{
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 20px;
  & #avatar{
    margin-left: 20px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
  & a{
    color: black;
  }
}


</style>

