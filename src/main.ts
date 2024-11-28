import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'tailwindcss/tailwind.css';
import 'flatpickr/dist/flatpickr.css';
import Layout from './components/layout/Layout.vue';

const app = createApp(App);
app.component('Layout', Layout);
app.use(router);
app.mount('#app');
