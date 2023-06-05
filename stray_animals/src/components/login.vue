@<template>
  <div id="box" v-show="isshow">
  <div id="login">
      <span id="welcome">欢迎老板</span>
      <!-- 老式通过action传参，method声明类型，新一代可通过按钮直接axios传参 -->
      <!-- <form> -->
        <label for="user">
          <div class="iconfont">
            <div class="icon-yonghu">
              <!-- 用户名 -->
              <input type="text" name="user"  placeholder="用户名" v-model="form.username">
            </div>
          </div>
        </label>
        
        <label for="password">
          <div class="iconfont">
            <div class="icon-mima">
              <!-- 密码 -->
              <input type="password" name="password"  placeholder="密码" v-model="form.password">
            </div>
          </div>
        </label>
        <button @click="login">登录</button>
      <!-- </form> -->
    </div>
    <span id="close" @click="isshow = !isshow">X</span>
  </div>
</template>

<script>
import {userLogin} from '../api/user';
import {  adminLogin} from "../api/admin";
import { mapActions ,mapMutations} from 'vuex';
export default {
    name:"login",
    data() {
      return {
        isshow:false,
        form:{
         username:'',
         password:''
         }
      }
    },
    watch:{
      isshow:{
      immediate:true,
      handler(newValue){
        if(!newValue){
        //  关闭遮罩，解除禁止背景滚动
        document.removeEventListener('mousewheel', this.mousewheelHandler, {passive: false})
         }else{
        // 开启遮罩，禁止背景滚动
        document.addEventListener('mousewheel', this.mousewheelHandler, {passive: false})
        }
       }
      }},
      methods: {
        ...mapActions('user',['user_login']),
        ...mapMutations('user',['$_setStorage']),
        ...mapMutations('user',['admin_login']),
        mousewheelHandler (e) {
        e.preventDefault()
      },
      login() {
        this.isshow = !this.isshow;
        const _this = this

        if(this.form.username === '' || this.form.password === ''){
              alert('账号或密码不能为空');
            }else if(this.form.username === 'admin'){
              adminLogin(this.form)
              .then(res=>{
               let payload = {username:res.data.data.name,Authorization:res.data.token}
               _this.admin_login(payload)
               _this.$router.push({path:'/Personal'},()=>{});
               alert("您好"+res.data.message)
               }).catch(err=>{alert(err.response.data.msg)})
            }else{
              userLogin(this.form)
              .then((res) => {
              _this.$_setStorage({Authorization:res.data.token});
              _this.$router.push({path:'/Home'},()=>{});
              alert('登录成功')
              _this.user_login(res.data.data)
                }).catch((err) => {alert(err.response.data.msg)})
           
            // this.$router.push({path:'/'},()=>{})
             }
        
    }

      },
      created(){
        this.$bus.$on('mylogin',()=>{this.isshow = true});
      },
      beforeDestroy(){
       this.$bus.$off();
       }

}
</script>

<style lang="less" scoped>
@import url(@/assets/Css/iconfont.css);
    /**/
    #box{
      width: 100%;
      height: 100vh;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      z-index: 100;
      background:rgba(0,0,0,0.8); filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);
    }
    #login{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
       width: 30%;
        height: 400px;
        display: flex;
        justify-content: space-evenly ;
        align-items: center;
        flex-direction: column;
        backdrop-filter: blur(5px);
        // box-shadow: 0px 0px 20px 1px white ;
        background: linear-gradient(120deg,#FCAD8C 0%, #DBC3C9 100%);
        border-radius: 20px;
      z-index: 100;
    }
    .icon-mima,.icon-yonghu,body{
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        font-size: 20px;
      }

      #login #welcome{
        font-size:30px ;
      }
      // #login form{
      //   width: 100%;
      //   height: 60%;
      //   display: flex;
      //   justify-content:space-evenly ;
      //   align-items: center;
      //   flex-direction: column;
      // }
      #login  #signup,a {
        font-size: 10px;
        text-decoration: none;
      }
      #login  input {
        width: 200px;
        height: 25px;
        border: none;
        border-bottom: 2px solid white;
        background: transparent;
        padding-bottom: 0;
      }
      #login  button{
        width: 40%;
        height: 15%;
        background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);;        border: none;
        cursor: pointer;
        border-radius: 15px;
      }
      #close{
        display: block;
        position: absolute;
        right: 25%;
        top: 15%;
        font-size: 30px;
        color: white;
        cursor: pointer;
    }
</style>