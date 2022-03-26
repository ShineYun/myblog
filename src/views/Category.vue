<template>
  <!--flexbox布局-->
  <section class="layout flexbox">
    <article class="left-center-right">
      <div class="left"></div>
      <div class="center">
        <h1>Category</h1>
        <el-row :gutter="12">
            <el-col :span="8"
                    v-for="(category) in categories"
                    :key="category.index"
                    :to="category.to"
                    class="category-item"
            >

              <router-link to="/blog">
                <el-card shadow="hover">
                  {{category.title}}
                </el-card>
              </router-link>
            </el-col>
        </el-row>
      </div>
      <div class="right"></div>
    </article>
  </section>
</template>
<script>
export default {
  data(){
    return{
      categories:[
        {
          index:1,
          title:'类别1',
        },
        {
          index:1,
          title:'类别1',
        },
        {
          index:1,
          title:'类别1',
        },
        {
          index:1,
          title:'类别1',
        },
        {
          index:1,
          title:'类别1',
        },
        {
          index:1,
          title:'类别1',
        }
      ]
    }
  }
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
  flex: 1;
}
.layout.flexbox .right {
  width: 200px;
}

.category-item{
  margin-bottom: 10px;
  margin-top: 10px;
}


</style>