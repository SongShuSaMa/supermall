<template>
	<div class="goodslistitem">
		<a :href="item.link">
			<img class="goodsitemimg" :src="item.show.img" alt="">
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
	}
	
	
	.goodsitemtitle{
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
		word-break:keep-all;
		padding: 0px 4px;
	}
	
</style>
