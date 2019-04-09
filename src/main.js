import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import myDistrict from '../package/myDistrict'
import element from 'element-ui'
Vue.use(ele)
Vue.config.productionTip = false
Vue.use(myDistrict)
new Vue({
  render: h => h(App),
}).$mount('#app')
