import {request} from './request.js'

export function getDetailData(iid){
	return request({
		url: "/detail",
		params: {
			iid
		}
	});
}

export function getReCommend(){
	return request({
		url: "/recommend",
	});
}