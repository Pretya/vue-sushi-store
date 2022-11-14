import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PizzaView from '../views/PizzaView.vue'
import SetView from '../views/SetView.vue'
import BasketCarts from '../components/BasketCarts.vue'
import BasketItem from '../components/BasketItem.vue'
import BasketView from '@/views/BasketView'
import ProductsComponents from '../components/ProductsComponents.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
		props: true
  },
  {
    path: '/set',
    name: 'set',
    component: SetView,
		props: true
  },
	{
    path: '/pizza',
    name: 'PizzaView',
    component: PizzaView,
		props: true
  },
	{
    path: '/products',
    name: 'products',
    component: ProductsComponents,
		props: true
  },
	{
    path: '/basket',
    name: 'BasketCarts',
    component: BasketCarts,
		props: true
  },
	{
    path: '/basketItem',
    name: 'BasketItem',
    component: BasketItem,
		props: true
  },
	{
    path: '/basketView',
    name: 'BasketView',
    component: BasketView,
		props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
