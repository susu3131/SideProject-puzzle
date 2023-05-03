<template>
  <div class="bg-puzzle bg-contain md:pt-5 pt-3">
    <div class="flex flex-col justify-between">
      <!-- header -->
      <header class="container pt-3">
        <div class="xl:grid xl:grid-cols-12 items-center">
          <div class="hidden sm:block col-span-2"></div>

          <!-- phone nav -->
          <div class="collapse absolute sm:hidden -ml-4">
            <input type="checkbox" />
            <button class="collapse-title text-5xl font-medium sm:hidden text-left">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <div class="collapse-content z-50 -ml-4">
              <ul class="menu bg-white border-t-2 border-b-2 border-primary w-screen to-base-100">
                <li class="border-b">
                  <div class="flex justify-center items-center text-white bg-primary active:bg-opacity-50">
                    <label for="login-modal" class="flex items-center justify-center w-full">
                      <i class="fa-solid fa-circle-user mr-2"></i>
                      <p>Login</p>
                    </label>
                  </div>
                </li>
                <li class="border-b">
                  <div class="flex justify-center">
                    <i class="fa-solid fa-magnifying-glass p-2"></i>
                    <label for="search" class="mr-2 w-full">
                      <input type="search" name="search" id="" placeholder="搜尋喜愛的拼圖 ..." value="" class="p-2 rounded-md border text-sm text-gray-400 focus:border-primary focus:border-2 focus-visible:outline-none w-full" />
                    </label>
                  </div>
                </li>

                <li class="border-b">
                  <RouterLink to="/index">
                    <div class="flex justify-center pr-4 items-center w-full">
                      <i class="fa-solid fa-house mr-5"></i>
                      <p>首頁</p>
                    </div>
                  </RouterLink>
                </li>
                <li class="border-b">
                  <RouterLink to="/products">
                    <div class="flex justify-center pr-4 items-center w-full">
                      <i class="fa-solid fa-puzzle-piece mr-5"></i>
                      <p>精選商品</p>
                    </div>
                  </RouterLink>
                </li>
                <li class="border-b">
                  <RouterLink to="/customize">
                    <div class="flex justify-center pr-4 items-center w-full">
                      <i class="fa-solid fa-pen-to-square mr-5"></i>
                      <p>訂製拼圖</p>
                    </div>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/customize">
                    <div class="flex justify-center pr-4 items-center w-full">
                      <i class="fa-solid fa-pen-to-square mr-5"></i>
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
            <div class="flex items-center sm:justify-center justify-center">
              <img src=".././assets/image/logo.png" alt="logo" class="w-20 md:w-24" />
              <p class="text-[28px] md:text-4xl font-extrabold text-primary">拼圖趣 Puzzle</p>
            </div>
            <!-- pc nav -->
            <nav class="font-bold text-center text-lg sm:flex justify-center mt-1 hidden">
              <RouterLink to="/index">
                <div class="border-r border-black lg:flex items-center pr-8 pl-8 hover:text-primary hover-button">
                  <i class="fa-solid fa-house lg:mr-4"></i>
                  <p>首頁</p>
                </div>
              </RouterLink>
              <RouterLink to="/products">
                <div class="border-r border-black lg:flex items-center pr-8 pl-8 hover-button">
                  <i class="fa-solid fa-puzzle-piece lg:mr-4"></i>
                  <p>精選商品</p>
                </div>
              </RouterLink>
              <RouterLink to="/customize">
                <div class="border-r border-black lg:flex items-center pr-8 pl-8 hover-button">
                  <i class="fa-solid fa-pen-to-square lg:mr-4"></i>
                  <p>訂製拼圖</p>
                </div>
              </RouterLink>
              <RouterLink to="/customize">
                <div class="lg:flex items-center pr-8 pl-8 hover-button">
                  <i class="fa-solid fa-pen-to-square lg:mr-4"></i>
                  <p>我的收藏</p>
                </div>
              </RouterLink>
            </nav>
          </div>

          <div class="sm:flex items-center md:col-span-3 xl:justify-end justify-center text-lg py-6 lg:pb-0 hidden">
            <i class="fa-solid fa-magnifying-glass mr-3 p-2 hover:bg-primary hover:rounded-full hover:text-white" @click="showSearch = true"></i>
            <label for="search" class="mr-2 w-full md:w-1/2" v-if="showSearch">
              <input type="search" name="search" id="" value="搜尋拼圖 ..." class="p-2 w-full rounded-md border text-sm text-gray-400 focus:border-primary focus:border-2 focus-visible:outline-none" />
            </label>

            <label for="cart-modal">
              <i class="fa-solid fa-cart-shopping mr-3 p-2 hover:bg-primary hover:rounded-full hover:text-white"></i>
            </label>

            <label for="login-modal" class="flex items-center btn btn-outline btn-sm btn-error">
              <i class="fa-solid fa-circle-user mr-2"></i>
              <p>Login</p>
            </label>
          </div>
        </div>
      </header>

      <div class="relative">
        <!-- phone cart & login  -->
        <div class=" bottom-40 right-5 fixed z-50 sm:hidden">
          <label for="cart-modal" class="mt-3">
            <i class="fa-solid fa-cart-shopping text-lg py-2 px-3 border bg-white rounded-full hover:text-primary"></i>
          </label>
        </div>
        <RouterView />
      </div>

      <!-- footer -->
      <footer class="text-center bg-primary text-white md:py-8 py-4">
        <div class="container mx-auto">
          
          <div class="lg:flex items-center justify-between mb-3 sm:mb-1  lg:mb-0">
            <div class="flex items-center justify-between sm:mb-3">
              <img src=".././assets/image/logo-white.svg" alt="logo-white" class="  w-52 sm:-ml-3 md:ml-0" />
              <div class="sm:text-2xl md:ml-8 text-xl ">
                <i class="fa-brands fa-facebook md:mr-4 mr-3"></i>
                <i class="fa-brands fa-facebook-messenger md:mr-4  mr-3"></i>
                <i class="fa-solid fa-envelope md:mr-4  mr-3"></i>
              </div>
            </div>
            <hr class="  opacity-50 mb-3 lg:hidden">
            <div class="sm:flex items-center  hidden">
              <p class="font-bold text-lg ">Contact</p>
              <div class="text-left ml-8">
                <p>電話 : 02-22120352</p>
                <p>地址 : 新北市新店區北新路二段304-1號</p>
              </div>
            </div>
          </div>
          <hr class="  opacity-50 mb-3 hidden lg:block">
          <p class="font-normal  text-xs md:text-sm  lg:text-base text-left ">此網站僅做 Side Project 作品使用，無營利用途 / Copyright © 2023 SuPuzzle. All rights reserved.</p>
        </div>
      </footer>
    </div>

    <!-- 登入modal -->
    <ModalItem></ModalItem>
    <!-- cart modal -->
    <CartItem></CartItem>
  </div>
</template>

<script>
import ModalItem from '.././components/ModalItem.vue'
import CartItem from '.././components/CartlItem.vue'


export default {
  data() {
    return {
      showSearch: false,
      showNav: false,
      
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
    CartItem
  },
  mounted() {
    this.closeSearch();
  }
}
</script>

<style lang="scss" scoped>
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
