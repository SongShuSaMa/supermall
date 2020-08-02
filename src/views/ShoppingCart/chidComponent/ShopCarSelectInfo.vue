<template>
	<div class="selectinfo">
		<span @click="clickAllSelect" :class="{allselectactive:$store.state.isSelectAll}"><span class="iconfont">&#xe73f;</span> 全选</span>
		<span class="allPrice">合计:￥{{ state.allPrice }}</span>
		<div class="settlbutton" @click="clickSettlButton">去结算（{{ state.allCount }}）</div>
	</div>
</template>

<script>
	import {SETSELECTALL,UPDATAALLPRICE,UPDATAALLCOUNT} from 'store/mutations_type.js'
	export default{
		mounted(){
			this.state = this.$store.state;
		},
		data(){
			return {
				state: {}
			}
		},
		methods:{
			clickAllSelect(){
				let isSelectAll = this.$store.state.isSelectAll;
				
				isSelectAll = !isSelectAll;
				
				this.$store.commit(SETSELECTALL,isSelectAll);
				
				if(isSelectAll){
					let allPrice = 0;
					this.state.goodsList.forEach(v => {
						allPrice += parseFloat(v.price);
					})
					
					this.$store.commit(UPDATAALLPRICE,allPrice);
					
					this.$store.commit(UPDATAALLCOUNT,this.state.goodsList.length);
				}else {
					this.$store.commit(UPDATAALLPRICE,0);
					
					this.$store.commit(UPDATAALLCOUNT,0);
				}
				
				this.bus.$emit("clickSelectAll")
			},
			clickSettlButton(){
				this.$emit("clickSettlButton")
			}
		}
	}
</script>

<style>
	.selectinfo{
		width: 100%;
		height: 30px;
		background-color: #eee;
		position: fixed;
		bottom: 45px;
		z-index: 9;
		box-shadow: 0 -1px 3px #ccc;
		line-height: 30px;
		font-size: 12px;
		padding: 0 10px;
	}
	
	.selectinfo>span{
		margin-right: 30px;
	}
	
	.allselectactive{
		color: deepskyblue;
	}
	
	.settlbutton{
		position: absolute;
		top: 0;
		right: 0;
		width: 100px;
		height: 100%;
		background-color: #e68d3f;
		text-align: center;
		line-height: 30px;
		color: #fff;
		font-size: 14px;
	}
	
	.allPrice{
		color: orangered;
	}
</style>
