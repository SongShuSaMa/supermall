<template>
	<div class="goodslistitem">
		<a href="javascript:void(0)" @click="goDetail(item)">
			<img class="goodsitemimg" v-lazy="getImage" alt="" @load="imgLoad">
			<p class="goodsitemtitle">{{ item.title }}</p>
				<p>
					<span class="itemprice">¥{{ item.price }}</span>
					&nbsp;
					<span class="itemcfav iconfont">&#xe81a;{{ item.cfav }}</span>
				</p>
		</a>
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
		computed:{
			getImage(){
				return this.item.show? this.item.show.img:this.item.image;
			}
		},
		methods:{
			imgLoad(){
				this.bus.$emit("goodsImgLoad");
			},
			goDetail(item){
				this.$router.push("/Detail/"+item.iid);
			}
		}
	}
</script>

<style>
	@import url("~assets/fonts/iconfont.css");
	.goodslistitem{
		width: 48%;
		text-align: center;
		padding: 4px 0px;

	}
	.goodsitemimg{
		width: 100%;
		border-radius: 5px;
	}
	
	
	.goodsitemtitle{
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
		word-break:keep-all;
		padding: 0px 4px;
	}
	
</style>
