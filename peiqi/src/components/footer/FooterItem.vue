<template>
    <div class="footer_item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div class="text" :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name: "FooterItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'#5E43F5'//激活状态颜色
      }
    },
    data() {
      return {
        // isActive:false
      }
    },
    computed: {
      isActive(){//判断是否为激活状态
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle(){//定义样式
        return this.isActive ? {color: this.activeColor} : {}//props中注册颜色
      }
    },
    methods: {
      itemClick(){//底部跳转
      // console.log(this)
      if(this.$route.path == this.path){
        return false
      }
        this.$router.push(this.path)
      }
    },
};
</script>

<style>
.footer_item {
    float: left;
    width: 25%;
    height: 100%;
    color: #A5A5C1;
}
.footer_item .text{
    width: 100%;
    text-align: center;
    font-size: .22rem;
}
.footer_item img{
    width: .47rem;
    height: .47rem;
    margin: .2rem auto 0;
}

</style>
