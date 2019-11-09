<template>
  <div id="classify">
    <!-- 搜索框 -->
    <div class="search_classify">
      <div class="sear_cen flexc">
        <i class="iconfont iconsousuo"></i>
        <input id="sea" type="text" placeholder="请输入商品名称" />
      </div>
    </div>
    <!-- 左侧导航栏 -->
    <div class="nav_content">
      <div
        class="nav_o"
        :class="activeClass == index ? 'active' : ''"
        v-for="(item,index) in leftlist"
        :key="index"
        @click="handerClick(index,(item.id))"
      >{{item.name}}</div>
    </div>
    <!-- 右侧列表 -->
    <div class="main_classify">
      <ul>
        <li v-for="item in rightlist" :key="item.id">
          <img :src="item.pic"/>
          <div class="main_bot ellipse">{{item.goods_name}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
      activeClass: 0, //默认第一个
      leftlist: [],
      rightlist: []
    };
  },
  mounted() {
    this.getCartList();
    this.getCatDetil()
  },
  methods: {
    handerClick: function(index, item) {
      this.activeClass = index;
    },
    //获取左侧列表
    getCartList() {
      var _this = this;
      this.$http.post("/nature/get_all_cate", {}).then(res => {
        if (res.code == 1) {
          console.log(res);
          _this.leftlist = res.data || [];
        }
      });
    },
    //获取右边数据
    getCatDetil(){
      var _this = this;
      this.$http.post("goods/get_cate_goods", {cate_id:4,start:0,order:1}).then(res => {
        if (res.code == 1) {
          console.log(res);
          _this.rightlist = res.data || [];
        }
      });
    }
  }
};
</script>

<style scoped>
#classify {
  height: 100%;
  background: #fff;
}
.container {
  height: 100%;
}

/* 搜索框 */
.search_classify {
  width: 100%;
  height: 0.88rem;
  padding: 0.14rem 0.28rem;
  background: #fff;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #f2f2f2;
  z-index: 3;
}
.sear_cen {
  width: 100%;
  height: 0.59rem;
  border-radius: 0.3rem;
  background: #f5f5fd;
  padding-left: 0.29rem;
  padding-right: 0.29rem;
  font-size: 0.28rem;
  color: #a5a5c1;
  line-height: 0.59rem;
}
.sear_cen i {
  color: #a5a5c1;
  font-size: 0.26rem;
  margin-right: 0.11rem;
  line-height: 0.65rem;
}
.search_classify input {
  width: 100%;
  height: 100%;
  background: #f5f5fd;
  font-size: 0.28rem;
}
.search_classify input::-webkit-input-placeholder {
  font-size: 0.28rem;
  color: #a5a5c1;
}
/* 左侧导航栏 */
.nav_content {
  width: 1.52rem;
  height: 100%;
  position: fixed;
  top: 0.88rem;
  left: 0;
  background: #f5f5f9;
  overflow-y: scroll;
  white-space: nowrap;
  padding-bottom: 1.96rem;
  z-index: 1;
}
.nav_o {
  width: 100%;
  height: 1.3rem;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  line-height: 1.3rem;
  text-align: center;
  color: #333c3c;
  font-size: 0.32rem;
}
.nav_content .active {
  background: #fff;
  border-left: 3px solid #9c53f6;
  color: #9c53f6;
}
/* 右侧列表 */
.main_classify {
  /* position: fixed;
        overflow-y: scroll;
        white-space: nowrap; */
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 1.1rem 0.14rem 1.08rem 1.67rem;
  overflow: hidden;
  /* padding-bottom: 0rem; */
}
.main_classify li {
  width: 1.6rem;
  height: 2.26rem;
  margin: 0.05rem 0.14rem;
  float: left;
}
.main_classify img {
  width: 1.6rem;
  height: 1.6rem;
}
.main_bot {
  width: 1.6rem;
  height: 0.66rem;
  text-align: center;
  line-height: 0.66rem;
  font-size: 0.28rem;
  color: #999;
}
</style>

