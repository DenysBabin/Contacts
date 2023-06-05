import Vue from 'vue'
import VueRouter from 'vue-router'

// pages
import DashboardPage from '../views/admin/DashboardPage.vue';
import MusicPage from '../views/admin/MusicPage.vue';
import LoginPage from '../views/admin/LoginPage.vue';
import CategoriesListPage from '../views/admin/CategoriesListPage.vue';
import ContactsListPage from '../views/admin/ContactsListPage.vue';
import Documentation from '../views/admin/Documentation.vue';


// svg
import MainPageIcon from '../assets/svg/main-page-icon.svg'

Vue.use(VueRouter)

const routes = [
  {
    path: '/documentation',
    component: Documentation,
    name: '/documentation',
    meta: {
      title: 'Documentation',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/login',
    component: LoginPage,
    name: '/login',
    meta: {
      title: 'Login',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/',
    component: ContactsListPage,
    name: '/',
    meta: {
      title: 'List of Contacts',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },

  {
    path: '/categories',
    component: CategoriesListPage,
    name: '/categories',
    meta: {
      title: 'Categories of Contacts',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/dashboard',
    component: DashboardPage,
    name: '/dashboard',
    meta: {
      title: 'Dashboard',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/music',
    component: MusicPage,
    name: '/music',
    meta: {
      title: 'Music Page',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
 
 
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
