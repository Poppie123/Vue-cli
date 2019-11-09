<template>
<div class="cart">
    <!-- 头部 -->
     <!-- 头部 -->
    <div class="head">
            <i class="iconfont iconiconfontjiantou1 " @click="back"></i>
            <p class="title">购物车</p>
                <p class="guanli" @click="guanli">{{ guanl }}</p>

    </div>
    <!-- 头部结束 -->

    <!-- 中间内容 -->
    <div class="middle">
        <div class="first" v-for="(item,index) in goodsList" :key="item.id">
            <div :class="[ item.status ? 'active duihao':' duihao']" @click="danXuan(index)">
                <i class=" iconfont iconround_check_fill"></i>
            </div>
            <div class="left" style="float: left;"><img :src="item.pic"></div>
            <div class="right">
                <div class=" title">{{ item.goods_name }}</div>
                <div class=" color">{{ item.goods_attr_value }}</div>
                <div class=" jisuan">
                    <div class="jian" @click="jian(index)">-</div>
                    <div class="num">{{ item.count }}</div>
                    <div class="add" @click="add(index)">+</div>

                </div>
                <div class=" price">￥{{ item.shop_price}}</div>

            </div>

        </div>

    </div>


    <footer>
        <div class="quanxuan allcheck" @click="allcheck">
            <div :class="[ checkall ? 'active duihao' :'duihao ']" >
                <i class="iconfont iconround_check_fill" style="top: -0.15rem;"></i>
            </div>
            <p class="xuan allcheck" style="color: #666666;font-size: .14rem;">全选</p>
        </div>
        <div class="heji" v-show="boo">
            <p style="color: black; float: left; font-size: .14rem;">合计:</p>
            <p class="money">￥{{ zongMoney }}</p>
        </div>
        <div class="jieguo" data-num="0" @click="result">{{str}}{{ count }}</div>
    </footer>

    </div>
</template>

<script>
export default {
    name:'ShoppingCart',
    data(){
        return{
            // goodsList:[],
             goodsList: [
        {
          goods_name: "五星酒店",
          goods_attr_value: "粉色",
          count: "1",
          shop_price: "100",
          status: false
        },
        {
          goods_name: "三星酒店",
          goods_attr_value: "绿色",
          count: "1",
          shop_price: "150",
          status: false
        },
        {
          goods_name: "一星酒店",
          goods_attr_value: "蓝色",
          count: "1",
          shop_price: "200",
          status: false
        }
      ],
            guanl:'管理商品',
            str:'去结算',
            boo:true
         
        }
    },
    methods: {
        getShoppingGoods(){
            var _this = this;
            this.$http.post('/app/get_cart',{start:0}).then(res=>{
                if(res.code == 1){
                    
                    res.data.map((v,i,arr)=>{
                        arr[i].count = 1;
                        arr[i].status = false;
                    })
                    _this.goodsList = res.data;
                }
            })
        },
        //管理商品
        guanli(){
            if(this.guanl == '管理商品'){
                this.guanl = '完成';
                this.str = '删除商品' ;
                this.boo = false

            }else{
                this.guanl = '管理商品'
                this.str = '去结算'
                this.boo = true;

            }

        },
        // 单选
        danXuan(index){
            this.goodsList[index].status = !this.goodsList[index].status
        },
        //多选
        allcheck(){
            var allstatus = this.checkall;
            this.goodsList.map(v=>{
                v.status = !allstatus
            })
        },
        add(index){
            this.goodsList[index].count++;
        },
        jian(index){
            if(this.count == 1){
                return false;
            }
            this.goodsList[index].count--;
        },
        result(){
           if(this.str == '去结算'){
               return 
           }else{
               var arr = [];
               this.goodsList.map(v=>{
                   if(v.status){
                       arr.push(v.id);
                   }
               })
               arr = arr.join(',')
               this.delGoods(arr);
           }
        },
        //删除商品
        delGoods(arr){
            this.$http.post('/app/del_cart_goods',{cart_ids:arr}).then(res=>{
                if(res.code==1){
                    this.getShoppingGoods()
                }
            })
        },
        back(){
            history.go(-1)
        }
    },
    mounted() {
        this.getShoppingGoods()
    },
    computed:{
        checkall:function(){
            var cstatus = true;
            this.goodsList.map(v=>{
                if(!v.status){
                    //如果v.status == false;
                        cstatus = v.status;
                }
            })
            return cstatus;
        },
        count:function(){
            var totalcount = 0;
            this.goodsList.map((v,i)=>{
                if(v.status){
                    totalcount += v.count;
                }
               
            })
            return totalcount;
            console.log(totalcount)
          
        },
        zongMoney:function(){
            var zongmoney = 0;
            this.goodsList.map((v,i)=>{
                if(v.status){
                    zongmoney += Number(v.shop_price * v.count)
                }
                
            })
            return Number(zongmoney);
              
        }
    }
}
</script>


