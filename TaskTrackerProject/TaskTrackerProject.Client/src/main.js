import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft, faArrowRight, faBars, faBatteryQuarter, faCalendar, faCheck, faClock, faList, faListCheck, faPlus, faRepeat, faRightFromBracket, faTriangleExclamation,} from '@fortawesome/free-solid-svg-icons'
library.add(faList, faPlus, faBars, faArrowRight, faArrowLeft, faCheck, faRightFromBracket, faMicrosoft, faListCheck, faCalendar, faClock, 
            faRepeat, faBatteryQuarter, faTriangleExclamation)
import axios from "axios";
import process from 'node:process'
import router from './router'
import store from './store.js'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/main.css'
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons'

axios.defaults.baseURL = process.env.NODE_ENV == 'production' ? "/api" : "https://localhost:5001/api";

const app = createApp(App)
app.use(router)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')



