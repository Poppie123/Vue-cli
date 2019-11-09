<template>
    <div class="mine">
        <div class="header">
        <div class="img"><img :src="userInfo.headimg"></div>
        <div class="xinxi">
            <p class="name">{{ userInfo.username }}</p>
            <div class="uinfo">
                <img src="../../assets/img/vip.png">
                <p>普通会员</p>
            </div>
        </div>

        <div class="message">
            <i class="iconfont iconxiaoxi2"></i>
            <i class="iconfont iconshezhi setting" @click="set"></i>
        </div>
    </div>
<!-- 我的订单 -->
    <div class="mydingd">
        <div class="quandd link-to" data-href="../goods/goods_evaluate.html">
            <p class="my_dd">我的订单</p>
            <p class="look_dd">查看全部订单<i class="iconfont icongengduo"></i></p>
        </div>
        <div class="line">
            <div class="shou fk">
                <img src="../../assets/img/order_s_1.png" class="color" style="width: .16rem;height:.16rem;"> 
                <p class="shou-t">待付款</p>
            </div>
            <div class="shou fh">
                   <img src="../../assets/img/order_s_2.png" class="color" style="width: .16rem;height:.16rem;"> 
                   
                    <p class="shou-t">待发货</p>
            </div>
            <div class="shou sh">
                   
                    <img src="../../assets/img/order_s_3.png" class="color" style="width: .16rem;height:.16rem;"> 
                    <p class="shou-t">待收货</p>
            </div>
            <div class="shou pj link-to"  data-href="../goods/goods_evaluate.html">
                    <img src="../../assets/img/order_s_4.png" class="color" style="width: .16rem;height:.16rem;"> 
                    <p class="shou-t">待评价</p>
            </div>
            <div class="shou tuiq">
                    <img src="../../assets/img/order_s_5.png" class="color" style="width: .16rem;height:.16rem;"> 
                    <p class="shou-t" style="margin-left: .06rem;">售后</p>
            </div>
        </div>
    </div>
    <!-- 地址。。。 -->
    <div class="addressInfo">
        <div class="address adsmge"  @click="addressGuanli">
                <img src="../../assets/img/my_nav_1.png" class="addr">
            <div class="right">
                <p >地址管理</p>
                <i class="iconfont icongengduo"></i>
            </div>
        </div>
        <div class="address" @click="myCollect">
                <img src="../../assets/img/my_nav_2.png" class="addr r-margintop">
            <div class="right r-margintop " >
                <p>商品收藏</p>
                <i class="iconfont icongengduo"></i>
            </div>
        </div>
        <div class="address">
                <img src="../../assets/img/my_nav_3.png" class="addr r-margintop">
            <div class="right r-margintop"  style="border-bottom: 0px;">
                <p>分享APP</p>
                <i class="iconfont icongengduo"></i>
            </div>
        </div>
    </div>
<!-- 客服 -->
    <div class="addressInfo phoneinfo">
            <div class="address phone">
                <!-- <i class="iconfont icondizhiguanli addr"></i> -->
                <img src="../../assets/img/my_nav_4.png" class="addr">
                <div class="right kefuphone">
                    <p >客服热线</p>
                    <i class="iconfont icongengduo"></i>
                   
                </div>
            </div>
            <div class="address clear">
                <!-- <i class="iconfont iconziyuan addr r-margintop"></i> -->
                <img src="../../assets/img/my_nav_5.png" class="addr r-margintop">
                <div class="right r-margintop clearhc">
                    <p>清除缓存</p>
                    <p class="mb" >35MB</p>
                  
                </div>
            </div>
            <div class="address myxitong">
                <!-- <i class="iconfont icondayifenxiang addr r-margintop"></i> -->
                <img src="../../assets/img/my_nav_6.png" class="addr r-margintop">
                <div class="right r-margintop "  style="border-bottom: 0px;" @click="mysystem" >
                    <p>我的系统</p>
                    <i class="iconfont icongengduo"></i>
                    
                </div>
            </div>
        </div>


    </div>
</template>

