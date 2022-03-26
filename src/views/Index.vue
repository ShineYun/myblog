<template>
  <!--flexbox布局-->
  <section class="layout flexbox">
    <article class="left-center-right">
      <div class="left"></div>
      <div class="center">
        <div id="title">
          <span>ShineYun - Blog</span>
        </div>
        <el-row>
          <el-col
              v-for="(o, index) in 6"
              :key="index"
              :span="8"
          >
            <el-card class="card" >
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
          </el-col>
        </el-row>
      </div>
      <div class="right"></div>
    </article>
  </section>

</template>

<script>
export default {
  components: {},

  data(){
    return{
      currentDate: '2020-03-03',
    }
  },
}

</script>

<style lang="less">

.layout {
  height: calc(100vh - 60px);
}

.layout.flexbox .left-center-right{
  height: 100%;
  display: flex;
}
.layout.flexbox .left {
  width: 200px;
}
.layout.flexbox .center {
  position: relative;
  height: 100%;
  flex: 1;
  backdrop-filter: blur(5px);
  & #title {
    font-size: 50px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .el-row{
    height: calc(100% - 100px);
    overflow: hidden scroll;
  }
}
.layout.flexbox .right {
  width: 200px;
}

.card{
  width: 90%;
  height: 92%;
  border-radius: 12px !important;
  &:hover {
    box-shadow:   9px 11px 12px 7px #e5e5e5;
    transition: 0.3s;
   }
  & .subtitle{
    color: #000000;
    &:hover{
      color: coral;
    }
  }

}

.bottom{
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>