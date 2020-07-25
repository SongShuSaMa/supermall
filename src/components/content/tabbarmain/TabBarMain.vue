<template>
	<div>
		<tab-bar>
			<tab-bar-item url="/Home">
				<span slot="itemfont" class="iconfont">&#xe80f;</span>
				<p slot="itemtext">首页</p>
			</tab-bar-item>
			
			<tab-bar-item url="/Category">
				<span slot="itemfont" class="iconfont">&#xe7f9;</span>
				<p slot="itemtext">分类</p>
			</tab-bar-item>
			
			<tab-bar-item url="/ShoppingCart">
				<span slot="itemfont" class="iconfont">&#xe636;</span>
				<p slot="itemtext">购物车</p>
			</tab-bar-item>
			
			<tab-bar-item url="/My">
				<span slot="itemfont" class="iconfont">&#xe62b;</span>
				<p slot="itemtext">我的</p>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar.vue'
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
	export default {
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
		@import url("~assets/fonts/iconfont.css");
</style>
