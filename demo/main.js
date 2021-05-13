import { createApp } from 'vue';
import App from './App.vue';
import VueToggles from '../src/VueToggles';

const app = createApp(App);

app.component('VueToggles', VueToggles);
app.mount('#app');
