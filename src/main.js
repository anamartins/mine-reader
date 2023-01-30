import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Signup from './views/Signup.vue'
import Signin from './views/Signin.vue'
import Home from './views/home/Home.vue'
import FollowFeed from './views/FollowFeed.vue'
import Profile from './views/Profile.vue'
import Addtag from './views/AddTag.vue'

import './assets/style.css'

const routes = [
  { path: '/', name: 'signIn', component: Signin },
  { path: '/signup', name: 'signUp', component: Signup },
  { path: '/home', name: 'home', component: Home },
  { path: '/me', name: 'profile', component: Profile },
  { path: '/feed/:feed', name: 'feed', component: Home },
  { path: '/feed/add', name: 'addFeed', component: FollowFeed },
  { path: '/tag/add', name: 'addTag', component: Addtag },
  { path: '/tag/:tag', name: 'tag', component: Home },
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
