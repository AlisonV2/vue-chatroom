import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap';
import './assets/styles/main.scss';
import { auth } from './firebase/config'

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount('#app')
  }
});