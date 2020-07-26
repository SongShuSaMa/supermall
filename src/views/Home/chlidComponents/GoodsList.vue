<template>
	<div class="goodsitem">
		<goods-list-item v-for="(item,index) in list" :item="item" :key="index"></goods-list-item>
	</div>
</template>

<script>
	import GoodsListItem from './GoodsListItem.vue'
	export default {
		props: {
			list:{
				type: Array,
				default (){
					return []
				}
			}
		},
		
		components: {
			GoodsListItem
		}
	}
</script>

<style>
	.goodsitem{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
</style>
