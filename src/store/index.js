
import { createStore } from 'vuex'
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default createStore({
  state: {
		searchValue: '',
		products: [],
		cart: [],
		info: []
		
  },
  getters,
  mutations,
  actions,
  modules: {
  }

})
