import { debounce } from './util.js'
export const itemListenerMixin = {
	data(){
		return {
			goodsImgLoad: null,
		}
	},
	mounted(){
		const refresh = debounce(this.$refs.scroll.refresh,300);
		this.goodsImgLoad = () => {
			refresh();
		}
		this.bus.$on("goodsImgLoad",this.goodsImgLoad);
	},
}

export const backTopMixin = {
	data(){
		return {
			isBackTopShow: false,
		}
	},
	methods: {
		clickBackTop(){
			this.$refs.scroll.scrollTo(0,0,500);
		},
		setBackTopShow(y){
			if(y < -1000) {
				this.isBackTopShow = true;
			}else {
				this.isBackTopShow = false;
			};
		}
	}
}

export const bScrollConfig= {
	data(){
		return {
			bScrollConfig: {
				click: true,
				probeType: 3,
				pullUpLoad: true
			}
		}
	}
}

