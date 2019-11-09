import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//路由的懒加载
const Home = () => import('@/pages/home/Home')
const Classify = () => import('@/pages/category/Classify')
const Cart = () => import('@/pages/cart/Cart')
const User = () => import('@/pages/user/User')
const Login = () => import('@/components/Login')
const SearchShow = () => import('@/pages/home/SearchShow')

const router = new Router({//创建Router对象及讲router对象传入到Vue实例
  mode:'history',//html5的history模式，默认为hash(#)模式
  routes: [
    {
      path: '/',
      redirect:'/home' //路由重定向
    },
    {
      path: '/home',
      component: Home,
      meta:{
        title: '首页'
      },
    },
    {
      path: '/classify',
      component: Classify,
      meta:{
        title: '分类'
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta:{
        title: '购物车'
      }
    },
    {
      path: '/user',
      component: User,
      meta:{
        title: '用户'
      }
    },
    {
      path: '/login',
      component: Login,
      meta:{
        title: '登录'
      }
    },
    {
      path: '/searchshow',
      component: SearchShow,
      meta:{
        title: '搜索'
      }
    },
  ],
})

//全局导航守卫
//前置守卫（guard)
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  document.title = to.matched[0].meta.title;
  next()
})
//后置钩子(hook)
router.afterEach((to, from) => {
  // to and from are both route objects.
  // console.log('-----');
})
export default router