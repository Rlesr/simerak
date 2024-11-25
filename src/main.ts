import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'tailwindcss/tailwind.css';
import 'flatpickr/dist/flatpickr.css';


const app = createApp(App);
app.use(router);
app.mount('#app');
