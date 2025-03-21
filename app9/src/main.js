import './assets/style.css'
import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'

import CompOne from './components/tabs/CompOne.vue'
import CompTwo from './components/tabs/CompTwo.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('CompOne', CompOne)
    .component('CompTwo', CompTwo)

app.mount('#app')
