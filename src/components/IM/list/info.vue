<template> 
  <dl class="im-myinfo"> 
    <dt class="im-face">
      <img :src="comeFrom.avatar">
    </dt>
    <dd class="im-name"> 
      <h3>{{comeFrom.name}}</h3>
    </dd> 
  </dl> 
</template> 
<script> 
import store from '../../../vuex';
import { mapState, mapActions} from 'vuex';
export default {
    computed: {
      aaa:function(){
        return store.state.listModule.comeFrom
      },
      ...mapState({
          comeFrom:state=>state.listModule.comeFrom,
          aaa:state=>state.listModule.aaa
      })
    },
    created:function(){
      store.dispatch("getFrom",{name:this.$route.params.user})
    }
}
</script>
<style>
@import '../../../css/core/info.css';
</style>