import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ErrorPage from '../components/ErrorPage'
import IM from '../components/app'


Vue.use(Router)

export default new Router({
	mode: 'history',
 	routes: [ {
	      path: '*',
	      redirect:'/login'
	    },{
	      path: '/',
	      redirect:'/login'
	    },{
	      path: '/login',
	      name: 'Login',
	      component: Login
	    },{
	      path: '/error',
	      name: 'error',
	      component: ErrorPage
	    },{
	      path: '/im',
	      redirect:'/login'
	    },{
	      path: '/im/:user',
	      name: 'im',
	      component: IM
	    }
	  ]
})
