@<template>
  <div id="adoptChild">
        <div id="content">
         <div id="animal_info">
            <div id="img_info">
                <img :src="require(`@/assets/images/list_0${tag+1}.jpg`)"  id="big" alt="">
                <img :src="require(`@/assets/images/list_0${tag+1}.jpg`)"  id="small" alt="">
                <br>
                <button @click="forward" class="img_btn">上一个</button>
                <button  @click="next"  class="img_btn">下一个</button>
            </div>
            <div id="introduce">
                <h2>{{mylists[tag].name}}</h2>
                <span>年龄：{{mylists[tag].age}}岁</span><br>
                <span>性别：{{mylists[tag].sex}}</span><br>
                <span>品种：{{mylists[tag].type}}</span>
                <p>简介：{{mylists[tag].introduction}}</p>
                <button class="btn  iconfont icon-dianhua">18700000000</button>
                <!-- 根据信息比对来判断领养结果，激活状态（：class={active：信息比对结果}） -->
                <button class="btn" :class="{active:mylists[tag].status == '1'}" @click="adapt_state()">{{ mylists[tag].status == '1' ? '已被领养': '立刻预约' }}</button>
            </div>
         </div>
         <div id="production"><span>产品详情</span></div>
        </div>
  </div>
</template>

<script>
import {adoptAnimal} from '../../api/user'
import { mapState ,mapGetters,mapMutations} from 'vuex';
import { Result } from 'element-ui';
export default {
    name:'adoptChild',
    data() {
        return {
            tag:Number(this.$route.query.id),
        }
    },
    watch:{
        
     },
    computed:{
        ...mapState("content_Info",{'mylists':'animal_info'}),
        ...mapState('user',['user_info']),
        ...mapGetters("user",['animalname']),
        animal_name(){
         let _this = this;
         return this.mylists[_this.tag].name 
         }
     },
    methods: {
        ...mapMutations('user',['updatetag_animal']),
        next(){
            this.tag++;
            if(this.tag >= this.mylists.length){
             this.tag = this.mylists.length-1;
             }
            this.$router.replace({
                query:{id:this.tag}
             },()=>{})
        },
        forward(){
            this.tag--;
            if(this.tag <= 0){
             this.tag = 0;
             }
            this.$router.replace({
                query:{id:this.tag}
             },()=>{})
        },
        adapt_state(){
            let _this = this;
            const payload = {
                username:_this.user_info.username,
                animalname:_this.animal_name
            }
            adoptAnimal(payload.username,payload.animalname).then(result=>{
                // 成功后修改vuex和localstorage的tag_animal
                if(result.data.msg === '领养成功'){
                 alert(result.data.msg)
                    _this.updatetag_animal(payload.animalname)
                 }else{
                  alert(result.data.msg)
                  }
            }).catch(function(err){console.log(err);})
         }
    },
    mounted() {
        console.log();
    },
}
</script>

<style lang="less" scoped>
   @import url(@/assets/Css/view.css);
 @import url(@/assets/Css/iconfont.css);
 @p_style:{
        line-height: 40px;
        font-size: 15px;
        color: #66667A;
    }
    @text_ellipsis:{
         /* 单行文本用省略号 */
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
    }
    #content{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        #animal_info{
            width: 70%;
            display: flex;
            justify-content: space-between;
            #img_info{
                width: 40%;
                #big{
                    width: 100%;
                }
                #small{
                    width: 20%;
                }
                .img_btn{
                    width: 20%;
                    line-height: 23px;
                    border: 1px solid #E9E9E9;
                    border-radius:13px ;
                    background: transparent;
                    margin: 5% 15%;
                    cursor: pointer;
                    &:hover{
                        box-shadow: 0 0 10px 2px #E9E9E9;
                    }
                }
            }
            #introduce{
                width: 57%;
                h2{
                    font-family: '微软雅黑';
                    font-weight: 500;
                    margin: 2% 0;
                }
               span{
                @p_style();
                }
                p{
                 @p_style();
                 @text_ellipsis()
                }
                .btn{
                    width: 35%;
                    line-height: 35px;
                    font-size: 16px;
                    background: transparent;
                    color: #FFBC00;
                    border: 1px solid #FFBC00;
                    border-radius: 20px;
                    transition:all 0.5s;
                    cursor: pointer;
                    margin: 5% 3%;
                    &:hover{
                        background: #FFBC00;
                        color: white;
                    }
                }
                .active{
                    color: white;
                    background: red;
                }
                .active:hover{
                    color: white;
                    background: red;
                }
            }
        }
        #production{
            width:70%;
            margin: 5% 0;
            border: 1px solid #E9E9E9;
            span{
                display: block;
                width: 15%;
                height: 40px;
                text-align: center;
                line-height: 40px;
                font-size: 20px;
                font-weight: 300;
                color: #FFBC00;
                border: 1px solid #E9E9E9;
                border-top: 3px solid #FFBC00;
               
            }
        }
    }

</style>