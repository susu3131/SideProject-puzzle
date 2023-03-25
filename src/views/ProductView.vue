<template>
  <div class="about py-10 container">
    <!-- banner -->
    <img src="../assets/image/product-banner.jpg" alt="" />
    <!-- nav -->
    <div class="bg-pink text-white flex justify-between items-center">
      <button class="bg-white py-2 my-3 px-4 text-black flex items-center rounded-lg hover:bg-secondary hover:outline-white hover:outline ml-4">
        <i class="fa-solid fa-gift mr-2"></i>
        <p>領取本日優惠卷</p>
      </button>

      <RouterLink to="/allpuzzle" class="mr-5 text-xl hover:bg-white py-4 px-10 hover:text-primary">全部拼圖</RouterLink>
      <RouterLink to="/newpuzzle" class="mr-5 text-xl hover:bg-white py-4 px-10 hover:text-primary">新品上市</RouterLink>
      <RouterLink to="/salepuzzle" class="mr-5 text-xl hover:bg-white py-4 px-10 hover:text-primary">促銷拼圖</RouterLink>
      <RouterLink to="/puzzlepiece" class="mr-5 text-xl hover:bg-white py-4 px-10 hover:text-primary">拼圖片數</RouterLink>
      <RouterLink to="/onlypuzzle" class="mr-5 text-xl hover:bg-white py-4 px-10 hover:text-primary">獨家/ 限量拼圖</RouterLink>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<style></style>
