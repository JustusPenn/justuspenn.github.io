import { createApp } from 'vue'
import App from './App.vue'

import router from './router/router'
import library from './helpers/icons'

import "bootstrap/scss/bootstrap.scss";
import "./assets/scss/style.scss";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';



createApp(App)
.use(router)
.use(library)
.component('fa-icon', FontAwesomeIcon)
.mount('#app')
