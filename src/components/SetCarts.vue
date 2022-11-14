<template>
	<div class="cart__item">
			<img :src="require(`../assets/img/set/${set_data.img}.png`)" alt="">
			<h2>{{ set_data.name }}</h2>
			<p>{{ set_data.text }}</p>
			<div class="cart__item__footer p-3 d-flex w-100 justify-content-around">
				<div class="cart__item__footer__price">
					{{ set_data.price }}.
				</div>
					<button-carts @click="addToSetCart">Хочу!</button-carts>
			</div>
	</div>
</template>

<script>
import ButtonCarts from '@/components/ButtonCarts.vue'
import { mapGetters } from 'vuex'
export default {
	components: {
		ButtonCarts,
	},
	name: 'SetCarts',
	props: {
		set_data: {
			// Получаем данные от родителя
			type: Object,
			default() {
				return {}
			}
		}
	},
	data() {
		return {
			
		}
	},
	computed: {
		
	},
	methods: {
		
		addToSetCart() {
			this.$emit('addToSetCart', this.set_data.name)
			// ОТдаем данные на верх родителю
		}
	},
	watch: {
		
	}
}
</script>

<style lang="scss">
.cart__item {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 289px;
	height: 397px;
	background: white;
	border-radius: 5px;
	margin-bottom: 30px;
	h2 {
		width: 100%;
		margin: 30px 0 15px 40px;
		font-weight: 500;
	}
	p {
		width: 100%;
		margin: 15px 0 30px 40px;
		color:#A4ACAD
	}
}
.cart__item__footer {
	border-top: 0.5px solid #d0d4d4;

	.cart__item__footer__price {
		display: flex;
		align-items: center;
		font-weight: 500;
		font-size: 22px;
	}
}
</style>