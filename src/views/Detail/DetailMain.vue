<template>
	<div class="detailmain">
		<detail-nav class="detailnav" @detailNavClick="detailNavClick" ref="detailnav"></detail-nav>
		<scroll class="detailscroll" ref="scroll" :bScrollConfig="bScrollConfig" @contentScroll="contentScroll">
			<detail-swiper class="detail-swiper" :swiperImg="swiperImg"></detail-swiper>
			<shop-info :shopInfoC="shopInfoC"></shop-info>
			<bess-info :bessInfoC="bessInfoC"></bess-info>
			<detail-images :detailInfo="detailInfo" @loadImage="refreshImage" ref="detailimages"></detail-images>
			<detail-params :itemParams="itemParams" ref="detailparams"></detail-params>
			<detail-commend :detailCommentInfo="detailCommentInfo" ref="detailcommend"></detail-commend>
			<goods-list class="recommendgoods" :list="reCommend" ref="detailgoods"></goods-list>
		</scroll>
		
		<detail-tab-bar @clickShopCar="clickShopCar"></detail-tab-bar>
		
		<back-top :isBackTopShow="isBackTopShow" @click.native="clickBackTop">
			<img src="~assets/img/common/top.png" alt="">
		</back-top>
		
	</div>
</template>

<script>
	import { debounce } from 'common/util'
	import { itemListenerMixin,backTopMixin,bScrollConfig} from 'common/mixin'
	
	import { ShopInfoC, BessInfoC } from 'views/Detail/DetailData/index'
	
	import { getDetailData,getReCommend } from 'network/detail.js'
	
	import Scroll from 'components/common/scroll/Scroll.vue'
	
	import DetailNav from 'views/Detail/chidrenComponent/DetailNav'
	import DetailSwiper from 'views/Detail/chidrenComponent/DetailSwiper'
	import ShopInfo from 'views/Detail/chidrenComponent/DetailShopInfo'
	import BessInfo from 'views/Detail/chidrenComponent/DetailBessInfo'
	import DetailImages from 'views/Detail/chidrenComponent/DetailImages'
	import DetailParams from 'views/Detail/chidrenComponent/DetailParams'
	import DetailCommend from 'views/Detail/chidrenComponent/DetailCommend'
	import DetailTabBar from 'views/Detail/chidrenComponent/DetailTabBar'
	
	import GoodsList from 'components/content/goods/GoodsList'
	import GoodsListItem from 'components/content/goods/GoodsListItem'
	
	import BackTop from 'components/common/backtop/BackTop'
	
	export default {
		name: "Detail",
		data(){
			return {
				iid: null,
				swiperImg: [],
				shopInfoC: {},
				bessInfoC: {},
				detailInfo: {},
				itemParams: {},
				detailCommentInfo: {},
				reCommend: [],
				detailNavTop: [],
			}
		},
		mixins: [itemListenerMixin,backTopMixin,bScrollConfig],
		methods:{
			
			// 处理图片展示刷新
			refreshImage(){
				this.$refs.scroll.refresh();
				
				this.detailNavTop.push(0)
				this.detailNavTop.push(this.$refs.detailparams.$el.offsetTop)
				this.detailNavTop.push(this.$refs.detailcommend.$el.offsetTop)
				this.detailNavTop.push(this.$refs.detailgoods.$el.offsetTop)
			},
			
			// 处理导航功能的函数
			detailNavClick(index){
				this.$refs.scroll.scrollTo(0,-this.detailNavTop[index]+45,500);
			},
			
			// 处理滚动条的函数
			contentScroll(position){
				// 获取滚动的Y值
				const positionY = position.y;
				
				// 处理回到顶部按钮的显示/隐藏-值
				this.setBackTopShow(positionY);
				
				// 处理详细页面的导航对应的位置功能
				const detailY = position.y - 45;
				this.detailNavTop.forEach((v,i,arr) => {
					
					if(i !== this.$refs.detailnav.activeIndex && 
					((!arr[i+1] && detailY<=-v)|| (detailY<=-v && detailY>-arr[i+1])) ){
						
						this.$refs.detailnav.activeIndex = i;
						
					}
				})
			},
			
			clickShopCar(){
				const goodsInfo = {};
				goodsInfo.title = this.shopInfoC.title;
				goodsInfo.desc = this.shopInfoC.desc;
				goodsInfo.price = this.shopInfoC.lowNowPrice;
				goodsInfo.img = this.swiperImg[0];
				goodsInfo.iid = this.iid;
				goodsInfo.count = 1;
				this.$store.dispatch("addGoods",goodsInfo).then((data) => {
					console.log(this.$toast);
					console.log(data);
					this.$toast.showToast(data,2000);
				},(reject)=>{
					console.log("数据处理失败! -- addGoods-Dispatch");
				});
			}
		},
		destroyed(){
			this.bus.$off("goodsImgLoad",this.goodsImgLoad);
		},
		created (){
			this.iid = this.$route.params.iid;
			getDetailData(this.iid).then( response => {
				this.swiperImg = response.result.itemInfo.topImages
				this.shopInfoC = new ShopInfoC(response);
				this.bessInfoC = new BessInfoC(response);
				this.detailInfo = response.result.detailInfo;
				this.itemParams = response.result.itemParams? response.result.itemParams:"";
				this.detailCommentInfo = response.result.rate.list[0];
			}, reject => {
				console.log("请求数据失败..! / DetailData");
			});
			
			getReCommend().then(data => {
				this.reCommend = data.data.list;
			},reject => {
				console.log("请求数据失败..! / ReCommend");
			})
		},
		components:{
			DetailNav,
			DetailSwiper,
			ShopInfo,
			BessInfo,
			DetailImages,
			DetailParams,
			DetailCommend,
			DetailTabBar,
			
			GoodsList,
			GoodsListItem,
			
			BackTop,
			
			Scroll
		}
	}
</script>

<style>
	
	.detailnav{
		background-color: #fff;
	}
	
	.detail-swiper{
		margin-top: 45px;
		height: 300px;
	}
	
	.detailscroll{
		height: calc(100vh - 95px);
	}
	
	.recommendgoods{
		border-top: 4px solid #eee;
	}
</style>
