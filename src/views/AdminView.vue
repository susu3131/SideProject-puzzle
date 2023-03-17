<template>
  <div class="bg-puzzle bg-contain flex flex-col h-screen ">
    <!--  header -->
    <div class="flex sm:py-3 items-center justify-center p-5 sm:pt-10 sm:px-10 lg:pb-0">
      <div class="lg:flex-1"></div>
      <!-- tittle -->
      <div class="flex items-center justify-center grow px-2 sm:mb-0 lg:shrink-0">
        <img class="lg:w-[100px]" src=".././assets/image/logo.png" alt="logo" width="80" />
        <h1 class="text-2xl lg:text-4xl font-extrabold text-primary">
          拼圖趣 Puzzle
          <span class="block text-center text-xl sm:inline sm:text-2xl border border-primary px-3">後台中心</span>
        </h1>
      </div>
      <!-- 登出按鈕 -->
      <div class="flex py-2 justify-center ml-3 sm:ml-0 lg:mt-5 lg:flex-1">
        <div class="md:flex items-center justify-center mr-4 hidden">
          <i class="fa-solid fa-circle-user"></i>
          <p class="ml-2">管理員 admin</p>
        </div>
        <button class="flex items-center justify-center border-dark border-[1px] hover:bg-primary hover:text-white px-3 sm:px-6 py-1 h-1/4 rounded-md">
          <p class="mr-1 hidden md:block text-base">登出</p>
          <i class="fa-solid fa-right-from-bracket ml-1"></i>
        </button>
      </div>
    </div>

    <!-- content -->
    <div class="flex text-center sm:p-0 font-bold">
      <router-link to="/order" class="sm:py-3 sm:px-10 py-2 px-6 hover:bg-secondary hover:text-white hover:font-black border border-secondary border-b-0">訂單管理</router-link>
      <router-link to="/puzzle" class="sm:py-3 sm:px-10 py-2 px-6 hover:bg-secondary hover:text-white hover:font-black border border-l-0 border-secondary border-b-0">商品管理</router-link>
    </div>

    <!-- routeview -->
    <div class="bg-white opacity-80 border-y-2 border-secondary flex-1">
      <RouterView />
    </div>
    <!-- footer -->
    <div class="bg-secondary text-center text-white py-6">
      <img src=".././assets/image/logo-white.svg" class="mx-auto" alt="logo" />
      <p>此網站僅做 Side Project 作品使用，無營利用途 / Copyright © 2023 SuPuzzle. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
