<template>
  <div class="bg-puzzle bg-contain">
    <div class="flex flex-col justify-between">
      <!-- header -->
      <header class="container pt-3">
        <div class="grid grid-cols-12 items-center">
          <div class="col-span-2"></div>
          <!-- tittle & nav -->
          <div class="col-span-7">
            <!-- tittle -->
            <div class="flex items-center justify-center">
              <img src=".././assets/image/logo.png" alt="logo" class="w-20 md:w-24" />
              <p class="text-3xl md:text-4xl font-extrabold text-primary">拼圖趣 Puzzle</p>
            </div>
            <!-- nav -->
            <nav class="font-bold text-center text-lg flex justify-center mt-1">
              <RouterLink to="/index">
                <div class="border-r border-black flex items-center pr-8 pl-8 hover:text-primary hover-button">
                  <i class="fa-solid fa-house mr-4"></i>
                  <p>首頁</p>
                </div>
              </RouterLink>
              <RouterLink to="/products">
                <div class="border-r border-black flex items-center pr-8 pl-8 hover-button">
                  <i class="fa-solid fa-puzzle-piece mr-4"></i>
                  <p>精選商品</p>
                </div>
              </RouterLink>
              <RouterLink to="/customize">
                <div class="border-r border-black flex items-center pr-8 pl-8 hover-button">
                  <i class="fa-solid fa-pen-to-square mr-4"></i>
                  <p>訂製拼圖</p>
                </div>
              </RouterLink>
              <!-- test -->
              <RouterLink to="/customize">
                <div class="flex items-center pr-8 pl-8 hover-button">
                  <i class="fa-solid fa-pen-to-square mr-4"></i>
                  <p>我的收藏</p>
                </div>
              </RouterLink>
            </nav>
          </div>

          <div class="flex items-center col-span-3 justify-end text-lg pt-6">
            <label for="search" class="mr-2">
              <input type="search" name="search" id="" value="搜尋喜愛的拼圖 ..." class="p-2 rounded-md border text-sm text-gray-400 focus:border-primary focus:border-2 focus-visible:outline-none" />
            </label>
            <i class="fa-solid fa-magnifying-glass mr-3 p-2 hover:bg-primary hover:rounded-full hover:text-white" @click="opensearch"></i>

            <i class="fa-solid fa-cart-shopping mr-3 p-2 hover:bg-primary hover:rounded-full hover:text-white"></i>
            <label for="my-modal" class="flex items-center btn btn-outline btn-sm btn-error">
              <i class="fa-solid fa-circle-user mr-2"></i>
              <p>Login</p>
            </label>
          </div>
        </div>
      </header>

      <div class="">
        <RouterView />
      </div>

      <!-- footer -->
      <footer class="text-center bg-primary text-white py-8">
        <div class="container mx-auto">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <img src=".././assets/image/logo-white.svg" alt="logo-white" />
              <div class="text-2xl ml-8">
                <i class="fa-brands fa-facebook mr-4"></i>
                <i class="fa-brands fa-facebook-messenger mr-4"></i>
                <i class="fa-solid fa-envelope mr-4"></i>
              </div>
            </div>
            <div class="flex items-center">
              <p class="font-bold text-lg">Contact</p>
              <div class="text-left ml-8">
                <p>電話 : 02-22120352</p>
                <p>地址 : 新北市新店區北新路二段304-1號</p>
              </div>
            </div>
          </div>
          <p class="font-normal">此網站僅做 Side Project 作品使用，無營利用途 / Copyright © 2023 SuPuzzle. All rights reserved.</p>
        </div>
      </footer>
    </div>
    <!-- 登入modal -->
    <ModalItem />
  </div>
</template>

<script>
import ModalItem from '.././components/ModalItem.vue'

export default {
  data() {
    return {}
  },
  methods: {
    opensearch() {
      console.log('test')
    }
  },
  components: {
    ModalItem
  },

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
</style>
