<template>
	<swiper>
		<swiper-item v-for="item in banners" :key="item.index" >
			<a :href="item.link">
					<img :src="item.image" alt="" width="100%" @load="swiperLoad">
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
	import {Swiper ,SwiperItem} from 'components/common/swiper/index.js'
	export default {
		components: {
			Swiper,
			SwiperItem
		},
		data(){
			return {
				isSwiperLoad: true
			}
		},
		props:{
			banners: {
				type: Array,
				default(){
					return []
				}
			}
		},
		methods: {
			swiperLoad(){
				if(this.isSwiperLoad){
					this.$emit("swiperLoad")
					this.isSwiperLoad = !this.isSwiperLoad;
				}
			}
		}
	}
</script>

<style>
</style>
