<template>
	<div class="select">
		<p 
		class="title m-0"
		@click="areOptionsVisible = !areOptionsVisible"
		>{{ selected }}</p>
		<div class="options"
		v-if="areOptionsVisible">
			<p
			v-for="option in options"
			:key="option.value"
			@click="selectOption(option)"
			>
				{{ option.name }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
name: 'SelectComponents',
props: {
	options: {
		type: Array,
		default() {
			return []
		}
	},
	selected: {
		type: String,
		default: ''
	}
},
data() {
	return {
		areOptionsVisible: false
	}
},
methods: {
	selectOption(option) {
		this.$emit('select', option),
		this.areOptionsVisible = false
	},
	hideSelect() {
		this.areOptionsVisible = false
	}
},
mounted() {
	document.addEventListener('click', this.hideSelect.bind(this), true)
},
beforeDestroy() {
	document.removeEventListener('click', this.hideSelect)
}
}
</script>

<style lang="scss">
.select {

	width: 150px;
	width: 100%;
	position: relative;
	cursor: pointer;
}
.title {
	padding: 5px 10px 5px 10px;
	text-align: center;
	width: 150px;
	border: 1px solid #eeeeee;
	background: white;
	font-weight: 500;
	border-radius: 5px ;
	border: 1px solid #6e6e6e;
	transition: all .3s linear;
	&:hover {
		background: #e7e7e7;
	}
}
.options {
	padding: 5px;
	margin-top: 10px;
	background: white;
	border: 1px solid #eeeeee;
	position: absolute;
	width: 150px;
	border-radius: 5px ;
	border: 1px solid #6e6e6e;
	
	p {
		transition: all .3s linear;
	}
	p:hover {
		color: #F46D40;
	}
}
</style>