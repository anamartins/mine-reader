import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Signup from './views/signup.vue'
import Signin from './views/signin.vue'
import Home from './views/home/home.vue'
import Followfeed from './views/followFeed.vue'
import Profile from './views/profile.vue'
import Addtag from './views/addTag.vue'

import './assets/style.css'

const routes = [
  { path: '/', name: 'signIn', component: Signin },
  { path: '/signup', name: 'signUp', component: Signup },
  { path: '/home', name: 'home', component: Home },
  { path: '/me', name: 'profile', component: Profile },
  { path: '/feed/:feed', name: 'feed', component: Home },
  { path: '/feed/add', name: 'addFeed', component: Followfeed },
  { path: '/tag/add', name: 'addTag', component: Addtag },
  { path: '/read-later', name: 'readLater', component: Home }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
