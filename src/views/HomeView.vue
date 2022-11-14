<template>
  <div class="home pb-0 container">
    <notification :messages="messages"></notification>
    <phone-menu></phone-menu>
    <!-- !Carousel -->
    <div class="home__carousel row m-0">
      <div class="col-12 p-0">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/img/home/SushiSet.png"
                class="d-block w-100"
                alt=""
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/img/home/SushiSet.png"
                class="d-block w-100"
                alt=""
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/img/home/SushiSet.png"
                class="d-block w-100"
                alt=""
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span> -->
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> -->
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <!-- !./Carousel -->
    <!-- !HomeItem -->
    <div class="home__item row justify-content-center m-0 mt-5">
      <div class="home__list col-xl-6 col-lg-6 pb-2 p-0">
        <a class="home__link" href="">
          <img
            src="../assets/img/home/Слососем.png"
            alt=""
            class="home__img--big"
          />
          <div class="home__img__title">
            <h3>Чикен</h3>
          </div>
        </a>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 p-0">
        <a class="home__link" href="">
          <img
            src="../assets/img/home/Сугрем.png"
            alt=""
            class="home__img home__img--small"
          />
          <div class="home__img__title">
            <h3>С угрем</h3>
          </div>
        </a>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 p-0">
        <a class="home__link home__link--mar" href="">
          <img
            src="../assets/img/home/Безмяса.png"
            alt=""
            class="home__img--small"
          />
          <div class="home__img__title home__img__title--mar">
            <h3>Корн дог</h3>
          </div>
        </a>
      </div>
      <div class="col-xl-6 col-lg-6 p-0 mt-4">
        <a class="home__link" href="">
          <img
            src="../assets/img/home/Сфиладельфией.png"
            alt=""
            class="home__img--big"
          />
          <div class="home__img__title">
            <h3>Пицца</h3>
          </div>
        </a>
      </div>
      <div class="col-xl-6 col-lg-6 p-0 mt-4">
        <a class="home__link" href="">
          <img
            src="../assets/img/home/Акции.png"
            alt=""
            class="home__img--big"
          />
          <div class="home__img__title">
            <h3>Акции</h3>
          </div>
        </a>
      </div>
    </div>
    <!-- !./HomeItem -->
    <!-- !SlickSlider -->
    <div class="slick__slider">
      <div class="slick__slider__nav">
        <ul class="d-flex mt-5 p-0">
          <li class="me-3"><a class="" href="">Новинки</a></li>
          <li><a class="active" href="">Популярное</a></li>
        </ul>
      </div>
      <div class="slider d-flex justify-content-between mt-2">
        <carts-components
          v-for="product in PRODUCTS"
          :key="product.name"
          :product_data="product"
          @addToCart="addToCart"
          @infoCarts="infoCarts"
        ></carts-components>
      </div>
    </div>
    <!-- !./SlickSlider -->
    <!-- Info -->
    <info-components></info-components>
    <!-- /.Info -->
    <!-- Footer -->
    <footer-components></footer-components>
    <!-- /.Footer -->
  </div>
</template>

<script>
import CartsComponents from "@/components/CartsComponents.vue";
import InfoComponents from "@/components/InfoComponents.vue";
import FooterComponents from "@/components/FooterComponents.vue";
import Notification from "@/components/notifications/Notification";
import PhoneMenu from "@/components/PhoneMenu";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    CartsComponents,
    InfoComponents,
    FooterComponents,
    Notification,
    PhoneMenu,
  },
  data() {
    return {
      messages: [],
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART", "ADD_TO_INFO"]),
    addToCart(data) {
      this.ADD_TO_CART(data).then(() => {
        let timeStamp = Date.now().toLocaleString();
        this.messages.push({
          name: "Товар добавлен",
          icon: "check_circle",
          id: timeStamp,
        });
      });
    },
    infoCarts(data) {
      this.ADD_TO_INFO(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss">
:root {
  --index: calc(1vw + 1vh);
  --side-small: 26;
  --side-big: 16;
}
.home {
  width: 100%;
  background: #d8d6d6;
  padding: 42px;
}
.carousel-indicators {
  margin-bottom: -30px;
}

.home__link {
  color: white;
  position: relative;
  font-size: 18px;
  transition: all 0.3s linear;
  overflow: hidden;

  &:hover {
    color: #f46d40;
  }
}
.home__img__title {
  margin-left: 10px;
  margin-top: -30px;
}
.home__link--mar {
  margin-left: 10px;
}
.home__img__title--mar {
  margin-left: 20px;
}
.slider {
  overflow: hidden;
  overflow-x: scroll;
  .cart__item {
    margin-right: 20px;
    h2,
    p {
      margin-left: 10px;
    }
  }
}
.slick__slider__nav {
  a {
    font-weight: 500;
    color: black;
  }
  a.active {
    color: #a4acad;
    border-bottom: 2px solid #a4acad;
  }
}
@media (max-width: 1461px) {
  .home {
    padding: 10px;

    img {
      // width: 90%;
      background-size: cover;
    }
  }
}
@media (max-width: 1400px) {
  .home__link {
    margin-left: 0;
  }
  .home__img--small {
    width: 190px;
  }
  .home__img--big {
    width: 385px;
    height: 171px;
  }
}
@media (max-width: 1200px) {
  .home__carousel {
    transform: scale(0);
    height: 0;
  }
  .home__item {
    transform: scale(0);
    height: 0;
  }
  .slick__slider {
    transform: scale(0);
    height: 0;
  }
}
</style>
