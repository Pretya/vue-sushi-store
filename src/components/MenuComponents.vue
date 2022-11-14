<template>
  <div class="menu__components">
    <nav>
      <div class="nav__menu">
        <div class="nav__logo">
          <div class="nav__logo__img">
            <a href="/">
              <img src="../assets/img/logo.png" alt="" />
            </a>
          </div>
          <div class="nav__logo__title">
            <a href="#"><h1>ROMSEM</h1></a>
          </div>
        </div>
        <ul class="nav__list p-0" v-for="item in menuLink" :key="item">
          <li class="nav__item">
            <router-link class="nav__link" :to="item.path">
              <img :src="require(`../assets/img/${item.img}.png`)" alt="" />
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { menuList } from "@/constant/menuLink";

export default {
  name: "MenuComponents",
  data() {
    return {
      menuLink: menuList,
    };
  },
};
</script>

<style lang="scss">
.menu__components {
  display: flex;
  justify-content: center;
  text-align: center;

  height: 100vh;
}
.nav__logo__title {
  font-size: 30px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #a4acad;
  a {
    color: black;
  }
}
.nav__logo__img img {
  margin: 30px 0;
  width: 100px;
  height: 100px;
}
.nav__list {
  text-align: left;
  a {
    font-size: 24px;
    color: black;
  }
  img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
}
.nav__item {
  margin: 15px 0;
}
.nav__link {
  transition: all 0.3s linear;
}
.nav__link:hover {
  color: orange;
}
.nav__link:focus {
  color: orange;
}
@media (max-width: 1198px) {
  .nav__logo__title {
    font-size: 25px;
  }
  .nav__list {
    a {
      font-size: 18px;
    }
  }
}
</style>
