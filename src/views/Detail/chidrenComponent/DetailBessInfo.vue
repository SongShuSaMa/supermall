<template>
	<div class="detailbessinfo">
		<div class="bessinfotop">
			<img class="bessinfologo" :src="bessInfoC.shopLogo" alt=""> <span class="bessinfoname">{{ bessInfoC.name }}</span>
		</div>
		<div class="bessinfobottom">
			<div class="bessinfobottomleft">
				<div><p class="bessleftinfo1">{{ bessInfoC.cSells }}</p><p class="bessleftinfo2">总销量</p></div>
				<div><p class="bessleftinfo1">{{ bessInfoC.cGoods }}</p><p class="bessleftinfo2">全部宝贝</p></div>
			</div>
			<div class="bessinfobottomright">
				<p v-for="item in bessInfoC.score" class="bessinforighttext">
					<span>{{ item.name }}</span>
					<span>{{ item.score }}</span>
					<span class="bessbetter" :class="{bessbetterRed:item.isBetter}">{{ isBetter(item.isBetter) }}</span>
				</p>
			</div>
		</div>
		<button class="bessshopbutton">进店逛逛</button>
	</div>
</template>

<script>
	
	export default{
		props: {
			bessInfoC: {
				type: Object,
				default (){
					return {}
				}
			}
		},
		computed:{
			isBetter(){
				return function(flag){
					if(flag){ return "高"}else{return "低"}
				}
			}
		}
	}
</script>

<style>
	.detailbessinfo{
		padding: 10px 6px;
	}
	.bessinfologo{
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 1px solid #ccc;
		vertical-align: middle;
	}
	.bessinfoname{
		vertical-align: middle;
		font-size: 16px;
	}
	.bessinfobottom{
		display: flex;
		justify-content: space-between;
		padding: 10px 0px;
		align-items: center;
	}
	
	.bessinfobottomleft{
		display: flex;
		flex: 1;
		text-align: center;
		justify-content: space-around;
		border-right: 1px solid #ccc;
		height: 38px;
	}
	
	.bessinfobottomright{
		flex: 1;
		text-align: center;
	}
	
	.bessleftinfo1{
		color: #000;
	}
	
	.bessleftinfo2{
		font-size: 12px;
	}
	
	.bessinforighttext{
		font-size: 12px;
		height: 24px;
	}
	
	.bessinforighttext>span:nth-child(2){
		display: inline-block;
		width: 40px;
		margin: 0px 0px 0px 10px;
		text-align: left;
	}
	
	.bessbetter{
		background-color: green;
		color: #fff;
		padding: 0 2px;
	}
	
	.bessbetterRed{
		background-color: red;
	}
	
	.bessshopbutton{
		border: none;
		background-color: #ebebeb;
		width: 140px;
		height: 24px;
		border-radius: 6px;
		font-size: 14px;
		margin: 0 auto;
		display: block;
	}
</style>
