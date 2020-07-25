<template>
		<swiper ref="mySwiper" :options="swiperOption">
			<slot></slot>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
</template>

<script>
	import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
	import 'swiper/swiper-bundle.min.css'
  export default {
		components:{
			Swiper,
		},
		data() {
		  return {
		    swiperOption: {
					observer:true,//修改swiper自己或子元素时，自动初始化swiper 
					observeParents:true,//修改swiper的父元素时，自动初始化swiper 
					loop: true,
					
					// autoplay: {
						
					// delay: 100,
					 
					// stopOnLastSlide: false,
					 
					// disableOnInteraction: false
					 
					// },
					autoplay: true,
					
					//滑动速度
					speed:1000,

		      pagination: {
		        el: ".swiper-pagination", //分页器作用对象
		         
		        clickable: true,
		         
		        type: "bullets"
		      }
		    },
			}
		}
		
  }
</script>

<style>
	.swiper-container{
		width: 100%;
		height: 200px;
	}
</style>