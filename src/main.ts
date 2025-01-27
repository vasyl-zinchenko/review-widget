import { createApp } from 'vue';
import { router } from './router/';
import { createPinia } from 'pinia';
import locales from './locales';
import '@/styles/main.scss';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(router).use(locales)

app.mount('#app');
