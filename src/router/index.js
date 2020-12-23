import Vue from 'vue'
import VueRouter from 'vue-router'
import JobsListing from '../views/JobsListing.vue'
import AddJob from '../views/AddJob.vue'
import JobDetail from '../views/JobDetail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'JobsListing',
    component: JobsListing
  },
  {
    path: '/add',
    name: 'AddJob',
    component: AddJob
  },
  {
    path: '/:i',
    name: 'JobDetail',
    component: JobDetail
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
