import axios from 'axios'
export function request(config){
	var instance = axios.create({
		baseURL: "http://123.207.32.32:8000",
		timeout: 3000
	});
	
	// 响应拦截器
	instance.interceptors.response.use(config => {
		return config.data
	})
	
	return instance(config);
}
