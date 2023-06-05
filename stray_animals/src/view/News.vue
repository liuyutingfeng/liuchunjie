@<template>
    <div id="News">
        <div id="banner"><img src="@/assets/images/banner_5.jpg" alt=""></div>
        <div id="content" v-show="News_show">
            <div class="news" v-for="(item,index) in news" :key="index" @click="router_child(index)">
                <div class="myimg"><img :src="require(`@/assets/images/news_${index+1}.jpg`)" alt=""></div>
                <div class="mytext">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.text.split('。')[0] }}</p>
                    <span class="new_center">{{ item.publication }}</span>
                    <span class="date">{{ item.date }}</span>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name:'News',
    data() {
        return {
            News_show : true,
        }
    },
    computed:{
        ...mapState("content_Info",{"news":"news_info"})
    },
    watch:{
        $route(now,old){
         if('News' === this.$route.name){
          this.News_show = true;
          }else{
           this.News_show = false;
           }
         },
     },
     methods:{
        router_child(index){
            this.$nextTick(()=>{
                this.$router.push({
                path:'/newsChild',
                name:'news2',
                query:{id:index,}
            },()=>{})       /*解决重复点击路由导航而出现控制台报错问题*/ 
             })}
            },
    mounted(){
    if('News' === this.$route.name){
          this.News_show = true;
          }else{
           this.News_show = false;
           }
     }
}
</script>

<style lang="less" scoped>
      @import url(@/assets/Css/view.css);
    #content{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    .news{
        width: 75%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
            border-bottom: 1px solid #DEDEDE;
            cursor: pointer;
            transition: all 0.5s;
            &:hover{
              box-shadow: 0px 0px 20px 5px #DEDEDE;
              h4{
                color: #F7BD04;
              }
            }
            .myimg{
            width: 22%;
            margin: 2.3% 0;
            img{
                width: 100%;
            }
        }
           .mytext{
            width: 70%;
            height: 50%;
            h4{
            font-weight: 500;
          }
          .new_center{
           display: flex;
            width: 10%;
            height: 10%;
            justify-content: center;
            align-items: center;
            font-size: 10px;
            color: #747474;
            border: 1px solid #747474;
            border-radius: 15px;
          }
          .date{
            float: right;
            font-size: 14px;
            color: #747474;
          }
          p{
            line-height: 25px;
            font-size: 14px;
            margin: 4%  0%;
           color: #747474;
          }
          }
        }
    }
</style>