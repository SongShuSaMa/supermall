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
		
		<tab-control :texts="['流行','新款','精选']" :path="['/Home/Popular','/Home/NewPattern','/Home/Selected']"></tab-control>
		
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
		import {getHomeData} from 'network/home.js'
		
		import SwiperHome from './chlidComponents/SwiperHome'
		import RecommendView from './chlidComponents/RecommendView.vue'
		import FeatureView from './chlidComponents/FeatureView.vue'

		import NavBar from 'components/common/navbar/NavBar.vue'
		import TabControl from 'components/content/tabcontrol/TabControl'
		export default {
			data(){
				return {
					banners: [],
					recommends: [],
				}
			},
			components: {
				NavBar,
				SwiperHome,
				RecommendView,
				FeatureView,
				TabControl
			},

			created(){
				getHomeData().then(response => {
					this.banners = response.data.banner.list;
					this.recommends = response.data.recommend.list
				},function(reject){
					console.log(reject);
				})
			}
		}
		
</script>

<style>
	.home{
		padding-top: 45px;
	}
</style>
