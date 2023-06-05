@<template>
    <div id="Personal" >
      <div v-show="user_info.username === 'admin' ? false:true">
        <h1>欢迎您&nbsp;&nbsp;&nbsp;{{user_info.username}}</h1>
        <h2>已领养的宠物：{{user_info.tag_animal}}</h2>
      </div>
      <div id="content" v-if="user_info.username == 'admin'">
        <div id="nav">
            <ul>
                <li v-for="(item,index) in manage" :key="index" 
                @click="mynav(index)"
                :class="{active:isactive === index}">{{ item }}</li>
            </ul>
        </div>
        <div id="manage_info">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
  
        <div id="mybtn">
        <el-row>
            <el-button type="danger" plain @click="delete_account">注销账号</el-button>
            <el-button type="info" @click="back">退出登录</el-button>
        </el-row>
        </div>
      
    </div>
</template>

<script>

import { mapState,mapActions, mapMutations} from 'vuex';
import {deleteUserInfo} from '../api/user'
export default {
    name:'Personal',
    data() {
        return {
            manage:['用户信息','宠物信息','新闻信息','公告信息'],
            nav_router:['manageuser','manageanimal','managenew','managenotice'],
            person:[],
            isactive:0,
           
        }
    },
    computed:{
      ...mapState('user',['user_info']),
      
     },
     methods: {
        ...mapActions('user',['user_delete']),
        ...mapMutations('user',['USER_DELETE']),
        // user_delete(user_info.username)
        delete_account(){
            const _this = this;
            if(_this.user_info.username === 'admin'){
             alert('抱歉，管理员不能自行注销')
             }else{
                _this.user_delete(_this.user_info.username)
              }
        },
        back(){
         this.USER_DELETE('');
         this.$router.replace({path:'/Home'},()=>{})
         },
         mynav(index){
          this.isactive = index;
          this.$router.push({name:`${this.nav_router[index]}`},()=>{})
          },

     },
     mounted() {
        
     },
}
</script>

<style lang="less" scoped>
      @import url(@/assets/Css/view.css);
    #Personal{
        height: 500px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        #mybtn{
            width: 60%;
            display: flex;
            justify-content: space-evenly;
            margin:2% 0;
        }
        #content{
            width: 80%;
            height: 60vh;
            display: flex;
            #nav{
            width: 20%;
            height: 100%;
              ul{
                width: 100%;
                height: 100%;
                text-align: center;
                li{
                    width: 100%;
                    height: 25%;
                    line-height: 100px;
                    border: 1px solid #DABE7C;
                    color: #DABE7C;
                }
                .active{
                    background:#DABE7C;
                    color: white;
                }
              }
            }
            #manage_info{
            width: 80%;
            height: 400px;
            border: 1px solid #E9E9E9;
            overflow: scroll;
            }
        }
    }
</style>