import "@fontsource/barlow-semi-condensed";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// aggiungere icone
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// caricare le icone
library.add(faEnvelope);


const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
