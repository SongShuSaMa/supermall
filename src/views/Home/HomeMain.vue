<template>
	<div>
		<nav-bar>
			<div slot="left"></div>
			<div slot="center">购物街</div>
			<div slot="right"></div>
		</nav-bar>
		
		<swiper>
			<swiper-item v-for="item in banners" :key="item.index" >
				<img slot="img" :src="item.image" alt="" width="100%">
			</swiper-item>
		</swiper>
		
	</div>
</template>

<script>
		import NavBar from 'components/common/navbar/NavBar.vue'
		import {Swiper ,SwiperItem} from 'components/common/swiper/index.js'
		import {getHomeData} from 'network/home.js'

		export default {
			data(){
				return {
					banners: [],
					recommends: [],
				}
			},
			components: {
				NavBar,
				Swiper,
				SwiperItem
			},

			created(){
				getHomeData().then(response => {
					this.banners = response.data.banner.list;
					this.recommends = response.data.recommend.list
					console.log(this.banners);
				},function(reject){
					console.log(reject);
				})
			}
		}
		
</script>

<style>

</style>
