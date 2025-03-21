import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddView from '@/views/AddView.vue'
import DetailView from '@/views/DetailView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //if user opens / -> Home.vue file
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView,
    },
    {
      path: '/add',
      name: 'add',
      component: AddView,
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: ContactUsView,
    },
    {
      //if user opens /about -> About.vue file
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path:'/:pathMatch(.*)*',
      name:'not-found',
      component:NotFoundView
    }
  ],
})

export default router
