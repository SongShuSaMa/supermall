<template>
	<swiper>
		<swiper-item v-for="(item,index) in swiperImg" :key="index"><img :src="item" alt=""></swiper-item>
	</swiper>
</template>

<script>
	import {Swiper,SwiperItem} from 'components/common/swiper'
	export default {
		components: {
			Swiper,
			SwiperItem
		},
		props: {
			swiperImg: {
				type: Array,
				default (){
					return []
				}
			}
		}
	}
</script>

<style>
</style>
