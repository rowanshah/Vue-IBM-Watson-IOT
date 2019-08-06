/* eslint-disable */
import Vue from 'vue'
import Ionic from '@ionic/vue';
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLaughBeam } from '@fortawesome/free-solid-svg-icons'
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons'
import { faMehBlank } from '@fortawesome/free-solid-svg-icons'
import { faChild } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

library.add(faChild)
library.add(faLaughBeam)
library.add(faSmileBeam)
library.add(faMehBlank)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Ionic);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


  
 
