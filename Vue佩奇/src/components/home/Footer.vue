this<template>
        <!-- 底部开始部分 --> 
    <div class="footer">
        <div v-bind:class="[cindex == 0 ? 'active home-page  all' : 'home-page  all' ]" @click="jump(0)">
            <i class="iconfont iconshouye1"></i>
            <div>首页</div>
        </div>
        <div v-bind:class="[cindex == 1 ? 'active classification all':'classification all' ]"  @click="jump(1)">
            <i class="iconfont iconfenlei1"></i>
            <div >分类</div>
        </div>
        <div v-bind:class="[cindex == 2 ? 'active ShoppingCart all' : 'ShoppingCart all' ]"  @click="jump(2)" >
            <i class="iconfont icongouwuche1"></i>
            <div>购物车</div>
        </div>
        <div v-bind:class="[cindex == 3 ? 'active mine all' : 'mine all']"  @click="jump(3)" >
            <i class="iconfont iconbiaoqing"></i>
            <div>我的</div>
        </div>
    </div>  
</template>
<script>

export default {
    name: 'Footer',
  data () {
    return {
        display:'0',
    
    }
  },
  methods:{
    jump(e){
       switch(e){
        case 0:
            this.$router.push({ path:'/Homepage',query:{currentIndex:0}})
            break;
        case 1:
            this.$router.push({ path:'/Classification',query:{currentIndex:1}})
            break;
        case 2:
            // if(!localStorage.getItem('uid')){
            //      this.$router.push({path:'/Login'});
            // }else{
                this.$router.push({ path:'/ShoppingCart',query:{currentIndex:2}})
            // }
            break;
        case 3:
            if(!localStorage.getItem('uid')){
                this.$router.push({path:'/Login'});
            }else{
               this.$router.push({ path:'/Mine',query:{currentIndex:3}}) 
            }
        
           
            break;
       }
        this.display = e;
    }
  },
  mounted() {
      console.log(this.$route.query)
  },
  computed: {
      cindex(){
          return this.$route.query.currentIndex || 0
      }
  },
}
</script>

<style>

    .footer{
        width:100%;
        height: .54rem;
        position: fixed;
        bottom: 0;
        z-index: 1000;
        text-align: center;
        align-items: center;
        display: flex;
        justify-content: space-around;
        background-color:#FFF;
        /* margin-left: -0.07rem; */
 
     }
     
     .footer .all i{
     font-size: .24rem;   
     color:  #a5a5c1;

     }
     .footer .all div{
         font-size:.11rem;
         color:#a5a5c1;
         text-align: center;
         overflow: hidden;
        
      
        }
     .footer .active div{
         color: #5E43F5;
        
     }
     .footer .active i{
         color: #5E43F5;
     }
</style>