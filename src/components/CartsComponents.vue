<template>
  <div class="cart__item">
    <router-link
      :class="'link_position'"
      :to="{ name: 'products' }"
      @click="infoCarts"
    >
      <img :src="require(`../assets/img/set/${product_data.img}.png`)" alt="" />
    </router-link>
    <div class="cart__item__content">
      <h2>{{ product_data.name }}</h2>
      <p>{{ product_data.text }}</p>
      <div class="cart__item__footer d-flex w-100">
        <div class="cart__item__footer__price">
          <h3>{{ product_data.price }} грн.</h3>
        </div>
        <button-carts @click="addToCart">Хочу!</button-carts>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCarts from "@/components/ButtonCarts.vue";
export default {
  components: {
    ButtonCarts,
  },
  name: "CartsComponents",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
    infoCarts() {
      this.$emit("infoCarts", this.product_data);
    },
  },
  mounted() {},
};
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
  margin-bottom: 10px;
  // margin-right: 40px;
  h2 {
    width: 100%;
    margin: 30px 0 15px 0;
    font-weight: 500;
    color: black;
  }
  p {
    width: 100%;
    margin: 15px 0 30px 0;
    color: #a4acad;
  }
  // .cart__item {
  //   text-align: left;
  //   h2 {
  //     width: 100%;
  //     margin: 30px 0 15px 0;
  //     font-weight: 500;
  //     color: black;
  //   }
  //   p {
  //     width: 100%;
  //     margin: 15px 0 30px 0;
  //     color: #a4acad;
  //   }
  // }
}
.cart__item__footer {
  padding: 15px;
  justify-content: space-around;
  border-top: 0.5px solid #d0d4d4;

  .cart__item__footer__price {
    display: flex;
    align-items: center;

    margin-right: 10px;
    h3 {
      font-weight: 500;
      font-size: 22px;
    }
  }
}
.link_position {
  text-align: left;
}
@media (max-width: 1450px) {
  .cart__item {
    padding: 10px;
    width: 230px;
    img {
      width: 225px;
    }
  }
}
@media (max-width: 1200px) {
  .cart__item__footer {
    .cart__item__footer__price {
      h3 {
        font-weight: 500;
        font-size: 18px;
      }
    }
  }
}
@media (max-width: 991px) {
  .cart__item {
    flex-direction: row;
    padding: 20px;
    width: 100%;
    height: 220px;
  }
  .cart__item__content {
    width: 100%;
    padding: 20px;
    h2 {
      margin-top: 10px;
    }

    .cart__item__footer {
      padding: 0;
      justify-content: space-between;
      border: none;
    }
  }
}
@media (max-width: 576px) {
  .cart__item {
    padding: 0;
    padding-left: 5px;
    h2 {
      margin-bottom: 3px;
    }
    p {
      margin-bottom: 5px;
    }
    img {
      width: 155px;
    }
  }
  .cart__item__content {
    text-align: center;
    padding: 10px;
  }
  .cart__item__footer {
    flex-direction: column;
    .cart__item__footer__price {
      margin-bottom: 15px;
      h3 {
        margin: 0 auto;
        justify-content: center;
        text-align: center;
      }
    }
  }
}
@media (max-width: 420px) {
  .cart__item {
    img {
      width: 100px;
    }
    h2 {
      font-size: 12px;
    }
    p {
      font-size: 12px;
    }
  }
  .cart__item__footer__price {
    h3 {
      font-size: 12px;
      font-weight: 500;
    }
  }
}
</style>
