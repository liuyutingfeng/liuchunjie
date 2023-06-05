

const state = {
    society_info:[],
    person_info:[],
    news_info:[],
    animal_info:[],
    notice_info:[]
}

const actions = {
    // 利用异步，发送请求，将数据储存在state实现数据共享
    // 宠物组织信息
    society(context,payload){
     const _this = payload._this;
     const url = payload.url;
     _this.$axios.get(url,{}).then((resp)=>{
        console.log(resp);
        context.commit('SOCIETY',resp.data)
    }).catch(function(error){
        console.log(error);
    })},
    // 相关人员信息
    person(context,payload){
        const _this = payload._this;
        const url = payload.url;
        _this.$axios.get(url,{}).then((resp)=>{
           console.log(resp);
           context.commit('PERSON',resp.data)
       }).catch(function(error){
           console.log(error);
       })},
 // 相关新闻信息
 news(context,payload){
    const _this = payload._this;
    const url = payload.url;
    _this.$axios.get(url,{}).then((resp)=>{
       console.log(resp);
       context.commit('NEWS',resp.data)
   }).catch(function(error){
       console.log(error);
   })},
   // 相关动物信息
   animals(context,payload){
    const _this = payload._this;
    const url = payload.url;
    _this.$axios.get(url,{}).then((resp)=>{
       console.log(resp);
       context.commit('ANIMALS',resp.data)
   }).catch(function(error){
       console.log(error);
   })},
//    公告信息
   notice(context,payload){
    const _this = payload._this;
    const url = payload.url;
    _this.$axios.get(url,{}).then((resp)=>{
       console.log(resp);
       context.commit('notice',resp.data)
   }).catch(function(error){
       console.log(error);
   })},
       
}
const mutations = {
    SOCIETY(state,value){
        state.society_info = value;
    },
    PERSON(state,value){
        state.person_info = value;
    },
    NEWS(state,value){
        state.news_info = value;
    },
    ANIMALS(state,value){
        state.animal_info = value;
    },
    notice(state,value){
        state.notice_info = value;
    }
}
const getters = {
    society_one(state){
        return state.society_info[0]
    },
    society_two(state){
        return state.society_info[1]
    },
    society_three(state){
        return state.society_info[2]
    },


}
// function getInformation(context,payload,xxx){
//         const mut_name = xxx.toUpperCase() 
//         const _this = payload._this;
//         const url = payload.url;
//        return _this.$axios.get(url,{}).then((resp)=>{
//            console.log(resp);
//            context.commit(mut_name,resp.data)
//        }).catch(function(error){
//            console.log(error);
//        })
// }
export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters,
}