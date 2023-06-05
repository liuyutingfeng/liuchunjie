@<template>
    <div id="About">
        <div id="banner">
            <img src="@/assets/images/banner_4.jpg" alt="">
        </div>
        <div id="content">
            <div id="society_about1">
              <div id="mysociety">
                <div id="myimg"><img src='@/assets/images/content_img1.jpg' alt=""></div>
                <div id="society_info">
                   <div id="mytext">{{ society_about.name }}<br/>{{ society_about.English }}</div>
                    <div id="mynum"
                        ><div>300+<br/><span>救助过流浪猫</span></div>
                        <div>500+<br/><span>救助过流浪狗</span></div>
                        <div>400+<br/><span>生活在救助基地</span></div></div>
                </div>
              </div>
              <div id="mybutton">联系我们<div id="animate"></div></div>
            </div>
            <div id="society_about2">
                <p>{{ society_about.about }}</p>
            </div>
            <div class="person_about">
                <div class="per_info" v-for="(item,index) in per_info" :key="index">
                    <div class="info" v-if="1 !== index">
                        <h3>{{ item.name }}</h3>
                        <span>{{ item.job }}</span>
                        <p>{{ item.purpose }}</p>
                        <div class="btn">
                            <div class="mymove">
                             <span>联系我们</span>
                             <span>联系我们</span>
                            </div>
                        </div>
                    </div>
                    <div class="per-img" v-if="1 !== index"><img :src="require(`@/assets/images/人物${index+1}.jpg`)" alt=""></div>
                    <div class="per-img"  v-if="1 === index"><img :src="require(`@/assets/images/人物${index+1}.jpg`)" alt=""></div>
                    <div class="info" v-if="1 === index">
                        <h3>{{ item.name }}</h3>
                        <span>{{ item.job }}</span>
                        <p>{{ item.purpose }}</p>
                        <div class="btn">
                            <div class="mymove">
                             <span>联系我们</span>
                             <span>联系我们</span>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
           
        </div>
    </div>
  
</template>

<script>
import { mapGetters ,mapState} from 'vuex';
export default {
    name:"About",
    computed:{
        ...mapGetters("content_Info",{'society_about':'society_two'}),
        ...mapState("content_Info",{'per_info':'person_info'})

     },
    methods:{
        Getperinfo(data){
            this.person_about = data;
         }
     },
     mounted() {
      
     },
     created(){
        // 绑定事件，向home组件调用数据
        // this.$bus.$on('mydata','Getperinfo')
        // console.log("这是我返回的内容"+this.person_about[0]);
      },
    //  beforeDestroy(){
    //     this.$bus.$off("mydata");
    //   }
}
</script>

<style lang="less" scoped>
      @import url(@/assets/Css/view.css);
    // 段落格式--函数
    @p_style:{
        line-height: 35px;
        font-size: 14px;
        color: #8D8D8D;
    }
    #society_about1{
        width:100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        #mybutton{
            position: relative;
            width: 8%;
            text-align: center;
            line-height: 50px;
            overflow: hidden;
            font-size: 17px;
            cursor: pointer;
            background: #FFBC00;
            color: white;
            margin: 2% 0 4% 0;
            &:hover{
                #animate{ 
                 @keyframes myanimate {
                    from{
                     width: 0%;
                     height: 0%;
                     opacity: 0.6;
                    }
                    to{
                     width: 100%;
                     height: 200%;
                     opacity: 0;
                    }  
                    }
                  animation: myanimate 0.5s linear  1 ;
            }
            }
            #animate{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                opacity: 1;
                background-color: #404040;
                border-radius: 50%;
            }
           
        }
        #mysociety{
            width: 75%;
            display: flex;
            justify-content: space-between;
            #myimg{
                width: 40%;
                img{
                    width: 100%;
                }
            }
            #society_info{
                width: 56%;
                #mytext{
                    margin: 3% 0 8% 0;
                    @p_style()
                }
                #mynum{
                    display: flex;
                    justify-content: space-evenly;
                    width: 100%;
                    font-size: 40px;
                    line-height: 35px;
                    font-weight: bolder;
                   div{
                    width: 18%;
                    text-align: center;
                    span{
                        font-size: 400;
                        @p_style();
                    }
                }
                }
            }
        }
    }
    #society_about2{
        box-sizing: border-box;
        width: 75%;
        background: #F6F6F6;
        padding: 5% 10%;
        margin-bottom: 4%;
        @p_style();
    }
    .person_about{
        width: 100%;
        & .per_info:nth-child(2){
            background: #F6F6F6  ;
            width: 85%;
            .per-img{
                width:20%;
                img{
                    width: 100%;
                }
            }
        }
        .per_info{
            width:70%;
            margin-left: 15%;
            display: flex;
            justify-content: space-between;
            .info{
                width: 65%;
                position: relative;
                h3{
                    margin: 10% 0 2% 0;
                    font-weight: 400;
                }
               span,p{
                @p_style();
                }
                .btn{
                    width: 14%;
                    position: absolute;
                    bottom: 10%;
                    overflow: hidden;
                    border: 1px solid #FFBC00;
                    .mymove{
                        width: 200%;
                        transition: all 0.5s;
                       & span:nth-child(2){
                        background: #FFBC00;
                        color: white;
                        }
                        span{
                        width: 50%;
                        text-align: center;
                        line-height: 50px;
                        font-size: 17px;
                        cursor: pointer;
                        color: #FFBC00;
                        float: left;
                    }
                // 悬浮时移动.mymove，实现按钮切换
                    &:hover{
                    transform: translate(-50%,0%);
                }
                }
                }
            }
            .per-img{
                width:25%;
                padding: 0;
                img{
                    width: 100%;
                }
            }
        }
    }
</style>