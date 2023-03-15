<template>
  <div class="bg-puzzle bg-contain">
    <div class="flex flex-col justify-between">
      <!-- header -->
      <header>
        <div class="flex items-center justify-center">
          <img src=".././assets/image/logo.png" alt="logo" width="100" />
          <p class="text-4xl font-extrabold text-primary">拼圖趣 Puzzle</p>
        </div>
        <nav class="font-bold text-center text-lg flex justify-center mt-1">
          <RouterLink to="/index">
            <div class="border-r border-black flex items-center pr-8 pl-8">
              <i class="fa-solid fa-house mr-4"></i>
              <p>首頁</p>
            </div>
          </RouterLink>
          <RouterLink to="/products">
            <div class="border-r border-black flex items-center pr-8 pl-8">
              <i class="fa-solid fa-puzzle-piece mr-4"></i>
              <p>精選商品</p>
            </div>
          </RouterLink>
          <RouterLink to="/customize">
            <div class="border-r border-black flex items-center pr-8 pl-8">
              <i class="fa-solid fa-pen-to-square mr-4"></i>
              <p>訂製拼圖</p>
            </div>
          </RouterLink>
          <!-- test -->
          <!-- The button to open modal -->
          <label for="my-modal" class="border-r border-black flex items-center pr-8 pl-8">
            <i class="fa-solid fa-user mr-4"></i>
            <p>會員登入</p>
          </label>

          <!-- <button id="button" type="button">
            <div class="border-r border-black flex items-center pr-8 pl-8">
              <i class="fa-solid fa-user mr-4"></i>
              <p>會員登入</p>
            </div>
          </button> -->
        </nav>
      </header>

      <div class="h-[72vh]">
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
    <LoginItem />
  </div>
</template>

<script setup>
import LoginItem from '.././components/LoginItem.vue'
</script>
