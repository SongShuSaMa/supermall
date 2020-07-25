<template>
	<swiper-slide >
		<slot name="img"></slot>
	</swiper-slide>
</template>

<script>
	import {SwiperSlide} from 'vue-awesome-swiper'
	import 'swiper/swiper-bundle.min.css'

export default {
  components: {
    SwiperSlide
  },
};
</script>

<style>

</style>
