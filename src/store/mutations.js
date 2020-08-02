import { ADDGOODSITEM,ADDGOODSCOUNT, SETSELECTALL,UPDATAALLPRICE,UPDATAALLCOUNT} from './mutations_type.js'
export default {
	[ADDGOODSITEM](state,goods){
		state.goodsList.push(goods)
	},
	
	[ADDGOODSCOUNT](state,goods){
		let price = parseFloat(goods.price);
		price += parseFloat(goods.price);
		goods.price = price;
		goods.count += 1;
	},
	
	[SETSELECTALL](state,flag){
		state.isSelectAll = flag;
	},
	
	[UPDATAALLPRICE](state,price){
		price = parseFloat(parseFloat(price).toFixed(2));
		state.allPrice = price;
	},
	
	[UPDATAALLCOUNT](state,count){
		state.allCount = count;
	}
}