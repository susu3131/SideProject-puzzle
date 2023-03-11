import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'Home',
      component: () => import('.././views/HomeView.vue'),
      children: [{
          path: '/index',
          name: '首頁',
          component: () => import('.././views/IndexView.vue'),
        },
        {
          path: '/order',
          name: '訂製拼圖',
          component: () => import('.././views/OrderView.vue'),
        },
        {
          path: '/products',
          name: '精選商品',
          component: () => import('.././views/ProductView.vue'),
        }
      ]

    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/:pathMatch(.*)*',
      name: '404錯誤',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router