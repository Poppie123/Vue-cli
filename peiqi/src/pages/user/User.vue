<template>
    <div>
        <!-- 页面头部 -->
        <div class="header_user flexc">
            <div class="heal">
                <img src="@/assets/image/header.png">
                <div class="name">
                    <p>MEROY</p>
                    <div class="name_bot">
                        <img src="@/assets/image/vip.png">
                        <span>普通会员</span>
                    </div>
                </div>
            </div>
            <div class="hear flexc">
                <i class="iconfont iconxiaoxi2 link-to" data-href="../my/my_news.html"></i>
                <div class="hearc "></div>
                <i class="iconfont iconshezhi link-to" data-href="../my/my_set.html"></i>
            </div>
        </div>
        <!-- 订单部分 -->
        <div class="main_top_user">
            <div class="maintt flexc">
                <p>我的订单</p>
                <div class="mainttr flex link-to" data-href="../order/my_orders.html" data-source="0">
                    <span>查看全部订单</span>
                    <i class="iconfont icongengduo"></i>
                </div>
            </div>
            <div class="maintb ">
                <div class="maintb_o link-to" data-href="../order/my_orders.html" data-source="1">
                    <i class="iconfont icondaifukuan"></i><br>
                    <span>待付款</span>
                </div>
                <div class="maintb_o link-to " data-href="../order/my_orders.html" data-source="2">
                    <i class="iconfont icondaifahuo"></i><br>
                    <span>待发货</span>
                </div>
                <div class="maintb_o link-to" data-href="../order/my_orders.html" data-source="3">
                    <i class="iconfont icondaifukuan"></i><br>
                    <span>待收货</span>
                </div>
                <div class="maintb_o link-to" data-href="../order/my_orders.html" data-source="4">
                    <i class="iconfont icondaipingjia"></i><br>
                    <span>待评价</span>
                </div>
                <div class="maintb_o link-to" data-href="../order/my_orders.html" data-source="5">
                    <i class="iconfont icontuikuan"></i><br>
                    <span>售后</span>
                </div>
            </div>
        </div>
        <!-- 工具栏上部 -->
        <div class="main_cen">
            <div class="main_cent flex link-to" data-href="../my/address.html">
                <i class="iconfont icondizhiguanli"></i>
                <div class="main_cenr flexc">
                    <span>地址管理</span>
                    <i class="iconfont icongengduo"></i>
                </div>
            </div>
            <div class="main_cent flex link-to" data-href="../my/my_coll.html">
                <i class="iconfont iconziyuan"></i>
                <div class="main_cenr flexc">
                    <span>商品收藏</span>
                    <i class="iconfont icongengduo"></i>
                </div>
            </div>
            <div class="main_cent flex link-to" data-href="../my/my_share.html">
                <i class="iconfont icondayifenxiang"></i>
                <div class="main_cenr flexc">
                    <span>分享APP</span>
                    <i class="iconfont icongengduo"></i>
                </div>
            </div>
        </div>
        <!-- 工具栏下部 -->
        <div class="main_bot">
            <div class="main_cent flex">
                <i class="iconfont icondianhua"></i>
                <div class="main_cenr flexc">
                    <span>客服热线</span>
                    <i class="iconfont icongengduo"></i>
                </div>
            </div>
            <div class="main_cent flex">
                <i class="iconfont iconqingsaokunnanyuan"></i>
                <div class="main_cenr flexc">
                    <span>清除缓存</span>
                    <p>35MB</p>
                </div>
            </div>
            <div class="main_cent flex link-to" data-href="../my/my_sys.html">
                <i class="iconfont iconguanyuwomen"></i>
                <div class="main_cenr flexc">
                    <span>我的系统</span>
                    <i class="iconfont icongengduo"></i>
                </div>
            </div>
        </div>
       
        <!-- 蒙版 -->
        <div class="mask none"></div>
        <!-- 电话弹窗 -->
        <div class="tel none">
            <div class="tel_top">
                <div class="tel_tt">配骑服竭诚为您服务</div>
                <div class="tel_tb">拨打400-617-5525</div>
            </div>
            <div class="tel_bot">取消</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'User',
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
    .header_user{
        width: 100%;
        height: 3.2rem;
        background-image: url(../.././assets/image/back.png);
        background-size: cover;
        background-position-y: -.41rem;
        padding: .42rem .28rem 0 .28rem;
    }
    .heal{
        width: 2.5rem;
        height: 1.1rem;
        display: flex;
    }
    .heal img{
        width: 1.1rem;
        height: 1.1rem;
        margin-right: .2rem;
    }
    .name{
        width: 1.2rem;
        height: .66rem;
        margin-top: .12rem;
    }
    .name p{
        font-size: .32rem;
        color: #fff;
        font-weight:bold;
    }
    .name_bot{
        width: 1.2rem ;
        height: .2rem;
        display: flex;
        margin-top:.2rem;
    }
    .name_bot img{
        width: .2rem;
        height: .2rem;
        margin: 0;
    }
    .name_bot span{
        color: #fff;
        font-size: .2rem;
        line-height: .18rem;
    }
    .hear{
        width: 1.4rem;
        height: .45rem;
    }
    .hear i{
        color: #fff;
        font-size: .4rem;
    }
    .hearc{
        width:.14rem;
        height:.14rem;
        background:rgba(250,56,70,1);
        border-radius:50%;
        position: relative;
        top: -.08rem;
        right: .28rem;
    }
    /* 订单部分 */
    .main_top_user{
        width: 6.94rem;
        height: 2.18rem;
        margin: -1.2rem auto;
        box-shadow:0px 0px .27rem 0px rgba(6,117,116,0.07);
        border-radius:.06rem;
        background: #fff;
    }
    .maintt{
        width: 100%;
        height: .85rem;
        border-bottom: 1px solid #EEEEEE;
        line-height: .85rem;
        padding: 0 .3rem;
    }
    .maintt p{
        font-size: .28rem;
        color: #111;
    }
    .mainttr{
        width: 1.74rem;
        height: .85rem;
    }
    .mainttr span{
        font-size: .24rem;
        color: #999;
    }
    .mainttr i{
        font-size: .2rem;
        color: #999;
    }
    .maintb{
        width: 100%;
        height: 1.32rem;
        display: flex;
        justify-content: space-around;
        padding-top: .3rem;
    }
    .maintb_o{
        width: .72rem;
        height: 100%;
        text-align: center;
    }
    .maintb_o i{
        font-size: .4rem;
        color: #9C53F6;
    }
    .maintb_o  span{
        font-size: .24rem;
        color: #666;
    }
    /* 工具栏上部 */
    .main_cen{
        width: 6.94rem;
        height: 3.01rem;
        background: #fff;
        margin: 1.4rem auto 0;
        box-shadow:0px 0px .27rem 0px rgba(6,117,116,0.07);
        border-radius:.06rem;
        overflow: hidden;
    }
    .main_cent{
        width: 100%;
        height: 1.02rem;
        line-height: 1.05rem;  
    }
    .main_cent i{
        font-size: .4rem;
        color: #333;
        margin-left: .32rem;
        margin-right: .1rem;
    }
    .main_cenr{
        width: 100%;
        height: 1.02rem;
        border-bottom: 1px solid #EEEEEE;
        padding: 0 .3rem 0 .12rem;
    }
    .main_cenr span{
        font-size: .28rem;
        color: #111;
    }
    .main_cenr i{
        font-size: .3rem;
        color: #ddd;
        margin: 0;
    }
    /* 工具栏下部 */
    .main_bot{
        width: 6.94rem;
        height: 3.01rem;
        background: #fff;
        margin: .2rem auto;
        box-shadow:0px 0px .27rem 0px rgba(6,117,116,0.07);
        border-radius:.06rem;
        overflow: hidden;
    }
    .main_cenr p{
        font-size: .24rem;
        color: #9C53F6;
        margin-right: .1rem;
    }
    /* 电话弹窗 */
    .tel{
        width: 100%;
        height: 3.25rem;
        position: fixed;
        bottom: 0;
        z-index: 2;
        text-align: center;
    }
    .tel_top{
        width: 6.94rem;
        height: 1.77rem;
        background: #fff;
        border-radius:.08rem;
        margin: 0 auto;
    }
    .tel_tt{
        width: 100%;
        height: .88rem;
        border-bottom: 1px solid #EEEEEE;
        line-height: .88rem;
        font-size: .24rem;
        color: #999;
    }
    .tel_tb{
        width: 100%;
        height: .88rem;
        line-height: .88rem;
        font-size: .32rem;
        color: #9C53F6;
    }
    .tel_bot{
        width: 6.94rem;
        height: .88rem;
        background: #fff;
        border-radius:.08rem;
        margin: .3rem auto;
        font-size: .32rem;
        color: #333;
        line-height: .88rem;
    }
</style>