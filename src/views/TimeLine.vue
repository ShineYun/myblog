<template>
  <!--flexbox布局-->
  <section class="layout flexbox">
    <article class="left-center-right">
      <div class="left">
        <h1>TimeLine</h1>
      </div>
      <div class="center">
          <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                <h4>Update Github template</h4>
                <p>Tom committed 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <h4>Update Github template</h4>
                <p>Tom committed 2018/4/3 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>Update Github template</h4>
                <p>Tom committed 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>

      </div>
      <div class="right"></div>
    </article>
  </section>
</template>
<script>
export default {

}
</script>

<style lang="less">

.layout.flexbox .left-center-right{
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

.el-timeline-item{
  & .el-timeline-item__timestamp{
    color: black;
  }

}


</style>