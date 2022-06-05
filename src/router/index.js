import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn'

Vue.use(VueRouter)

const routes = [
  {path: '/',name: 'home',component: HomeView},
  {path: '/about',name: 'about',component:AboutView},
  {path: "/signup",name: "SignUp",component:SignUp},
  {path: "/SignIn",name: "SignIn",component:SignIn}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
