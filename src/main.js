import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from 'store'
import VueLazyLoad from 'vue-lazyload'
import Toast from 'components/common/toast/index'
import 'assets/fonts/iconfont.css'

Vue.config.productionTip = false
Vue.prototype.bus = new Vue();
Vue.use(Toast);
Vue.use(VueLazyLoad,{
	error: require('./assets/img/vuelazyload/loading.jpg'),
	loading: require('./assets/img/vuelazyload/loading.jpg'),
	
});


new Vue({
  router,
	store,
  render: h => h(App)
}).$mount('#app')
