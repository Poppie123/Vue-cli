<template>
    <div>
    <div class="header">
        <i class="iconfont iconiconfontjiantou1 mui-action-back" @click="back"></i>
        <p>地址管理</p>
    </div>
    <div class="middle">
        <div class="main" v-for="item in addressList" :key="item.address_id">
            <div class="first">
                <div class="user_info">
                    <p class="name text">{{ item.name }}</p>
                    <p class="phone text">{{ item.phone }}</p>
                </div>
                <div class="address">
                    {{ item.address }}
                </div>
                <div class="foot">
                    <div class="default_address " >
                        <div :class=" item.status == 1 ? 'active yuan':'yuan'"  @click="settindMoren(item.address_id)">
                            <i class="iconfont iconround_check_fill"></i></div>
                        <p>默认送货地址</p>
                    </div>
                    <div class="btns">
                        <div class="del" @click="del(item.address_id)">删除</div>
                        <div class="edit" @click="edit(item.address_id)">编辑</div>
                        <!-- <router-link to="/Mine/address/85" tag="div" class="edit"></router-link> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="addAddress" @click="addAddress">
            添加收货地址</div>
    </div>
</template>
<script>
export default {
    name:'Address',
    data() {
        return {
            addressList:[],
           
        }
    },
    methods: {
        back(){
            history.go(-1)
        },
        //默认
        settindMoren(index){
            var _this = this
            this.$http.post('/user/set_default_address',{address_id:index}).then(res=>{
                if(res.code==1){
                    _this.getAddress();
                }
            })
        },
      
            
       //获得地址
        getAddress(){
            var _this = this
            this.$http.post('/user/get_my_address',{start:0}).then(res=>{
                if(res.code == 1){
                    _this.addressList = res.data; 
                }
            })      
        },
        edit(index){
            this.$router.push({path:"/Mine/address/"+index});
        },
        //删除
        del(index){
            var address_id = index
            this.delAddress(address_id);
        },
        delAddress(address_id){
            var _this = this
            this.$http.post('/user/del_my_address',{address_id:address_id}).then(res=>{
                _this.getAddress();
            })      
        },

        
        addAddress(){
             this.$router.push({path:"/Mine/Addaddress"});
        }
    },
    mounted() {
        this.getAddress();
    },
}
</script>

<style lang="" scoped="scope">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #F5F5F9;
    }
    .header{
        width: 100%;
        background: #FFF;
        height: .44rem;
        padding: .11rem;
    }
    .header .iconiconfontjiantou1{
        color: #999999;
        width: .08rem;
        height: .13rem;
        float: left;
        
    }
    .header p{
        font-size: .2rem;
        color: #333333;
        font-weight: bold;
        margin: auto;
        text-align: center;
        margin-top: -0.05rem;
        
    }
    .first{
        width: 100%;
        height: 1.52rem;
        padding: .1rem;
        background: #FFFFFF;
        margin-top: .1rem;
       
    }
    .first .user_info{
        margin-top: .1rem;
        margin-left: .04rem;
    }
    .first .user_info .text{
        font-size: .16rem;

        text-align: left;
        color: #333333;

    }
    .first .user_info .name{
        float: left;
        margin-right: .15rem;
    }
    .first .address{
        font-size: .14rem;
        text-align: left;
        color: #999999;
        margin-left: .04rem;
        margin-top: .1rem;
        border-bottom: 1px solid #EEEEEE;
        padding-bottom: .14rem;
    }
    .first .foot{
        padding-left: 1.08rem;
        margin-top: .12rem;
    }
    .foot .default_address{
        float: left;
    }
    .foot .default_address .yuan{
        border-radius: 50%;
        float: left;
        width: .2rem;
        height: .2rem;
        border: 1px solid #333C3C;
        position: relative;
        /* margin: .18rem .1rem; */
        margin-top: .16rem;
        margin-right: .07rem;
    }

    .foot .default_address .yuan .iconround_check_fill{
        display: none;
    }
    .foot .default_address .active .iconround_check_fill {
        display: block;
        font-size: .22rem;
        color: #9C53F6;
        align-items: center;
        position: absolute;
        top: -0.07rem;
        left: -0.02rem;
    }
    .foot .default_address p{
        font-size: .12rem;
        color: #666666;
        text-align: center;
        white-space: nowrap;
        margin-top: .15rem;
    }
    .foot .btns{
        float:right;
        margin-top: .1rem;
    } 
    .foot .btns .del{
        width: .54rem;
        height: .26rem;
        float: left;
        border: 1px solid #DDDDDD;
        text-align: center;
        line-height: .26rem;
        margin-right: .15rem;
        border-radius: .03rem;
    }
    .foot .btns .edit{
        float: right;
        width: .54rem;
        height: .26rem;
        background: #9C53F6;
        text-align: center;
        line-height: .26rem;
        color: #FFFFFF;
        border-radius: .03rem;
    }
    .addAddress{
        width: 3.45rem;
        height: .44rem;
        
        border: 1px solid #333C3C;
        border-radius: .25rem;
        text-align: center;
        line-height: .44rem;
        /* margin:  auto; */
        /* margin-top: 2.49rem; */
        position: fixed;
        bottom: .41rem;
        margin-left: .14rem;
    }
    .middle{
        margin-bottom: 1.5rem;
    }
</style>