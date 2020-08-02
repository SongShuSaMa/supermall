<template>
	<div class="detailtabbar">
		<div>
			<span class="iconfont">&#xe617;</span>
			<p>客服</p>
		</div>
		<div>
			<span class="iconfont">&#xe7a4;</span>
			<p>店铺</p>
		</div>
		<div>
			<span class="iconfont">&#xe73d;</span>
			<p>收藏</p>
		</div>
		<div class="shopcar" @click="clickShopCar">购物车</div>
		<div class="purchase">购买</div>
	</div>
</template>

<script>
	export default{
		methods:{
			clickShopCar(){
				this.$emit("clickShopCar");
			}
		}
	}
	
</script>

<style scoped>
	.detailtabbar{
		width: 100%;
		height: 50px;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		display: flex;
		text-align: center;
	}
	
	.detailtabbar>div{
		width: 55px;
		margin: auto 0;
		font-size: 12px;
	}
	
	.detailtabbar .shopcar{
		background-color: #e3ca38;
		flex: 1;
		height: 100%;
		line-height: 50px;
		font-size: 16px;
		color: #000;
	}
	
	.detailtabbar .purchase{
		background-color: #ef0f78;
		height: 100%;
		flex: 1;
		color: #fff;
		line-height: 50px;
		font-size: 16px;
	}
</style>
