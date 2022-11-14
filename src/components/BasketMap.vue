<template>
  <div class="basket__map">
    <div class="basket__map__img">
      <img src="../assets/img/Rectangle.png" alt="" />
    </div>
    <div class="basket__map__mark">
      <img src="../assets/img/Mark.png" alt="" />
    </div>
    <div class="basket__map__text text-center">
      <h4>Укажите адрес</h4>
      <p>И узнайте время доставки</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasketMap",
};
</script>

<style lang="scss">
.basket__map {
  background: #e4e3e3;
  height: 190px;
  width: 100%;
  width: 200px;
  margin-top: 30px;
  border-radius: 5px;
  .basket__map__img {
    img {
      width: 200px;
      height: 100px;
      position: relative;
    }
  }
  .basket__map__mark {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    padding: 10px;
    border-radius: 50%;
    margin-left: 70px;
    margin-top: -35px;
    background: #f46d40;

    position: absolute;
  }
  .basket__map__text {
    padding: 25px 0;
    h4 {
      font-weight: 500;
    }
    p {
      color: #a4acad;
    }
  }
}
@media (max-width: 1400px) {
  .basket__map {
    width: 180px;
    .basket__map__img {
      img {
        width: 180px;
        height: 100px;
        position: relative;
      }
    }
  }
}
@media (max-width: 1250px) {
  .basket__map {
    width: 150px;
    .basket__map__img {
      img {
        width: 150px;
        height: 100px;
        position: relative;
      }
    }
		.basket__map__mark {
			width: 40px;
			height: 40px;
			margin-left: 60px;
			margin-top: -23px;
		}
  }
}
@media (max-width: 1200px) {
	.basket__map {
		transform: scale(0);
		height: 0px;
	}
}
</style>
