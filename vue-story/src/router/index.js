import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld';   //引入组件
import Abox from '@/components/Abox';
import Bbox from '@/components/Bbox';
import ContainerBox from '@/components/pinglun/ContainerBox'
import Hello from '@/components/watch/Hello'
import Foo from '@/components/watch/Foo'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'abox',
      component: ContainerBox
    },
    {
      path: '/b',
      name: 'Bbox',
      component: ContainerBox
    },
    {
      path: '/hello:hparam1',
      name: 'hello',
      component: Hello
    },
    {
      path: '/foo/:fparam1/age:fparam2',
      name: 'foo',
      component: Foo
    },
    {
      path: '*',
      redirect:'/hello:hparam1'
    }
  ]
})
