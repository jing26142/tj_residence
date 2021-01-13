import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Accomodations from '../views/Accomodations.vue'
import Contact from '../views/Contact.vue'
import Facilities from '../views/Facilities.vue'
import Gallery from '../views/Gallery.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/accomodations',
    name: 'Accomodations',
    component: Accomodations,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/facilities',
    name: 'Facilities',
    component: Facilities,
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    component: Gallery,
  },
  // redirect
  {
    path: '/all-galleries',
    redirect: '/jobs'
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  hash: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router