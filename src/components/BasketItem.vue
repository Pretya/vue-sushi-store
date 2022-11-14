<template>
  <div class="basket__item">
    <img :src="require(`../assets/img/set/${cart_item_data.img}.png`)" alt="" />
    <div class="basket__item__cart w-100">
      <div class="basket__item__info d-flex justify-content-between">
        <p>{{ cart_item_data.name }}</p>
        <p>{{ cart_item_data.price }} грн.</p>
      </div>

      <div class="quantity">
        <div class="quantity__total d-flex">
          <p class="m-0">
            Кол:
            <span>
              <span class="decrement" @click="decrementItem">-</span>
              {{ cart_item_data.quantity }}
              <span class="increment" @click="incrementItem">+</span>
            </span>
          </p>
        </div>
        <button @click="deleteFromCart" class="btn btn-danger btn-danger--size">
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasketItem",
  props: {
    cart_item_data: {
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
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    incrementItem() {
      this.$emit("increment");
    },
    decrementItem() {
      this.$emit("decrement");
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.basket__item {
  padding: 5px;
  margin-bottom: 5px;
  background: white;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  border: 1px solid #a4acad;
  img {
    max-width: 70px;
    height: 47px;
  }
  p {
    margin: 5px 0;
  }
}
.quantity {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .quantity__total {
    margin-left: 15px;
  }
}
.btn-danger--size {
  padding: 1px 5px;
  background: #f46d40;
  transition: all 0.3s linear;
  font-size: 10px;
}
.decrement,
.increment {
  cursor: pointer;
}
@media (max-width: 1400px) {
  .quantity {
    flex-direction: column;
    .quantity__total {
      margin-left: 0;
      margin-bottom: 5px;
    }
  }
}
@media (max-width: 1250px) {
  .basket__item {
    display: block;
  }
  .basket__item__info,
  .quantity {
    flex-direction: column;
  }
  .quantity {
    .quantity__total {
      margin-left: 0;
      margin-bottom: 5px;
    }
  }
}
@media (max-width: 1200px) {
	.basket__item {
		display: flex;
	}
	.basket__item__info {
		flex-direction: row;
	}
	.quantity {
		flex-direction: row;
	}
}
</style>
