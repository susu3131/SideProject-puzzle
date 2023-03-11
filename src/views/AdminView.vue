<template>
  <div class="bg-puzzle h-screen bg-contain">
    <!-- top -->
    <div class="flex items-center justify-center">
      <img src=".././assets/image/logo.png" alt="logo" width="100" />
      <p class="text-4xl font-extrabold text-primary">拼圖趣 Puzzle</p>
    </div>
    <h1>後台頁面</h1>

    <!-- content -->

    <div class="text-blue-600 text-xl">
      <RouterLink to="/g">回到首頁</RouterLink>
      <RouterLink to="/g" class="ml-5">404 測試</RouterLink>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
