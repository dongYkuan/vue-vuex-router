import store from '../index'

const state = {
    talkList: [{
        name: 'dongyukuan',
        avatar: 'https://i-pre.meixincdn.com/T1aaxTBC_T1RXrhCrK.90x90cTz.jpg',
        time: '12:10',
        lastMsg: '你好！',
        isTalking: false,
        uId: '10000'
    }, {
        name: 'xiaomei',
        avatar: 'https://i-pre.meixincdn.com/T1aaxTBC_T1RXrhCrK.90x90cTz.jpg',
        time: '13:10',
        lastMsg: '你好不好！',
        isTalking: false,
        uId: '10001'
    }, {
        name: '商家-1',
        avatar: 'https://i-pre.meixincdn.com/T1aaxTBC_T1RXrhCrK.90x90cTz.jpg',
        time: '14:10',
        lastMsg: '你到底好不好！',
        isTalking: false,
        uId: '10002'
    }, {
        name: '商家-2',
        avatar: 'https://i-pre.meixincdn.com/T1aaxTBC_T1RXrhCrK.90x90cTz.jpg',
        time: '15:10',
        lastMsg: '你说说好不好！',
        isTalking: false,
        uId: '10003'
    }, {
        name: '商家-3',
        avatar: 'https://i-pre.meixincdn.com/T1aaxTBC_T1RXrhCrK.90x90cTz.jpg',
        time: '16:10',
        lastMsg: '究竟好还是不好！',
        isTalking: false,
        uId: '10004'
    }],
    comeFrom: {
        name: 'dongyukuan',
        avatar: 'https://i-pre.meixincdn.com/T1aaxTBC_T1RXrhCrK.90x90cTz.jpg',
        time: '12:10',
        lastMsg: '你好！',
        isTalking: false,
        uId: '10000'
    }
};
const mutations = {
    "getFrom": (state, data) => {
        state.talkList.forEach(function(item, index) {
            if (item.name == data.name) {
                state.comeFrom = item;
                item.isTalking = true;
                store.dispatch('getCur',item);
                return;
            }
        })
    },
    "changeUser": (state, data) => {
        state.talkList.forEach(function(item, index) {
            if (item.uId == data) {
                item.isTalking = true;
                store.dispatch('getCur',item);
            } else {
                item.isTalking = false;
            }
        })
    },
    "updateLastMsg":function(state,data){
        var curTalkId = store.state.contentModule.curTalk.uId;
        state.talkList.forEach(function(item,index){
            if(item.uId == curTalkId){
                item.lastMsg = data.msg;
                item.time = data.time;
            }
        })
    }
};
const actions = {
    "getFrom": (store, data) => {
        store.commit('getFrom', data);
        store.commit('changeUser', data);
    },
    "changeUser": (store, data) => {
        store.commit('changeUser', data);
    },
    "updateLastMsg":(store,data) =>{
        store.commit('updateLastMsg',data);
    }
};
const loginModule = {
    state,
    mutations,
    actions
};
export default loginModule;
