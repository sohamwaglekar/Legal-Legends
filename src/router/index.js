import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/homepage',
    name: 'home',
     component: () => import('../views/Homepage/HomeMain.vue')
  },
    {
    path: '/authentication',
    name: 'authentication',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Authorization/AuthorizePage.vue')
  },
  {
    path: '/about-us',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Aboutus/About-Us.vue')
  },
   {
    path: '/contact-us',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/contactUs/ContactUs.vue')
  },
    {
    path: '/Legal-services',
    name: 'services',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/services/ServicesLayout.vue')
  },
  {
    path: '/services',
    name: 'websiteservices',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/WebsiteServices/WebsiteService.vue')
  },
     {
    path: '/myorder',
    name: 'order',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/MyOrder/MyOrder.vue')
  },
    
    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
