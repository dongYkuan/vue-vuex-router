<template>
  <div class="outerWrap">
    <div class="im-wrap">
      <!-- 用户列表 start -->
      <list></list>
      <!-- 用户列表 end -->
      <!-- 消息区域 start -->
      <imContent></imContent>
      <!-- 消息区域 end -->
    </div>
  </div>
</template>

<script>
import list from './IM/list/list.vue';
import imContent from './IM/content/content.vue';

export default {
  components: {
    list,
    imContent
  }
}
</script>
<style>
  .outerWrap,.im-wrap{height: 100%;}
</style>
