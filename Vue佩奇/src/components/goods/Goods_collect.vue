<template>
    <div>
        <div class="header">
    <!-- <span class="ret"><</span> -->
    <i class="iconfont iconiconfontjiantou1  ret"  @click="back"></i>
    <p class="sc">我的收藏</p>
    <p class="bj" @click="ifBianji">{{ bianji }}</p>
</div>
<div class="middle">
    <div class="main" >                                     
        <div  v-for="(item,index) in goodsList" :key="index"  :class=" tranX == true ?  'scactive first':'first'  ">
            <div :class=" item.status ? 'circle active':'circle'"  @click="chose(index)">
                <i class="iconfont iconround_check_fill"></i>
            </div>
            <div class="right">
                <img :src="item.img">
                <div class="con">
                    <p class="title">{{item.goods_name}}</p>
                    <p class="color">{{ item.content }}</p>
                    <p class="money">￥{{ item.shop_price}}</p>
    
                </div>
            </div>
        </div>
    </div>
</div>
    <div class="footer" v-show="show">
        <div class="success" @click="success">
            成功
        </div>
        <div class="del" @click="delCollect()">
            删除
        </div>
    </div>
    

    </div>
</template>
<script>
export default {
    name:'Goods_collect',
    data() {
        return {
            goodsList:[],
            show:false,
            bianji:'编辑',
            tranX:false,
            ids:[]
        }
    },
    methods: {
        chose(index){
           console.log(this.goodsList)
            this.goodsList[index].status = !this.goodsList[index].status
             console.log( this.goodsList[index].status)
        },
        getCollect(){
            var _this = this;
            this.$http.post('/goods/get_user_collect_goods',{start:0}).then(res=>{
                if(res.code == 1){
                    
                    res.data.map((v,i,arr)=>{
                        arr[i].status = false;
                    })
                    _this.goodsList = res.data;
                    
                }
            })
        },
        ifBianji(){
            if(this.bianji == '编辑'){
                this.bianji = '全选'
                this.show = true
                this.tranX = true
            }else{
                var index = 0;
            this.goodsList.map((v,i)=>{
                if(v.status){
                    index += 1
                }
            })
            if(index < this.goodsList.length){
                this.goodsList.map((v,i)=>{
                    v.status=true
                })
            }
            }
        },
        success(){
            this.bianji = '全选'
                this.show = this.tranX = false
                this.bianji = '编辑'
               
        },
        back(){
            history.go(-1)
        },
        //根据id删除收藏
        delCollect(){
            var arr = this.ids
            this.goodsList.map((v,i)=>{
                if(v.status){
                    arr.push(v.id)
                } 
            })
           
            console.log(arr)
            this.delC(arr);
        },
        delC(arr){
            var arr1 = arr.join(',')
            // console.log(this.ids)
            var _this = this
            this.$http.post('/goods/del_more_user_collect',{collect_ids:arr1}).then(res=>{
                if(res.code==1){
                    console.log('删除成功')
                    _this.getCollect()
                }
            })
        },
         
    },
    mounted() {
        this.getCollect();
    },
    
}
</script>

<style lang="" scoped>
    *{
        margin: 0;
        padding: 0;
     
        box-sizing: border-box
    
    }
   
   .header{
        width: 100%;
        height: .44rem;
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        background: #FFFFFF;
        
    }
    .img img{
        width: 82px;
        height: 82px;
        margin: 15px 16px 15px 11px;
    }
    .ret{
        width:.1rem;
        height: .16rem;
        color: #AAAAAA;
        margin-left: .14rem;
    }
     .sc{
        font-size: .2rem;;
        font-weight: bold;
        color: #333333;
        font-family: 'PingFang-SC-Bold';
        
    }
    .bj{
        font-family: 'PingFang-SC-Regular';
        font-size: .14rem;
        margin-right: .14rem;
        
    }
    .middle{
        width: 100%;
        overflow: hidden;
        /* background: gold; */
        /* height: 100%; */
    }
    .middle .main{
        margin-bottom: 1.2rem;
    }
    .middle .first{
        /* width:3.47rem; */
        height: 1.12rem;
        display: flex;
        flex-direction: row;
        margin:.1rem auto;
       
        
    }
    .middle .first .circle{ 
        position: relative;
        width: .21rem;
        height: .21rem;
        border-radius: 50%;
        border: 1px solid #333333;
        transform: translateX(-0.3rem);
        overflow: hidden;
        margin-top: .46rem;
        
       
    }
    .scactive{
        transform: translateX(.4rem);
        transition: .6s;
    }
    .scactive .right{
        left: -0.03rem !important;
    }
/* 
    .lactive{
        transform: translateX(-0.1rem);
        transition: .3s;
    } */
     .first .circle .iconround_check_fill{
       display: none;
    }
    .middle .first  .active .iconround_check_fill{
        display: block;
        font-size: .25rem;
        color: #9C53F6;
        float: left;
        position: absolute;
        top: -0.08rem;
        left: -0.02rem;
      
    }
    .middle .first .right{
        transform: translateX(-0.1rem);
        width: 3.47rem;
        height: 1.12rem;
        background: #fff;
        float: left;
        margin:.1rem 0 0 0;
        /* margin-left: .14rem; */
        display: flex;
        flex-direction: row;
        position: relative;
        left: .05rem;
    }
    .middle .first .right img {
        width: .82rem;
        height: .82rem;
        float: left;
        /* margin: .15rem .14rem .1rem .15rem;; */
        margin-top: .15rem;
        margin-left: .14rem;
        margin-right: .1rem;
    }
    .middle .first .right .con{
        margin-top: .15rem;
        /* float: right; */
    }
    .middle .first .right .con .title{
        width: 2.04rem;
        /* height: .29rem; */
        font-family: 'PingFang-SC-Regular';
        font-size: .12rem;
        color: #333333;
        text-align: left;
        margin-right: .16rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical
    }
    .middle .first .right .con .color{
        width: .58rem;
        height: .13rem;
        font-family: 'PingFang-SC-Regular';
        font-size: .14rem;
        text-align: left;
        color: #999999;
        white-space: nowrap;
        margin-top: .1rem;
    }
    .middle .first .right .con .money{
        font-family: 'PingFang-SC-Bold';
        font-weight: bold;
        font-size: .14rem;
        color: #F5B443;
        margin-top: .1rem;
    }
    .footer{
            position: fixed;
            width: 100%;
            height: .49rem;
            bottom: 0;
            background: #FFFFFF;
            /* display: flex;
            flex-direction: row; */

        }
        .success{
            width: 50%;
            height: .49rem;
            background: #ffffff;
            float: left;
            text-align: center;
            font-family: 'PingFang-SC-Bold';
            font-size: .16rem;;
            font-weight: bold;
            color: #999999;
            line-height: .49rem;

        }
        .del{
            width: 50%;
            height: .49rem;
            background: #9C53F6;
            line-height: .49rem;
            float: left;
            text-align: center;
            font-family: 'PingFang-SC-Bold';
            font-size: .16rem;;
            font-weight: bold;
            color: #ffffff;
    
        }
    
</style>