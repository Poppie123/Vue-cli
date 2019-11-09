<template>
  <div class="body">
    <div class="mask" v-show="maskshow" @click="tohidden"></div>
    <!-- 头部开始 -->
    <div class="header">
      <!-- <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a> -->
      <i class="iconfont iconiconfontjiantou1 mui-action-back" @click="back"></i>
      <!-- 回退 -->
    </div>
    <!-- 头部结束 -->
    <!-- 中间部分开始 -->
    <div class="middle">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in goodsDetail.goods_imgs" :key="index">
            <img :src="item.url_img" />
          </div>
          <!--   <div class="swiper-slide">
                        <img src="../../img/chuang.png">
                    </div>
                    <div class="swiper-slide">
                        <img src="../../img/chuang.png">
          </div>-->
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div> -->
        <!-- <div class="swiper-button-next"></div> -->
      </div>
      <!-- 钱，标题 -->
      <div class="first goods_info">
        <p class="price shop_price">￥{{ goodsDetail.shop_price }}</p>
        <p class="yprice xfont market_price">￥{{ goodsDetail.market_price}}</p>
        <p class="title t-list">{{ goodsDetail.goods_name }}</p>

        <div class="sell">
          <span class="ysell xfont">已售:{{ goodsDetail.sales }}</span>
          <span class="shengyu xfont">库存:{{ goodsDetail.goods_stock}}</span>
          <span class="yunfei xfont">运费：0</span>
        </div>
      </div>

      <div class="second auth">
        <!-- <img src="../../img/liangxingoods.png"> -->
      </div>
      <div class="three goods_num">
        <div class="chose">
          <p class="check guige">选择规格</p>
          <div class="taocan" @click="joinCart(goodsDetail.id)">
            <p class="left tiao guige-tc">{{ currentGuigeVal }}</p>
            <i class="iconfont icongengduo"></i>
          </div>
        </div>

        <div class="sumnum">
          <p class="nnum">数量</p>
          <div class="jisuan">
            <div class="jian" @click="subNum()">-</div>
            <div class="num">{{ addCount }}</div>
            <div class="add" @click="addNum()">+</div>
          </div>
        </div>
      </div>
      <div class="four goods_comment" v-if="commonList.length != 0">
        <div class="nav">
          <div class="shutiao"></div>
          <span class="pingjia">
            商品评价
            <span class="check" style="float: right;margin-top: .02rem;">(4526人评价)</span>
          </span>
          <!-- <span class="check youjian">></span> -->
          <i class="iconfont icon-gengduo"></i>
        </div>
        <div class="content">
          <div class="list" v-for="(item,index) in commonList" :key="index">
            <div class="item">
              <div class="user" v-if="item.user">
                <img
                  :src="item.user.headimg"
                  style="width: .2rem;height:.2rem;border-radius: 50%"
                  class="img1"
                />
                <span
                  class="check"
                  style="margin-top: .15rem;margin-left: .05rem;"
                >{{ item.user.username }}</span>
              </div>
              <div class="ping">
                <i
                  :class="1 <= item.appraise_star ? 'iconfont iconpingfen active' : 'iconfont iconpingfen'"
                ></i>
                <i
                  :class="2 <= item.appraise_star ? 'iconfont iconpingfen active' : 'iconfont iconpingfen'"
                ></i>
                <i
                  :class="3 <= item.appraise_star ? 'iconfont iconpingfen active' : 'iconfont iconpingfen'"
                ></i>
                <i
                  :class="4 <= item.appraise_star ? 'iconfont iconpingfen active' : 'iconfont iconpingfen'"
                ></i>
                <i
                  :class="5 <= item.appraise_star ? 'iconfont iconpingfen active' : 'iconfont iconpingfen'"
                ></i>
                <span class="pingfen">{{ item.appraise_star }}分</span>
              </div>
            </div>
            <div class="today check">{{ item.create_time }}</div>
            <div class="check liu">{{ item.content }}</div>
            <div class="photos goods_imgs">
              <img
                v-for="(v,index) in item.img"
                :key="index"
                :src="v"
                style="width: 1.1rem;height:1.1rem;"
              />
              <!-- <img src="../../img/chuang.png" style="width: 1.1rem;height:1.1rem;" > -->
              <!-- <img src="../../img/tu.png" style="width: 1.1rem;height:1.1rem;" > -->
            </div>
          </div>
        </div>
      </div>
      <div class="five goods_detail">
        <div class="nav1">
          <div class="shutiao"></div>
          <span class="pingjia">商品详情</span>
        </div>
        <div class="cont detail_img" v-html="goodsDetail.detail"></div>
      </div>
    </div>
    <!-- 尾部开始 -->
    <div class="footer">
      <div
        class="fff totalPrice"
        style="width: 1.53rem;height:.49rem; display: none; background: #F7F7F7"
      >
        合计金额:
        <span class="sss price" style="margin-left: 0;">￥2560</span>
      </div>
      <div class="xiaoxi">
        <!-- <div class="shop" style="margin-left: .15rem;"> -->
        <div class="itubiao shop_car" @click="goGoshop">
          <i class="iconfont icongouwuche1" style="font-size: .21rem;"></i>
          <p class="check gocar">购物车</p>
        </div>

        <!-- </div> -->
        <!-- <div class="kefu"> -->
        <div class="itubiao chatkf">
          <i class="iconfont iconkefu" style="font-size: .21rem;"></i>
          <p class="check gocar">客服</p>
        </div>

        <!-- </div> -->
        <!-- <div class="cang"> -->
        <div class="itubiao collection" @click="collectGoods">
          <i :class=" collect == true ? 'iconfont iconshoucang active':'iconfont iconshoucang' "></i>
          <p class="check gocar">收藏</p>
        </div>

        <!-- </div> -->
      </div>
      <div class="car join_car" @click="joinCart()">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>

    <!-- 购物弹框 -->
    <div class="fujiade choseGuige" v-show="boo" v-for="(v,index) in guigeList" :key="index">
      <div class="one goodsImg">
        <img :src="v.img" class="imgt" />
        <div class="right goodstitle">
          <p class="t-title">{{ goodsDetail.goods_name }}</p>
          <p class="gui">{{ currentGuigeVal }}</p>
          <p class="price pp">￥{{ currentGuigePrice }}</p>
        </div>
      </div>
      <p class="check guige">规格</p>

      <div class="taozong">
        <div class="taocanot" v-for="(v,index) in guigeList" :key="index">
          <div
            :class="currentGuige == index ? 'active tc' : 'tc'"
            @click="clickAttr(index)"
          >{{ v.attr }}</div>
          <!-- <div class="tc " > 套餐二 </div>
                        <div class="tc " > 套餐三 </div>
          <div class="tc " > 套餐四 </div>-->
        </div>
      </div>

      <div class="jiashu">
        <span class="check nnum">数量</span>
        <div class="jisuan">
          <div class="jian shao" @click="subNum(index)">-</div>
          <div class="num shao">{{ addCount }}</div>
          <div class="add jia" @click="addNum(index)">+</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";

