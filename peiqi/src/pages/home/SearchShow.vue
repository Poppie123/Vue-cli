
<template>
  <div>
    <!-- 搜索框 -->
    <div class="search">
      <div class="sea_top flexc">
        <i class="iconfont iconiconfontjiantou1"></i>
        <div class="sear_cen flexc">
          <i class="iconfont iconsousuo"></i>
          <input
            id="sea" type="text"  placeholder="请输入商品名称"  v-model="keyword"  @keyup.enter="getSearchG(keyword)"
          />
        </div>
      </div>
      <div class="sea_bot">
        <div class="sea_boto" :class="[display == 1 ? 'active':'']" @click="pai_zong(1)">
          <span>综合排序</span>
        </div>
        <div class="sea_boto">
          <span :class="[display == 4 | display == 3 ? 'active': '']" @click="pai_price">价格</span>
          <div class="sea_r">
            <i class="iconfont iconxiangshang" :class="[display == 4 ? 'active' : '']"></i>
            <i class="iconfont iconxiangxia xia" :class="[display == 3 ? 'active' : '']"></i>
          </div>
        </div>
        <div class="sea_boto">
          <span :class="[display == 6 | display == 5 ? 'active' : ''] " @click="pai_xiaol">销量</span>
          <div class="sea_r">
            <i class="iconfont iconxiangshang" :class="[display == 6 ? 'active' : '']"></i>
            <i class="iconfont iconxiangxia xia" :class="[display == 5 ? 'active' : '']"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- 搜索列表 -->
    <div id="refreshContainer" class="hui-refresh">
      <div class="hui-refresh-icon"></div>
      <div class="main">
        <ul>
          <li v-for="v in searchList" :key="v.id">
            <img src="@/assets/image/photo1.png" />
            <div class="main_bot">
              <p>{{ v.goods_name }}</p>
              <div class="main_much">
                <span class="money">￥{{ v.shop_price }}</span>
                <del>￥{{ v.market_price }}</del>
              </div>
              <span class="num">销量：{{ v.sales }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchShow",
  data() {
    return {
      searchList: [
        {
          goods_name: "五星酒店",
          shop_price: "100",
          market_price: "250",
          sales: "0"
        },
        {
          goods_name: "三星酒店",
          shop_price: "150",
          market_price: "250",
          sales: "0"
        },
        {
          goods_name: "一星酒店",
          shop_price: "200",
          market_price: "250",
          sales: "0"
        }
      ],
      display: 1,
      keyword: ""
    };
  },
  methods: {
    getSearchG(keyword) {
      // this.$router.push({ path: "/Goods/Searchshow/" + this.keyword });
      // var key = this.$route.params.id;
      // this.getSearch(key, 1);
    },
    getSearch(key, paixu) {
      // var _this = this;
      // this.$http
      //   .post("/goods/search_goods", { keyword: key, start: 0, order: paixu })
      //   .then(res => {
      //     if (res.code == 1) {
      //       _this.searchList = res.data;
      //     }
      //   });
    },
    pai_zong(index) {
      this.display = index;
      // this.getSearch(this.keyword, 1);
    },
    pai_price() {
      if (this.display == 3) {
        this.display = 4;
        // this.getSearch(this.keyword, 4);
      } else {
        this.display = 3;
        // this.getSearch(this.keyword, 3);
      }
    },
    pai_xiaol() {
      if (this.display == 5) {
        this.display = 6;
        // this.getSearch(this.keyword, 6);
        console.log(6);
      } else {
        this.display = 5;
        // this.getSearch(this.keyword, 5);
        console.log(5);
      }
    }
  },
  mounted() {
    // this.keyword = this.$route.params.id;
    // this.getSearch(this.keyword, 1);
  }
};
</script>







<style scoped>
.search {
  width: 100%;
  height: 1.7rem;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 2;
}
.sea_top {
  width: 100%;
  height: 0.87rem;
  padding: 0.14rem 0.28rem;
}
.search i {
  color: #a5a5c1;
  font-size: 0.3rem;
  margin-right: 0.3rem;
  line-height: 0.59rem;
}
.sear_cen {
  width: 100%;
  height: 0.59rem;
  background: #f5f5fd;
  border-radius: 0.3rem;
  padding: 0 0.28rem;
}
.sear_cen i {
  font-size: 0.28rem;
  margin-right: 0.11rem;
  line-height: 0.6rem;
}
.search input {
  width: 100%;
  height: 100%;
  background: #f5f5fd;
  font-size: 0.28rem;
  line-height: 0.59rem;
}
.search input::-webkit-input-placeholder {
  font-size: 0.28rem;
  color: #a5a5c1;
}
.sea_bot {
  width: 100%;
  height: 0.83rem;
  display: flex;
  justify-content: space-around;
  color: #999;
}
.sea_boto {
  width: 1.2rem;
  height: 0.83rem;
  display: flex;
}
.sea_boto span {
  font-size: 0.28rem;
  line-height: 0.83rem;
}
.sea_r {
  width: 0.4rem;
  height: 0.83rem;
  margin-left: 0.1rem;
  padding-top: 0.05rem;
  position: relative;
}
.sea_r i {
  font-size: 0.2rem;
  margin: 0;
  line-height: 0;
  position: absolute;
  top: 0.3rem;
}
.search .sea_bot .xia {
  position: absolute;
  top: 0.53rem;
  left: -0.03rem;
}
.active {
  color: #5e43f5 !important;
}
/* 搜索列表 */
.main {
  width: 100%;
  height: auto;
  padding: 1.9rem 0.28rem 0.75rem 0.28rem;
}
.main ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.main li {
  width: 3.37rem;
  height: 4.88rem;
  margin-bottom: 0.2rem;
  background: #fff;
}
li img {
  width: 100%;
  height: 3.37rem;
}
.main_bot {
  width: 100%;
  height: 1.51rem;
  padding: 0.15rem 0.49rem 0.2rem 0.11rem;
}
.main_bot p {
  font-size: 0.26rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.main_much {
  width: 100%;
  height: 0.45rem;
}
.main_bot .main_much span {
  font-size: 0.32rem;
  color: #f5b443;
  font-weight: bold;
  margin-right: 0.19rem;
  line-height: 0.6rem;
}
.main_much del {
  font-size: 0.2rem;
  color: #999;
  line-height: 0.63rem;
}
.main_bot span {
  font-size: 0.24rem;
  color: #999;
  line-height: 0;
}
</style>