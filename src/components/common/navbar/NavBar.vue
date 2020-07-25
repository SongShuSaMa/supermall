<template>
	<div class="navbar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
</script>

<style>
	.navbar{
		background-color: #E06C75;
		display: flex;
		width: 100%;
		height: 45px;
		text-align: center;
		line-height: 45px;
		color: #fff;
		font-size: 18px;
		position: fixed;
		z-index: 999;
	}
	
	.left,.right{
		width: 60px;
		height: 100%;
	}
	
	.center{
		flex: 1;
	}

</style>
