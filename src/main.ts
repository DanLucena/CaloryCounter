import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoFacebookF, BiTwitter, BiGoogle } from 'oh-vue-icons/icons'
import i18n from './i18n'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast);

Vue.config.productionTip = false

addIcons(CoFacebookF, BiTwitter, BiGoogle);

Vue.component("v-icon", OhVueIcon);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
