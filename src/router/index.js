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
          path: '/customize',
          name: '訂製拼圖',
          component: () => import('.././views/CustomizeView.vue'),
        },
        {
          path: '/products',
          name: '精選商品',
          component: () => import('.././views/ProductView.vue'),
        }
      ]
    },
    {
      path: '/admin',
      name: '後臺中心',
      component: () => import('.././views/AdminView.vue'),
      children: [{
        path: '/order',
        name: '訂單管理',
        component: () => import('.././views/OrderView.vue'),
      },
      {
        path: '/puzzle',
        name: '拼圖管理',
        component: () => import('.././views/PuzzleView.vue'),
      }
    ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404錯誤',
      component: () => import('.././views/NotFound.vue')
    }
  ]
})

export default router