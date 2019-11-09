<template>
    <div class="homepage">
        <!-- 头部开始 -->
        <div class="header">
            <!-- 搜索框 -->
                <div class="searchauto">
                    <i class="iconfont iconsousuo"></i>
                    <input type="text" class="inputtiao" placeholder="请输入商品名称" @click="search">
                </div>
        </div>


        <!-- 搜索框结束 -->
        <!-- 下拉刷新 -->
        <div class="main" id="refreshContainer">
                <!-- <div class="hui-refresh-icon"></div> -->
        <!-- 轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
                       <img :src="item.banner" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <!-- 轮播图结束 -->

        <!-- 商品促销特价等 -->
        <div class="shops">
            <div class="hot">
                <img src="../../assets/img/remai.png" />
                <div>热卖商品</div>
            </div>
            <div class="new hot">
                <img src="../../assets/img/new.png" />
                <div>新品上市</div>
            </div>
            <div class="Promotion hot">
                <img src="../../assets/img/today.png" />
                <div>今日促销</div>
            </div>
            <div class="Special sale hot">
                <img src="../../assets/img/tesell.png" />
                <div>特卖商品</div>
            </div>
        </div>
       

        <!-- 商品促销特价结束-->
    <!-- </div> -->
    
    <!-- 中间部分 -->
        <div class="Hot-selling">
            <div class="hotgoods">
                <div class="hot-title">热卖商品</div>
                <div class="hot-more ">更多<i class="iconfont icongengduo"></i></div>
            </div>
            <div class="hot_list remai_list">
                <div class="tuijian-item"  v-for="(item,index) in remaiList" :key="index" @click="goodsEdtail(item.id)">
                    <img :src="item.imgs[0].img" alt="">
                    <div class="jiudian">{{ item.goods_name }}</div>
                    <div class="price">
                        <span class="shop_price">￥{{ item.shop_price }}</span>
                        <span class="market_price">￥{{ item.market_price }}</span>
                    </div>
                </div>
            </div>
        </div>
            <!-- //促销商品 -->
        <div class="Hot-selling">
                <div class="hotgoods">
                    <div class="hot-title">促销商品</div>
                    <div class="hot-more " >更多<i class="iconfont icongengduo"></i></div>
                </div>
                <div class="hot_list cuxiao_list details">
                    <div class="tuijian-item" v-for="(item,index) in cuxiaoList" :key="index" @click="goodsEdtail(item.id)">
                        <img :src="item.imgs[0].img" alt="">
                        <div class="jiudian">{{ item.goods_name }}</div>
                        <div class="price">
                            <span class="shop_price">￥{{ item.shop_price }}</span>
                            <span class="market_price">￥{{ item.market_price }}</span>
                        </div>
                    </div>
                </div>
        </div>

              <!-- //新品 -->
        <div class="Hot-selling">
            <div class="hotgoods">
                <div class="hot-title">新品上市</div>
                <div class="hot-more">更多<i class="iconfont icongengduo"></i></div>
            </div>
            <div class="hot_list xinpin_list">
                 <div class="tuijian-item" v-for="(item,index) in newsList" :key="index" @click="goodsEdtail(item.id)">
                        <img :src="item.imgs[0].img" alt="">
                        <div class="jiudian">{{ item.goods_name }}</div>
                        <div class="price">
                            <span class="shop_price">￥{{ item.shop_price }}</span>
                            <span class="market_price">￥{{ item.market_price }}</span>
                        </div>
                    </div>
            </div>
        </div>
        <img src="../../assets/img/jingpin.png" class="jingpin">
        <div class="jptuijian details">
            <div class="tuijian-da"  v-for="(item,index) in jingpinList" :key="index" @click="goodsEdtail(item.id)">
                <img :src="item.imgs[0].img" alt="">
                <div class="jiudian">{{ item.goods_name }}</div>
                <div class="price">
                    <span class="shop_price">￥{{ item.shop_price }}</span>
                    <span class="market_price">￥{{ item.market_price }}</span>
                </div>
            </div>      
        </div> 
    </div>
    </div>
