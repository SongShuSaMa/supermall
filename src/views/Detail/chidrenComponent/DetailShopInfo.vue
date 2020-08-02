<template>
	<div class="detailinfo">
		<div class="detailtext">{{ shopInfoC.title }}</div>
		<div class="detailprice">
			<span class="shopprice">{{ shopInfoC.price }}</span> &nbsp;
			<span class="shopplowrice"><del>{{ shopInfoC.lowPrice }}</del></span>&nbsp;
			<span class="discountDesc" :style="{backgroundColor: shopInfoC.discountBgColor}" v-if="shopInfoC.discountDesc">{{ shopInfoC.discountDesc }}</span>
		</div>
		<div class="detailshopinfo" v-if="shopInfoC.columns && shopInfoC.services[3]">
			<span>{{ shopInfoC.columns[0] }}</span>
			<span>{{ shopInfoC.columns[1] }}</span>
			<span>{{ shopInfoC.services[3].name }}</span>
		</div>
		<hr>
		<div class="detailshopinfo2">
			<span v-for="(item,index) in shopInfoC.services" v-if="index !== 3"><img width="14" height="14" :src="item.icon" alt="">{{ item.name }}</span>
		</div>
		
	</div>
</template>

<script>
	export default{
		props: {
			shopInfoC: {
				type: Object,
				default (){
					return {}
				}
			}
		}
	}
</script>

<style>
	.detailinfo{
		padding: 8px;
		border-bottom: 8px solid #eee;
	}
	
	.detailinfo>div{
		margin: 8px 0;
	}
	
	.detailtext{
		font-size: 16px;
		color: #000000;
	}
	
	.shopprice{
		color: orangered;
	}
	.shoplowprice{
		font-size: 12px;
		color: #858686;
	}
	
	.discountDesc{
		padding: 2px 6px;
		border-radius: 4px;
		font-size: 10px;
		color: #fff;
	}
		
	.detailshopinfo{
		font-size: 12px;
		display: flex;
		justify-content: space-between;
		color: #858686;
	}
	
	.detailshopinfo2{
		display: flex;
		justify-content: space-between;
		color: #000;
		padding: 6px 0;
		font-size: 14px;
	}
	
</style>
