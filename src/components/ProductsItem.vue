<template>
  <div class="products__cart row m-0">
    <div class="products__cart__left col-6 p-0">
      <img
        class="w-100"
        :src="require(`../assets/img/set/${cart_info_data.img}.png`)"
        alt=""
      />
    </div>
    <div
      class="products__right col-6 p-4 d-flex flex-column justify-content-between"
    >
      <div class="products__cart__right__title">
        {{ cart_info_data.name }}
      </div>
      <div class="products__cart__right__weight">{{ cart_info_data.text }}</div>
      <div class="products__cart__right__total w-100 d-flex align-items-center">
        <div class="products__cart__right__coast">
          {{ cart_info_data.price }} грн.
        </div>
        <div class="products__cart__right__counter">
          <button
            class="btn btn-orange btn-orange--disk"
            @click="decrementItem"
          >
            <img class="decrese" src="../assets/img/set/decris.png" alt="" />
          </button>
          {{ cart_info_data.quantity }}
          <button
            class="btn btn-orange btn-orange--disk"
            @click="incrementItem"
          >
            <img class="plus" src="../assets/img/set/plus.png" alt="" />
          </button>
        </div>
      </div>
      <div class="products__cart__right__compound">
        <h4>Состав:</h4>
        <p>{{ cart_info_data.compound }}</p>
      </div>
      <div class="products__cart__right__btn"></div>
      <button-carts @click="addToCart">Добавить</button-carts>
    </div>
  </div>
</template>

<script>
import ButtonCarts from "@/components/ButtonCarts.vue";
export default {
  components: {
    ButtonCarts,
  },
  name: "ProductsItem",
  props: {
    cart_info_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.cart_info_data);
    },
    incrementItem() {
      this.$emit("increment");
    },
    decrementItem() {
      this.$emit("decrement");
    },
  },
};
</script>

<style lang="scss">
.products__cart {
  background: white;
}

.products__cart__right__title {
  font-size: 48px;
}

.products__cart__right__weight {
  font-size: 18px;
  color: orange;
  margin: 10px 0;
}

.products__cart__right__coast {
  margin-right: 30px;
  font-size: 24px;
  font-weight: 500;
}

.products__cart__right__counter {
  display: flex;
  font-size: 36px;
}

.btn-orange--disk {
  margin: 0 15px;
  font-size: 20px;
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 25px;

  &:hover {
    background: rgb(231, 78, 51);
  }

  .decrese {
    margin-top: 14px;
  }

  .plus {
    margin-left: 1px;
    margin-top: 3px;
  }
}

.products__cart__right__compound {
  h4 {
    font-size: 18px;
    font-weight: 500;
  }

  p {
    font-size: 18px;
  }
}
@media (max-width: 768px) {
  .products__cart__left {
		display: flex;
    align-items: center;
  }
  .products__cart__right__title {
    font-size: 30px;
  }
  .products__cart__right__weight {
    font-size: 16px;
  }
  .products__cart__right__coast {
    font-size: 18px;
  }

  .products__cart__right__counter {
    align-items: center;
    font-size: 25px;
  }
  .btn-orange--disk {
    margin: 0 15px;
    font-size: 20px;
    width: 20px;
    height: 20px;
    padding: 0;
    border-radius: 25px;
    .decrese {
      width: 5px;
      margin-top: 9px;
    }

    .plus {
      width: 9px;
      margin-left: 1px;
      margin-top: 4px;
    }
  }
  .products__cart__right__compound {
    h4 {
      font-size: 14px;
    }
    p {
      font-size: 14px;
    }
  }
}
@media (max-width: 576px) {
  .products__cart__right__title {
    font-size: 25px;
  }
  .products__cart__right__weight {
    font-size: 12px;
  }
  .products__cart__right__coast {
		margin-right: 0;
		margin-bottom: 5px;
    font-size: 14px;
  }

  .products__cart__right__counter {
    align-items: center;
    font-size: 22px;
  }
  .products__cart__right__total {
		flex-direction: column;
  }
}
</style>
