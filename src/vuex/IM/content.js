import store from '../index';

const state = {
  talkList: [],
  curTalk: {}
};
const mutations = {
  "getCur": function(state, data) {
    let talkList = state.talkList;
    if(data.uId == state.curTalk.uId) return;
    for (var i = 0; i < talkList.length; i++) {
        if(state.curTalk.uId == talkList[i].uId){
            talkList[i] = state.curTalk;
        }
        if (data.uId == talkList[i].uId) {
            state.curTalk = talkList[i];
            return;
        }
    }
    data.msgList = [{msg:data.lastMsg,time:data.time}];
    state.talkList.push(data);
    state.curTalk = data;
  },
  "sendMsg":function(state,data){
   state.curTalk.msgList.push(data);
  }
};
  
const actions = {
  "getCur": function(store, data) {
    store.commit('getCur', data);
  },
  "sendMsg":function(store,data){
    store.commit('sendMsg',data);
  }
};

const loginModule = {
  state,
  mutations,
  actions
};
export default loginModule;
