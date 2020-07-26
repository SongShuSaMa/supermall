import axios from 'axios'
export function request(config){
	var instance = axios.create({
		baseURL: "http://152.136.185.210:8000/api/n3",
		timeout: 3000
	});
	
	// 响应拦截器
	instance.interceptors.response.use(config => {
		return config.data
	})
	
	return instance(config);
}
