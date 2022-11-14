<template>
  <div class="info" v-for="item in info" :key="item">
    <div class="info__title">{{ item.title }}</div>
    <div class="info__text">{{ item.text }}</div>
    <div class="info__list__text">{{ item.listText }}</div>
    <ul class="info__list" v-for="item in infoList" :key="item">
      <li>{{ item.name }}</li>
    </ul>
    <div class="info__subText">{{ item.subText }}</div>
  </div>
</template>

<script>
export default {
  name: "InfoComponents",
  data() {
    return {
      info: [
        {
          title: "Заказать суши в Харькове",
          text: "Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом, приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете заказать суши в Харькове с доставкой на дом или в офис.",
          listText: "В нашем меню более 20 видов суши:",
          subText:
            "В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.",
        },
      ],
      infoList: [
        { name: "Классические с сырым лососем, тунцом, окунем." },
        { name: "Экзотические с тигровой креветкой, морским гребешком." },
        { name: "Пикантные с копченым лососем, угрем." },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.info {
  margin-top: 30px;
  margin-bottom: 80px;
  color: #a4acad;
}
.info__title {
  font-size: 24px;
  font-weight: 500;
  margin: 10px 0;
}
.info__text,
.info__subText,
.info__list,
.info__list__text {
  font-size: 18px;
  line-height: 1.1;
  margin-bottom: 10px;
}
ul li {
  list-style: disc;
}
@media (max-width: 1200px) {
	.info {
		margin-top: 10px;
		padding: 10px;
	}
}
@media (max-width: 768px) {
	.info {
		margin-top: 10px;
		padding: 10px;
	}
  .info__title {
    font-size: 18px;
  }
  .info__text,
  .info__subText,
  .info__list,
  .info__list__text {
    font-size: 14px;
    line-height: 1.1;
    margin-bottom: 10px;
  }
}
</style>
