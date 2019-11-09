<template>
<div>
    <div class="header">
           <i class="iconfont iconiconfontjiantou1"></i>
    </div>
    <div class="hello">
        <p class="he">欢迎,</p>
        <p class="he">登录配骑</p>
    </div>
    <div class="num">
        <!-- <p class="qu">+86</p>
        <p class="phone">&nbsp;请输入手机号</p> -->
        <p class="qu">+86</p>&nbsp;
        <input class="phone" type="text" id="phone" placeholder="请输入手机号" v-model="phone"/>
    </div>
    <hr>
    <div class="yanzheng">
        <input class="yan" type="text" placeholder="请输入验证码" />
        
        <p class="zheng" @click="getCode">获取验证码</p>
    </div>
    <hr >

    <div class="login" @click="getLogin">
        <p>立即登录</p>
    </div>

</div>
    
</template>
<script>
export default {
    name:'Login',
    data() {
        return {
            phone:'',
            // code:'',

        }
    },
    methods: {
        getCode(){
            var _this = this
            this.$http.post('/user/get_code',{phone:_this.phone}).then(res=>{
                if(res.code==1){
                    _this.code = res.data;
                    console.log(_this.code)
                }
            })
        },
        getLogin(){
            var _this = this;
            this.$http.post('/user/login_sms',{phone:_this.phone,code:_this.code}).then(res=>{
                if(res.code==1){
                    console.log(res.uid);
                    localStorage.setItem('uid',res.uid);
                    this.$router.push({ path:'/Mine',query:{currentIndex:3}}) 
                }
            })
        }
    },
   
}
</script>
<style lang="">
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #ffffff;
    }
    .header{
        width: 3.75rem;
        height: .98rem;
        
    }
    .header .iconiconfontjiantou1{
    
        font-size: .15rem;
        color: #DDDDDD;
        margin-top: .17rem;
        margin-left: .1rem;
        float: left
    }
    .hello{
        /* width: .79rem;
        height: .51rem; */
        margin:-0.30rem 0.90rem .1rem .39rem;
        
    }
    .hello .he{
        width:0.9rem;
        font-size: .2rem;
        font-weight: bold;
        font-family: 'PingFang-SC-Bold';
        text-align: left;
    }
    .num{
        width: 2.67rem;
        margin-left: .4rem;
        display: flex;
        flex-direction: row;
        margin-top: .7rem;
        margin-bottom: .1rem;
    }
    .num .qu{
        font-family:'PingFang-SC-Regular';
        font-weight: bold;
        color: #999999;
        text-align: center;
        font-size: .16rem;
        
    }
     input{
        outline:medium;
        border: none;      
    }
    .phone{
        color:#999999;
        font-family:'PingFang-SC-Regular';
    
        text-align: left;
        font-size:.14rem;
    }
    
    hr{
        width: 2.95rem;
        margin-left: .4rem;
        /* background-color:#EEEEEE; */
        border-bottom: 1px solid #eeeeee;
        
    }
    .yanzheng{
        display: flex;
        flex-direction: row;
        margin-left: .4rem;
        margin-top: .2rem;
        margin-bottom: .1rem;
    }
    .yan{
        font-size:.14rem;
        font-family:'PingFang-SC-Regular';
        color:#999999;
    }
    
    .zheng{
        
        font-size:.14rem;
        font-family:'PingFang-SC-Regular';
        text-align:center;
        color:  #9C53F6;
        margin-left: .5rem;
    } 
    .login{
        width: 2.95rem;
        height: .4rem;
        margin-left: .4rem;
        margin-top: .81rem;
        background: #9C53F6;
        /* border-bottom-right-radius: 25% */
        border-radius: 1.04rem;

    }
    .login p{
        text-align: center;
        
        color: #FFFFFF;
        line-height: .4rem

    }
</style>