<template>
    <div class="cotainer">
        <h2>当前位置{{ position }}</h2>
        <!-- 父组件，在引用子组件的时候，通过属性绑定（v-bind:）的形式，把需要传递给子组件的数据，传递给子组件内部 -->
        <Showdt :list="list"></Showdt>
        <!-- 父组件向子组件传递方法，使用的是事件绑定机制（v-on） -->
        <Shurudt @sendMsg="acceptMsg"></Shurudt>
    </div>
</template>

<script>
import Showdt from "@/components/pinglun/Showdt.vue";
import Shurudt from '@/components/pinglun/Shurudt.vue';
export default {
    data(){
        return{
            position:"a导航",
            list:[
                {name:"a导航",position:"left",content:"你好?"},
                {name:"b导航",position:"right",content:"好饿"},
                {name:"a导航",position:"left",content:"你好?"},
            ],
        }
    },
    methods: {
        // 接收发表组件传上来的值吧他push到list数组，在分发给展示组件
        acceptMsg:function(msg){
            var _this = this;//var声明变量提前
            var dt = {
                name:_this.position,
                position:'right',
                content:msg,
            }
            _this.list.push(dt)
        },
        // 重组数据格式
        compulist(){
            //map映射（一个对一个）
            this.list = this.list.map((v,i)=>{//@param1:当前值，@param2:下标
                v.name == this.position ? v.position = "right" : v.position = "left";
                return v
            })
        },
    },
    mounted() {
        this.compulist()
    },
    watch:{ 
        // 监听路由变化，重组数据
        '$route':function (to, from){
            to.name == 'Bbox' ? this.position = "b导航" : this.position = "a导航"
    　　},
        //监听position的值的变化（watch方法）
        position(val){
            this.compulist()
        }
    },
    // 定义下这个组件
    components:{
        Showdt,Shurudt,
    }
}
</script>