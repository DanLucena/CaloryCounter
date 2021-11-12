import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoFacebookF, BiTwitter, BiGoogle } from 'oh-vue-icons/icons'

Vue.config.productionTip = false

addIcons(CoFacebookF, BiTwitter, BiGoogle);

Vue.component("v-icon", OhVueIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
