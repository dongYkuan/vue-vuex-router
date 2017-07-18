import router from '../router/index.js';

const state = {
    users: [{
        name: 'dongyukuan',
        pwd: '123456'
    },{
        name: 'xiaomei',
        pwd: '123456'
    }],
    routerTo:''
};
const mutations = {
    "login": (state, data) => {
        var users = state.users,
            i = 0;
        for (; i < users.length; i++) {
            if (users[i].name == data.account && users[i].pwd == data.pwd) {
                state.routerTo = { name: 'im', params: { user: data.account },query:{user:data.account}};
                break;
            } else {
                state.routerTo = 'error';
            }
        }
        router.push(state.routerTo);
    }
};

const actions = {
    "login": (store, data) => {
        store.commit('login', data);
    }
};

const loginModule = {
    state,
    mutations,
    actions
};
export default loginModule;
