<template>
  <div>
    <!-- 驗證失敗遮擋畫面 -->
    <div v-if="toast.viewIsHidden" class="fixed top-0 left-0 z-20 w-screen h-screen bg-puzzle blur-md"></div>
    <!-- toast -->
    <div class="toast toast-end top-0 w-[300px] z-30" v-if="toast.toastType">
      <div class="text-white alert alert-success">
        <p class="mx-auto">{{ toast.toastText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['toast'],
  mounted() {
    // console.log('吐司測試訊息')
  }
}
</script>

<style lang="scss" scoped></style>
