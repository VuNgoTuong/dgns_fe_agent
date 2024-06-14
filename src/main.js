import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import './scss/styles.scss'
import PortalVue from 'portal-vue'
import * as bootstrap from 'bootstrap'
import Permissions from '@Helpers/permissions.js'

window.bootstrap = bootstrap;

const pinia = createPinia();
const app = createApp(App)
app.use(Permissions)
app.use(pinia)
app.use(PortalVue)
app.use(router)
app.mount('#app')
