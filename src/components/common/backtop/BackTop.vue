<template>
	<div class="fiextop" v-if="isBackTopShow">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: {
			isBackTopShow:{
				type: Boolean,
				default: false
			},
		},
	}
</script>

<style scoped>
	.fiextop{
		position: fixed;
		top: 85%;
		right: 5px;
		z-index: 99;
		width: 40px;
		height: 40px;
	}
	
	.fiextop img{
		width: 100%;
		height: 100%;
	}
</style>
