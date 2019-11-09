
<template>
     <div class="cotainer">
<div class="header">
    <div class="title">
        <!-- <p class="jiantou"><</p> -->
        <i class="iconfont iconiconfontjiantou1 " @click="back"></i>
        <div class="sousuo">
            <i class="iconfont iconsousuo"></i>
            <input type="text" placeholder="请输入商品名称" class="name" v-model="keyword" @keyup.enter="search">
        </div>
        <p class="search" @click="search">搜索</p>
    </div>
</div>
<div class="middle">
    <div class="history">
        <span class="cont">历史记录</span>
        <i class="iconfont iconshanchu-01" @click="clear"></i>
    </div>
   <div class="btns">
        <div class="btn" v-for="(item,index) in searchList" :key="index" @click="danji(index)">{{ item.keyword }}</div>
    </div>
</div>
</div>
</template>

<script>
export default {
    name:'Search',
    data() {
        return {
            keyword:'',
            searchList:[],

        }
    },
    methods: {
         back(){
            history.go(-1);
         
        },
        clear(){
           this.clearHistory();
        },
        clearHistory(){
            var _this = this;
            console.log('aaaaaaaaa')
            this.$http.post('/app/del_keyword_history',{}).then(res=>{
                if(res.code==1){
                     _this.getSearch();
                }
                   
            })
        },
        danji(index){
            this.keyword = this.searchList[index].keyword
        },
        search(){
            if(this.keyword){
                this.$router.push({path:"/Goods/Searchshow/"+this.keyword});
            }else{
                console.log('请输入搜索内容')
            }
            
           
        },
        getSearch(){
            var _this = this;
            this.$http.post('/app/get_keyword_history',{}).then((res)=>{
                if(res.code==1){
                    _this.searchList = res.data
                }
            })
        }
    },
    mounted() {
        this.getSearch();
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
        height: .64rem;
        background: #FFFFFF;
        overflow: hidden;
    }
    .title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: .09rem;
    }
    /* .title .jiantou{
        width: .04rem;
        height: .14rem;
        color: #A5A5C1;
       
    } */
      .sousuo{
        width: 2.83rem;
        height: .3rem;
        background:#F5F5FD; 
        border-radius: 25px;
        margin: .1rem 0 auto;
        
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
        margin-top: .05rem;
        font-size: .16rem;
        font-family: 'PingFang-SC-Regular';
        text-align: left; 
        color: #333333
    }
    .search{
        font-weight: Medium;
        font-family: 'PingFang-SC-Medium';
        text-align: center;
        font-size: .14rem;
        
        margin-top: .17rem;
        margin-right: .14rem;
    }
  .history{
        margin-top: .21rem;
        margin-left: .15rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
      .cont{
        font-family: 'PingFang-SC-Bold';
        font-weight: bold;
        color: #333333;
        font-size: .16rem;
    
    }
    .iconshanchu-01{
        font-size: .18rem;
        color: #999999;
        margin-right: .14rem;
        
        
    }
   .btns{
        margin-left: .15rem;
        margin-top: .21rem;
    }
    .btn{
        border: 1px solid #CCCCCC;
        border-radius: .25rem;
        background: #FAFAFE;
        font-family: PingFang-SC-Regular;
        text-align: center;
        color: #666666;
        font-size: .14rem;
        float: left;
        width: .68rem;
        height: .27rem;
        line-height: .27rem;
        margin-top: .1rem;
        margin-left: .13rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

    }
    .iconiconfontjiantou1{
            color: #999999;
            width: .08rem;
            height: .13rem;
            float: left;
            margin-top: .17rem;
       margin-left: .13rem;
            
        }
</style>