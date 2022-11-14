<template>
  <div class="products container" v-on:submit.prevent>
    <div class="row m-0">
      <div class="products__arrow col-12 d-flex justify-content-between">
        <div class="back d-flex align-items-center">
          <img class="me-2" src="../assets/img/set/back.png" alt="" />
          <a href="/set" class="mb-0">Назад</a>
        </div>
        <div class="forward d-flex align-items-center">
          <!-- <a class="me-2 mb-0">Вперед</a> -->
          <!-- <img src="../assets/img/set/forward.png" alt=""> -->
        </div>
      </div>
      <!-- !Carts -->
      <notification :messages="messages" :timeout="2000"></notification>
      <products-item
        v-for="(item, index) in INFO"
        :key="item.name"
        :cart_info_data="item"
        @addToCart="addToCart"
        @increment="increment(index)"
        @decrement="decrement(index)"
      ></products-item>

      <div class="product__recommend row m-0 p-5 pt-3 text-center">
        <h3 class="pb-2">Рекомендуем к этому товару</h3>
        <div class="col-4">
          <img src="../assets/img/set/reco1.png" alt="" />
          <div class="product__recommend__title p-3">Филадельфия</div>
          <div class="product__recommend__coast">
            140 грн
            <button class="btn btn-orange btn-orange--disk">
              <img class="plus" src="../assets/img/set/plus.png" alt="" />
            </button>
          </div>
        </div>
        <div class="col-4">
          <img src="../assets/img/set/reco3.png" alt="" />
          <div class="product__recommend__title p-3">Банзай</div>
          <div class="product__recommend__coast">
            170 грн
            <button class="btn btn-orange btn-orange--disk">
              <img class="plus" src="../assets/img/set/plus.png" alt="" />
            </button>
          </div>
        </div>
        <div class="col-4">
          <img src="../assets/img/set/reco2.png" alt="" />
          <div class="product__recommend__title p-3">Аригато</div>
          <div class="product__recommend__coast">
            180 грн
            <button class="btn btn-orange btn-orange--disk">
              <img class="plus" src="../assets/img/set/plus.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <!-- !/.Carts -->
      <footer-components></footer-components>
    </div>
  </div>
</template>

<script>
import Notification from "./notifications/Notification";
import ButtonCarts from "@/components/ButtonCarts.vue";
import FooterComponents from "@/components/FooterComponents.vue";
import ProductsItem from "@/components/ProductsItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    ButtonCarts,
    FooterComponents,
    ProductsItem,
    Notification,
  },
  name: "products",
  props: {},
  data() {
    return {
      messages: [],
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "INFO"]),
  },
  methods: {
    ...mapActions([
      "ADD_TO_CART",
      "INCREMENT_INFO_ITEM",
      "DECREMENT_INFO_ITEM",
    ]),
    increment(index) {
      this.INCREMENT_INFO_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_INFO_ITEM(index);
    },
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
    decremCounter() {
      this.counter -= 1;
      if (this.counter === -1) {
        return (this.counter = 0);
      }
    },
  },
};
</script>

<style lang="scss">
.products {
  background: #d8d6d6;
}

.products__arrow {
  margin: 52px 0;
  .back {
    margin-left: 10px;
  }
  a {
    color: black;
    font-size: 18px;
    transition: color 0.3s linear;

    &:hover {
      cursor: pointer;
      color: orange;
    }
  }
}

.product__recommend {
  h3 {
    font-size: 24px;
    font-weight: 500;
  }
}

.product__recommend__title {
  font-size: 18px;
  font-weight: 500;
}

.product__recommend__coast {
  font-size: 24px;
  font-weight: 500;
}
@media (max-width: 768px) {
  .product__recommend {
    h3 {
      font-size: 18px;
      
    }
		img {
			width: 150px;
		}
  }

  .product__recommend__title {
    font-size: 14px;
    
  }

  .product__recommend__coast {
    font-size: 18px;
    
  }
}
@media (max-width: 768px) {
  .product__recommend {
    h3 {
      font-size: 16px;
     
    }
		img {
			width: 100px;
		}
  }

  .product__recommend__title {
    font-size: 12px;
   
  }

  .product__recommend__coast {
    font-size: 16px;
		
   
  }
}
@media (max-width: 400px) {
  .product__recommend {
    
		img {
			width: 80px;
		}
  }
	.btn-orange--disk {
		margin-top: 5px;
	}
  
}
</style>
