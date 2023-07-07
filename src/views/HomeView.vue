<template>
  <div class="pt-3 bg-contain bg-puzzle md:pt-5">
    <div class="flex flex-col justify-between">
      <!-- header -->
      <header class="container pt-3">
        <div class="items-center xl:grid xl:grid-cols-12">
          <div class="hidden col-span-2 sm:block"></div>

          <!-- phone nav -->
          <div class="absolute -ml-4 collapse sm:hidden">
            <input type="checkbox" />
            <button class="text-5xl font-medium text-left collapse-title sm:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <div class="z-50 -ml-4 collapse-content">
              <ul class="w-screen bg-white border-t-2 border-b-2 menu border-primary to-base-100">
                <li class="border-b">
                  <div class="flex items-center justify-center text-white bg-primary active:bg-opacity-50">
                    <label for="login-modal" class="flex items-center justify-center w-full">
                      <i class="mr-2 fa-solid fa-circle-user"></i>
                      <p>Login</p>
                    </label>
                  </div>
                </li>
                <li class="border-b">
                  <div class="flex justify-center">
                    <i class="p-2 fa-solid fa-magnifying-glass"></i>
                    <label for="search" class="w-full mr-2">
                      <input type="search" name="search" id="" placeholder="搜尋喜愛的拼圖 ..." value="" class="w-full p-2 text-sm text-gray-400 border rounded-md focus:border-primary focus:border-2 focus-visible:outline-none" />
                    </label>
                  </div>
                </li>

                <li class="border-b">
                  <RouterLink to="/index">
                    <div class="flex items-center justify-center w-full pr-4">
                      <i class="mr-5 fa-solid fa-house"></i>
                      <p>首頁</p>
                    </div>
                  </RouterLink>
                </li>
                <li class="border-b">
                  <RouterLink to="/allpuzzle">
                    <div class="flex items-center justify-center w-full pr-4">
                      <i class="mr-5 fa-solid fa-puzzle-piece"></i>
                      <p>精選商品</p>
                    </div>
                  </RouterLink>
                </li>
                <li class="border-b">
                  <RouterLink to="/customize">
                    <div class="flex items-center justify-center w-full pr-4">
                      <i class="mr-5 fa-solid fa-pen-to-square"></i>
                      <p>訂製拼圖</p>
                    </div>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/customize">
                    <div class="flex items-center justify-center w-full pr-4">
                      <i class="mr-5 fa-solid fa-pen-to-square"></i>
                      <p>我的收藏</p>
                    </div>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>

          <!-- tittle & pc nav -->
          <div class="lg:col-span-7">
            <!-- tittle -->
            <div class="flex items-center justify-center sm:justify-center">
              <img src=".././assets/image/logo.png" alt="logo" class="w-20 md:w-24" />
              <p class="text-[28px] md:text-4xl font-extrabold text-primary">拼圖趣 Puzzle</p>
            </div>
            <!-- pc nav -->
            <nav class="justify-center hidden mt-1 text-lg font-bold text-center sm:flex">
              <RouterLink to="/index"  exact-active-class=" hover-button-active ">
                <div class="items-center pl-8 pr-8 border-r border-black lg:flex hover:text-primary hover-button">
                  <i class="fa-solid fa-house lg:mr-4"></i>
                  <p>首頁</p>
                </div>
              </RouterLink>
              <RouterLink to="/allpuzzle"  exact-active-class=" hover-button-active ">
                <div class="items-center pl-8 pr-8 border-r border-black lg:flex hover-button">
                  <i class="fa-solid fa-puzzle-piece lg:mr-4"></i>
                  <p>精選商品</p>
                </div>
              </RouterLink>
              <RouterLink to="/customize" exact-active-class=" hover-button-active ">
                <div class="items-center pl-8 pr-8 border-r border-black lg:flex hover-button">
                  <i class="fa-solid fa-pen-to-square lg:mr-4"></i>
                  <p>訂製拼圖</p>
                </div>
              </RouterLink>
              <RouterLink to="/customize" exact-active-class=" hover-button-active " >
                <div class="items-center pl-8 pr-8 lg:flex hover-button">
                  <i class="fa-solid fa-pen-to-square lg:mr-4"></i>
                  <p>我的收藏</p>
                </div>
              </RouterLink>
            </nav>
          </div>

          <div class="items-center justify-center hidden py-6 text-lg sm:flex md:col-span-3 xl:justify-end lg:pb-0">
            <i class="p-2 mr-3 fa-solid fa-magnifying-glass hover:bg-primary hover:rounded-full hover:text-white" @click="showSearch = true"></i>
            <label for="search" class="w-full mr-2 md:w-1/2" v-if="showSearch">
              <input type="search" name="search" id="" value="搜尋拼圖 ..." class="w-full p-2 text-sm text-gray-400 border rounded-md focus:border-primary focus:border-2 focus-visible:outline-none" />
            </label>

            <label for="cart-modal">
              <i class="p-2 mr-3 fa-solid fa-cart-shopping hover:bg-primary hover:rounded-full hover:text-white"></i>
            </label>

            <label for="login-modal" class="flex items-center btn btn-outline btn-sm btn-error">
              <i class="mr-2 fa-solid fa-circle-user"></i>
              <p>Login</p>
            </label>
          </div>
        </div>
      </header>

      <div class="relative">
        <!-- phone cart & login  -->
        <div class="fixed z-50 bottom-40 right-5 sm:hidden">
          <label for="cart-modal" class="mt-3">
            <i class="px-3 py-2 text-lg bg-white border rounded-full fa-solid fa-cart-shopping hover:text-primary"></i>
          </label>
        </div>
        <RouterView />
      </div>

      <!-- footer -->
      <footer class="py-4 text-center text-white bg-primary md:py-8">
        <div class="container mx-auto">
          
          <div class="items-center justify-between mb-3 lg:flex sm:mb-1 lg:mb-0">
            <div class="flex items-center justify-between sm:mb-3">
              <img src=".././assets/image/logo-white.svg" alt="logo-white" class=" w-52 sm:-ml-3 md:ml-0" />
              <div class="text-xl sm:text-2xl md:ml-8 ">
                <i class="mr-3 fa-brands fa-facebook md:mr-4"></i>
                <i class="mr-3 fa-brands fa-facebook-messenger md:mr-4"></i>
                <i class="mr-3 fa-solid fa-envelope md:mr-4"></i>
              </div>
            </div>
            <hr class="mb-3 opacity-50 lg:hidden">
            <div class="items-center hidden sm:flex">
              <p class="text-lg font-bold ">Contact</p>
              <div class="ml-8 text-left">
                <p>電話 : 02-22120352</p>
                <p>地址 : 新北市新店區北新路二段304-1號</p>
              </div>
            </div>
          </div>
          <hr class="hidden mb-3 opacity-50 lg:block">
          <p class="text-xs font-normal text-left md:text-sm lg:text-base ">此網站僅做 Side Project 作品使用，無營利用途 / Copyright © 2023 SuPuzzle. All rights reserved.</p>
        </div>
      </footer>
    </div>

    <!-- 登入modal -->
    <ModalItem></ModalItem>
    <!-- cart modal -->
    <CartItem></CartItem>
    <ToastItem :toast="toast" ></ToastItem>
  </div>
