
import {userLogin,updatePassword,getUserInfo,deleteUserInfo} from '../../api/user'

const key = 'token';

const state = {
   user_info:{
    username: localStorage.getItem('username') ? JSON.parse(localStorage.getItem('username')):'',
    userpassword: localStorage.getItem('userpassword') ? localStorage.getItem('userpassword'):'',
    tag_animal: localStorage.getItem('tag_animal') ? JSON.parse(localStorage.getItem('tag_animal')):''
    }, 
    token: localStorage.getItem('token')?localStorage.getItem('token'):'',
}

const actions = {
    user_login(context,payload){
        context.commit('USER_LOGIN',payload)
    },
    user_delete(context,value){
        deleteUserInfo(value).then(result=>{
             alert(result.data.msg)
            context.commit('USER_DELETE','')
        }).catch(function(err){console.log(err);})  
    },
    admin_delete(context,value){
        deleteUserInfo(value).then(result=>{
             alert(result.data.msg)
        }).catch(function(err){console.log(err);})  
    }
}
const mutations = {
    USER_LOGIN(state,payload){
       state.user_info.username = payload.username;
       state.user_info.userpassword = payload.userpassword;
       state.user_info.tag_animal = payload.tag_animal;
       localStorage.setItem('username',JSON.stringify(payload.username));
       localStorage.setItem('userpassword',JSON.stringify(payload.userpassword));
       localStorage.setItem('tag_animal',JSON.stringify(payload.tag_animal))
    },
    USER_DELETE(state,value){
        state.user_info.username = value;
        state.user_info.userpassword = value;
        state.user_info.tag_animal = value;
        localStorage.removeItem('username');
        localStorage.removeItem('userpassword');
        localStorage.removeItem('tag_animal');
        state.token = null;
        localStorage.removeItem(key)
    },
    $_setStorage(state,value){
        state.token = value
        localStorage.setItem(key,JSON.stringify(value))
    },
    $_removeStorage(state){
        state.token = null;
        localStorage.removeItem(key)
    },
    updatetag_animal(state,value){
        state.tag_animal = value;
        localStorage.setItem('tag_animal',JSON.stringify(value))
    },
    user_signup(state,value){
        state.user_info.username = value;
        localStorage.setItem('username',JSON.stringify(value));

    },
    admin_login(state,payload){
        state.user_info.username = payload.username;
        localStorage.setItem('username',JSON.stringify(payload.username));
        state.token = payload.Authorization;
        localStorage.setItem(key,JSON.stringify(payload.Authorization))
    },
    admin_back(state,value){
        state.user_info.username = value;
        localStorage.removeItem('username');
        state.token = null;
        localStorage.removeItem(key)
    }
}

const getters = {
    getSortage: function(state) {
        if(!state.token){
            state.token =JSON.parse(localStorage.getItem(key))
        }
        return state.token
    },
    animalname(state){
        return state.user_info.tag_animal;
    }
}

export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters,
}