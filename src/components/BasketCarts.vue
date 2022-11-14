<template>
  <div class="basket__cart text-center">
    <h4>Корзина</h4>
    <basket-item
      v-for="(item, index) in cart_data"
      :key="item.name"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    ></basket-item>
    <div class="basket__cart__total d-flex justify-content-center">
      <p class="p-1 mb-1">Итого:</p>
      <p class="p-1 mb-1">{{ cartTotalCoast }} грн.</p>
    </div>
    <div class="design">
      <button-carts>Оформить заказ</button-carts>
    </div>
  </div>
</template>

<script>
import ButtonCarts from "./ButtonCarts.vue";
import BasketItem from "@/components/BasketItem.vue";
import { mapActions } from "vuex";
export default {
  components: {
    BasketItem,
    ButtonCarts,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  name: "BasketCarts",
  data() {
    return {};
  },
  computed: {
    cartTotalCoast() {
      let result = [];

      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>

<style lang="scss">
.basket__cart {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: auto;
  background: #e4e3e3;
  border-radius: 5px;
  h4 {
    font-weight: 500;
    font-size: 18px;
    padding: 10px 0 5px 0;
  }
  p {
    font-size: 12px;
    color: #a4acad;
  }
  .basket__cart__top {
    padding-top: 20px;
  }
  .basket__cart__bot {
    display: flex;
    align-items: center;

    background: #f46d40;
    height: 40px;
    p {
      color: white;
      margin: auto;
    }
  }
  .basket__cart__total {
    p {
      color: orange;
      font-weight: 500;
    }

    width: 100%;
  }
  .design {
    .btn-orange {
      width: 100%;
      padding: 5px 0;
      font-size: 11px;
      margin-bottom: 10px;
    }
  }
}
@media (max-width: 1400px) {
  .basket__cart {
    width: 180px;
  }
}
@media (max-width: 1250px) {
  .basket__cart {
    width: 150px;
  }
}
@media (max-width: 1200px) {
  .basket__cart {
    .design {
      .btn-orange {
        width: 150px;
        padding: 5px 0;
        font-size: 11px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
