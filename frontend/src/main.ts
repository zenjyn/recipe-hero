import { createApp } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMinusCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';
import store from './store';

library.add(faMinusCircle);
library.add(faPlus);

const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.use(store).use(router).mount('#app');
