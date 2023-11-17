
import { createApp } from 'vue'
import App from './App.vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import router from './routing/index'
import './main.css'

createApp(App).use(router).component('font-awesome-icon',FontAwesomeIcon).mount('#app')
