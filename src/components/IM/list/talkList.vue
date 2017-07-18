 <template> 
    <div class="im-user-list">
      <div class="im-dialog hide"><em class="im-gif"></em>正在加载消息列表</div>
     <dl class="im-userinfo" v-for='(item, index) in list'  :class="{active:item.isTalking}" :index="index" @click="changeUser(item.uId)">
        <dt class="im-face"><img :src="item.avatar"></dt>
        <dd class="num hide"></dd>
        <dd class="im-name">
          <h3>{{item.name}}</h3><small class="time">{{item.time}}</small>
        </dd>
        <dd class="info">{{item.lastMsg}}</dd>
      </dl>
   </div>
</template>
<script>
import store from '../../../vuex';
import { mapState, mapActions,mapGetters} from 'vuex';
export default {
  computed:{
    ...mapState({
      list:state =>state.listModule.talkList
    })
  },
  methods:{
    ...mapActions(['changeUser'])
  }
}
</script> 
<style>
@import '../../../css/core/talkList.css';
</style>