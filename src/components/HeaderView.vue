<template>
  <div class="header__view container">
    <div class="header__box__pc">
      <div class="row m-0">
        <div class="header__contacts col-3 text-center">
          <div class="header__contacts__title">
            <h4>Наш телефон</h4>
          </div>
          <div class="header__contacts__phone">
            <a href="tel:+987654321">+987-654-321</a><br />
            <a href="tel:+123456789">+123-456-789</a>
          </div>
          <div class="header__contacts__time">
            <img src="../assets/img/Time.png" alt="" />
            работаем с 10:00 до 00:00
          </div>
        </div>
        <div
          class="header__town col-9 d-flex align-items-center justify-content-between"
        >
          <div class="header__town__title">
            <h4>Город:</h4>
            <p>Харьков</p>
          </div>
          <div class="header__delivery">
            <a href="">Отзывы</a>
            <a class="orange" href="">Доставка и оплата</a>
            <button class="header__delivery__button">
              <img
                @click="search(searchValue)"
                src="../assets/img/search.png"
                alt=""
              />
            </button>

            <input type="text" v-model="searchValue" />
          </div>
        </div>
      </div>
    </div>
    <div class="header__box__phone">
      <div class="header__box__phone__container row">
        <div class="header__box__phone__logo col-md-3 text-center">
          <a href="/"><img src="../assets/img/logo_phone.png" alt="" /></a>
        </div>
        <div class="header__box__phone__contacts col-md-3">
          <p class="header__box__phone__contacts__title">Наш телефон:</p>
          <div class="header__box__phone__contacts__number">
            <a href="tel:+987654321">+987-654-321</a>
            <a href="tel:+123456789">+123-456-789</a>
          </div>
        </div>
        <div class="header__box__phone__hour col-md-3 text-center">
          <img src="../assets/img/Time.png" alt="" />
          <div class="header__box__phone__hour__time text-center">
            работаем <br />
            с 10:00 до 00:00
          </div>
        </div>
        <div class="header__box__phone__search col-md-3">
          <input
            type="text"
            v-model="searchValue"
            v-on:keypress.enter="search(searchValue)"
          />
        </div>
      </div>
      <div class="phone__footer row">
        <ul class="phone__footer__item">
          <li
            class="phone__footer__list"
            v-for="menu in phoneMenu"
            :key="menu.name"
          >
            <router-link :to="menu.path">
              <img
                :src="require(`../assets/img/home/home__phone/${menu.img}.png`)"
                alt=""
              />
              <div class="phone__footer__title">{{ menu.name }}</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { phoneHeader } from "@/constant/menuLink";
export default {
  name: "HeaderView",
  data() {
    return {
      searchValue: "",
      phoneMenu: phoneHeader,
    };
  },
  computed: {
    ...mapGetters(["SEARCH_VALUE"]),
  },
  methods: {
    ...mapActions(["GET_SEARCH_VALUE"]),
    search(value) {
      this.GET_SEARCH_VALUE(value);
      this.$router.push("/set");
    },
  },
};
</script>

<style lang="scss">
.header__view {
  background: #d8d6d6;
  border-bottom: 0.5px solid #a4acad;
}
.header__box {
  height: 95px;
}
.header__contacts {
  border-right: 0.5px solid #a4acad;
  height: 95px;
  padding: 6px;
}
.header__contacts__title {
  h4 {
    font-weight: 500;
  }
}
.header__contacts__phone {
  a {
    color: #ff9846;
    font-weight: 500;
    transition: color 0.3s linear;
    &:hover {
      color: rgba(214, 82, 20, 0.867);
    }
  }
}
.header__contacts__time {
  font-size: 12px;
  margin-top: 10px;
  color: #a4acad;
}

.header__town__title {
  h4 {
    color: #a4acad;
  }
  p {
    margin-left: 10px;
    font-weight: 500;
  }
}
.header__delivery {
  display: flex;
  align-items: center;
  .header__delivery__button {
    background: inherit;
  }
  a {
    margin-right: 10px;
    color: black;
    font-weight: 500;
  }
  .orange {
    color: #ff9846;
    transition: color 0.3s linear;
    &:hover {
      color: rgba(214, 82, 20, 0.867);
    }
  }
  img {
    margin-top: 5px;
    width: 20px;
    margin-right: 10px;
  }
  input {
    border-radius: 5px;
    padding: 5px;
    background: rgb(231, 231, 231);
    border: 0.5px solid #a4acad;
  }
}
@media (min-width: 1200px) {
  .header__box__phone {
    transform: scale(0);
    height: 0;
  }
}
@media (max-width: 1200px) {
	.header__box__phone__container {
		margin-bottom: 10px;
	}
  .header__view {
    .header__box__pc {
      transform: scale(0);
      height: 0;
    }
  }
  .header__town {
    justify-content: space-around;
  }
  .header__box__phone {
    background: white;
    padding: 10px 10px 0 10px;
  }
  .header__box__phone__contacts__title {
    text-align: center;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  .header__box__phone__contacts__number {
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      color: #ff9846;
      margin-bottom: 3px;
      font-weight: 500;
    }
  }
  .header__box__phone__hour {
    img {
      margin-bottom: 3px;
    }
    .header__box__phone__hour__time {
      color: #a4acad;
      font-weight: 400;
      line-height: 1.25rem;
    }
  }
  .header__box__phone__search {
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      border: 1px solid #a4acad;
      border-radius: 5px;
      height: 25px;
      padding: 7px;
    }
  }
  .phone__footer {
		border-top: 1px solid #a4acad;
    display: flex;
    flex-direction: row;
		
  }
  .phone__footer__item {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    text-align: center;
  }
  .phone__footer__title {
    color: black;
    margin-top: 5px;
  }
}
</style>
