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

//Font Awesome
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faregular} from '@fortawesome/free-regular-svg-icons'
// import { fasolid } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(fasolid,faregular)


import './assets/main.css'
import './assets/tailwind.css'

const app = createApp(App)

app.use(vueaxios,axios)
app.use(createPinia())
app.use(router)

//Font Awesome
// app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
