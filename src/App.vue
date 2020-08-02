<template>
	<div>
		<keep-alive exclude="Detail">
			<router-view/>
		</keep-alive>
		
		<tab-bar-main v-if="isTabBarMain"></tab-bar-main>
	</div>
</template>

<script>
	import TabBarMain from 'components/content/tabbarmain/TabBarMain.vue'

	export default {
		components: {
			TabBarMain,
		},
		computed: {
			isTabBarMain(){
				return this.$route.path.indexOf("/Detail") === -1;
			}
		}
	}
</script>

<style>
	@import url("./assets/css/base.css");
</style>
