<template>
  <div class="hello">
    <div class="account">您输入的账号是： {{account}}</div>
    <div><span>账号：</span>
    <input type="text" class="name" placeholder="请输入用户名" v-model="account" @keyup='keyup'>
    </div>
    
    <div><span>密码：</span><input type="text" class="password" placeholder="请输入密码" v-model="pwd" @keyup='keyup'> </div>
    <div class="login" @click='login' @keyup='keyup'>登录</div>
  </div>
</template>

<script>
import store from '../vuex';

export default {
  name: 'hello',
  data () {
    return {
      account: '',
      pwd: ''
    }
  },
   methods:{
      login:function(){
        let account = this.account;
        let pwd = this.pwd;
        let user = {
          account:account,
          pwd:pwd
        };
        store.dispatch('login',user);
      },
      keyup:function(e){
        if(e.keyCode == 13){
          this.login();
        }
      }
    },
    destroyed:function(){
      console.log(111111111)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app{
  width: 100%;
  height: 100%;
  background-color:#2E8B57; 
}
.hello{
  width:350px;
  padding:40px;
  border-radius: 5px;
  margin:0 auto;
  margin-top: 150px;
  background-color: #00FF00;
}
.hello input{
  width: 250px;
  height: 30px;
  margin-bottom:30px;
}
.hello .account{
  margin-bottom: 20px;
  color: #FF1493;  
  text-align: left;
  padding-left:25px;
}
.login{
  width: 100px;
  margin:0 auto;
  height: 40px;
  line-height: 40px;
  border-radius: 3px;
  background-color: #FFFF00;
  text-align: center;
  cursor: pointer; 
}
</style>
