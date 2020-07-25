<template>
	<swiper>
		<swiper-item v-for="item in banners" :key="item.index" >
			<a :href="item.link">
					<img :src="item.image" alt="" width="100%">
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
		props:{
			banners: {
				type: Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
</style>
