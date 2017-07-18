<template> 
  <div class="im-right">
      <div class="im-chat">
        <div class="im-title">
          <h2>{{curTalk.name}}</h2>
        </div>
        <!-- 用户名称-->
        <div class="im-chat-scroll" id="contentArea">
          <template v-for="msg in curTalk.msgList">
            <div class="im-chat-time"><span>{{msg.time}}</span></div>
            <dl class="im-chat-user" :class="{imChatMe:!msg.isReturn}">
              <dt class="im-face"><img src="https://i-pre.meixincdn.com/T1aaxTBC_T1RXrhCrK.90x90cTz.jpg"></dt>
              <dd class="chat-info">
                <div class="info-box">
                  <div class="info-txt">{{msg.msg}}</div>
                </div>
              </dd>
            </dl> 
          </template>
        </div>
        <!-- 滚动区域-->
        <div class="im-chat-bottom">
          <div class="im-bar"><a href="javascript:;" title="表情" class="bar-face"><em class="im-icon"></em></a><a href="javascript:;" title="图片" class="bar-pic"><em class="im-icon"></em>
              <input type="file" name="file" class="ipt"></a></div>
          <div class="im-edit">
            <textarea class="edit-area" v-model="msgCon"></textarea>
          </div>
          <div class="im-btn">
          <a href="javascript:void(0);" title="发送" class="btn-a" @click="send(false)">发送</a>
          <a href="javascript:void(0);" title="回复" class="btn-a" @click="send(true)">回复</a>
          </div>
        </div>
        <!-- 文字输入区-->
      </div>
  </div>
</template> 
<script> 
import store from '../../../vuex';
import { mapState, mapActions} from 'vuex';
export default {
    data:function(){
      return {
        msgCon:''
      }
    },
    computed: {
      ...mapState({
          curTalk:state=>state.contentModule.curTalk
      })
    },
    created:function(){
      store.dispatch("getFrom",{name:this.$route.params.user})
    },
    methods:{
      send:function(isReturn){
        if(this.msgCon){
          var minutes = new Date().getMinutes()+'';
          var addZero = minutes.length < 2 ? ('0'+minutes) : minutes;
          var time = new Date().getHours()+":"+ addZero;
          var msgItem = {
            msg:this.msgCon,
            time:time,
            isReturn:isReturn
          }
          store.dispatch('sendMsg',msgItem);
          store.dispatch('updateLastMsg',msgItem);
        }else{
          alert('不能发送空消息！')
        }
        this.msgCon = '';
      }
    },
    updated:function(){
      var contentArea = document.querySelector('#contentArea');
      var scrollH = contentArea.scrollHeight;
      contentArea.scrollTop = scrollH;
    }
}
</script>
<style>
@import '../../../css/core/info.css';
</style>