<template>
  <!--flexbox布局-->
  <section class="layout flexbox">
    <article class="left-center-right">


      <div class="left">
        <div id="title">
          <h1>ShineYun - Blog</h1>
        </div>
      </div>
      <div class="center">
        <el-card class="card" v-for="index in 20">
          <router-link to="/blog">
            <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
            />
          </router-link>
          <div style="padding: 14px">
            <router-link to="/blog">
              <span class="subtitle">数据库学习笔记（01）</span>
            </router-link>
            <div class="bottom">
              <time class="time">Upload Time:{{ currentDate }}</time>
            </div>
          </div>
        </el-card>
      </div>
      <div class="right"></div>
    </article>
  </section>

</template>

<script>
export default {
  components: {},

  data() {
    return {
      currentDate: '2020-03-03',
    }
  },
}

</script>

<style lang="less">

.layout {
  height: calc(100vh - 60px);
}

.layout.flexbox .left-center-right {
  height: 100%;
  display: flex;
}

.layout.flexbox .left {
  width: 200px;
}

.layout.flexbox .center {
  position: relative;
  height: auto;
  //max-height: 100%;
  flex: 1;
  backdrop-filter: blur(20px);
  //display: grid;
  //grid-template-columns: repeat(auto-fill, 400px);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow-y: auto;
  background:  rgba(255,255,255,.2);;
  opacity: 0.9;

  & #title {
    font-size: 50px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .el-row {
    height: 100%;
    overflow: hidden scroll;
  }
}

.layout.flexbox .right {
  width: 200px;
}

.card {
  width: 280px;
  height: 350px;
  border-radius: 12px !important;
  margin: 10px;

  &:hover {
    box-shadow: 4px 6px 20px 9px rgb(0 0 0 / 30%);
    transition: 0.3s;
  }

  & .subtitle {
    color: #000000;

    &:hover {
      color: coral;
    }
  }

}

.bottom {
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>