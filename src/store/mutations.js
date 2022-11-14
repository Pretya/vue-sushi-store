export default {
	// 
	SET_PRODUCTS_TO_STATE: (state, products) => {
		state.products = products;
	},
	
	// SET_CART добавление в корзину товара и сложение в одну позицию если товар уже есть
	PRODUCT_CART: (state, product) => {
		if(state.cart.length) {
			let isProductExists = false;
			state.cart.map(function(item) {
				if(item.name === product.name) {
					isProductExists = true;
					item.quantity++
				}
			})
			if (!isProductExists) {
				state.cart.push(product)
			}
		} else {
			state.cart.push(product)
		} 
	},
	INFO_CART: (state, product) => {
		state.info = []
		state.info.push(product)
	},
	// Удаление товара из корзины
	REMOVE_FROM_CART: (state, index) => {
		state.cart.splice(index, 1)
	},
	INCREMENT: (state, index) => {
		state.cart[index].quantity++
		
	},
	DECREMENT: (state, index) => {
		if(state.cart[index].quantity > 1) {
			state.cart[index].quantity--
		}
	},
	INCREMENT_INFO: (state, index) => {
		state.info[index].quantity++
		
	},
	DECREMENT_INFO: (state, index) => {
		if(state.info[index].quantity > 1) {
			state.info[index].quantity--
		}
	},
	SET_SEARCH_VALUE: (state, value) => {
		state.searchValue = value;
	}
}