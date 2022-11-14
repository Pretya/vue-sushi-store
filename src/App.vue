<template>
  <div class="app container-fluid" v-on:submit.prevent>
    <div class="row">
      <div class="app__menu__left col-xl-2 col-md-0">
        <menu-components></menu-components>
      </div>
      <div class="app__content col-xl-8 col-md-12 p-0">
        <header-view></header-view>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <div class="app__menu__right col-xl-2">
        <basket-view></basket-view>
      </div>
    </div>
  </div>
</template>

<script>
import BasketView from "@/views/BasketView.vue";
import HeaderView from "@/components/HeaderView.vue";
import MenuComponents from "@/components/MenuComponents.vue";

export default {
  components: {
    MenuComponents,
    HeaderView,
    BasketView,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*::before,
*::after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}
header,
footer,
nav {
  display: block;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}
input,
button,
textarea {
  font-family: inherit;
}
input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
html,
body {
  width: 100%;
  height: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

.container-fluid {
  padding: 0;
  width: 100%;
  overflow: hidden;
}
.container {
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}
@media (max-width: 1199px) {
	.app__menu__left {
		transform: scale(0);
		height: 0;
	}
	.app__menu__right {
		transform: scale(0);
		height: 0;
		
		}
	.app__content {

	}
}
</style>
