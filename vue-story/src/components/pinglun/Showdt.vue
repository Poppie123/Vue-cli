<template>
    <div class="show">
        <div class="list">
            <!-- 三目判断位置 -->
            <div class="item" v-for="(item,index) in list" :class="item.position == 'left' ? 'left' : 'right'" :key="index">
                <div class="name">{{item.name}}:::</div>
                <div class="ctc">{{item.content}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"",
    //把父组件传递过来的list属性,先在props数组中定义一下，这样才能使用这个数据
    // props:{
    //     // list:{type:Array},
    // },
    props: ['list'],
    data(){
        return{
            // list:[
            //     {name:"a导航",position:"left",content:"你好?"},
            //     {name:"b导航",position:"right",content:"好饿"},
            //     {name:"a导航",position:"left",content:"你好?"},
            // ],   
        }
    },
    methods: {
        
    },
    mounted() {
        
    },
}
</script>
<style lang="">
    .list{
        width: 300px;
        height: auto;
        margin: 0 auto;
        border: 1px solid red;
    }
    .list .item{
        width:300px;
        height: auto;
        margin-bottom: 20px;
    }
    .left{
        overflow: hidden;
    }
    .left .name{
        float: left;
    }
    .left .ctc {
        float: left;
    }
    .right{
        overflow: hidden;
    }
    .right .name{
        float: right;
    }
    .right .ctc {
        float: right;
    }
</style>