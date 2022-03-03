import { createApp } from 'vue';
import 'bootstrap/dist/js/bootstrap.bundle';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.use(VueLoading);
app.mount('#app');
