@<template>
    <div id="managenew">
      <table>
        <tr>
          <th>标题</th>
          <th>内容</th>
          <th>出版社</th>
          <th>日期</th>
          <th></th>
        </tr>
        <tr v-for="(item,index) in news_info" :key="index" > 
          <td>
            <span  v-show="numshow === -1">{{item.title}}</span>
            <input type="text" v-model="form.title"  v-show="numshow === index">
          </td>
          <td>
            <span   v-show="numshow === -1" >{{item.text}}</span>
            <input type="text" v-model="form.text"   v-show="numshow === index">
          </td>
          <td>{{item.publication}}</td>
          <td>{{item.date}}</td>
          <td> <el-row>
            <el-button  plain @click='Look(item)' v-show="numshow === -1"  >查看</el-button>
            <el-button type="primary" plain @click='Edit(index,item)'  v-show="numshow === -1" >编辑</el-button>
            <el-button type="success" plain @click='formconfirm'  v-show="numshow === index">确定</el-button>
        </el-row></td>
        </tr>
      </table>
      <div id="showcase" ref="showcase">
        <h4>标题</h4>
        <p ref="title"></p>
        <h4>内容</h4>
        <p ref="text"></p>
        <h4>出版社</h4>
        <p ref="publication"></p>
        <h4>日期</h4>
        <p ref="date"></p>
        <el-row>
            <el-button  type="primary" plain @click='close' >关闭</el-button>
        </el-row>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState ,mapMutations} from 'vuex';
  import {manageNews_info} from '../../api/admin'
  export default {
      name:'managenew',
      data() {
          return {
            form:{
              title:'',
              oldtitle:'',
              text:'',
              publication:'',
              date:''
            },
            numshow:-1
          }
      },
      computed:{
        ...mapState('content_Info',['news_info'])
      },
      methods: {
        Edit(index,item){
          this.numshow = index
          this.form = item;
          this.form.oldtitle = item.title
        },
        Look(item){
          this.$refs.title.innerText = item.title;
          this.$refs.text.innerText = item.text;
          this.$refs.publication.innerText = item.publication;
          this.$refs.date.innerText = item.date;
          this.$refs.showcase.style.display = 'block';
         },
         formconfirm(){
          this.numshow = -1;
          manageNews_info(this.form).then(res=>{
            alert("编辑成功");
             this.$router.go(0)
           }).catch(err=>{console.log(err);})
          },
          close(){
            this.$refs.showcase.style.display = 'none';

           }
      },
      mounted(){
  
       }
  }
  </script>
  
  <style lang="less" scoped>
  
  @import url(../../assets/Css/managetable.css);
table{
    table-layout:fixed;
    width: 1100px;
    height: 600px;
}
input{
  margin-top: 10px;
  line-height: 30px;
}
  #showcase{
    display: none;
    width: 50%;
    height: 50%;
   text-align: center;
    position: fixed;
    left: 50%;
    top: 50%;
    overflow: scroll;
    transform: translate(-50%,-50%);
    box-shadow: 0px 0px 10px 5px #DEDEDE;
    background: white;
    z-index: 100;

  }
  </style>