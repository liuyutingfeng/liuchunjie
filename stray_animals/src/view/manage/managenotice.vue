@<template>
    <div id="managecontent">
      <div id="content">
        <h2 v-show="ishsow">{{ notice_info[0].content }}</h2>
        <input type="text"  v-model="form_notice.newcontent" v-show="!ishsow">
        <el-row>
            <el-button type="primary" plain @click='Edit()'  v-show="ishsow">编辑</el-button>
            <el-button type="success" plain @click='formconfirm'  v-show="!ishsow">确定</el-button>
        </el-row>
      </div>
    </div>
  </template>
  
  <script>
  import {manageNotice_info} from '../../api/admin'
  import { mapState } from 'vuex';

  export default {
      name:'managecontent',
      data() {
          return {
            form_notice:{
             newcontent:'',
             oldcontent:''
             },
             ishsow:true
          }
      },
      computed:{
        ...mapState('content_Info',['notice_info'])
      },
      methods: {
        Edit(){
          this.ishsow = false;
          this.form_notice.oldcontent = this.notice_info[0].content;
         },
         formconfirm(){
          this.ishsow = true
          if(this.form_notice.newcontent !== ''){
            manageNotice_info(this.form_notice).then(res=>{
            alert("编辑成功");
             this.$router.go(0)
           }).catch(err=>{console.log(err);})
           }else{
            this.form_notice.newcontent = this.form_notice.oldcontent
            }
         
          }
      },
  
  }
  </script>
  
  <style lang="less" scoped>
  #managecontent{
    text-align: center;
  }
  
  
  </style>