	export class ShopInfoC{
		constructor(data) {
			this.result = data.result;
			this.itemInfo = this.result.itemInfo;
			this.services = this.result.shopInfo.services;
		   this.price = this.itemInfo.price;
			 this.lowNowPrice = this.itemInfo.lowNowPrice;
			 this.discountDesc = this.itemInfo.discountDesc;
			 this.discountBgColor = this.itemInfo.discountBgColor;
			 this.title = this.itemInfo.title;
			 this.columns = this.result.columns;
			 this.desc = this.itemInfo.desc;
			 this.topImages = this.itemInfo.topImages;
			 
		}
	};
	export class BessInfoC{
		constructor(data) {
			this.shopLogo = data.result.shopInfo.shopLogo
			this.score = data.result.shopInfo.score
			this.name = data.result.shopInfo.name
			this.cGoods = data.result.shopInfo.cGoods
			this.cSells = data.result.shopInfo.cSells
		}
	};
	
	
	 