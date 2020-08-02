import { ADDGOODSITEM,ADDGOODSCOUNT } from './mutations_type.js'
export default {
	addGoods(store,goods){
		let goodsitem = store.state.goodsList.find(v => v.iid === goods.iid);
		if(goodsitem){
			store.commit(ADDGOODSCOUNT, goodsitem);
			return "购物车物品 +1"
		}else {
			store.commit(ADDGOODSITEM,goods);
			return "物品已加进购物车"
		}
	}
}