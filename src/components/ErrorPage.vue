<template>
  <div class="hello" @click="logRoute">
   登录错误！请
   <!-- <a @click="back">返回</a> -->
   <router-link to="/">返回</router-link>
   <router-link to="/">返回</router-link>
   <router-link to="/">返回</router-link>
   重新登录~
  </div>
</template>
<script>
import router from '../router/index'
export default {
 methods:{
  back:function(){
    router.push('/');
  },
  logRoute:function(){
    console.log(this.$route)
  }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    margin-top: 150px;
    font-size:20px;
    text-align: center;
  }
  .hello a{
    color:#fff000;
    cursor:pointer;
  }
</style>
