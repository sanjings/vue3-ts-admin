import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './assets/scss/index.scss';

/**
 * 捕获全局promise-reject
 */
window.addEventListener('unhandledrejection', e => {
  if (process.env.NODE_ENV === 'production') {
    e.preventDefault();
    console.error('-----------error-----------', e);
  }
});

const app = createApp(App);
app.use(router).mount('#app');
