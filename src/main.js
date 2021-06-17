import Vue from 'vue'
import App from './App.vue'
import './assets/css/theme/index.css'
import ElementUI from 'element-ui';
import './assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/common.js'
// import './assets/css/common.css'

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
Vue.config.productionTip = false
