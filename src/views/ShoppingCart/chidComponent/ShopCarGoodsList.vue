<template>
	<div class="shopcargoods" v-if="itemList">
		<shop-car-goods v-for="(item,index) in itemList" :item="item" :key="index"></shop-car-goods>
	</div>
</template>

<script>
	import ShopCarGoods from 'views/ShoppingCart/chidComponent/ShopCarGoods.vue'
	export default {
		data(){
			return {
				itemList: []
			}
		},
		
		mounted(){
			this.itemList = this.$store.state.goodsList;
			console.log(this.itemList);
		},
		components: {
			ShopCarGoods
		}

	}
</script>

<style scoped>
	
	
</style>
