<template>
	<div class="">
		<button class="btn btn-orange">
			<slot></slot>
		</button>
	</div>
</template>

<script>
import { SetProducts } from '@/constant/menuLink'
export default {
	name: 'ButtonCarts',
	data() {
		return {
			products: SetProducts
		}
	}
}
</script>

<style lang="scss">
	.btn-orange {
		color: white;
		background: #F46D40;
		padding: 5px 42px 5px 42px;
		font-weight: 500;
		letter-spacing: .1rem;
		transition: all .3s linear;
	}
	@media (max-width: 1400px) {
		.btn-orange {
			padding: 5px 20px 5px 20px
		}
	}
	@media (max-width: 768px) {
		.btn-orange {
			font-size: 10px;
			padding: 5px 20px 5px 20px
		}
	}
</style>