export default {
  name: "Detail",
  data() {
    return {
      gdsId: "",
      goodsDetail: {},
      commonList: [],
      guigeList: [],
      boo: false,
      currentGuige: "",
      currentGuigeVal: "",
      maskshow: false,
      currentGuigePrice: "",
      addCount: "1",
      config: {},
      attr_id: "",
      collect: ""
    };
  },
  methods: {
    goGoshop() {
      if (!localStorage.getItem("uid")) {
        this.$router.push({ path: "/Login" });
      } else {
        this.$router.push({
          path: "/ShoppingCart",
          query: { currentIndex: 2 }
        });
      }
    },
    subNum() {
      this.addCount--;
      console.log(this.addCount);
    },
    addNum() {
      this.addCount++;
      console.log(this.addCount);
    },
    tohidden() {
      this.boo = false;
      this.maskshow = false;
    },
    back() {
      history.go(-1);
    },
    joinCart() {
      if (this.boo == false) {
        this.boo = true;
        this.maskshow = true;
      } else {
        console.log(this.goodsDetail.id);
        this.config = {
          goods_id: this.goodsDetail.id,
          goods_name: this.goodsDetail.goods_name,
          goods_attr_id: this.attr_id,
          goods_attr_value: this.currentGuigeVal,
          goods_num: this.addCount,
          shop_price: this.goodsDetail.shop_price
        };

        this.getJoinCart();
      }
    },
    //加入购物车
    getJoinCart() {
      var _this = this;
      var config = this.config;
      console.log(config.goods_id);
      this.$http.post("/app/add_goods_cart", config).then(res => {
        if (res.code == 1) {
          _this.boo = _this.maskshow = false;
          console.log("添加购物车成功");
        }
      });
    },
    // 获取该商品是否收藏
    getCollection() {
      var _this = this;

      this.$http
        .post("/goods/is_collect", { goods_id: _this.goodsDetail.id })
        .then(res => {
          if (res.code == 1) {
            this.collect = true;
            console.log("shoucamg");
          } else {
            this.collect = false;
            console.log("meishoucang ");
          }
        });
    },
    //取消添加商品收藏
    collectGoods() {
      var _this = this;
      this.$http
        .post("/goods/goods_collect", { goods_id: _this.goodsDetail.id })
        .then(res => {
          console.log(res.code);
          if (res.code == 1) {
            _this.collect = !_this.collect;
            console.log(res.msg);
          }
        });
    },
    //点击切换属性
    clickAttr(index) {
      this.currentGuige = index;
      this.currentGuigePrice = this.guigeList[index].price;
      this.currentGuigeVal = this.guigeList[index].attr;
    },
    getBanner() {
      var _this = this;
      this.$http
        .post("/goods/get_goods_detail", { id: _this.gdsId, start: 0 })
        .then(res => {
          if (res.code == 1) {
            _this.goodsDetail = res.data;
            _this.guigeList = res.data.attribute;
            _this.commonList = res.data.appraise.appraise_list;
            res.data.attribute.map((v, i, arr) => {
              arr[i].addCount = 1;
              _this.attr_id = arr[i].id;
              _this.currentGuigeVal = arr[i].attr;
              _this.currentGuigePrice = arr[i].price;
              _this.currentGuige = i;
            });

            console.log(_this.commonList);
            _this.$nextTick(function() {
              _this.startSwiper();
            });
          }
        });
    },
    startSwiper() {
      new Swiper(".swiper-container", {
        grabCursor: true,
        // direction: 'vertical', // 垂直切换选项
        autoplay: {
          // true,
          delay: 3000
        },
        //可选选项，自动滑动
        loop: true, // 循环模式选项
        speed: 300,
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  },

  mounted() {
    var id = this.$route.query.id;
    this.gdsId = id;
    this.getBanner(), this.getCollection();
  },
  computed: {
    //     commonList(){
    //         var list = [];
    //         if (this.goodsDetail.appraise.appraise_count != 0) {
    //             list = this.goodsDetail.appraise.appraise_list
    //         }
    //         return list
    //     }
  }
};
</script>
<style lang="">
.detail_img img {
  width: 100% !important;
}
</style>
<style lang="" scoped="scope">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.mask {
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #333333;
}
body {
  position: relative;
  background: #fafafe;
}
.header i {
  position: fixed;
  top: 0.1rem;
}

.middle {
  width: 100%;
  overflow: hidden;
}
.swiper-slide img {
  width: 100%;
  height: 3.75rem;
}

.first {
  /* width:  */
  padding: 0.1rem;
  overflow: hidden;
}
.price {
  width: 100%;
  font-size: 0.18rem;
  font-weight: bold;
  font-family: "PingFang-SC-Bold";
  color: #f5b443;
}
.xfont {
  font-size: 0.12rem;
  color: #999999;
}
.title {
  font-size: 0.16rem;
  font-weight: bold;
  font-family: "PingFang-SC-Bold";
  color: #333333;
  margin-top: 0.1rem;
}
.yprice {
  margin-top: 0.1rem;
  text-decoration: line-through;
}
.sell {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.15rem;
  white-space: nowrap;
}
.sell .ysell {
  width: 0.64rem;
  height: 0.12rem;
}
.sell .shengyu {
  width: 0.65rem;
  height: 0.12rem;
}

.sell .yunfei {
  width: 0.43rem;
  height: 0.12rem;
  margin-right: 0.1rem;
}
.middle .second img {
  width: 100%;
  height: 0.42rem;
  margin-top: 0.05rem;
}
.three {
  width: 100%;
  height: 0.76rem;
  padding: 0.1rem;
  background: #ffffff;
  overflow: hidden;
  /* display: flex;
        flex-direction: column; */
}
.chose {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.check {
  /* width: .56rem; */
  /* height: .14rem; */
  font-size: 0.12rem;
  font-family: "PingFang-SC-Regular";
  color: #999999;
  white-space: nowrap;
}
.taocan {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.taocan .left {
  width: 0.42rem;
  height: 0.13rem;
  font-size: 0.14rem;
  text-align: center;
  color: #333333;
  white-space: nowrap;
  margin-right: 0.05rem;
}

.icongengduo {
  font-size: 0.16rem;
  color: #aaa;
  float: right;
}
.sumnum {
  /* float: left; */
  overflow: hidden;
  margin-top: 0.1rem;
}
.nnum {
  /* width: .28rem; */
  height: 0.13rem;
  font-size: 0.12rem;
  color: #999999;
  white-space: nowrap;
  float: left;
}
.jisuan {
  width: 0.75rem;
  height: 0.18rem;
  float: right;
}

.jisuan .jian {
  border: 1px solid #cccccc;
  width: 25%;
  line-height: 0.14rem;
  text-align: center;
  float: left;
  font-size: 0.14rem;
}

.jisuan .num {
  border: 1px solid #cccccc;
  width: 50%;
  line-height: 0.14rem;
  text-align: center;
  float: left;
  font-size: 0.14rem;
}
.jisuan .add {
  border: 1px solid #cccccc;
  width: 25%;
  line-height: 0.14rem;
  text-align: center;
  float: left;
  font-size: 0.14rem;
}
.four {
  width: 100%;
  /* height: 2.85rem; */
  background: #ffffff;
  padding: 0.15rem;
  margin-top: 0.05rem;
  overflow: hidden;
}
.four .nav {
  width: 100%;
  border-bottom: 1px solid #fafafe;
  border-width: 100%;
  overflow: hidden;
}
.shutiao {
  width: 0.03rem;
  height: 0.14rem;
  background: #9c53f6;
  float: left;
}
.pingjia {
  font-size: 0.14rem;
  color: #333333;
  text-align: left;
  float: left;
  margin-left: 0.05rem;
}
.youjian {
  text-align: right;
  float: right;
}
.content {
  width: 100%;
  margin-top: 0.1rem;
  overflow: hidden;
}
.content .item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item .user {
  width: 2rem;
}
.item .ping {
  width: 2rem;
}
.content img {
  float: left;
}
.content .ping .iconpingfen {
  font-size: 0.18rem !important;
  color: #ccc;
  margin-left: 0.05rem;
}
.content .ping .active {
  color: #856fff;
}

.content .pingfen {
  /* margin-left: .1rem; */
  font-size: 0.14rem;
  color: #9c53f6;
  float: right;
}
.today {
  width: 100%;
  margin-top: 0.05rem;
  overflow: hidden;
}
.liu {
  width: 80%;
  margin-left: 0;
  margin-top: 0.1rem;
}
.photos {
  width: 100%;
  margin-top: 0.15rem;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.photos img {
  width: 1.1rem;
  height: 1.1rem;
}
.five {
  width: 100%;
  height: 5.91rem;
  margin-top: 0.05rem;
  background: #ffffff;
}
.nav1 {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  padding-top: 0.15rem;
  padding-left: 0.15rem;
}
.cont img {
  width: 100%;
  height: 5.48rem;
  margin-top: 0.15rem;
}

.footer {
  width: 100%;
  height: 0.49rem;
  background: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  z-index: 1200;
  overflow: hidden;
}
.footer .xiaoxi {
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #f7f7f7;
}

.gocar {
  text-align: center;
}

.footer .car {
  width: 30%;
  height: 100%;
  background: #ffffff;
  text-align: center;
  line-height: 0.49rem;
  color: #9c53f6;
  font-size: 18px;
  font-weight: bold;
  font-family: "PingFang-SC-Bold";
}

.footer .buy {
  width: 30%;
  height: 100%;
  background: #9c53f6;
  text-align: center;
  line-height: 0.49rem;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: "PingFang-SC-Bold";
}
.iconshoucang {
  font-size: 0.21rem;
  color: #666666;
}
.iconziyuan {
  font-size: 0.21rem;
}

.active {
  color: #9c53f6;
}
.itubiao .icon-ziyuan {
  color: #333;
}
/* .footer .xiaoxi .collection .active i {
        color: #9C53F6;
    } */
.fujiade {
  position: fixed;
  bottom: 0.49rem;
  width: 3.75rem;
  height: 3.98rem;
  background: #ffffff;
  z-index: 1200;
}
.fujiade .one {
  padding: 0.15rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
}
.one img {
  width: 1.22rem;
  height: 1.22rem;
  border-radius: 0.05rem;
}
.one .right {
  margin-left: 0.1rem;
}
.right .pp {
  margin-left: 0;
  margin-top: 0.12rem;
}
.right .t-title {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #333333;
}
.gui {
  font-size: 16px;
  margin-top: 0.1rem;
}
.fujiade .guige {
  font-size: 0.14rem;
  margin-left: 0.15rem;
  margin-top: 0.15rem;
}
.fujiade .taozong {
  width: 100%;

  overflow: hidden;
  padding: 0.15rem;
}
.taozong .taocanot .tc {
  width: 1.6rem;
  height: 0.28rem;
  text-align: center;
  overflow: hidden;
  border-radius: 0.14rem;
  background-color: #f8f8fa;
  color: #666;
  font-size: 0.14rem;
  line-height: 0.28rem;
  margin-bottom: 0.15rem;
  float: left;
  margin-left: 0.1rem;
}

.taozong .taocanot .active {
  background: #9c53f6;
  color: #ffffff;
}
.jiashu {
  padding: 0.15rem;
}

.fff {
  text-align: center;
  line-height: 0.49rem;
}
.header {
  background: transparent !important;
  position: relative;
}
.mui-action-back {
  position: absolute;
  left: 0;
  z-index: 10;
  font-size: 0.22rem;
  line-height: 0.19rem;
  overflow: hidden;
  margin-left: 0.1rem;
  margin-top: 0.1rem;
  /* color: #FFFFFF; */
  color: pink;
}
</style>