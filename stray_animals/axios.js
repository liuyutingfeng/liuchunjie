// 二次封装，添加拦截器
import axios from 'axios';
import store from './src/store/modules/user' 

const service = axios.create({
    baseURL: '/api'
  })
  
//添加请求拦截器
axios.interceptors.request.use(
  config => {
    if(store.state.token){
      config.headers.common['token'] = store.state.token.token
    }
    return config;
  },
  error => {
    //请求错误
    return Promise.reject(error);
  }
);
//添加响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if(error.response){
      switch(error.response.status){
        case 401:
          localStorage.removeItem('token');
          router.replace({
            path: '/Home',
            query: {
              redirect: router.currentRoute.fullPath //登录成功后跳入浏览的当前页
            }
          })
      }
    }
  }
)



  export default service

