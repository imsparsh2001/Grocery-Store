window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; 
import PrimeVue from 'primevue/config';
import Slider from 'primevue/slider';
 
import 'primevue/resources/themes/saga-green/theme.css'; 
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import {store} from '../store/store';
 


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowRightArrowLeft, faBagShopping, faStar, faStarHalfAlt, faMoneyBill,faTrash, faLocationDot,faCreditCard} from '@fortawesome/free-solid-svg-icons'
import { faHeart, faCircleCheck } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add( faStar, faStarHalfAlt, faArrowRightArrowLeft, faBagShopping, faHeart, faCircleCheck, faMoneyBill,faTrash, faLocationDot,faCreditCard);

// Create the app instance and register the FontAwesomeIcon component globally
const app = createApp(App);
app.use(PrimeVue);
app.component('SliderComp', Slider);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(store);

// Mount the app to the element with the ID 'app'
app.mount('#app');
