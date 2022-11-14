<template>
  <div class="phone__menu">
    <div class="phone__menu__container">
      <ul
        class="phone__menu__list"
        v-for="phone in phoneMenu"
        :key="phone.name"
      >
        <li class="phone__menu__item">
					
						<img
            :src="require(`../assets/img/home/home__phone/${phone.icon}.png`)"
            alt=""
          />
					
          
          <router-link :to="phone.path" class="phone__menu__link">
            {{ phone.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { menuList } from "@/constant/menuLink";
export default {
  name: "PhoneMenu",

  data() {
    return {
      phoneMenu: menuList,
    };
  },
};
</script>

<style lang="scss">
@media (min-width: 1200px) {
  .phone__menu {
    transform: scale(0);
    height: 0;
  }
}
@media (max-width: 1200px) {
  .phone__menu {
    transform: scale(1);
    img {
      height: 157px;
    }
  }
  .phone__menu__link {
    color: white;
		height: 90%;
		width: 90%;
    &:hover {
      color: #f46d40;
    }
  }
  .phone__menu__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .phone__menu__list {
    margin: 0;
    padding: 2px;
  }
  .phone__menu__item {
    position: relative;

    .phone__menu__link {
      position: absolute;
      left: 10%;
      top: 10%;
    }
  }
}
@media (max-width: 400px) {
  .phone__menu {
    img {
      max-width: 300px;
    }
  }
}
</style>
