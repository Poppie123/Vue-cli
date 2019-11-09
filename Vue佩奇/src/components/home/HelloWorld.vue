<template>
  <div class="hello">
   <router-view></router-view>
   <!-- <Homepage></Homepage> -->
   <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/home/Footer'
import Homepage from '@/components/home/Homepage'
import Classification from '@/components/home/Classification'
import ShoppingCart from '@/components/home/ShoppingCart'
import Mine from '@/components/home/Mine'
import Login from '@/components/user/Login'
import Address from '@/components/address/Address'
import AddressEdit from '@/components/address/AddressEdit'
import Addaddress from '@/components/address/Addaddress'
import Detail from '@/components/goods/Detail'

export default {
  components:{
    Footer,
    Homepage,
    Classification,
    ShoppingCart,
    Mine,
    Login,
    Address,
    AddressEdit,
    Addaddress,
    Detail
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.hello{
  width: 100%
}

</style>