<style lang="" scoped="scope">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #FAFAFE;
        /* background: pink; */
    }

    .head {
        width: 100%;
        height: .44rem;
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        background: #FFFFFF;
        
    }

   .iconiconfontjiantou1{
       color: #999999;
       width: .08rem;
       height: .08rem;
       margin-left: .1rem;
   }

    .head .title {
        /* width: .59rem;
         height: .19rem; */
        font-size: .2rem;
        ;
        color: #333333;
        font-weight: bold;
        text-align: center;
        font-family: 'PingFang-SC-Bold';


    }

    .head .guanli {
        width: .6rem;
        height: .14rem;
        font-size: .14rem;
        color: #333333;
        font-family: 'PingFang-SC-Regular';
        margin-right: .15rem;

    }

    .middle {
        /* background: gold; */
        padding-bottom: 1.13rem;
    }

    .first {
        /* width: 100%;; */
        height: 1.12rem;
        overflow: hidden;
        margin: .1rem .14rem 0;
        background: #FFFFFF;
        /* display: flex;
        flex-direction: row; */
        /* align-items: center; */
        margin-top: .1rem;

    }

    .first .duihao {
        border-radius: 50%;
        width: .2rem;
        height: .2rem;
        border: 1px solid #333C3C;
        position: relative;
        margin-top: .48rem;
        float: left;
        overflow: hidden;
        margin-left: .1rem;

    }

    .first .duihao .iconround_check_fill {
        display: none;

    }

    .first .active .iconround_check_fill {
        font-size: .22rem;
        color: #9C53F6;
        align-items: center;
        position: absolute;
    
        top: -0.07rem;
        left: -0.02rem;
       
        display: block;
    }

    .first .right {

        float: left;
        overflow: hidden;
        margin-left: .05rem;
       

    }

    .first .left img {
        width: .82rem;
        height: .82rem;
        margin-top: .15rem;
        /* margin-bottom: .15rem;; */
        margin-left: .1rem;
        float: left;


    }

    .right .title {
        width: 2.04rem;
        /* line-height: .15rem; */
        font-size: .1rem;
        font-family: 'PingFang-SC-Regular';
        color: #333333;
        margin-top: .12rem;
        overflow:hidden;
         text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align: left
    }

    .right .color {
        width: .58rem;
        line-height: .1rem;
        color: #999999;
        font-family: 'PingFang-SC-Regular';
        font-size: .14rem;
        margin-top: .07rem;
        white-space: nowrap;

    }

    .first .right .jisuan {
        /* display: flex;
        flex-direction: row; */
        width: .75rem;
        height: .2rem;
        float: right;
        /* line-height: 4px; */
        /* margin-left: 141px; */

        /* margin-top: 0px; */

    }

    .first .right .jisuan .jian {
        border: 1px solid #CCCCCC;
        width: 25%;
        line-height: .12rem;
        text-align: center;
        float: left;
        font-size: .14rem;

    }

    .first .right .jisuan .num {
        border: 1px solid #CCCCCC;
        width: 50%;
        line-height: .12rem;
        text-align: center;
        float: left;
        font-size: .14rem;
    }

    .first .right .jisuan .add {
        border: 1px solid #CCCCCC;
        width: 25%;
        line-height: .12rem;
        text-align: center;
        float: left;
        font-size: .14rem;
    }

    .right .price {
        width: .44rem;
        color: #F5B443;
        font-family: 'PingFang-SC-Bold';
        font-size: .14rem;
        font-weight: bold;
        text-align: center;
        margin-top: .15rem;
        ;

    }

    footer {
        position: fixed;
        bottom: .54rem;
        width: 100%;
        height: .44rem;;
        background: #FFF;
    }

    footer .quanxuan {
        float: left;
        width: 30%;
        height: 100%;
        background: #ffffff;
        line-height: .49rem;
        ;
    }

    footer .quanxuan .duihao {
        border-radius: 50%;
        float: left;
        width: .2rem;
        height: .2rem;
        border: 1px solid #333C3C;
        position: relative;
        margin: .18rem .1rem;
    }

    footer .quanxuan .duihao .iconround_check_fill {
        display: none;

    }
    
    footer .quanxuan .active .iconround_check_fill {
        display: block;
        font-size: .22rem;
        color: #9C53F6;
        align-items: center;
        position: absolute;
        top: -0.07rem;
        left: -0.02rem;
    }
    .quanxuan .xuan{
        float: left;
    }


    footer .heji {
        float: left;
        width: 30%;
        height: 100%;
        background: #ffffff;
        line-height: .49rem;
    }

    footer .heji .money {
        font-size: .16rem;
        font-weight: bold;
        font-family: 'PingFang-SC-Bold';
        color: #F5B443;
        width: 1rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: .01rem;
        /* margin-left: 0; */


    }

    footer .jieguo {
        float: right;
        width: 40%;
        background: #9C53F6;
        line-height: .49rem;
        text-align: center;
        color: #ffffff;

        font-family: 'PingFang-SC-Regular';
        font-size: .13rem;
    }

</style>