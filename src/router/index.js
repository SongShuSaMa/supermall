import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
		{
			path: "*",
			redirect: "/Home"
		},
		{
			path: "/Home",
			component: () => import('views/Home/HomeMain.vue'),
			meta: {
				title: "首页"
			}
		},
		{
			path: "/Category",
			component: () => import('views/Category/CategoryMain'),
			meta: {
				title: "分类"
			}
		},
		{
			path: "/ShoppingCart",
			component: () => import('views/ShoppingCart/ShoppingCartMain'),
			meta: {
				title: "购物车"
			}
		},
		{
			path: "/My",
			component: () => import('views/My/MyMain'),
			meta: {
				title: "我的"
			}
		}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 当页面路由请求的时候会调用
router.beforeEach((to,from,next) => {
	// 将title设置为路由中的title
	document.title = to.matched[0].meta.title;
	// next相当于放行,就是让页面成功跳转
	next();
})

export default router
