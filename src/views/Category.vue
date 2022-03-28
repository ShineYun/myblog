<template>
  <!--flexbox布局-->
  <section class="layout flexbox">
    <article class="left-center-right">
      <div class="left">
        <h1>Category</h1>
      </div>
        <div class="center">
          <div class="category-menu" >
            <router-link to="/blog" v-for="(category) in categories">
              <el-tag class="category-item" type="success" effect="dark" shadow="hover">
                {{category.title}}
              </el-tag>
<!--              <el-card class="category-item" shadow="hover" >-->
<!--                  {{category.title}}-->
<!--              </el-card>-->
            </router-link>
          </div>
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

.category-menu{
  width: 100%;
  height: 50px;
  margin: 20px;
  display: flex;
  flex-wrap: wrap;

  & a{
    height: 50px;
    width: 100px;
    margin: 20px;
  }

  & a .category-item{
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}




</style>