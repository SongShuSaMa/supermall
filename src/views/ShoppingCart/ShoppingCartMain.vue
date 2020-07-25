<template>
	<div>
		<nav-bar>
			<div slot="left"></div>
			<div slot="center">购物车</div>
			<div slot="right"></div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	export default {
		components: {
			NavBar
		}
	}
</script>

<style>
</style>
