@<template>
  <div id="head">
          <!-- 商标 -->
          <div id="icon">
            <img src="@/assets/images/icon.jpg" alt="">
          </div>
          <!-- 顶部导航区 -->
            <div id="nav">
                <ul>
                   <li v-for="(item,index) in navs"
                    :key="index" 
                    @click="myRouter(index)" 
                    :class="{active:index===isActive}">
                    <!-- 标记--刷新后激活光标Bug，可根据路由meta（元信息）解决 -->
                     {{ item }}
                    </li>
                </ul>
            </div>
            <!-- 用户登录注册入口 -->
            <div id="login">
              欢迎您&nbsp;&nbsp;{{ user_info.username }}
              <div v-show="user_info.username === ''">
                <span @click="login">登录</span>/
                <span @click="signup">注册</span>
              </div>
            </div>
        </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name:'Myhead',
    data() {
      return {
        navs:["首页","领养动物","关于我们","新闻中心","公益项目","个人中心"],
        router_navs:['Home','Adopt','About','News','Project','Personal'],
        isActive :0,
      }
    },
    computed:{
     ...mapState('user',['user_info'])
     },
    methods:{
      myRouter(index){
       this.$bus.$emit('nav_router',this.router_navs[index])
       this.isActive = index;
       },
      //  mylogin(){
      //   this.$refs.mylogin.innerHTML= '柳雨听风'
      //   }
      login(){
        this.$bus.$emit('mylogin')
       },
       signup(){
        this.$bus.$emit('mysignup')
        }
     },
     mounted() {
     },

}
</script>

<style lang="less" scoped>
*{
    /* 流式布局----% */
    margin: 0;
    padding: 0;
}
 #head,#foot{
    width:100%;
    }
    #head{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 18px;
        #nav{
            width: 60%;
            ul{
                width: 100%;
                display: flex;
               justify-content: space-between;
               align-items: center;
                li{
                height: 110px;
                list-style-type: none;
                cursor: pointer;
               text-align: center;
               line-height: 110px;
                }
                .active{
                  border-bottom: 4px solid  #DABE7C;;
                  color: #DABE7C;
                }
              }
            }
            #icon,#login{
              cursor: pointer;
              width: 15%;
            }
            #nav>ul>li:hover,span:hover{
              color: #DABE7C;
            }
    }
</style>