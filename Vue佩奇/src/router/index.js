import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/home/HelloWorld'
import Homepage from '@/components/home/Homepage'
import Classification from '@/components/home/Classification'
import ShoppingCart from '@/components/home/ShoppingCart'
import Mine from '@/components/home/Mine'
import Login from '@/components/user/Login'
import Address from '@/components/address/Address'
import AddressEdit from '@/components/address/AddressEdit'
import Addaddress from '@/components/address/Addaddress'
import Detail from '@/components/goods/Detail'
import Search from '@/components/goods/Search'
import Goods_collect from '@/components/goods/Goods_collect'
import Searchshow from '@/components/goods/Searchshow'
import System from '@/components/user/System'
import MySetting from '@/components/user/MySetting'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:"/homepage",
      component: HelloWorld,
      children:[
        {
          path:"/homepage",
          name:"homepage",
          component: Homepage,
          
        },{
          path:"/Classification",
          name:"Classification",
          component: Classification,
        },
        {
          path:"/ShoppingCart",
          name:"ShoppingCart",
          component:ShoppingCart,
          
        },
        {
          path:"/Mine",
          name:"Mine",
          component:Mine,
        }
      ]
    },
    {
      path:'/Login',
      name:'Login',
      component:Login,
    },
    {
      path:'/Mine/address',
      name:'address',
      component:Address,
    },
    {
      path:'/Mine/address/:id',
      name:'addressedit',
      component:AddressEdit,
    },
    {
      path:'/Mine/Addaddress',
      name:'Addaddress',
      component:Addaddress,
    },
    {
      path:'/Mine/Goodsdetail',
      name:'Detail',
      component:Detail,
    },
    {
      path:'/Goods/Search',
      name:'Search',
      component:Search,
    },
    {
      path:'/Goods/Searchshow/:id',
      name:'Searchshow',
      component:Searchshow,
    },
    {
      path:'/Mine/System',
      name:'System',
      component:System,
    },
    {
      path:'/Mine/MySetting',
      name:'MySetting',
      component:MySetting,
    },
    {
      path:'/Mine/Goods_collect',
      name:'Goods_collect',
      component:Goods_collect,
    },
  ]
})
