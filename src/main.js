import Vue from 'vue'
import App from './App.vue'
import router from './router'
// element-ui完整导入
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// element-ui按需引入
import './plugins/element'
import 'element-ui/lib/theme-chalk/index.css'

// 全局样式
import './assets/css/global.css'

// 图标库
import './assets/fonts/iconfont.css'

// 导入axios
import axios from 'axios'
// 配置请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 对request进行预处理
axios.interceptors.request.use(config => {
  // 为请求头对象添加Token验证的Authorization
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
