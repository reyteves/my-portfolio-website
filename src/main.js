import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'
import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)
app.mount('#app')

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
})
