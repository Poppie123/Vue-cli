<template>
    <div>
         <div class="header">
        <i class="iconfont iconiconfontjiantou1 mui-action-back" @click="back"></i>
        <p>编辑地址</p>
    </div>
    <div class="main" >
        <div class="user_info">
            <p class="u_name">联系人:</p>
            <input type="text" placeholder="请输入联系人姓名" class="u_name username" v-model="editAddressList.name">
        </div>
        <div class="user_sex user_info">
            <p class="u_name">性别:</p>
            <div class="person nv" @click="chose(1)">
                <div :class=" editAddressList.sex == 1   ? 'active yuan man':'yuan man'" >
                    <i class="iconfont iconround_check_fill"></i>
                </div>
                <p>先生</p>
            </div>
            <div class="person nan "  @click="chose(2)">
                <div :class=" editAddressList.sex == 2? 'yuan woman active' : 'yuan woman '">
                    <i class="iconfont iconround_check_fill"></i>
                </div>
                <p>女士</p>
            </div>
            
        </div>

        <div class="phoneNum user_info" style="margin-top: .12rem;">
            <p class="u_name">手机号:</p>
            <input type="text" placeholder="请输入联系人电话" class="u_name" v-model="editAddressList.phone" >
        </div>
        <div class="diqu user_info" style="margin-top: .12rem;" id="picker">
            <p class="u_name">选择地区:</p>
            <div class="ii" style="float: right">
            <p class="u_name chosess" style="float: left;margin-top: .02rem;" >请选择 </p>
            <i class="iconfont icongengduo" style="float: right;margin-top: .06rem;"></i></div>
        </div>
        <div class="jutidiz user_info" style="margin-top: .12rem;border-bottom: 0;">
            <p class="u_name">具体地址:</p>
            <input type="text" placeholder="请输入具体的收货地址" class="u_name" id="adress" v-model="adress">
        </div>
    </div>

    <div class="saveloca" @click="saveadr">
            保存地址
        </div>

    </div>
</template>
<script>
export default {
    name:'addressedit',
    data() {
        return {
            editAddressList:{},
            adress:'',
            display :1
        }
    },
    methods:{
        back(){
            history.go(-1)
        },
         chose(index){
             if(index == 1){
                this.editAddressList.sex = 1;
             }else{
                this.editAddressList.sex = 2;
             }
          
            
         },
        getEditAddress(address_ids){
            var _this = this
            console.log(address_ids)
            this.$http.post('/user/get_edit_address_info',{address_id:address_ids}).then(res=>{
                if(res.code==1){
                    _this.editAddressList = res.data;
                }
            })
        },
        saveadr(){
            var id = this.$route.params.id;
            var config = {
                address_id:id,
                name:this.editAddressList.name,
                sex :this.editAddressList.sex,
                phone:this.editAddressList.phone,
                province:'河南省',
                city:'郑州市',
                district:'27区',
                address:this.adress,
                status:0
                };
            this.$http.post('/user/edit_my_address',config).then(res=>{
                
                if(res.code==1){
                    this.$router.push({path:"/Mine/address"});
                }
        

         })
       
        }
    },

    mounted() {
        
        var address_id = this.$route.params.id
        this.getEditAddress(address_id)
    },
}
</script>

<style scoped="scope">
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
        .main{
            width: 100%;
            height:2.6rem;
            background: #FFF;
            margin-top: .11rem;
            padding: .14rem;
        }
        input{
            outline:medium;
            border: none;
        }
        .main .user_info{
            border-bottom: 1px solid #EEEEEE;
            /* height: .44rem; */
             width: 100%;
             overflow: hidden;
             
        }
         .u_name{
            font-size: .14rem;
            color: #999999;
            text-align: center;
            float: left;
            margin-bottom: .12rem;
        }
        
        .main .user_info input{
            /* float: right; */
            text-align: left;
            margin-left: .23rem;
        }
        .main .user_sex{
            margin-top: .19rem;
            height: .48rem;
            overflow: hidden;
        }
        .main .user_sex .person{
            float: left;
            margin-left: .3rem;
            display: flex;
            flex-direction: row;
        }
        .user_sex .person .yuan{
            margin-right: .09rem;
            border-radius: 50%;
            float: left;
            width: .2rem;
            height: .2rem;
            border: 1px solid #333C3C;
            position: relative;
        } 
    .user_sex .person .yuan .iconround_check_fill{
        display: none;
    }
    .user_sex .person .active .iconround_check_fill {
        display: block;
        font-size: .22rem;
        color: #9C53F6;
        align-items: center;
        position: absolute;
        top: -0.07rem;
        left: -0.02rem;
    }
    .icongengduo{
        width: .08rem;
        height: .13rem;
        color: #CCCCCC;
        float: right;
        margin-right: .08rem;
        margin-left: .05rem;

    }
       .saveloca{
            width: 3.45rem;
            height: .44rem;
            border: 1px solid #333C3C;
            border-radius: .25rem;
            text-align: center;
            line-height: .44rem;
            margin:  auto;
            margin-top: 2.49rem;
    }
</style>