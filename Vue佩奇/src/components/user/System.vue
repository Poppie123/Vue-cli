<template>
    <div>
        <div class="header">
        <i class="iconfont iconiconfontjiantou1 " @click="back"></i>
        <p>我的系统</p>
    </div>
    <div class="main">
        <img src="../../assets/img/peiqi.png">
        <p>配骑</p>
        <p class="ll">配骑专业酒店宾馆供应商</p>
    </div>

    <div class="footer">
        <p class="banben">版本号:{{ android }}</p>
        <p>coporight @ 配骑专业酒店宾馆供应商</p>
    </div>

    </div>
</template>
<script>
export default {
    name:'System',
    data() {
        return {
            android:''
        }
    },
    methods: {
        back(){
            history.go(-1);
        },
        getSystem(){
            var _this = this;
            this.$http.post('/user/get_banben',{}).then(res=>{
                if(res.code==1){
                    _this.android = res.data.android
                
                }
            })
        }
    },
    mounted() {
        this.getSystem()
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
            background: #FFFFFF;
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
        .main img{
            width: .92rem;
            height: .92rem;
            margin-left: 1.4rem;
            margin-top: 1.05rem;
        }
        .main p{
            font-size: .16rem;
            text-align: center;
            color: #645686;
            font-weight: bold;
            margin-top: .15rem;
        }
        .main .ll{
            font-size: .12rem;
            text-align: center;
            color: #645686;

        }
        .footer{
            position: fixed;
            bottom: .37rem;
            width: 100%
        }
        .footer p{
            font-size: .1rem;
             margin: 0 auto;
            color: #666666;
            text-align: center;
             line-height: .3rem;
            margin-top: .15rem;

        }
    </style>