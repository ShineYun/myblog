<template>
  <!--flexbox布局-->
  <section className="layout flexbox">
    <article className="left-center-right">
      <div className="left">
        <h1>Info</h1>
      </div>
      <div className="center info-bg">
        <div class="center-align">
          <img  id="avatar" src="https://avatars.githubusercontent.com/u/44264278?s=400&u=7fad505b09aefe3673b4dbf1d7aceddea4d24ca4&v=4">
          <h1>ShineYun-云生</h1>
          <p>一战落榜生</p>
          <a href="https://github.com/ShineYun">
            <img id="github-svg" src="https://img.icons8.com/color-glass/2x/github-2.png">
          </a>

          <p>
            Mail:kenelm.zheng@gmail.com
          </p>
        </div>


      </div>
      <div className="right"></div>
    </article>
  </section>
</template>
<script>
export default {}
</script>

<style lang="less">

#avatar{
  height: 200px;
  width: 200px;
  border-radius: 50%;
}
#github-svg{

  height: 50px;
  width: 50px;
}

.layout.flexbox .left-center-right {
  display: flex;
}

.layout.flexbox .left {
  width: 200px;
}

.layout.flexbox .center {
  padding-top: 20px;;
  flex: 1;
}


.layout.flexbox .right {
  width: 200px;
}
.info-bg{

  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 10%;
  border-radius: 20px;
}


</style>