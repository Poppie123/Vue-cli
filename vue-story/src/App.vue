<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/">去a盒子</router-link>
    <router-link to="/b">去b盒子</router-link>
    <router-link to="/hello123">hello页面</router-link>
    <router-link to="/foo/mk/agehello">foo页面</router-link>

    <router-view></router-view>
    <!-- <HelloWorld></HelloWorld> -->
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';
export default {  
  name: 'App',
  data(){
    return {
       msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    HelloWorld,
  },
  watch: {
			$route(to, from) {
				console.log(to);
				console.log(from);
			}
    },
    mounted(){
    this.$http.post('/user/get_code',{phone:'18539575784'}).then(res=>{
      console.log(res)
    })
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img{
  display: block;
  margin: 0 auto;
}
</style>
