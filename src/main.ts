import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { MotionPlugin } from '@vueuse/motion'
import jQuery from 'jquery'
import 'jquery.ripples'

window.$ = jQuery

import 'animate.css'
import './assets/main.css'

const app = createApp(App)

app.use(MotionPlugin)
app.use(router)
app.use(store)

app.mount('#app')
