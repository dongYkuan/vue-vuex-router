<template>
  <div class="im-left">
  
    <info></info>
     
    <talkList></talkList>
 
  </div> 
</template>

<script>
import info from './info.vue';
import talkList from './talkList.vue';

export default {
  components:{
    info,
    talkList
  }
}

</script>

<style>
/*公用按钮 End*/
@import '../../../css/core/list.css';
</style>
