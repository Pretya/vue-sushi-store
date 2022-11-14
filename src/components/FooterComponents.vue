<template>
	<div class="footer container">
		<div class="footer__content row m-0">
			<div class="footer__box footer__box--hidden col-sm-4">
				<ul class="footer__list" v-for="item in footerLink" :key="item">
					<li>
						<a href="#">
							{{ item.name }}
						</a>
					</li>
				</ul>
			</div>
			
			<div class="footer__box footer__box--border col-sm-4 col-12">
				<h2>Введите номер</h2>
				<p>+38(___)___ __ __</p>
				<p>Выберите удобный <br> мессенджер для общения</p>
				<ul class="footer__box__list d-flex">
					<li class=""><a href=""><img src="../assets/img/footer/whatsapp.png" alt=""></a></li>
					<li class=""><a href=""><img src="../assets/img/footer/telegram.png" alt=""></a></li>
					<li class=""><a href=""><img src="../assets/img/footer/instagram.png" alt=""></a></li>
				</ul>
			</div>

			<div class="footer__box col-sm-4 col-12">
				<ul class="footer__number__list m-0 p-1" v-for="item in footerPhone" :key="item">
					<li>Тел:<a href="#"> {{ item.number }} </a></li>
				</ul>
				<p class="p-1"> {{ footerAdress }} </p>
			</div>
		</div>
	</div>
</template>

<script>
import { footerList } from '@/constant/menuLink'
export default {
	name: 'FooterComponents',
	data() {
		return {
			footerLink: footerList,
			footerPhone: [
				{number: '+987 654 321'},
				{number: '+123 456 789'},
			],
			footerAdress: 'Адрес:Бакаева 126',
		}
	}
}
</script>

<style lang="scss">
.footer {
	width: 100%;
	border-top: 1px solid #A4ACAD;
}
.footer__box {
	margin-top: 20px;
	padding-bottom: 50px;

	p {
		color: #A4ACAD;
		line-height: 1.4;
	}
}
.footer__box--border {
	border-left: 1px solid  #A4ACAD;
	border-right: 1px solid  #A4ACAD;
}
.footer__box__list {
	padding: 0;
	margin: 0 auto;
	justify-content: center;
	li {
		margin: 14px;
	}
}
.footer__list {
	a {
		color: black;
		transition: color .3s linear;
		&:hover {
			color: #F46D40;
			
		}
	}
}
.footer__number__list {
	color: #A4ACAD;
	a {
		color: #A4ACAD;
		text-decoration: underline;
		transition: color .3s linear;
		&:hover {
			color: #F46D40;
			
		}
	}
}
@media (max-width: 991px) {
	.footer__box {
		img  {
			width: 40px;
		}
	}
}
@media (max-width: 768px) {
	.footer__box {
		img  {
			width: 30px;
		}
		li {
			margin: 7px;
		}
	}
}
@media (max-width: 576px) {
	.footer__box {
		text-align: center;
		margin-top: 0;
		padding-bottom: 10px;
		li {
			margin: 3px;
		}
	}
	.footer__box--border {
	border-left: none;
	border-right: none;
}
	.footer__box--hidden {
		transform: scale(0);
		width: 0;
		height: 0;
	}
}
</style>