</template>

<script>
import ModalItem from '.././components/ModalItem.vue'
import CartItem from '.././components/CartlItem.vue'
import ToastItem from '../components/ToastItem.vue'

export default {
  data() {
    return {
      showSearch: false,
      showNav: false,
      toast: {
        viewIsHidden: false,
        toastText: '',
        toastType: false
      }
    }
  },
  methods: {
    closeSearch() {
      if (window.innerWidth <= 1024) {
        this.showSearch = true
      } else {
        this.showSearch = false
      }
    }
  },
  components: {
    ModalItem,
    CartItem,
    ToastItem,
  },
  mounted() {
    this.closeSearch();
  }
}
</script>

<style lang="scss" scoped>
.hover-button-active {
  position: relative;
  &::before {
    content: '';
    @apply bg-primary absolute -bottom-2 h-[2px] w-4/5 left-4  ;
    transform: scale(1);
  }
}


// hover 偽元素
.hover-button {
  position: relative;
  &::before {
    content: '';
    @apply bg-primary absolute -bottom-2 h-[2px] w-3/5 mx-auto;
    transform: scale(0);
  }
  &:hover:before {
    transition-duration: 0.3s;
    transform: scale(1);
  }
  &:hover {
    @apply text-primary;
  }
}

@media screen and (min-width: 640px) and (max-width: 1024px) {
  .hover-button {
    position: relative;
    &::before {
      content: '';
      @apply bg-primary absolute -bottom-2 h-[2px] left-5 mx-auto;
      transform: scale(0);
    }
  }
}
// .menu :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):active) {
//   --tw-bg-opacity: 0;
//   background-color: white; /* 更改此處的顏色 */
//   --tw-text-opacity: 0;

// }
</style>
