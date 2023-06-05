@<template>
  <div id="manageanimal">
    <table>
        <tr>
          <th>宠物名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>品种</th>
          <th>简介</th>
          <th>状态(1/0)</th>
          <th></th>
        </tr>
        <tr v-for="(item,index) in animal_info" :key="index" > 
          <td>
            <span  v-show="numshow === -1">{{item.name}}</span>
        </td>
          <td>
            <span  v-show="numshow === -1">{{item.age}}</span>
            <input type="text"  v-model="form.age" v-show="numshow === index">
        </td>
          <td>
            <span  v-show="numshow === -1">{{item.sex}}</span>
            <input type="text"  v-model="form.sex" v-show="numshow === index">
        </td>
          <td>
            <span  v-show="numshow === -1">{{item.type}}</span>
            <input type="text"  v-model="form.type" v-show="numshow === index">
        </td>
          <td class="introduction">
            <span  v-show="numshow === -1">{{item.introduction}}</span>
            <input type="text"  v-model="form.introduction" v-show="numshow === index">
        </td>
          <td>
            <span  v-show="numshow === -1">{{item.status === '1' ? '已领养':'待领养'}}</span>
            <input type="text"  v-model="form.status" v-show="numshow === index">
        </td>
          <td> <el-row>
            <el-button  plain @click='Look(index,item)'  v-show="numshow === -1">查看</el-button>
            <el-button type="primary" plain @click='Edit(index,item)'  v-show="numshow === -1">编辑</el-button>
            <el-button type="success" plain @click='formconfirm'  v-show="numshow === index">确定</el-button>
        </el-row></td>
        </tr>
      </table>
      <div id="showcase" ref="showcase">
        <h4>名字</h4>
        <p ref="name"></p>
        <h4>年龄</h4>
        <p ref="age"></p>
        <h4>性别</h4>
        <p ref="sex"></p>
        <h4>种类</h4>
        <p ref="type"></p>
        <h4>介绍</h4>
        <p ref="introduction"></p>
        <h4>状态</h4>
        <p ref="status"></p>
        <el-row>
            <el-button  type="primary" plain @click='close' >关闭</el-button>
        </el-row>
      </div>
    </div>
  
</template>

<script>
import { mapState } from 'vuex';
import {manageAnimal_info} from '../../api/admin'

export default {
    name:'manageanimal',
    data() {
        return {
            form:{
                name:'',
                age:'',
                sex:'',
                type:'',
                introduction:'',
                status:''
             },
             numshow:-1,
        }
    },
    computed:{
     ...mapState('content_Info',['animal_info'])
     },
     methods: {
        Edit(index,item){
          this.numshow = index;
          this.form = item;
        },
        Look(index,item){
          this.$refs.name.innerText = item.name;
          this.$refs.age.innerText = item.age;
          this.$refs.sex.innerText = item.sex;
          this.$refs.type.innerText = item.type;
          this.$refs.introduction.innerText = item.introduction;
          this.$refs.status.innerText = item.status;
          this.$refs.showcase.style.display = 'block';
         },
         formconfirm(){
            this.numshow = -1;
            manageAnimal_info(this.form).then(res=>{
             alert("编辑成功");
             this.$router.go(0)
             }).catch(err=>{console.log(err);})
            },
        close(){
            this.$refs.showcase.style.display = 'none';
             }
     },

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