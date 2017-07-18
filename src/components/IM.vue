<template>
  <div class="hello" @click="login">
   {{$route.query.user}}
  </div>
</template>

<script>
  import store from '../vuex';
  import { mapState, mapActions } from 'vuex';

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
        console.log(this.$route)        
    }
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
  cursor: pointer; 
}
</style>
