import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import store from './store' // store
import plugins from './plugins' // plugins
import './permission' // permission
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(plugins)
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
  ...App
})

app.$mount()
