<template>
    <div class="body">
        <div class="header">
        <i class="iconfont iconiconfontjiantou1 mui-action-back" @click="back"></i>
        <p>设置</p>
    </div>

    <div class="main">
        <div class="name-t">
            <p>头像</p>
            <img :src="userInfo.headimg">
        </div>
        <div class="name-t" style=" height: .55rem;">
            <p style="margin-top: .03rem;">昵称</p>
            <!-- <p style="float: right; margin-top:.03rem;">MEROY</p> -->
            <input type="text" class="user_name" placeholder="请输入用户昵称" v-model="userInfo.username">
        </div>
        <div class="name-t" style="border-bottom: 0;">
            <p style="margin-top: .03rem;">性别</p>
            <div class="sexchose">
                <div class="woman person" style="margin-right: .4rem;">
                    <div :class=" userInfo.sex == '女'? 'active yuanq woman my_woman':'yuanq woman my_woman' " @click="chose(1)">
                        <i class="iconfont iconround_check_fill"></i>
                    </div>
                    <p>女</p>
                </div>
                <div class="man person">
                    <div :class="userInfo.sex == '男' ? 'active yuanq man my_man':' yuanq man my_man' " @click="chose(2)">
                        <i class="iconfont iconround_check_fill"></i>
                    </div>
                    <p>男</p>
                </div>
            </div>
        </div>
    </div>

    <div class="nextdiv">
        <p>手机</p>
        <div class="shouji">
        <p class="phone">{{ userInfo.phone }}</p>
        <i class="iconfont icongengduo"></i></div>
    </div>

    <div class="loginbtn" @click="loginOut">
        退出登录
    </div>

</div>
</template>
<script>
export default {
    name:'MySetting',
    data(){
        return{
            userInfo:{},
            sex:''
        }
    },
    methods: {
        back(){
            history.go(-1)
        },
        loginOut(){
             this.$http.post('/user/loginout',{}).then(res=>{
                 if(res.code==1){
                     console.log('退出登录成功')
                      this.$router.push({path:'/homepage'});
                      localStorage.removeItem('uid');
                 }
             })
        },
        chose(sex){
            switch(sex){
                case 1:
                    this.userInfo.sex = '女';
                    this.sex = 2;
                     this.setSex()
                    break;
                case 2:
                    this.userInfo.sex = '男';
                    this.sex = 1;
                    this.setSex()
                    break;
            }
           
           
           
        
        },
        setSex(){
            var _this = this;
            this.$http.post('/user/set_sex',{sex:this.sex}).then(res=>{
               _this.getUserInfo(); 
            })
        },
         getUserInfo(){
            var _this = this;
            this.$http.post('/user/get_user_info',{}).then(res=>{
                if(res.code == 1){
                    _this.userInfo = res.data;
               
                }
            })
        }
    },
       
  
    mounted() {
        this.getUserInfo()
    },
}
</script>
<style scoped>
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .body{
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
        height: 1.91rem;
        background: #FFFFFF;
        margin-top: .1rem;
       overflow: hidden;
    }
    .main .name-t{
        width:100%;
        /* padding: .14rem; */
        height: .79rem;
        overflow: hidden;
        border-bottom: 1px solid #EEEEEE;
        padding: .14rem;
     
    }
    .main .name-t p{
        font-size: .16rem;
        color: #333333;
        text-align: center;
        float: left;
        margin-top: .12rem;
      
    }
    .main .name-t img{
        width: .47rem;
        height: .47rem;
        float: right;
    }
    footer .quanxuan .duihao .iconround_check_fill {
        display: none;

    }

   
    .name-t .sexchose{
        margin-top: -0.1rem;
        float: right;
    }
    .name-t .sexchose .woman{
        float:left;
    }
    .name-t .sexchose .man{
        float: right
    }
    .person .yuanq{
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
    .sexchose .person .iconround_check_fill{
        display: none;
    }
    .name-t .sexchose .active .iconround_check_fill {
        display: block;
        font-size: .22rem;
        color: #9C53F6;
        align-items: center;
        position: absolute;
        top: -0.07rem;
        left: -0.02rem;
    }
    .nextdiv{
        width: 100%;
        height: .55rem;
        background: #FFFFFF;
        margin-top: .1rem;
        padding: .15rem;
    }
    .nextdiv p{
        font-size: .16rem;
        color: #333333;
        text-align: center;
        float: left;

    }
    .nextdiv .shouji{
        float: right;
    }
    .nextdiv .shouji .phone{
        font-size: .16rem;
        color:#999999;
        text-align: center;
        float: left;
    }
    .nextdiv .shouji .icongengduo{
        width: .08rem;
        height: .14rem;
        color: #DDDDDD;
        float: right;
        margin-right: .05rem;
        margin-left: .06rem;
        margin-top: .04rem;
    }
    .loginbtn{
        width: 3.45rem;
        height: .44rem;
        
        border: 1px solid #333C3C;
        border-radius: .25rem;
        text-align: center;
        line-height: .44rem;
        margin:  auto;
        margin-top: 2.49rem;
    }
    .name-t input{
        outline:medium;
        border: none;
        float: right;
         margin-top:.03rem;
         text-align: right;
    }
    </style>
