import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

const state = {
	goodsList: [],
	allCount: 0,
	allPrice: 0.0,
	isSelectAll: false
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})