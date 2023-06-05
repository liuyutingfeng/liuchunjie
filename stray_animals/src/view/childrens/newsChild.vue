@<template>
  <div id="newsChild">
    <div id="content">
      <!-- 后期可根据v-for+br+split来达到分段效果 -->
      <div id="title">
          <h1>{{ news[tag].title }}</h1>
          <span>{{ news[tag].date }}</span>
      </div>
      <div id="article">
          <p>{{ news[tag].text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState ,mapGetters} from 'vuex';
export default {
    name:'newsChild',
    data() {
      return {
       tag:this.$route.query.id,
      //  newtext:[]
      }
    },
    computed:{
      ...mapState("content_Info",{"news":"news_info"}),
     },

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
    margin-bottom: 10%;
    #title{
      width: 70%;
      text-align: center;
      border-bottom: 1px solid #E9E9E9;
      margin-bottom: 40px;
      h1{
        font-weight: 500;
        font-family: "微软雅黑";
      }
      span{
        display: block;
        margin: 20px 0 20px 0;
      }
    }
    #article{
      width: 70%;
    }
  }
</style>