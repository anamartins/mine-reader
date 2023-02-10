import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Signup from './views/Signup.vue'
import Signin from './views/Signin.vue'
import ConfirmEmail from './views/ConfirmEmail.vue'
import Home from './views/home/Home.vue'
import FollowFeed from './views/FollowFeed.vue'
import ManageFeed from './views/ManageFeeds.vue'
import Profile from './views/Profile.vue'
// import AddTag from './views/AddTag.vue'
import ManageTag from './views/ManageTag.vue'

import './assets/style.css'

const routes = [
  { path: '/signin', name: 'signIn', component: Signin },
  { path: '/signup', name: 'signUp', component: Signup },
  {
    path: '/confirm-email',
    name: 'confirmEmail',
    component: ConfirmEmail
  },
  { path: '/', name: 'home', component: Home },
  { path: '/me', name: 'profile', component: Profile },
  { path: '/feed/:feed', name: 'feed', component: Home },
  { path: '/feed/add', name: 'addFeed', component: FollowFeed },
  { path: '/feed/manage', name: 'manageFeed', component: ManageFeed },
  // { path: '/tag/add', name: 'addTag', component: AddTag },
  { path: '/tag/manage', name: 'manageTag', component: ManageTag },
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
