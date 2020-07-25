<template>
	<div>

		
		<keep-alive>
			<router-view/>
		</keep-alive>
		
		<tab-bar-main></tab-bar-main>
	</div>
</template>

<script>
	import TabBarMain from 'components/content/tabbarmain/TabBarMain.vue'
	export default {
		components: {
			TabBarMain,
		}
	}
</script>

<style>
	
	@import url("./assets/css/base.css");
</style>
