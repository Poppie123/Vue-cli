<template>
    <div class="ipt">
        <input type="text" v-model="msg" placeholder="请输入信息">
        <button @click="sendMsg">发送</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
           msg:"",
        }
    },
    methods: {
        sendMsg(){//当点击按钮时，如何得到父组件传递过来的sendMsg方法，并调用？
            if(this.msg == ""){
                return false
            }
            //emit英语原意：触发，调用的意思
             // this.$emit('sendMsg', this.msg)//获得值
            this.$emit('sendMsg',this.msg);
            this.msg = ""//重新赋值
        }
    },
    mounted:function(){
        
    },
}
</script>

<style lang="">
    
</style>