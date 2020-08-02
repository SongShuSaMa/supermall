<template>
	<div class="shopcargoods" v-if="item">
		<div class="shopcarfonts" @click="clickGoods"><span class="iconfont" :class="{goodsActive:isGoodsActive}">&#xe73f;</span></div>
		<div><img :src="item.img" alt="" width="75" height="100%"></div>
		<div class="shopcarcontent">
			<p>{{ item.title }}</p>
			<p class="goodsdesc">{{ item.desc }}</p>
			<div class="shopcarprice">
				<p>￥{{ item.price }}</p>
				<p>x{{ item.count }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default (){
					return {}
				}
			}
		},
		data(){
			return {
				isGoodsClick: false,
				
			}
		},
		computed:{
			isGoodsActive(){
				return this.isGoodsClick || this.$store.state.isSelectAll;
			},
		},
		methods:{
			clickGoods(){
				let store = this.$store;
				let isSelectAll = this.$store.state.isSelectAll;
				let price = parseFloat(this.item.price);

				this.isGoodsClick = !this.isGoodsClick;

				
				if(this.isGoodsClick){
					store.commit("updataAllPrice",store.state.allPrice+price)
					store.commit("updataAllCount",store.state.allCount+=1);
					
					if(store.state.allCount === store.state.goodsList.length) store.commit("setSelectAll",true);
					
				}else {
					store.commit("updataAllPrice",store.state.allPrice-price)
					store.commit("updataAllCount",store.state.allCount-=1);
					
					if(isSelectAll) store.commit("setSelectAll",false);
					
				}

			},
		},
		
		created(){
			this.bus.$on("clickSelectAll",() => {
				if(this.$store.state.isSelectAll){
					this.isGoodsClick = true;
				}else {
					this.isGoodsClick = false;
				}
			});
		}

	}
</script>

<style scoped>
	.shopcargoods{
		padding: 10px 5px;
		width: 100%;
		height: 130px;
		display: flex;
		border-bottom: 1px solid #ababab;
	}
	
	.shopcarfonts{
		line-height: 110px;
		margin-right: 10px;
	}
	
	.shopcarcontent>p{
		width: calc(100vw - 120px);
		padding: 0 10px;
		
		overflow: hidden;  /*溢出隐藏*/
		
		text-overflow: ellipsis; /*以省略号...显示*/
		
		white-space: nowrap;  /*强制不换行*/
	}
	
	.goodsdesc{
		margin: 10px 0;
		color: #a6a6a6;
		font-size: 14px;
	}
	
	.shopcarprice{
		display: flex;
		justify-content: space-between;
		line-height: 95px;
	}
	
	.goodsActive{
		color: deepskyblue;
	}
	
</style>
