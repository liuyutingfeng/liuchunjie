import Vue from 'vue';
import VueRouter from 'vue-router';

// 注册路由组件
Vue.use(VueRouter);

const routes = [
    {
        // 重定向--首页默认组件
        path:'/',
        redirect:"/Home"
    },
    {
        path:'/Home',
        name:'Home',
        // 懒加载--按需加载
         component:()=>import("@/view/Home.vue"),
         children:[{        /*共享组件 */
            path:'newsChild',
            name:'news1',
            component:()=>import('@/view/childrens/newsChild.vue')
        }]
    },{
        path:'/Adopt',
        name:'Adopt',
         component:()=>import("@/view/Adopt.vue"),
         children:[{
            path:'adoptChild',
            name:'adoptChild',
            component:()=>import('@/view/childrens/adoptChild.vue')
        }]
    },
    {
        path:'/About',
        name:'About',
         component:()=>import("@/view/About.vue")
    },
    {
        path:'/News',
        name:'News',
         component:()=>import("@/view/News.vue"),
         children:[{        /*共享组件 */
            path:'newsChild',
            name:'news2',
            component:()=>import('@/view/childrens/newsChild.vue')
        }]
    },
    {
        path:'/Project',
        name:'Project',
         component:()=>import("@/view/Project.vue")
    },
    {
        path:'/Personal',
        name:'Personal',
         component:()=>import("@/view/Personal.vue"),
         children:[{        /*共享组件 */
            path:'manageanimal',
            name:'manageanimal',
            component:()=>import('@/view/manage/manageanimal.vue')
        },{
            path:'managenotice',
            name:'managenotice',
            component:()=>import('@/view/manage/managenotice.vue')
        },{
            path:'managenew',
            name:'managenew',
            component:()=>import('@/view/manage/managenew.vue')
        },{
            path:'manageuser',
            name:'manageuser',
            component:()=>import('@/view/manage/manageuser.vue')
        }]
    },
]

    const router = new VueRouter({
        routes,
        mode:'history',
    })
    
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to,from,next) => {
    if(to.path === '/Home'){
      next();
    }else{
      let token = window.localStorage.token;
      if(token === 'null' || token === '' || token === undefined){
        next('/Home')
      }else{
        next();
      }
    }
  });
  

export default router