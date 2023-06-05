@<template>
  <div id="Home">
    <div id="banner" ref="banner" @mouseout="myInterval" @mouseover="clear"   v-show="News_show">
          <button class="bannner_left" @click=btn_left>&lt;</button>
            <ul  ref="swiper">
                <li v-for="(img,index) in banner_imgs" :key="index" v-show=" 0 == index">
                <img :src="img.url"/>
                </li>
            </ul>
            <button class="banner_right" @click="btn_right">&gt;</button>
        </div>
        <!-- 内容区 -->
        <div id="content" v-show="News_show">
          <!-- 1--协会介绍 -->
          <div id="content_part1">
            <div id="part1_img">
              <img src="@/assets/images/index_1.jpg" alt="">
            </div>
            <div id="part1_text">
              <h2>{{ society.name }}</h2>
              <span>{{ society.English }}</span>
              <p>{{ society.about }}</p>
            </div>
          </div>
          <!-- 2--人员介绍 -->
          <div id="content_part2">
            <div class="person" v-for="(item,index) in per_info" :key="index">
              <img :src="require(`@/assets/images/人物${index+1}.jpg`)" alt="人物图片">
              <div class="part_text">
                <h4>{{ item.name }}</h4>
                <span>{{ item.job }}</span><hr/>
                <p>{{ item.purpose }}</p>
              </div>
            </div>
          </div>
          <!-- 3--新闻报告 -->
          <div id="content_part3">
            <div id="empty"></div>
            <div id="part3_video" @click="video_show = !video_show">
              <div class = "icon iconfont icon-24gf-playCircle">
                <img src="@/assets/images/index_3.jpg" alt="">
              </div>
              
            </div>
            <div id="part3_news">
              <div class="news" v-for="(item,index) in news.slice(0,3)" :key="index" @click="router_child(index)">
                <h4>{{item.title}}</h4>
                <p>{{ item.text.split("。")[0] }}</p>
                <span class="new_center">{{ item.publication }}</span>
                <span class="date">{{ item.date }}</span>
              </div>
            </div>
          </div>
        </div>
        <div id="myvideo" v-show="video_show">
          <div id="video_bgc">
          <video src="@/assets/images/Sun.mp4"
                  webkit-playsinline="true" 
                  playsinline="true" 
                  x-webkit-airplay="allow" 
                  x5-video-player-type="h5" 
                  x5-video-player-fullscreen="true"
                  controls
                  ></video>
                  <span id="cancel" @click="video_show = !video_show">x</span>
                </div>
        </div>
        <router-view></router-view>
      </div>
</template>

<script>
import { mapState ,mapGetters} from 'vuex';
export default {
    name:'Home',
    data() {
    return {
      video_show:false,
      News_show:true,
      banner_imgs:[
      {url:require('@/assets/images/banner_1.jpg')},{url:require('@/assets/images/banner_2.jpg') }],

    }
  },
  computed:{
      ...mapGetters("content_Info",{'society':'society_one'}),
      ...mapState("content_Info",{'per_info':'person_info',"news":"news_info"}),
     },
  watch:{
    video_show:{
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
     },
    //  根据url地址信息判断是否显示Home路由组件
     $route(now,old){
         if('Home' === this.$route.name){
          this.News_show = true;
          }else{
           this.News_show = false;
           }
         },
   },
  methods: {
    // banner轮播图(头尾交换)
    btn_left(){
        //拷贝出第一个图片
      let new_img = this.banner_imgs[0]; 
       //通过过滤器，过滤出第一张图片后覆盖原数组     
      this.banner_imgs = this.banner_imgs.filter((element,index)=>{     
          return  index != 0 ? element : "";
       })
        //在数组尾部加入第一张图片
       this.banner_imgs.push(new_img);  
     },
     btn_right(){
      let length = this.banner_imgs.length;
      //同left相反
      let new_img = this.banner_imgs[length-1];          
      this.banner_imgs = this.banner_imgs.filter((element,index)=>{      
          return  index != length-1 ? element : "";
       })
       this.banner_imgs.unshift(new_img);    
          
     },
     myInterval(){
        // 轮播图__定时器(left)
       this.clear();
        this.timer =  setInterval(()=>{
        let new_img = this.banner_imgs[0];       
          this.banner_imgs = this.banner_imgs.filter((element,index)=>{     
          return  index != 0 ? element : "";
       })
       this.banner_imgs.push(new_img);  
       },3000)
      },
      clear(){
          clearInterval(this.timer);
       },
      mousewheelHandler (e) {
        e.preventDefault()
      },
      router_child(index){
            this.$nextTick(()=>{
                this.$router.push({
                path:'/newsChild',
                name:'news1',
                query:{id:index,}
            },()=>{})       /*解决重复点击路由导航而出现控制台报错问题*/ 
             })
            }
  },
  mounted(){
    this.myInterval();
    // 触发全局事件，向about组件传递数据
    // this.$bus.$emit('mydata',this.per_info)
    // console.log("我是home组件",this.per_info[0]);
       
  },
  created() {
   
    console.log("初始化完成");
  },
}
</script>
<style  lang="less" scoped>
   /* buzhi*/
  @import url(@/assets/Css/iconfont.css);
  // 混合
  .video_position(){
    position: fixed;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
  }
