import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router';
import Signup from './views/signup.vue';
import Home from './views/home/home.vue';

import './assets/style.css';

const routes = [
  {path:'/signup', name: 'SignUp', component: Signup},
  {path: '/', name: 'Home', component: Home}
]

const router = createRouter({
    history: createWebHistory(), routes,
})

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
