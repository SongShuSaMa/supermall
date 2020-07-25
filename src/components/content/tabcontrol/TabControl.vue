<template>
	<div class="tabcontrol">
		<button class="controlitem" :to="path" v-for="(item,index) in texts" @click="clickControlItem(index)" :class="{active:index === activeindex}">
			<span>{{ item }}</span>
		</button>
		
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				activeindex: 0
			}
		},
		props: {
			texts: {
				type: Array,
				default(){
					return []
				}
			},
			path:{
				type: Array,
				default(){
					return []
				}
			}
		},
		methods: {
			clickControlItem(index){
				this.activeindex = index;
				this.$router.push(this.path[index]);
			}
		}
	}
</script>

<style>
	.tabcontrol{
		display: flex;
		position: sticky;
		top: 45px;
	}
	.controlitem{
		flex: 1;
		background-color: #fff;
		border: none;
		height: 40px;
		line-height: 40px;
	}
	
	.active{
		color: var(--color-high-text);
	}
	
	
</style>
