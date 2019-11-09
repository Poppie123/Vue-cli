<template>
  <div id="login">
    <!-- <div class="container"> -->
    <!-- 页面头部 -->
    <div class="header_nav">
      <i class="iconfont iconiconfontjiantou1"></i>
    </div>
    <!-- 页面标题 -->
    <div class="item">
      <span>欢迎，</span>
      <br />
      <span>登录配骑</span>
    </div>
    <!-- 页面主要内容 -->
    <div class="main">
      <div class="main_top flex">
        <span>+86</span>
        <input type="text" placeholder="请输入手机号" v-model="phone" />
      </div>
      <div class="main_bot flexc">
        <input type="text" placeholder="请输入验证码" />
        <div class="main_botr" @click="getCode">{{timeMsg}}</div>
      </div>
    </div>
    <!-- 按钮部分 -->
    <div class="fin" @click="getLogin">
      <div class="bot">立即登录</div>
    </div>
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      code: "",
      timeMsg: "获取验证码"
    };
  },
  mounted() {
    this.$emit("public_footer", false);
  },
  methods: {
    getCode() {
      var _this = this;
      if (this.timeMsg != "获取验证码") {
        return false;
      }
      this.timeMsg = "60s";
      this.timeOut();
      this.timeOut();
      this.$http.post("/user/get_code", { phone: _this.phone }).then(res => {
        if (res.code == 1) {
          console.log(res);
          _this.code = res.data;
          console.log(_this.code);
        }
      });
    },
    //倒计时
    timeOut() {
      let t = 60;
      setInterval(() => {
        t--;
        if (t <= 0) {
          this.timeMsg = "获取验证码";
        } else {
          this.timeMsg = t + "s";
        }
      }, 1000);
    },
    getLogin() {
      var _this = this;
      this.$http
        .post("/user/login_sms", { phone: _this.phone, code: _this.code })
        .then(res => {
          if (res.code == 1) {
            console.log(res.uid);
            localStorage.setItem("uid", res.uid);
            this.$router.push({ path: "/user", query: { currentIndex: 3 } });
          }
        });
    }
  }
};
</script>
<style scoped>
#login {
  height: 100%;
  background: #fff;
}
/* 页面头部 */
.header_nav {
  width: 100%;
  height: 0.8rem;
  padding: 0.28rem 0 0 0.28rem;

  margin-bottom: 0.2rem;
}
.header_nav i {
  color: #ddd;
}
/* 页面标题 */
.item {
  width: 100%;
  height: 1.01rem;
  padding-left: 0.78rem;
}
.item span {
  font-size: 0.4rem;
  color: #333;
  font-weight: bold;
  line-height: 0.55rem;
}
/* 页面主要内容 */
.main {
  width: 100%;
  height: 1.91rem;
  margin: 1.2rem auto 0;
  padding: 0 0.8rem;
}
.main_top {
  width: 100%;
  height: 0.94rem;
  border-bottom: 1px solid #eeeeee;
  line-height: 0.94rem;
  font-size: 0.32rem;
  color: #999;
}
.main_top span {
  margin-right: 0.3rem;
}
.main_top input {
  width: 3rem;
  height: 0.92rem;
  line-height: 1.1rem;
  color: #333;
  font-size: 0.32rem;
}
.main_top input::-webkit-input-placeholder {
  font-size: 0.28rem;
  color: #999;
}
.main_bot {
  width: 100%;
  height: 0.96rem;
  line-height: 0.96rem;
  border-bottom: 1px solid #eee;
}
.main_bot input {
  margin: 0;
  color: #333;
  font-size: 0.32rem;
}
.main_bot input::-webkit-input-placeholder {
  font-size: 0.28rem;
  color: #999;
}
.main_botr {
  width: 1.8rem;
  height: 0.96rem;
  color: #9c53f6;
  font-size: 0.28rem;
  text-align: end;
}
.main_bot .active {
  color: #999;
  background: #fff;
}
/* 按钮部分 */
.bot {
  width: 5.9rem;
  height: 0.88rem;
  border-radius: 0.44rem;
  background: #d8dadc;
  text-align: center;
  line-height: 0.88rem;
  color: #fff;
  font-size: 0.36rem;
  margin: 1.62rem auto 0;
  font-weight: bold;
}
.fin .active {
  background: #9c53f6;
}
</style>