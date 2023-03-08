import { createApp } from 'vue'
import App from './App.vue'

import i18n from '@/localization/localization';

import '@assets/styles/style.less';

const app = createApp(App);

app.use(i18n);

app.mount('#app');
