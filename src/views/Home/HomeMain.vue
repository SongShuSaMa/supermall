<template>
	<div class="home">
		<tab-control @tabClick="tabClick" :texts="texts" class="tab-control" v-show="isTabControlShow" ref="tabControl2"></tab-control>
		<nav-bar class="homenav">
			<div slot="left"></div>
			<div slot="center">购物街</div>
			<div slot="right"></div>
		</nav-bar>
		
		<scroll class="scroll" ref="scroll" 
		:bScrollConfig="bScrollConfig" 
		@contentScroll="contentScroll" 
		@contentPullingUp="contentPullingUp">
			<swiper-home class="homeswiper" :banners="banners" @swiperLoad="swiperLoad"></swiper-home>
			<recommend-view :recommends="recommends"></recommend-view>
			<feature-view></feature-view>
			<tab-control @tabClick="tabClick" :texts="texts" ref="tabControl1"></tab-control>
			<goods-list :list="goods[goods.tabgoods].list"></goods-list>
		</scroll>
		
		<back-top @click.native="clickBackTop" :isBackTopShow="isBackTopShow"><img src="~assets/img/common/top.png" alt="" ></back-top>

	</div>
</template>

<script>
		import { debounce } from 'common/util.js'
		import { itemListenerMixin,backTopMixin,bScrollConfig} from 'common/mixin.js'
		import {getHomeMultidata,getHomeGoods} from 'network/home.js'
		
		import Scroll from 'components/common/scroll/Scroll'
		import SwiperHome from './chlidComponents/SwiperHome'
		import RecommendView from './chlidComponents/RecommendView.vue'
		import FeatureView from './chlidComponents/FeatureView.vue'

		import NavBar from 'components/common/navbar/NavBar.vue'
		import GoodsList from 'components/content/goods/GoodsList.vue'
		import TabControl from 'components/content/tabcontrol/TabControl'
		import BackTop from 'components/common/backtop/BackTop'
		
		export default {
			
			// 内部变量
			data(){
				return {
					banners: [],
					recommends: [],
					texts:{
						text1: ['流行','新款','精选'],
						text2: ['pop','new','sell']
					},
					goods: {
						pop: {page: 0,list:[]},
						new: {page: 0,list:[]},
						sell: {page: 0,list:[]},
						tabgoods: "pop",
					},
					tabControlTop: 0,
					isTabControlShow: false,
					
					saveY:0
				}
			},
			
			mixins: [itemListenerMixin,backTopMixin,bScrollConfig],
			
			// 内部函数
			methods:{
				
				swiperLoad(){
					this.tabControlTop = this.$refs.tabControl1.$el.offsetTop;
				},
				
				tabClick(index){
					this.goods.tabgoods = this.texts.text2[index];
					this.$refs.tabControl1.activeindex = index;
					this.$refs.tabControl2.activeindex = index
				},
				
				// 当下拉1000高度左右显示放回顶部
				contentScroll(position){
					let y = position.y
					
					this.setBackTopShow(y);
					
					if(y < -this.tabControlTop){
						this.isTabControlShow = true;
					}else {
						this.isTabControlShow = false;
					}
					
				},
				
				// 往下拉加载更多
				contentPullingUp(){
					this.getHomeGoods(this.goods.tabgoods);
					this.$refs.scroll.finishPullUp();
				},
				
				// 获取轮播图和其他的数据
				getHomeMultidata(){
					getHomeMultidata().then(response => {
						this.banners = response.data.banner.list;
						this.recommends = response.data.recommend.list
					},function(reject){
						console.log(reject);
					})
				},
				
				// 获取流行/精选
				getHomeGoods(type){
					const page = this.goods[type].page + 1;
					getHomeGoods(type,page).then(response => {
						this.goods[type].list.push(...response.data.list);
						this.goods[type].page = page;
						this.$refs.scroll.finishPullUp();
					},function(reject){
						console.log(reject);
					})
				}
			},
			
			// 组件注册
			components: {
				NavBar,
				
				Scroll,
				SwiperHome,
				RecommendView,
				FeatureView,
				
				GoodsList,
				TabControl,
				BackTop,
			},

			// 生命周期
			created(){
				this.getHomeMultidata();
				this.getHomeGoods("pop");
				this.getHomeGoods("new");
				this.getHomeGoods("sell");
			},
			activated(){
				this.$refs.scroll.refresh();
				this.$refs.scroll.scrollTo(0,this.saveY,0);
			},
			
			deactivated(){
				this.saveY = this.$refs.scroll.getY();
				this.bus.$off("goodsImgLoad",this.goodsImgLoad);
			}
		}
		
</script>

<style scoped>
	.home{
		position: relative;
	}
	.homenav{
		background-color: #E06C75;
		color: #fff;
	}
	
	.scroll{
		width: 100%;
		height: calc(100vh - 95px);
		margin-top: 45px;
	}
	
	.tab-control{
		position: absolute;
		width: 100%;
		top: 0px;
		z-index: 9;
	}
	

</style>