/* buzhi*/
*{
    /* 流式布局----% */
    margin: 0;
    padding: 0;
}

   #banner,#content{
    width:100%;
    }
    #banner{
     position: relative;
        ul{
          display: flex;
          width: 100%;
            li{
             width: 100%;
              list-style-type: none;
              img{
                  width: 100%;
                }     
            }
          }
        button{
          position: absolute;
          top: 50%;
          height: 50%;
          transform: translate(0%,-50%);
          width: 4%;
          height: 8%;
          border: 0px;
          border-radius:15% ;
          font-size: 40px;
          color: white;
          background: transparent;
          backdrop-filter:brightness(85%);
          transition: all 0.5s;
          &:hover{
            backdrop-filter:brightness(60%);
            }
        }
        .bannner_left{
            left: 1%;
        }
        .banner_right{
            right: 1%;
        }
    }
    #content{
      #content_part1{
        position: relative;
        width: 100%;
        background-image:url(@/assets/images/index_2.jpg) ;
        background-size: cover;
        #part1_img{
          margin: 0 0 0 20%;
        }
        #part1_img>img{
          width: 40%;
        }
        #part1_text{
          position: absolute;
          right: 8%;
          top: 20%;
          width: 35%;
          height: 40%;
          h2{
            font-weight: 100;
          }
          span{
            display: block;
            margin: 5% 0px ;
            font-size: 13px;
            color: #8D8D8D;
          }
          p{
            line-height: 35px;
            font-size: 15px;
            color: #8D8D8D;
            
          }
        }
      }
      #content_part2{
        width: 100%;
        margin-top: 4%;
        background-image: url(@/assets/images/index_4.jpg) ;
        background-repeat:no-repeat ;
        background-size: 120%;
        display: flex;
        justify-content: space-evenly;
        .person{
          position: relative;
          width: 20%;
          margin-top: 15%;
          background: #8D8D8D;
         .part_text{
          box-sizing:border-box;
          position: absolute;
          top: 55%;
          width: 100%;
          height: 45%;
          background: #E9E6EC;
          h4{
            font-weight: 400;
            margin: 0 15% ;
          }
          span{
            display: block;
            margin: 5% 15% ;
            font-size: 12px;
            color: #8D8D8D;
          }
          p{
            width: 70%;
            height: 35%;
            margin: 5% 15% ;
            line-height: 35px;
            font-size: 13px;
            color: #8D8D8D;
            overflow: hidden;
            /* 多行文本用省略号 */
             text-overflow: ellipsis;
            /*  必备的盒子属性 */
            display: -webkit-box;
             /* 允许存在的行数 */
             -webkit-line-clamp: 2;
            /* 单词破坏--当文本是英文时用于拆分*/
            word-break: break-all;
            /* 必备，---多行省略时使用 */
            -webkit-box-orient: vertical;

          }
          hr{
           border: none;
           background-color: white;
           height: 1px;
          }
        } 
        }
        img{
          width: 100%;
        }
      }
      #content_part3{
        display: flex;
        margin-top: 8%;
        width: 100%;
        background-image: url(@/assets/images/index_6.jpg);
        background-size: 97%;
        background-repeat: no-repeat;
        #empty{
          width: 16%;
        }
        #part3_video{
        position: relative;
         width: 42%;
         cursor: pointer;
         overflow: hidden;
         .icon-24gf-playCircle:before{
           z-index: 100;
          position: absolute;
          top: 10%;
          left: 50%;
          transform: translate(-50%,-50%);
          color: white;
          opacity: 0; 
          transition: all 0.5s;
        }
        .icon-24gf-playCircle:hover:before{
          top: 50%;
          opacity: 0.8; 
          font-size: 50px;
        }
        .icon-24gf-playCircle:hover{
          img{
            transform: scale(1.2);
          }
        }
         img{
          width: 100%;
          height: 100%;
          transition: all 0.5s;
        }
        }
        #part3_news{
          width: 42%;
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          align-items: center;
          .news{
            box-sizing: border-box;
            position: relative;
            width:75%;
            height: 35%;
            padding: 3% 5%;
            border-bottom: 1px solid #DEDEDE;
            cursor: pointer;
            transition: all 0.5s;
            &:hover{
              box-shadow: 0px 0px 20px 5px #DEDEDE;
              h4{
                color: #F7BD04;
              }
            }
            h4{
            font-weight: 500;
          }
          .new_center{
           display: flex;
            width: 15%;
            height: 15%;
            justify-content: center;
            align-items: center;
            font-size: 10px;
            color: #747474;
            border: 1px solid #747474;
            border-radius: 15%;
          }
          .date{
            float: right;
            font-size: 14px;
            color: #747474;
          }
          p{
            line-height: 25px;
            font-size: 14px;
            margin: 4%  0%;
           color: #747474;
          }
          }
        }
      }
}
#myvideo{
         width: 100vw;
        height: 100vh;
        .video_position();
        background:rgba(0,0,0,0.8); filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);
        cursor: pointer;
        #video_bgc{
          width: 56.5%;
          height: 60%;
          .video_position();
          background: black;
          overflow: hidden;
          video{
            width:100%;
            height: 100%;
            .video_position();
            object-fit:fill;
          }
          #cancel{
            position: absolute;
            right: 2%;
            top: 0;
            font-size:30px;
            z-index: 100;
            color: white;
          }
        }    
      }
</style>