</template>

<script>
// import api from '@/api.js'
// import {startSwiper}  from '@/assets/js/until.js'
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper';

export default {
    name:'homepage',
    data () {
    return {
        bannerList:[],
        remaiList:[],
        cuxiaoList:[],
        newsList:[],
        jingpinList:[]
    }
  },
  methods:{
      search(){
          this.$router.push({path:"/Goods/Search"});
      },
      goodsEdtail(index){
          console.log(index)
          this.$router.push({path:"/Mine/Goodsdetail",query:{id:index}});
      },
      getBanner(){
          console.log(11)
            var _this = this;
            this.$http.post('/app/get_banner',{}).then((res)=>{
                if (res.code == 1) {
                    _this.bannerList = res.data;
                    _this.$nextTick(function(){
                         _this.startSwiper()
                    })
                    
                }
            })
               
      },
      getRemai(){
           var _this = this;
            this.$http.post('/goods/search_hot',{price_order:1,start:0}).then(res=>{
                if(res.code==1){
                    _this.remaiList = res.data || [];
                }
            })
      },
      getCuxiao(){
           var _this = this;
            this.$http.post('/goods/get_low_goods',{price_order:1,start:0}).then(res=>{
                if(res.code==1){
                    _this.cuxiaoList = res.data || [];
                }
            })
      },
      getNews(){
           var _this = this;
            this.$http.post('/goods/search_new',{price_order:1,start:0}).then(res=>{
                if(res.code==1){
                    _this.newsList = res.data || [];
                }
            })
      },
      getJingpin(){
           var _this = this;
            this.$http.post('/goods/get_top_goods',{start:0}).then(res=>{
                if(res.code==1){
                    _this.jingpinList = res.data || [];
                }
            })
      },
      startSwiper(){
        new Swiper('.swiper-container', {
            grabCursor : true,
            // direction: 'vertical', // 垂直切换选项
            autoplay: {
            // true,
                delay:3000,
            },
            //可选选项，自动滑动
            loop: true, // 循环模式选项
            speed:300,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
	    })
      }
    
  },
  mounted() {
      this.getBanner();
      this.getRemai();
      this.getCuxiao();
      this.getNews();
      this.getJingpin();
  },
}
</script>

