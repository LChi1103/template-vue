import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import filter from './utils/filter.js' // 注册过滤器
import './utils/utils.js' // 一些全局的操作（可能会污染全局环境）
import services from './services/index.js' // services 发起ajax的实例

for (const transform in filter) { // 注册过滤器
  Vue.filter(transform, filter[transform])
}
Vue.prototype.$axios = services // services 发起ajax的实例
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
