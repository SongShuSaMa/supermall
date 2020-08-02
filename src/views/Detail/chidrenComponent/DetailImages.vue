<template>
	<div v-if="detailInfo.detailImage">
		<div class="detaiInfoText">
			<div>
				<div class="detaildesctop">
					<p class="zfx1"></p>
				</div>
				<p style="margin: 5px 0;">{{ detailInfo.desc }}</p>
				<div class="detaildescbottom">
					<p class="zfx2"></p>
				</div>
			</div>
			<p class="detaiInfoKey">{{ detailInfo.detailImage[0].key }}</p>
		</div>
		<img width="100%" v-for="item in detailInfo.detailImage[0].list" :src="item" alt="" @load="imageLoad">
	</div>
</template>

<script >
	export default {
		props:{
			detailInfo: {
				type: Object,
				default (){
					return {}
				}
			}
		},
		data(){
			return {
				imgcount:0,
			}
		},
		methods: {
			imageLoad(){
				if(++this.imgcount === this.detailInfo.detailImage[0].list.length){
					this.$emit("loadImage")
				}
			}
		}
	}
</script>

<style scoped>
	.detaiInfoKey{
		padding-top: 10px;
		color: #000;
	}
	
	.detaiInfoText{
		padding: 0 10px;
	}
	
	
	.detaildesctop{
		width: 100px;
		border-top: 1px solid #000;
		left: 0px;
	}
	.detaildescbottom{
		width: 100px;
		border-top: 1px solid #000;
		right: 0px;
		margin-left: 100%;
		transform: translateX(-100px);
	}
	
	.zfx1,.zfx2{
		width: 6px; 
		height: 6px; 
		background-color: #000;
	}
	
	.zfx2{
		transform: translate(94px,-6px);
		
	}
</style>
