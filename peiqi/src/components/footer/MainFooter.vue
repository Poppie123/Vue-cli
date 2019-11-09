<template>
    <Footer>
      <!-- 默认激活状态 -->
      <FooterItem path="/home" activeColor="#5E43F5">
        <img slot="item-icon" src="@/assets/image/footer/page_index_01.png" alt />
        <img slot="item-icon-active" src="@/assets/image/footer/page_index_01_active.png" alt />
        <div slot="item-text" class="text">首页</div>
      </FooterItem>
      <FooterItem path="/classify">
        <img slot="item-icon" src="@/assets/image/footer/page_index_02.png" alt />
        <img slot="item-icon-active" src="@/assets/image/footer/page_index_02_active.png" alt />
        <div slot="item-text" class="text">分类</div>
      </FooterItem>
      <FooterItem path="/cart">
        <img slot="item-icon" src="@/assets/image/footer/page_index_03.png" alt />
        <img slot="item-icon-active" src="@/assets/image/footer/page_index_03_active.png" alt />
        <div slot="item-text" class="text">购物车</div>
      </FooterItem>
      <FooterItem path="/user">
        <img slot="item-icon" src="@/assets/image/footer/page_index_04.png" alt />
        <img slot="item-icon-active" src="@/assets/image/footer/page_index_04_active.png" alt />
        <div slot="item-text" class="text">我的</div>
      </FooterItem>
    </Footer>
</template>
<script>
import Footer from "./Footer";
import FooterItem from "@/components/footer/FooterItem";
export default {
    name: "MainFooter",
    //注册组件
    components:{
        Footer,
        FooterItem
    }
};
</script>

<style>
</style>
