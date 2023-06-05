@<template>
    <div id="Project">
        <div id="banner"><img src="@/assets/images/banner_6.jpg" alt=""></div>
        <div id="content">
            <div id="article">
                <h2>{{society.name}}</h2>
              <span>{{society.English}}</span>
              <p>{{society.about}}</p>
            </div>
            <div id="myproject">
                <div class="pro_item" v-for="(item,index) in myproject" :key="index">
                    <div class="img"><img :src="require(`@/assets/images/introduce_${index+1}.jpg`)" alt=""></div>
                    <div class="text">
                        <h4>流浪动物救助</h4>
                        <p>主要工作之一救助病残的流浪猫狗，特别是不给于救助便会危及生命的小动物。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name:'Project',
    data() {
        return {
            myproject:[{
         pro_name:'流浪动物救助',
         pro_text:'主要工作之一救助病残的流浪猫狗，特别是不给于救助便会危及生命的小动物。   '
         },{
         pro_name:'流浪动物救助',
         pro_text:'主要工作之一救助病残的流浪猫狗，特别是不给于救助便会危及生命的小动物。   '
         },{
         pro_name:'流浪动物救助',
         pro_text:'主要工作之一救助病残的流浪猫狗，特别是不给于救助便会危及生命的小动物。   '
         },]
        }
    },
    computed:{
        ...mapGetters("content_Info",{'society':'society_three'})
     }
}
</script>

<style lang="less" scoped>
   @import url(@/assets/Css/view.css);
    #content{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        #article{
            width: 70%;
            h2{
            font-weight: 100;
          }
          span{
            display: block;
            margin: 2% 0px ;
            font-size: 13px;
            color: #8D8D8D;
          }
          p{
            line-height: 35px;
            font-size: 15px;
            color: #8D8D8D;
            
          }
        }
        #myproject{
            width: 70%;
            display: flex;
            justify-content: space-between;
            margin: 2% 0 5% 0;
            .pro_item{
                width: 30%;
                text-align: center;
                box-shadow: 0px 0px 10px 5px #DEDEDE;
                .img{
                    margin: 15% 0 5% 0;
                }
                .text{
                    h4{
                     font-weight: 500;
                     margin: 5% 0;        
                    }
                    p{
                     width:75% ;
                     margin: 0 0 25% 12%;
                     color: #8D8D8D;
                    }
                }
            }
        }
    }
</style>