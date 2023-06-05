@<template>
    <div id="manageuser">
      <table>
        <tr>
          <th>用户名</th>
          <th>用户密码</th>
          <th>性别</th>
          <th>手机号</th>
          <th>已领养宠物</th>
          <th></th>
        </tr>
        <tr v-for="(item,index) in mylist" :key="index" > 
          <td>{{item.username}}</td>
          <td>{{item.password}}</td>
          <td>{{item.sex}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.tag_animal}}</td>
          <td> <el-row>
            <el-button type="danger" plain @click="delete_account(item.username)">注销账号</el-button>
        </el-row></td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  import {getUser_info} from '../../api/admin'
  import { mapActions } from 'vuex'
  export default {
      name:'manageuser',
      data() {
          return {
              mylist:[],
          }
      },
      methods: {
        ...mapActions('user',['admin_delete']),
        delete_account(value){
         this.admin_delete(value)
         this.$router.go(0)
         alert('已成功删除');
         }
      },
     mounted(){
      getUser_info().then(res=>{
        this.mylist = res.data;
      }).catch(err=>{alert('用户数据获取错误');})
      }
  }
  </script>
  
  <style lang="less" scoped>
   @import url(../../assets/Css/managetable.css);
  </style>