<template>
	<router-link :to="url" tag="button" :class="{active:isActive}">
		<div style="font-size: 22px;">
			<slot name="itemfont"></slot>
		</div>
		<slot name="itemtext"></slot>
	</router-link>
</template>

<script>
	export default {
		computed: {
			isActive(){
				return this.$route.path === this.url
			}
		},
		props: {
			url: {
				type: String
			}
		},
	}
</script>

<style>
	button{
		border: none;
		background-color: #f6f6f6;
		outline: none;
		flex: 1;
	}
	
	.active{
		color: red;
	}
</style>
