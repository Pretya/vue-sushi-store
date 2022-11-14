<template>
  <div class="set p-5 pb-0 container">
    <notification :messages="messages" :timeout="2000"></notification>

    <div class="row">
      <div class="set__header mb-3 d-flex justify-content-between">
        <div class="set__title d-flex align-items-center">
          <img class="me-3" src="../assets/img/Сеты.png" alt="" />
          <h2>Сеты</h2>
        </div>
        <div class="set__form d-flex align-items-center">
          <form action="">
            <select-components
              :options="options"
              @select="optionSelect"
              :selected="selected"
            >
            </select-components>
          </form>
        </div>
      </div>
      <div class="set__cart">
        <carts-components
          v-for="product in filteredProducts"
          :key="product.name"
          :product_data="product"
          @addToCart="addToCart"
          @infoCarts="infoCarts"
        ></carts-components>
      </div>
      <!-- Info -->
      <info-components></info-components>
      <!-- /.Info -->
      <!-- Footer -->
      <footer-components></footer-components>
      <!-- /.Footer -->
    </div>
  </div>
</template>

<script>
import SelectComponents from "@/components/SelectComponents.vue";
import CartsComponents from "@/components/CartsComponents.vue";
import InfoComponents from "@/components/InfoComponents.vue";
import FooterComponents from "@/components/FooterComponents.vue";
import Notification from "@/components/notifications/Notification";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    // SetCarts,
    InfoComponents,
    FooterComponents,
    CartsComponents,
    SelectComponents,
    Notification,
  },
  name: "SetView",
  data() {
    return {
      options: [
        { name: "Фильтр", value: 1 },
        { name: "Название", value: 2 },
        { name: "Сначала дешевле", value: 3 },
        { name: "Сначала дороже", value: 4 },
        { name: "Количество кусочков", value: 5 },
        { name: "Вес", value: 6 },
      ],
      messages: [],
      selected: "Фильтр",
      sortedProducts: [],
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "SEARCH_VALUE"]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART", "ADD_TO_INFO"]),
    addToCart(data) {
      this.ADD_TO_CART(data).then(() => {
        let timeStamp = Date.now().toLocaleString();
        this.messages.push({
          name: "Товар добавлен в корзину",
          icon: "check_circle",
          id: timeStamp,
        });
      });
    },
    infoCarts(data) {
      this.ADD_TO_INFO(data);
    },
    optionSelect(option) {
      this.selected = option.name;
    },
    sortProductsBySearchValue(value) {
      this.sortedProducts = [...this.PRODUCTS];
      if (value) {
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          return item.name.toLowerCase().includes(value.toLowerCase());
        });
      } else {
        this.sortedProducts = this.PRODUCTS;
      }
    },
  },
  watch: {
    SEARCH_VALUE() {
      this.sortProductsBySearchValue(this.SEARCH_VALUE);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
    this.sortProductsBySearchValue(this.SEARCH_VALUE);
  },
};
</script>

<style lang="scss">
.set {
  background: #d8d6d6;
}
.set__cart {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.set__title {
  h2 {
    font-size: 36px;
  }
  img {
    width: 40px;
    height: 40px;
  }
}
option {
  background: white;
  border: none;
  border-radius: 5px;
}
@media (max-width: 991px) {
	.set__title {
		img {
			width: 30px;
			height: 30px;
		}
		h2 {
			font-size: 20px;
		}
	}
}
</style>
