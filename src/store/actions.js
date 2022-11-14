import axios from 'axios';
export default {
	GET_PRODUCTS_FROM_API({commit}) {
		return axios('http://localhost:3000/products', {
			method: "GET"
		})
		.then((products) => {
			commit('SET_PRODUCTS_TO_STATE', products.data);
			return products;
		})
		.catch((error) => {
			console.log(error);
			return error;
		})
	},
	ADD_TO_CART({commit}, product) {
		commit('PRODUCT_CART', product)
	},
	ADD_TO_INFO({commit}, product) {
		commit('INFO_CART', product)
	},
	INCREMENT_CART_ITEM ({commit}, index) {
		commit('INCREMENT', index)
	},
	DECREMENT_CART_ITEM ({commit}, index) {
		commit('DECREMENT', index)
	},
	INCREMENT_INFO_ITEM ({commit}, index) {
		commit('INCREMENT_INFO', index)
	},
	DECREMENT_INFO_ITEM ({commit}, index) {
		commit('DECREMENT_INFO', index)
	},
	DELETE_FROM_CART({commit}, index) {
		commit('REMOVE_FROM_CART', index)
	},
	GET_SEARCH_VALUE ({commit}, value) {
		commit('SET_SEARCH_VALUE', value)
	}
}