<template>
	<div >
		<nav-bar>
			<div slot="left"></div>
			<div slot="center">购物街</div>
			<div slot="right"></div>
		</nav-bar>
		
		
		<swiper-home class="home" :banners="banners"></swiper-home>
		<recommend-view :recommends="recommends"></recommend-view>
		<feature-view></feature-view>
		
		<tab-control @tabClick="tabClick" :texts="texts" ></tab-control>
		<goods-list :list="goods[goods.tabgoods].list"></goods-list>
		
		<ul>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
			<li>10</li>
		</ul>
		
	</div>
</template>

<script>
		import {getHomeMultidata,getHomeGoods} from 'network/home.js'
		
		import SwiperHome from './chlidComponents/SwiperHome'
		import RecommendView from './chlidComponents/RecommendView.vue'
		import FeatureView from './chlidComponents/FeatureView.vue'
		import GoodsList from './chlidComponents/GoodsList.vue'

		import NavBar from 'components/common/navbar/NavBar.vue'
		import TabControl from 'components/content/tabcontrol/TabControl'
		
		export default {
			data(){
				return {
					banners: [],
					recommends: [],
					texts:{
						text1: ['流行','新款','精选'],
						text2: ['pop','new','sell']
					},
					goods: {
						pop: {page: 0,list:[]},
						new: {page: 0,list:[]},
						sell: {page: 0,list:[]},
						tabgoods: "pop",
					},
				}
			},
			components: {
				NavBar,
				SwiperHome,
				RecommendView,
				FeatureView,
				GoodsList,
				
				TabControl
			},

			created(){
				this.getHomeMultidata();
				this.getHomeGoods("pop");
				this.getHomeGoods("new");
				this.getHomeGoods("sell");
			},
			methods:{
				tabClick(text){
					this.goods.tabgoods = text
				},
				
				getHomeMultidata(){
					getHomeMultidata().then(response => {
						this.banners = response.data.banner.list;
						this.recommends = response.data.recommend.list
					},function(reject){
						console.log(reject);
					})
				},
				
				getHomeGoods(type){
					const page = this.goods[type].page + 1;
					getHomeGoods(type,page).then(response => {
						this.goods[type].list.push(...response.data.list);
						this.goods[type].page = page;
					},function(reject){
						console.log(reject);
					})
				}
			}
		}
		
</script>

<style>
	.home{
		padding-top: 45px;
	}
</style>
