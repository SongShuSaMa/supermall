<template>
	<div>
		<nav-bar class="shopcarnavbar">
			<div slot="left"></div>
			<div slot="center">购物车({{ this.$store.state.goodsList.length }})</div>
			<div slot="right"></div>
		</nav-bar>
		<scroll :bScrollConfig="bScrollConfig" class="shopcarscroll" ref="scroll">
			<shop-car-goods-list></shop-car-goods-list>
		</scroll>
		<shop-car-select-info></shop-car-select-info>
	</div>
	
</template>

<script>
	import { bScrollConfig } from 'common/mixin'
	
	import NavBar from 'components/common/navbar/NavBar.vue'
	
	import Scroll from 'components/common/scroll/Scroll.vue'
	
	import ShopCarSelectInfo from 'views/ShoppingCart/chidComponent/ShopCarSelectInfo'
	import ShopCarGoodsList from 'views/ShoppingCart/chidComponent/ShopCarGoodsList.vue'
	
	export default {
		components: {
			NavBar,
			
			Scroll,
			
			ShopCarSelectInfo,
			ShopCarGoodsList
		},
		mixins: [bScrollConfig],
	}
</script>

<style scoped>
	.shopcarnavbar{
		background-color: #fe106b;
		color: #fff;
	}
	
	.shopcarscroll{
		margin-top: 50px;
		height: calc(100vh - 130px);
	}
</style>
