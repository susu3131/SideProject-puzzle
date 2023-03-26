import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//axios
import axios from 'axios'
import vueaxios from 'vue-axios'

//vee-validate
import { defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n'
import zhtw from './zh_tw.json'

configure({
  generateMessage: localize('zhtw'),
  validateOnInput: true // 調整為：輸入文字時，就立即進行驗證
})


import './assets/main.css'
import './assets/tailwind.css'

const app = createApp(App)

app.use(vueaxios,axios)
app.use(createPinia())
app.use(router)


app.mount('#app')


