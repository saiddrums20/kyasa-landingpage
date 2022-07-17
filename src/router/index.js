import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomePage from '../components/Home.vue'
import WorkinOnIt from '../components/WorkingOnIt.vue'

Vue.use(VueRouter)

const routes = [
  /*{
    path: '/',
    name: 'home',
    component: HomePage
  },*/
  {
    path: '/',
    name: 'working',
    component: WorkinOnIt
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
