<template>
  <div>
    <!-- 搜索框 -->
    <div class="search">
      <div class="sear_cen flexc link-to" data-href="./search.html">
        <i class="iconfont iconsousuo"></i>
        <input id="sea" type="text" placeholder="请输入商品名称" @click="search" />
      </div>
    </div>
    <!-- 页面头部 -->
    <div class="headernav">
      <!-- 轮播图 -->
      <div class="banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in bannerlist" :key="item.id">
              <img :src="item.banner" alt />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!-- 导航 -->
      <div class="nav flexc">
        <div class="naver tc link-to" data-href="./home_hot.html">
          <img src="@/assets/image/item1.png" />
          热卖商品
        </div>
        <div class="naver tc link-to" data-href="./home_new.html">
          <img src="@/assets/image/item2.png" />
          新品上市
        </div>
        <div class="naver tc link-to" data-href="./home_day.html">
          <img src="@/assets/image/item3.png" />
          今日促销
        </div>
        <div class="naver tc link-to" data-href="./home_sell.html">
          <img src="@/assets/image/item4.png" />
          特卖商品
        </div>
      </div>
    </div>
    <div class="main">
      <!-- 产品介绍 -->
      <div class="main_top">
        <div class="item flexc">
          <span>热卖商品</span>
          <div class="itemr">
            <span>更多</span>
            <i class="iconfont icongengduo"></i>
          </div>
        </div>
        <div class="pro overx">
          <div class="pro_o" v-for="item in hotlist" :key="item.id">
            <!-- <a :href="item.detail"> -->
            <img :src="item.img" />
            <div class="pro_cen ellipse">{{item.goods_name}}</div>
            <div class="pro_bot">
              <p>{{item.shop_price}}</p>
              <del>{{item.market_price}}</del>
            </div>
            <!-- </a> -->
          </div>
        </div>
      </div>
      <!-- 促销商品 -->
      <div class="main_top">
        <div class="item flexc">
          <span>促销商品</span>
          <div class="itemr">
            <span>更多</span>
            <i class="iconfont icongengduo"></i>
          </div>
        </div>
        <div class="pro overx">
          <div class="pro_o" v-for="item in selllist" :key="item.id">
            <img :src="item.pic" />
            <div class="pro_cen ellipse">{{item.goods_name}}</div>
            <div class="pro_bot">
              <p>{{item.shop_price}}</p>
              <del>{{item.market_price}}</del>
            </div>
          </div>
        </div>
      </div>
      <!-- 新品上市 -->
      <div class="main_top">
        <div class="item flexc">
          <span>新品上市</span>
          <div class="itemr">
            <span>更多</span>
            <i class="iconfont icongengduo"></i>
          </div>
        </div>
        <div class="pro overx">
          <div class="pro_o" v-for="item in newlist" :key="item.id">
            <img :src="item.pic" />
            <div class="pro_cen ellipse">{{item.goods_name}}</div>
            <div class="pro_bot">
              <p>{{item.shop_price}}</p>
              <del>{{item.market_price}}</del>
            </div>
          </div>
        </div>
      </div>
      <!-- 精品推荐 -->
      <img src="@/assets/image/item5.png" class="goods" />
      <div class="main_cen">
        <ul>
          <li>
            <div class="good" v-for="item in getdaylist" :key="item.id">
              <img :src="item.img" />
              <div class="good_bot">
                <div class="pro_cen ellipse">{{item.goods_name}}</div>
                <div class="good_much">
                  <span>{{item.shop_price}}</span>
                  <del>{{item.market_price}}</del>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      bannerlist: [],
      hotlist: [],
      newlist: [],
      selllist: [],
      getdaylist: []
    };
  },
  mounted() {
    this.getBanner();
    this.getHotGoods();
    this.getNewGoods();
    this.getSellGoods();
    this.getDayGoods();
  },
  methods: {
    //跳转搜索
    search() {
      this.$router.push({ path: "/searchshow" });
    },
    // 请求轮播图（异步操作）
    getBanner() {
      var _this = this;
      this.$http.post("/app/get_banner").then(res => {
        if (res.code == 1) {
          console.log(res);
          _this.bannerlist = res.data || [];
          _this.$nextTick(() => {
            _this.startSwiper();
          });
        }
      });
    },
    startSwiper() {
      new Swiper(".swiper-container", {
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 5000, //5秒切换一次
          disableOnInteraction: false
        }
      });
    },
    //获取热卖商品
    getHotGoods() {
      var _this = this;
      this.$http
        .post("/goods/get_top_goods", { start: _this.start })
        .then(res => {
          if (res.code == 1) {
            console.log(res);
            _this.hotlist = res.data || [];
          }
        });
    },
    // 获取促销商品
    getSellGoods() {
      var _this = this;
      this.$http
        .post("/goods/get_low_goods", { price_order: 1, start: 0 })
        .then(res => {
          if (res.code == 1) {
            console.log(res);
            _this.selllist = res.data || [];
          }
        });
    },
    //获取新品上市
    getNewGoods() {
      var _this = this;
      this.$http
        .post("/goods/search_new", { price_order: 1, start: 0 })
        .then(res => {
          if (res.code == 1) {
            console.log(res);
            _this.newlist = res.data || [];
          }
        });
    },
    //获取精品推荐
    getDayGoods() {
      var _this = this;
      this.$http.post("/goods/get_top_goods", { start: 0 }).then(res => {
        if (res.code == 1) {
          console.log(res);
          _this.getdaylist = res.data || [];
        }
      });
    }
  }
};
</script>
<style scoped>
/* 搜索框 */
.search {
  width: 100%;
  height: 0.88rem;
  padding: 0.14rem 0.28rem;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 5;
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

.search input {
  width: 100%;
  height: 100%;
  background: #f5f5fd;
  font-size: 0.28rem;
}

.search input::-webkit-input-placeholder {
  font-size: 0.28rem;
  color: #a5a5c1;
}

/* 页面头部 */
.headernav {
  width: 100%;
  height: 5rem;
  padding: 0 0.28rem 0 0.28rem;
  background: #fff;
}

/* 轮播图 */
.banner {
  width: 100%;
  height: 3.16rem;
  margin-top: 0.88rem;
}

.swiper-container {
  width: 100%;
  height: 100%;
  border-radius: 0.2rem;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
  /* border-radius: 0.2rem; */
}

/* 导航 */
.nav {
  width: 100%;
  height: 1.76rem;
  padding-top: 0.3rem;
}

.naver {
  width: 1rem;
  height: 1.2rem;
  font-size: 0.24rem;
  color: #333;
}

.naver img {
  width: 0.78rem;
  height: 0.78rem;
  margin: 0 auto 0.1rem;
}
/* 页面主要内容 */
.main {
  width: 100%;
  height: auto;
  padding: 0.2rem 0.28rem 1.18rem 0.28rem;
}

/* 产品介绍 */
.main_top {
  width: 100%;
  height: 4.24rem;
  background: #fff;
  padding-left: 0.28rem;
  margin-bottom: 0.2rem;
}

.main_top .item {
  width: 100%;
  height: 1rem;
  padding-top: 0.1rem;
  line-height: 1rem;
}

.item span {
  font-size: 0.32rem;
  color: #333;
  font-weight: bold;
}

.main_top .itemr {
  width: 1rem;
  height: 0.9rem;
}

.main_top .itemr span {
  font-size: 0.24rem;
  color: #999;
  font-weight: 400;
}

.main_top .itemr i {
  color: #ccc;
  font-size: 0.25rem;
}

.pro {
  width: 100%;
  height: 3.24rem;
  display: flex;
}

.pro_o {
  width: 2.2rem;
  height: 3.24rem;
  margin-right: 0.2rem;
}

.pro_o img {
  width: 2.2rem;
  height: 2.2rem;
}

.pro_cen {
  width: 100%;
  height: 0.65rem;
  font-size: 0.26rem;
  color: #333;
  line-height: 0.65rem;
}

.pro_bot {
  width: 100%;
  height: 0.4rem;
  display: flex;
}

.pro_bot p {
  font-size: 0.24rem;
  color: #f5b443;
  line-height: 0.18rem;
  margin-right: 0.19rem;
  font-weight: bold;
}

.pro_bot del {
  font-size: 0.2rem;
  color: #cccccc;
  line-height: 0.2rem;
}
/* 精品推荐 */
.goods {
  width: 1.45rem;
  height: 0.45rem;
  margin: 0.1rem auto;
}

.main_cen {
  width: 100%;
  height: auto;
}

.main_cen li {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.good {
  width: 3.37rem;
  height: 4.43rem;
  border-radius: 0.06rem;
  background: #fff;
  margin-top: 0.2rem;
}

.good img {
  width: 3.37rem;
  height: 3.37rem;
}

.good_bot {
  width: 100%;
  height: 1.06rem;
  padding: 0 0.49rem 0 0.11rem;
}

.good_much {
  width: 100%;
  height: 0.41rem;
  display: flex;
}

.good_much span {
  font-size: 0.28rem;
  color: #f5b443;
  line-height: 0.18rem;
  margin-right: 0.19rem;
  font-weight: bold;
}

.good_much del {
  font-size: 0.2rem;
  color: #999;
  line-height: 0.2rem;
}
</style>

