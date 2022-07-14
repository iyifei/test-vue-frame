import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入vue-router-tab组件和样式
import RouterTab from 'vue-router-tab'
import 'vue-router-tab/dist/lib/vue-router-tab.css'
//应用element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//vxe-table
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

Vue.use(VXETable)
Vue.use(RouterTab)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
