import Vue from 'vue';
import Vuex from 'vuex';

import loginModule from './login.js';
import listModule from './IM/list.js';
import contentModule from './IM/content.js';

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		loginModule: loginModule,
		listModule:listModule,
		contentModule:contentModule
	}
});
