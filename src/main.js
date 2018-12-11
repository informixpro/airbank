import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-googlemaps/dist/vue-googlemaps.css'
import VueGoogleMaps from 'vue-googlemaps'
import SvgIcon from 'vue-svgicon'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(VueGoogleMaps, {
  load: {
    apiKey: 'AIzaSyA1JRqePTMBFu7zv9aoXW4TgHlWgGfJ5kc'
  }
})

Vue.use(SvgIcon, {
  tagName: 'icon',
  isStroke: false
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
