<template>
  <div class="bg-puzzle  bg-contain">
    <!-- top header -->
    <div class="flex py-3 items-center justify-center px-10">
      <div class="flex items-center justify-center grow">
        <img src=".././assets/image/logo.png" alt="logo" width="100" />
        <h1 class="text-4xl font-extrabold text-primary">
          拼圖趣 Puzzle <span class="text-2xl border border-primary px-3">後台中心</span>
        </h1>
      </div>
      <div class="flex">
        <div class="flex items-center justify-center mr-4">
          <i class="fa-solid fa-circle-user"></i>
          <p class="ml-2">管理員 admin</p>
        </div>
        <button
          class="flex items-center justify-center bg-secondary text-white px-6 py-1 h-1/4 rounded-md"
        >
          <p class="mr-1">登出</p>
          <i class="fa-solid fa-right-from-bracket ml-1"></i>
        </button>
      </div>
    </div>

    <!-- content -->
    <div class=" h-screen bg-white opacity-80">
      <div class="text-blue-600 text-xl">
        <RouterLink to="/index">回到首頁</RouterLink>
        <RouterLink to="/g" class="ml-5">404 測試</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
