@<template>
    <div id="box" v-show="isshow">
    <div id="signup" >
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
                <input type="password" name="password" placeholder="密码" v-model="form.password">
              </div>
            </div>
          </label>
          <label for="ispassword">
            <div class="iconfont">
              <div class="icon-querenmima">
                <!-- 确认密码 -->
                <input type="password" name="ispassword"  placeholder="确认密码" v-model="form.ispassword">
              </div>
            </div>
          </label>
          <button @click="signup">立刻注册</button>
        <!-- </form> -->
      </div>
      <span id="close" @click="isshow = !isshow">X</span>
    </div>
</template>

<script>
import {userSignup} from "../api/user";
import { mapState,mapActions, mapMutations} from 'vuex';

export default {
    name:'signup',
    data() {
        return {
            isshow:false,
            form:{
             username:'',
             password:'',
             ispassword:''
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
        ...mapMutations('user',['USER_DELETE','$_setStorage','user_signup']),
        mousewheelHandler (e) {
        e.preventDefault()
      },
      signup(){
        // 前置条件
        // 1.判断
        // 2.清除登录信息（退出）
        this.isshow = !this.isshow;
        const _this = this
        if(this.form.username === '' || this.form.password === '' || this.form.ispassword === ''){
              alert('账号或密码不能为空');
            }else if(this.form.username === 'admin'){
              alert('账号不能为admin');
            } else if(this.form.password !== this.form.ispassword){
              alert('前后密码输入不一致，请重新输入');
            }else{
              userSignup(_this.form).then(result=>{
                if(result.data.data === '注册成功'){
                 alert(result.data.data)
                 _this.$_setStorage({Authorization:result.data.token})
                 _this.user_signup(_this.form.username)
                 _this.$router.push({path:'/Home'},()=>{});
                 }else{
                  alert(result.data.msg)
                  }
               }).catch(err=>{alert(err.response.data.msg)})
            }
       
       },
      },
      mounted(){
       this.$bus.$on('mysignup',()=>{this.isshow = true})
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
.center{
    display: flex;
    justify-content: center;
    align-items: center;
}
.evenly{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
}

#signup{
    position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
   width: 30%;
   height: 400px;
    position: relative;
    backdrop-filter: blur(5px);
    box-shadow: 0px 0px 7px 1px #2A2E39 ;
    border-radius: 20px;
    background: linear-gradient(120deg,#FCAD8C 0%, #DBC3C9 100%);
    position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      z-index: 100;
    z-index: 100;
    .evenly();
    #welcome{
        font-size:30px ;
    }
    // form{
    //     width: 100%;
    //     height: 60%;
    //     .evenly();
        input {
            width: 200px;
            height: 25px;
            border: none;
            border-bottom: 2px solid white;
            background: transparent;
            padding-bottom: 0;
            color: #F8F8F6;
          }
          input::placeholder{
            color: black;
            opacity: 0.6;
        }
        button{
            width: 40%;
            height: 13%;
            background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);;        border: none;
            border: none;
            cursor: pointer;
            border-radius: 15px;
        }
    // }
    .iconfont{
        width: 100%;
        padding-left: 20px;
        font-size: 20px;
        .icon-fanhui{
            font-weight: bold;
            padding-left: 5px;
            cursor: pointer;
        }
    }
    
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