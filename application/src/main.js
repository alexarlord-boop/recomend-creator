import { createApp } from 'vue'
// import App from './App.vue'
// import './registerServiceWorker'
// import router from './router'
// import store from './store'

// createApp(App).use(store).use(router).mount('#app')

import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import VeeValidate from 'vee-validate'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt)

const app = createApp(App)
app.config.productionTip = false
// app.use(VeeValidate)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store).use(router)
app.mount('#app')
