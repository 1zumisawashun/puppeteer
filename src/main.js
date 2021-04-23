import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router.js'
import axios from 'axios'
// import store from '@/store'
import VueJsonToCsv from 'vue-json-to-csv' // eslint-disable-line



Vue.config.productionTip = false
Vue.use(VueJsonToCsv)
Vue.use({
  install (Vue) {
    Vue.prototype.$axios = axios.create({
      baseURL: 'http://localhost:3000/'
    })
  }
})

new Vue({
  vuetify,
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