<style lang="" scoped="scope">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body * ::-webkit-scrollbar {
        display: none;
        overflow: auto !important;
    }

    body {
        background-color: #fafafe;
        box-sizing: border-box;
    }

    input::-webkit-input-placeholder {
        color: #A5A5C1;
    }

    .header {
        width: 100%;
        height: .44rem;
        background: #fff;
        position: fixed;
        top: 0;
      
        z-index: 1000;
        overflow: hidden;
    }

    .header  .searchauto {
        width: 3.47rem;
        height: .3rem;
        background: #F5F5FD;
        border-radius: .25rem;
        margin: .1rem auto;
        overflow: hidden;
    }

    .header  .searchauto .iconsousuo {
        font-size: .14rem;
        color: #A5A5C1;
        text-align: center;
        margin-left: .15rem;
    }

    .header  .searchauto input {
        width: 3rem;
        height: 0.3rem;
        font-size: .14rem;
        color: #A5A5C1;
        outline: medium;
        border: none;
        background-color: #F5F5FD;
    }

    .swiper-container {
        width: 3.47rem;
        height: 1.58rem;
        margin:  auto;
        /* margin-top: .5rem; */
        overflow: hidden;
    }

    .swiper-container .swiper-wrapper .swiper-slide img {
        width: 3.47rem;
        height: 1.58rem;
        border-radius: .15rem;
    }

     .shops {
        width: 3.47rem;
        height: .73rem;
        margin: 0 auto;
        padding: 0 .04rem;
        overflow: hidden; 
        display: flex; 
        flex-direction: row;
        justify-content: space-around;
        background: #FFF;
    }
    .shops .hot{
        float: left;
}
     .shops img {
        width: .39rem;
        height: .39rem;
        margin-top: .08rem;
    }

     .shops div {
        color: #333333;
        font-size: .12rem;
        text-align: center;
    }


     .Hot-selling {
        width: 3.47rem;
        height: 2.12rem;
        background: #FFF;
        margin: .1rem auto;
        overflow: hidden;

    }

     .Hot-selling .hotgoods {
        width: 100%;
        overflow: hidden;
    }

     .Hot-selling .hotgoods .hot-title {
        font-size: .16rem;
        color: #333333;
        font-family: 'PingFang-SC-Bold';
        font-weight: bold;
        text-align: left;
        float: left;
        margin-left: .15rem;
        margin-top: .15rem;
    }

     .Hot-selling .hotgoods .hot-more {
        font-size: .12rem;
        color: #999999;
        text-align: left;
        float: right;
        margin-right: .14rem;
        margin-top: .15rem;
    }

     .Hot-selling .hotgoods .hot-more .icongengduo {
        font-size: .1rem;
        color: #CCCCCC;
        margin-left: .07rem;
    }
    .hot_list{
            width: 100%;
            height: auto;
            overflow-x: scroll;
            white-space: nowrap;
            padding-left: .1rem;
            margin-top: .1rem;
            
        }
    .tuijian-item{
            display: inline-block;
        width: 1.12rem;
        height: auto;
        margin-bottom: .08rem;
        border-radius: .03rem;
        overflow: hidden;
        background-color: white;
        margin-left: .05rem;
        
   
    }
    .tuijian-item img{
        display: block;
        width: 1.12rem;
        height: 1.12rem;
        margin: 0 auto;
        border-radius: .03rem;

    }
    .tuijian-item .jiudian{
        width: 100%;
        padding: 0 .06rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .13rem;
        color: #333333;
        margin-top: .05rem;
    }
    .tuijian-item .price{
        width: 100%;
        padding: 0 .06rem;
        overflow: hidden;
    }
    .tuijian-item .price .shop_price{
        font-size: .12rem;
        color: #F5B443;
        font-weight: bold;
        white-space: nowrap;
    }
    .tuijian-item .price .market_price{
        font-size: .1rem;
        color: #999999;
        text-decoration: line-through;
    }
    
    .jingpin{
        width: .73rem;
        height: .23rem;
        border-radius: .05rem;
        margin-left: 1.5rem;
        margin-top: .07rem;
       
    }
    .jptuijian{
        width: 100%;
       overflow: hidden;
       margin-bottom: .64rem;
       margin-top: .1rem;

    }

    .tuijian-da{
        float: left;
        width: 1.69rem;
        height: auto;
        margin-bottom: .08rem;
        border-radius: .03rem;
        overflow: hidden;
        background-color: white;
        margin-left: .13rem;

       
        
   
    }
    .tuijian-da img{
        display: block;
        width: 1.68rem;
        height: 1.68rem;
        margin: 0 auto;
        border-radius: .03rem;

    }
    .tuijian-da .jiudian{
        width: 100%;
        padding: 0 .06rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .13rem;
        color: #333333;
        margin-top: .02rem
    }
    .tuijian-da .price{
        width: 100%;
        padding: 0 .06rem;
        overflow: hidden;
        margin-top: .02rem;
    }
    .tuijian-da .price .shop_price{
        font-size: .12rem;
        color: #F5B443;
        font-weight: bold;
        white-space: nowrap;
            float: left;
    }
    .tuijian-da .price .market_price{
        font-size: .1rem;
        color: #999999;
        text-decoration: line-through;
        margin-left: .1rem;
            float: left;
    }
.main{
    margin-top: .44rem;
}
#hui-load-more{
    margin-bottom: .54rem !important;
}
</style>