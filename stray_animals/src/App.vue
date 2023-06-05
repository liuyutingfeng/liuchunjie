<template>
   <div id="App">
        <!-- 首页组件 -->
        <login></login>
        <signup></signup>
        <Myhead></Myhead>
        
        <div id="Mycomponent">
         <keep-alive>
         <router-view></router-view>
         </keep-alive>
        </div>
        <Myfoot></Myfoot>
    </div>
</template>

<script>
import Myhead from './components/head.vue';
import Myfoot from './components/foot.vue';
import login from './components/login.vue';
import signup from './components/signup.vue'
export default {
    name:"App",
    components:{Myhead,Myfoot,login,signup},
    methods:{
     MyRouter(nav){
      this.$router.push({
          name:`${nav}`,
          path:`/${nav}`,
          // params:{},
       },()=>{})
      },
     },
     mounted() {
        // 全局事件绑定路由导航
        this.$bus.$on('nav_router',this.MyRouter)
     },
     created() {
       // 请求组织相关数据库信息
       this.$store.dispatch("content_Info/society",{
        _this : this,
        url:'/society_info'
       });
        // 请求相关人员数据库信息
        this.$store.dispatch("content_Info/person",{
        _this : this,
        url:'/person_info'
       });
       // 请求新闻数据库信息
       this.$store.dispatch("content_Info/news",{
        _this : this,
        url:'/news_info'
       });
       // 请求动物数据库信息
       this.$store.dispatch("content_Info/animals",{
        _this : this,
        url:'/animal_info'
       });
       // 请求公告数据库信息
       this.$store.dispatch("content_Info/notice",{
        _this : this,
        url:'/notice_info'
       });
     },
     beforeDestroy(){
      // 解绑
        this.$bus.$off('nav_router');
      }
    
}
</script>
<style lang="less" scoped>
@import url(@/assets/Css/view.css);
</style>
