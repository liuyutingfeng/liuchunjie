@<template>
  <div id="foot">
    <div id="middle"><img src="@/assets/images/icon.jpg" alt=""></div>
    <div id="left">
        <span>© 2019 www.stray animals.com.cn, All Rights Reserved.流浪动物救助站XXXXXXXXXXXXX股份有限公司 版权所有</span>
        <p>感谢您的浏览</p>
    </div>
    <div id="right"><img src="@/assets/images/mycode.jpg" alt=""></div>
  </div>
</template>

<script>
export default {
        name:"Myfoot",
        data() {
            return { 
            }
        },
}
</script>

<style lang="less" scoped>
*{
    /* 流式布局----% */
    margin: 0;
    padding: 0;
}
#foot{
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: black;
    #left{
        width: 60%;
        color: white;
        span,p{
            width: 100%;
            text-align: center;
        }
    }
    #middle{
        width: 20%;
    }
    #right{
        width: 20%;
        float: right;
        img{
            width: 25%;
        }
    }
    }
</style>