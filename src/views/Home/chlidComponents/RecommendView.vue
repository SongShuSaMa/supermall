<template>
	<div class="recommend">
		<div class="item" v-for="item in recommends">
			<a :href="item.link">
				<img :src="item.image" alt="">
			</a>
			<div>{{ item.title }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			recommends:{
				type: Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
	.recommend{
		display: flex;
		text-align: center;
		justify-content: space-around;
		padding: 10px 0;
		border-bottom: 8px solid #eee;
	}
	
	.item img{
		width: 70px;
		height: 70px;
		margin-bottom: 10px;
	}
	
</style>
