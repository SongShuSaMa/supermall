<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	
	export default {
		name: "scroll",
		data(){
			return {
				bscroll: null,
			}
		},
		props: {
			bScrollConfig: {
				type: Object,
				default (){
					return {}
				}
			}
		},
		mounted(){
			this.bscroll = new BScroll(this.$refs.wrapper,this.bScrollConfig);
			this.bscroll.on("scroll",(position) => {
				this.$emit("contentScroll",position)
			});
			
			this.bscroll.on("pullingUp",() => {
				this.$emit("contentPullingUp");
			});

		},
		methods: {
			scrollTo(x,y,time){
				this.bscroll.scrollTo(x,y,time);
			},
			
			finishPullUp(){
				this.bscroll.finishPullUp();
			},
			
			refresh(){
				this.bscroll.refresh();
			},
			
			getY(){
				return this.bscroll ? this.bscroll.y : 0;
			}
		}
	}
</script>

<style>
</style>
