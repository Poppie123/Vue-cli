<template>
  <div id="app">
    <MainFooter v-if="footer_show"></MainFooter>
    <router-view @FooterClick="public_footer"></router-view>
  </div>
</template>

<script>
import MainFooter from "@/components/footer/MainFooter";
export default {
  name: "App",
  components: {
    MainFooter
  },
  data() {
    return {
      footer_show: true
    };
  },
  methods: {
    //是否显示底部
    public_footer: function(bool) {
      this.footer_show = bool;
    }
  }
};
</script>

<style>
@import "./assets/css/common.css";
#app {
  height: 100%;
}
</style>
