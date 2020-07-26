<template>
	<div class="tabcontrol">
		<button class="controlitem" v-for="(item,index) in texts.text1" @click="clickControlItem(index)" :class="{active:index === activeindex}">
			<span>{{ item }}</span>
		</button>
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
				type: Object,
				default(){
					return {}
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
				this.$emit("tabClick",this.texts.text2[index]);
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
	
	.active > span{
		border-bottom: 2px solid var(--color-high-text);
		padding: 4px;
	}
	
	
</style>
