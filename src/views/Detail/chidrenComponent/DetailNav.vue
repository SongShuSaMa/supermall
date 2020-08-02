<template>
	<nav-bar>
		<div slot="left" class="leftfont" @click="goBack"><span class="iconfont">&#xe67c;</span></div>
		<div class="centerdiv" slot="center">
			<ul>
				<li class="centertext" @click="activeNav(index)" v-for="(item , index) in navtext" :class="{textActive: activeIndex === index}">
					{{ item }}
				</li>
			</ul>
		</div>
	</nav-bar>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	export default{
		data(){
			return {
				navtext: ['商品','参数','评论','推荐'],
				activeIndex: 0
			}
		},
		components:{
			NavBar
		},
		
		methods: {
			goBack(){
				this.$router.back();
			},
			activeNav(index){
				this.activeIndex = index;
				this.$emit("detailNavClick",index);
			}
		}
		
	}
</script>

<style>
	.centerdiv>ul{
		display: flex;
		justify-content: space-around;
		list-style: none;
	}
	
	.centertext{
		flex: 1;
		font-size: 14px;
		color: #000000;
	}
	
	.textActive{
		color: red;
	}
	
	.leftfont>.iconfont{
		font-size: 14px;
	}
</style>