<script >
export default {
    name:"Mine",
    data() {
        return {
            userInfo:[]
        }
    },
    methods:{
        myCollect(){
              this.$router.push({path:'/Mine/Goods_collect'});
        },
        set(){
            this.$router.push({path:'/Mine/MySetting'});
        },
        mysystem(){
            this.$router.push({path:'/Mine/System'});
        },
        getUserInfo(){
            var _this = this;
            this.$http.post('/user/get_user_info',{}).then(res=>{
                if(res.code==1){
                    _this.userInfo = res.data;
                     console.log( res.data)
                }
               
            })
        },
        addressGuanli(){
           this.$router.push({path:'/Mine/address'});
        }
    },
   
    mounted() {
       this.getUserInfo()
    },
}
</script>

<style lang="" scoped>
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    body{
    background: #FAFAFE;
    overflow: hidden;
     overflow: hidden;
    }
    .header{
        width: 100%;
        height: 1.81rem;
        background-image: url('../../assets/img/bg.png');
      
        background-repeat: no-repeat;
        background-size: cover;
         overflow: hidden;
    }
    .header .img{
        width: .55rem;
        height: .55rem;
    /* border-radius: 50%; */
        margin-left: .14rem;
        margin-top: .24rem;
        float: left;
    }
    .header .img img{
        width: .55rem;
        height: .55rem;
        /* border-radius: .2rem; */
    }
    .header .xinxi{
        
        margin-top: .25rem;
        float: left;
        overflow: hidden;
        padding: .1rem;
    
    }
    .header .xinxi .name{
    font-family: 'PingFang-SC-Bold';
    font-weight: bold;
    font-size: .16rem;
    text-align: center;
    color: #fff;
    width: .6rem;
    }
    .uinfo{
    margin-top: .07rem;
    }
    .uinfo img{
        width: .11rem;
        height: .11rem;
        float: left;
        margin-top: .02rem;
    }
    .uinfo p{
        font-size: .1rem;
        text-align: left;
        color: #fff;
        white-space: nowrap;
    }
    .message{
    float: right;
    margin-top: .25rem;
    margin-right: .14rem;
    }
    .message .iconxiaoxi2{
        font-size: .23rem;
        color: #FFFFFF;

    }
    .message .iconshezhi{
        font-size: .24rem;
        color: #FFFFFF;
        margin-left: .25rem;
    }
    
    .mydingd{
    width: 3.47rem;
    height: 1.09rem;
    background: #FFFFFF;
    margin: 0 auto;
    margin-top:-0.7rem;
    overflow: hidden;
    margin-bottom: .1rem;
    }
    .mydingd .quandd{
     margin-top: .15rem;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    border-bottom: 1px solid #EEEEEE;
    }
    .quandd .my_dd{
    font-size: .14rem;
    color: #111111;
    margin-bottom: .15rem;
    margin-left: .15rem;
    }
    .quandd .look_dd{
    color:#999999;
    font-size: .12rem;
    margin-bottom: .15rem;
    margin-right: .15rem;
    }
    .quandd .look_dd .icongengduo{
        color: #999999;
        width: .06rem;
        height: .09rem;
    }
    .mydingd .line{
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: .11rem;
    /* margin-bottom: .12rem; */
    }
    .shou .color{
        color: #993DB9;
        font-size: .18rem;
        margin-left: .09rem;
    }
    .shou .shou-t{
        font-size: .12rem;
        color:#666666;
        text-align: center;
    }
    .addressInfo{
        overflow: hidden;
    width: 3.47rem;
    height: 1.51rem;
    background: #FFFFFF;
    margin: auto;
    padding: .15rem;
    }
    .addressInfo .address{
      overflow: hidden;
    }
    .address .addr{
        width: .16rem;
        height: .17rem;
        float: left;
        
    }
    
    .address .right{
        width: 2.85rem;
        border-bottom: 1px solid #EEEEEE;
        margin-left: .11rem;
        float: left;
        overflow: hidden;
        
    }
    .address .r-margintop{
        margin-top: .15rem;
    }
    .address .right p{
        font-size: .14rem;
        text-align: center;
        color: #111111;
        float: left;
        margin-bottom: .15rem;
    }
    .address .right .icongengduo{
        width: .08rem;
        height: .14rem;
        color: #DDDDDD;
        float: right;
        margin-right: .05rem;
    }
    .phoneinfo{
        margin-top: .1rem;
    }
    .clear .right .mb{
        font-size: .12rem;
        color: #9C53F6;
        text-align: center;
        float: right;
        
    }
</style>