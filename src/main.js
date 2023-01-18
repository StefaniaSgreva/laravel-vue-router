import { createApp } from 'vue'
import { router } from './router';
import App from './App.vue'

import './assets/styles/main.scss'

//modo alternativo per scrivere la riga sotto, si equivalgono 
// const app = createApp(App);
// app.use(router);
// app.mounth('#app');

createApp(App).use(router).mount('#app')
