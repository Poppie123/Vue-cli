<template>
  <div class="class">
    <div class="header">
      <div class="nav">
        <p class="ii">
          <i class="iconfont iconsousuo"></i>
        </p>
        <p class="name">
          <input type="text" placeholder="请输入商品名称" class="input" />
        </p>
      </div>
    </div>

    <div class="middle">
      <div class="left">
        <div class="l-li" v-for="item in leftList" :key="item.id" @click="getIndex(item.id)">
          <div :class="[display == item.id ? 'lactive line' :'line' ]"></div>
          <div :class="[display == item.id ? 'tactive ziti':'ziti'] ">{{ item.name }}</div>
        </div>
        <!-- <div class="l-li tactive">
                <div class="line "></div>
                <div class="ziti">居家</div>
        </div>-->
      </div>

      <div class="right">
        <div
          class="one"
          v-for="(item,index) in rightList"
          :key="index"
          @click="goodsEdtail(item.id)"
        >
          <img :src="item.pic" class="r-img" />
          <p class="csyp">{{ item.goods_name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Classification",
  data() {
    return {
      id: "",
      leftList: [],
      rightList: [],
      display: 1
    };
  },

  methods: {
    goodsEdtail(index) {
      console.log(index);
      this.$router.push({ path: "/Mine/Goodsdetail", query: { id: index } });
    },
    getIndex(index) {
      this.display = index;
      this.getRight(index);
    },

    getLeft() {
      var _this = this;
      this.$http.post("/nature/get_all_cate", {}).then(res => {
        if (res.code == 1) {
          _this.leftList = res.data;
        }
      });
    },
    getRight(index) {
      var _this = this;
      this.$http
        .post("/goods/get_cate_goods", { cate_id: index, start: 0, order: 1 })
        .then(res => {
          if (res.code == 1) {
            _this.rightList = res.data;
          } else {
          }
        });
    }
  },
  mounted() {
    this.getLeft();
    this.getRight(1);
  }
};
</script>

<style lang="" scoped="scope">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #ffffff;
}
.header {
  width: 100%;
  overflow: hidden;
  background: #ffffff;
  height: 0.44rem;
  border-bottom: 1px solid #f2f2f2;
  margin: 0 auto;
  overflow: hidden;
}
.nav {
  width: 3.47rem;
  height: 0.3rem;
  /* margin-top: .06rem;
        margin-left: .14rem; */
  background: #f5f5f9;
  border-radius: 0.2rem;
  margin: 0.1rem auto;
}
.ii {
  float: left;
  margin-left: 0.15rem;
  margin-top: 0.05rem;
}
.iconsousuo {
  color: #a5a5c1;
  font-size: 0.14rem;
}
input {
  outline: medium;
  border: none;
  background: #f5f5fd;
}
.name {
  /* text-align:center;
        line-height: .14rem; */
  margin-left: 0.1rem;
  margin-top: 0.05rem;
  float: left;
}
.input {
  font-family: "PingFang-SC-Regular";
  font-size: 0.14rem;
  color: #a5a5c1;
}
.middle {
  width: 100%;
  overflow: hidden;
}
.left {
  width: 0.76rem;
  height: 100%;
  float: left;
  background: #f5f5f9;
  position: fixed;
  left: 0;
  overflow: hidden;
}

.l-li {
  border-bottom: 1px solid #ffffff;
  overflow: hidden;
}

.tactive {
  background: #fff;
  color: #9c53f6 !important;
}

.lactive {
  background: #9c53f6 !important;
}
.line {
  width: 0.03rem;
  height: 0.67rem;
  background: #f5f5f9;
  float: left;
  margin-left: -0.015;
}
.ziti {
  width: 0.76rem;
  text-align: center;
  line-height: 0.66rem;
  color: #333c3c;
  font-family: "PingFang-SC-Regular";
  font-size: 0.16rem;
}
.right {
  width: 3rem;
  height: 100%;
  white-space: nowrap;
  overflow: hidden;
  float: right;
}
.one {
  width: 0.8rem;
  margin-top: 0.13rem;
  margin-left: 0.16rem;
  float: left;
  overflow: hidden;
  border-radius: 0.03rem;
}
.r-img {
  width: 0.78rem;
  height: 0.78rem;
  border-radius: 0.03rem;
}
.csyp {
  font-size: 0.13rem;
  text-align: center;
  color: #999999;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>