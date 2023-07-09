import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(
    import.meta.env.BASE_URL),
  routes: [{
      // 首頁Header、footer、nav
      path: '/',
      name: 'Home',
      component: () => import('.././views/HomeView.vue'),
      children: [{
          // 首頁畫面
          path: '/index',
          name: '首頁',
          component: () => import('.././views/IndexView.vue'),
        },
        {
          //訂製拼圖
          path: '/customize',
          name: '訂製拼圖',
          component: () => import('.././views/CustomizeView.vue'),
        },
        {
          //收藏拼圖
          path: '/collection',
          name: '收藏拼圖',
          component: () => import('.././views/CollectionView.vue'),
        },
        // 產品頁面
        {
          path: '/products',
          name: '精選商品',
          component: () => import('.././views/ProductView.vue'),
          children: [{
              path: '/allpuzzle',
              name: '全部拼圖',
              component: () => import('../views/product/AllPuzzle.vue'),
            },
            {
              path: '/newpuzzle',
              name: '新品上市',
              component: () => import('../views/product/NewPuzzle.vue'),
            },
            {
              path: '/salepuzzle',
              name: '促銷拼圖',
              component: () => import('../views/product/SalePuzzle.vue'),
            },
            {
              path: '/puzzlepiece',
              name: '拼圖片術',
              component: () => import('../views/product/PuzzlePiece.vue'),
            },
            {
              path: '/onlypuzzle',
              name: '獨家/限量拼圖',
              component: () => import('../views/product/OnlyPuzzle.vue'),
            },
          ]
        }
      ]
    },
    {
      path: '/admin',
      name: '後臺中心',
      component: () => import('../views/admin/AdminView.vue'),
      children: [{
          path: '/order',
          name: '訂單管理',
          component: () => import('../views/admin/OrderView.vue'),
        },
        {
          path: '/PuzzleProduct',
          name: '拼圖管理',
          component: () => import('../views/admin/ProductView.vue'),
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