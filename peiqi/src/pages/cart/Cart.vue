<template>
  <div id>
    <Header>
      <div slot="left">
        <i class="iconfont iconiconfontjiantou1"></i>
      </div>
      <div class="gwc" slot="center">购物车</div>
      <div class="gll" slot="right" @click="guanli">{{gl}}</div>
    </Header>

    <!-- 页面内容 -->
    <div class="main">
      <ul>
        <li v-for="(item,index) in goodsList" :key="item.id">
          <div class="mainlll" :class="[item.status ? 'active':'iconfont']" @click="danXuan(index)">
            <i class="iconfont iconduihao2"></i>
          </div>
          <div class="mainner flexc">
            <img src="@/assets/image/photo4.png" />
            <div class="mainrr fl">
              <div class="pro_name">{{item.goods_name}}</div>
              <p>{{ item.goods_attr_value }}</p>
              <div class="pro_much flexc">
                <span>￥{{ item.shop_price}}</span>
                <div class="pro_muchr flexc">
                  <div class="pro_del" @click="sub(index)">-</div>
                  <span>{{item.count}}</span>
                  <div class="pro_add" @click="add(index)">+</div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 页面底部 -->
    <div class="bc_foot flexc">
      <div class="bc_footl" @click="allcheck">
        <div class="bc_whole fl" :class="[ checkall ? 'active' :'']">
          <i class="iconfont iconduihao2"></i>
        </div>
        <span>全选</span>
      </div>
      <div id="comb" class="bc_footc flex" v-show="heji">
        <p>合计：</p>
        <span>￥{{ Money }}</span>
      </div>
      <div id="set" class="bc_footr" @click="result">{{jiesuan}}({{countt}})</div>
      <!-- <div id="delw" class="bc_footr">{{shanchu}}</div> -->
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/Header";
export default {
  name: "Home",
  data() {
    return {
      goodsList: [
        {
          goods_name: "五星酒店",
          goods_attr_value: "粉色",
          count: "1",
          shop_price: "100",
          status: false
        },
        {
          goods_name: "三星酒店",
          goods_attr_value: "绿色",
          count: "1",
          shop_price: "150",
          status: false
        },
        {
          goods_name: "一星酒店",
          goods_attr_value: "蓝色",
          count: "1",
          shop_price: "200",
          status: false
        }
      ],
      gl: "管理商品",
      jiesuan: "去结算:",
      heji: true
    };
  },
  components: {
    Header
  },
  computed: {
    checkall: function() {
      var cstatus = true;
      this.goodsList.map(v => {
        if (!v.status) {
          //如果v.status == false;
          cstatus = v.status;
        }
      });
      return cstatus;
    },
    //总数
    countt: function() {
      var totalcount = 0;
      this.goodsList.map((v, i) => {
        if (v.status) {
          totalcount += Number(v.count);
        }
      });
      return totalcount;
    },
    //总价
    Money: function() {
      var zongmoney = 0;
      this.goodsList.map((v, i) => {
        if (v.status) {
          zongmoney += Number(v.shop_price * v.count);
        }
      });
      return Number(zongmoney);
    }
  },
  methods: {
    //切换管理商品
    guanli() {
      if (this.gl == "管理商品") {
        this.gl = "完成";
        this.jiesuan = "删除商品";
        this.heji = false;
      } else {
        this.gl = "管理商品";
        this.jiesuan = "去结算";
        this.heji = true;
      }
    },

    //单选
    danXuan(index) {
      this.goodsList[index].status = !this.goodsList[index].status;
    },
    //全选
    allcheck() {
      var allstatus = this.checkall;
      this.goodsList.map(v => {
        v.status = !allstatus;
      });
    },
    //加减
    add(index) {
      this.goodsList[index].count++;
    },
    sub(index) {
      if (this.goodsList[index].count == 1) {
        return false;
      }
      this.goodsList[index].count--;
      // console.log(this.count);
    },
    //删除商品
    result(){
        if(this.str == '去结算'){
            return 
        }else{
            var arr = [];
            this.goodsList.map(v=>{
                if(v.status){
                    arr.push(v.id);
                }
            })
            arr = arr.join(',')
            // this.delGoods(arr);
        }
    },
  }
};
</script>
<style scoped>
.main li .mainlll .iconfont {
  display: none;
  top: 0.02rem;
}
.main li .active .iconfont {
  display: block;
}
.header {
  background-color: #fff;
}
.gwc {
  font-size: 0.4rem;
  color: #333333;
  font-weight: bold;
  text-align: center;
}
.gll {
  font-size: 0.28rem;
  color: #333;
  text-align: right;
}
.container .head p {
  margin-left: 1.1rem;
  font-size: 0.36rem;
}
.container {
  width: 100%;
  height: 100%;
}
.headr {
  width: 1.5rem;
  height: 100%;
  text-align: end;
}
/* 页面内容 */
.main {
  width: 100%;
  height: auto;
  padding: 1.1rem 0.29rem 2rem 0.28rem;
}
.main li {
  width: 100%;
  height: 2.24rem;
  background: #fff;
  padding: 0.3rem 0.22rem 0.3rem 0.2rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
}
.mainlll {
  width: 0.43rem;
  height: 0.4rem;
  border: 1px solid rgba(51, 60, 60, 1);
  border-radius: 50%;
  margin: 0.65rem 0.17rem 0 0;
  box-sizing: border-box;
}
.mainlll i {
  color: #9c53f6;
  font-size: 0.35rem;
  position: relative;
}
.mainner {
  width: 100%;
  height: 1.63rem;
  overflow: hidden;
}
.mainner img {
  width: 1.63rem;
  height: 1.63rem;
  margin-right: 0.22rem;
}
.mainrr {
  width: 100%;
  height: 1.63rem;
}
.pro_name {
  width: 100%;
  height: 0.67rem;
  font-size: 0.24rem;
  color: #333;
  line-height: 0.35rem;
}
.mainrr p {
  font-size: 0.28rem;
  color: #999;
  margin-top: 0.1rem;
}
.pro_much {
  width: 100%;
  height: 0.36rem;
  margin-top: 0.1rem;
}
.pro_much span {
  font-size: 0.28rem;
  color: #f5b443;
  font-weight: bold;
}
.pro_muchr {
  width: 1.49rem;
  height: 0.36rem;
  border: 1px solid rgba(204, 204, 204, 1);
  line-height: 0.36rem;
  font-size: 0.28rem;
}
.pro_add {
  width: 0.46rem;
  height: 0.36rem;
  text-align: center;
  color: #999;
  line-height: 0.3rem;
}
.pro_del {
  width: 0.46rem;
  height: 0.36rem;
  text-align: center;
  color: #999;
  line-height: 0.3rem;
}
.pro_muchr span {
  width: 0.52rem;
  height: 0.36rem;
  border-right: 1px solid #cccccc;
  border-left: 1px solid #cccccc;
  color: #333;
  text-align: center;
  font-weight: 400;
}
/* 付款部分 */
.bc_foot {
  width: 100%;
  height: 0.88rem;
  background: #fff;
  position: fixed;
  bottom: 1.08rem;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
}
.bc_footl {
  width: 1.5rem;
  height: 0.88rem;
  padding-left: 0.3rem;
  overflow: hidden;
  line-height: 0.88rem;
}
.bc_whole {
  width: 0.4rem;
  height: 0.4rem;
  border: 1px solid #333c3c;
  border-radius: 50%;
  margin-right: 0.12rem;
  margin-top: 0.23rem;
}
.bc_whole i {
  color: #9c53f6;
  font-size: 0.42rem;
  position: relative;
  top: -0.25rem;
  left: -0.03rem;
  display: none;
}
.bc_footl span {
  font-size: 0.28rem;
  color: #666;
  float: left;
}
.bc_footc {
  width: 2.3rem;
  height: 0.88rem;
  line-height: 0.88rem;
}
.bc_footc p {
  font-size: 0.28rem;
  color: #333;
}
.bc_footc span {
  color: #f5b443;
  font-size: 0.36rem;
}
.bc_footr {
  width: 2.53rem;
  height: 0.88rem;
  background: #9c53f6;
  font-size: 0.32rem;
  color: #fff;
  text-align: center;
  line-height: 0.88rem;
}

.bc_footl .active i {
  display: block;
}
</style>

