<template>
	<div class="basket">
		<div class="basket__cart text-center" v-if="!CART.length">
		<div class="basket__cart__top">
				<h4>Ваша карзина пуста.</h4>
				<p>Добавте же скорее что-нибуть!</p>
			</div>
			<div class="basket__cart__bot">
				<p>Бесплатная доставка от 800 грн</p>
			</div>
	</div>
	
		<basket-carts
			v-if="CART.length"
			:cart_data="CART"
		>
		</basket-carts>
	

		<basket-map>

		</basket-map>
		
	</div>
</template>

<script>
import BasketCarts from '@/components/BasketCarts.vue'
import BasketMap from '@/components/BasketMap.vue'
import BasketItem from '@/components/BasketItem.vue'
import { mapGetters } from 'vuex'
export default {
	components: {
			BasketCarts,
			BasketMap,
			BasketItem
		},
	name: 'BasketView',
	
		data() {
			return {

			}
		},
		computed: {
			...mapGetters([
					'CART',
					
			])
		},
		methods: {
			
		}
}
</script>

<style lang="scss">
.basket {
	margin: 55px 100px 0 10px;
	// position: fixed;
}
@media (max-width: 1400px) {
	.basket__cart__bot {
		p {
			padding: 0 2px;
		}
	}
}
@media (max-width: 1200px) {
	.basket {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 10px auto;
	}
	.basket__cart {
		width: 90%;
	}
	.basket__cart__bot {
		p {
			padding: 0 2px;
		}
	}
	
}

</style>