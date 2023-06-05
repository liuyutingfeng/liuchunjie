@<template>
    <div id="Adopt">
        <div id="banner">
            <img src="@/assets/images/banner_3.jpg" alt="">
        </div>
        <div id="content" v-show="isShow">
            <div class="list"  v-for="(item,index) in mylists" :key="index" @click="router_child(index)">
                <div><img :src="require(`@/assets/images/list_0${index+1}.jpg`)" alt="加载错误"></div><br/>
                <span>{{ item.name }}</span><br/><br/>
                <p>性别：{{item.sex}}</p>
            </div>
        </div>
        <router-view></router-view>
    </div>
  
</template>

<script>
import { mapState } from 'vuex';
export default {
    name:'Adopt',
    data() {
        return {
            isShow :true,
        }
    },
    computed:{
        ...mapState("content_Info",{'mylists':'animal_info'})
     },
    watch:{
        $route(now,old){
         if('Adopt' === this.$route.name){
          this.isShow = true;
          }else{
           this.isShow = false;
           }
         },
    },
    methods: {
        router_child(index){
            this.$nextTick(()=>{
                this.$router.push({
                path:'/adoptChild',
                name:'adoptChild',
                query:{id:index,}
            },()=>{})       /*解决重复点击路由导航而出现控制台报错问题*/ 
             })
           
        },
    },
    mounted() {
        if('Adopt' === this.$route.name){
          this.isShow = true;
          }else{
           this.isShow = false;
           }
        },
}
</script>

<style lang="less" scoped>
   @import url(@/assets/Css/view.css);

    #content{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        .list{
            width: 21%;
            margin-bottom: 2%;
            transition: all 0.5s;
            text-align: center;
            cursor: pointer;
           div{
              width: 85%;
              margin: 6% 7.5%;
              overflow: hidden;
            img{
              width: 100%;
              transition: all 0.5s;
            }
        }
            span{
                font-size: 18px;
            }
            p{
                font-size: 14px;
                margin-bottom: 7%;
                color: #838383;
            }
        }
        .list:hover{
            box-shadow: 0px 0px 20px 5px #DEDEDE;
            img{
                transform: scale(1.1);
            }
            span{
                color: #DBC07C;

            }
        }

    }
</style>