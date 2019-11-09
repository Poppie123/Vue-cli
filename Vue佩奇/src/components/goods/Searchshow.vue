<template>
<div id="app" class="contain">
    <div class="header">
        <div class="title">
                <i class="iconfont iconiconfontjiantou1" @click="back"></i>
            <div class="sousuo">
                <i class="iconfont iconsousuo"></i>
                <input type="text" placeholder="请输入商品名称" class="name" v-model="keyword" @keyup.enter='getSearchG(keyword)'>
            </div>
        </div>
        <div class="sortall ">
            <p :class=" [display == 1 ? 'active pai ' : 'pai ']" @click="pai_zong(1)">综合排序</p>
            <div class="price jiage">
                <p :class="[display == 4 | display == 3 ? 'active p_price' : 'p_price' ]" @click="pai_price">价格</p>
                <div class="tubiao">
                    <i :class="[ display == 4 ? 'active iconfont icondown-copy-copy' : 'iconfont icondown-copy-copy']"></i>
                <i :class="[ display == 3 ? 'active  iconfont icondown' : ' iconfont icondown']"></i>
                </div>
            </div>
            <div class="price xiaoliang">
                <p :class="[display == 6 | display == 5 ? 'active x_price' : 'x_price'] " @click="pai_xiaol">销量</p>
                <div class="tubiao">
                    <i  :class="[ display == 6 ? 'active iconfont icondown-copy-copy' : 'iconfont icondown-copy-copy']" ></i>
                    <i :class="[ display == 5 ? 'active iconfont icondown' : ' iconfont icondown']"></i>
                </div>
            </div>
        </div>
    </div>

    <div class="middle">
        <div class="first"  v-for="v in searchList"  :key="v.id">
            <img :src="v.imgs[0].img">
            <div class="down "  >
                <p class="t-title" >{{ v.goods_name }}</p>
                <div class="money">
                    <span class="shop_price">￥{{ v.shop_price }}</span>
                    <span class="market_price">￥{{ v.market_price }}</span>
                </div>
                <div class="sells">
                        销量：{{ v.sales }}
                </div>
            </div>

        </div>

    </div>
</div>
    
</template>
<script>
export default {
    name:'Searchshow',
    data() {
        return {
            searchList:[],
            display:1,
            keyword:''
        }
    },
    methods: {
    getSearchG(keyword){
       this.$router.push({path:"/Goods/Searchshow/"+this.keyword});
       var key = this.$route.params.id;
       this.getSearch(key,1)
    },
        getSearch(key,paixu){
            var _this = this;
            this.$http.post('/goods/search_goods',{keyword:key,start:0,order:paixu}).then((res)=>{
                
                if(res.code == 1){
                    _this.searchList = res.data;
                }
            })

        },
        pai_zong(index){
            this.display = index;
            this.getSearch(this.keyword,1);
        },
        pai_price(){
            if(this.display == 3){
                this.display = 4;
                this.getSearch(this.keyword,4);
               
            }else{
                this.display = 3;
                this.getSearch(this.keyword,3);
            
            }
        },
        pai_xiaol(){
             if(this.display == 5){
                this.display = 6;
                this.getSearch(this.keyword,6);
                console.log(6)
            }else{
                this.display = 5;
                this.getSearch(this.keyword,5);
                console.log(5)
            }
        },
        back(){
            history.go(-1);
            this.keyword = this.$route.params.id;  
        }

    },
    mounted() {
        this.keyword = this.$route.params.id;
        this.getSearch(this.keyword,1)
       
    },
}
</script>
<style scoped>
 *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
      
        background: #FAFAFE;
       
    }
    .header{
        width: 100%;
        height: 1.07rem;
        background: #fff;
    }
    .header .title{
        width: 100%;
        padding: .13rem;
    }
    .iconiconfontjiantou1{
            color: #999999;
            width: .08rem;
            height: .13rem;
            font-size: .2rem;
            float: left;
        margin-top: .02rem;
        /* margin-right: .05rem; */
            
        }
    .sousuo{
        width: 3.14rem;
        height: .3rem;
        background:#F5F5FD; 
        border-radius: 25px;
        margin:  0 auto;
        margin-left: .2rem;
        
    }
   .iconsousuo{
            font-size: .14rem;
            margin-left: .15rem;
            /* margin: auto; */ 
    }
     input{
        outline:medium;
        border: none;
        background: #F5F5FD;
    }
    .name{
        /* margin-top: .05rem; */
        font-size: .16rem;
        font-family: 'PingFang-SC-Regular';
        text-align: left; 
        color: #333333;
        margin-top: .02rem;
    }
    .header .sortall{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: .1rem;

    }
    .header .sortall p{
        font-size: .14rem;
        color: #999999;
        text-align: center;
        line-height: .4rem;
        
    }

  
    .active{
        color: #5E43F5 !important;
        /* z-index: 99999; */
    }

    .sortall .price p{
        float: left;
    }
    .sortall .tubiao{
        float: left;
        position: relative;
        /* overflow: hidden; */
        margin-top: .1rem;
    }
    .icondown{
        /* margin-top: .2rem; */
        position: absolute;
        top: .05rem;
      left: 0;
      font-size: .2rem;
      color: #CCCCCC;

    }
    .icondown-copy-copy{
        position: absolute;
        font-size: .2rem;
        top: -0.05rem;
        color: #CCCCCC;
    }
    .middle{
        width: 100%;
        padding: .08rem;
        margin-bottom: 1rem;
    }
    .middle .first{
        width: 1.69rem;
        height: 2.44rem;
        float: left;
        padding: .1rem;
        margin-right: .1rem;
        overflow: hidden;
        

    }
    .middle .first img{
        width: 1.69rem;
        height: 1.69rem;
    }
    .middle .first .down{
       width: 1.69rem;
        /* padding: .06rem; */
        overflow: hidden;
        background: #fff;
     
        

    }
    .middle .first .down .t-title{ 
        width: 1.39rem;
        font-size: .14rem;
        color: #333333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
       
    }
    .middle .first .down .money{
        overflow: hidden;
      
        width: 100%;
      
      
        
    }
    .middle .first .down .money .shop_price{
        font-size: .16rem;
        font-weight: bold;
        color: #F5B443;
        text-align: left;
        float: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        /* line-height: .14rem; */
    }
    .middle .first .down .money .market_price{
        font-size: .1rem;
        color: #999999;
        text-align: left;
        text-decoration: line-through;
        /* float: left; */
        
        margin-left: .1rem;
    }
    .middle .first .down .sells{
        font-size: .12rem;
        color: #999999;
        text-align: left;
        float: left;
        margin-top: -0.04rem;
    }


</style>