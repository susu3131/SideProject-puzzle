<template>
  <div class="flex flex-col h-screen bg-contain bg-puzzle">
    <!--  header -->
    <div class="flex items-center justify-center p-5 sm:py-3 sm:pt-10 sm:px-10 lg:pb-0">
      <div class="hidden lg:block">
        <RouterLink to="/index"><i class="fa-solid fa-house"></i></RouterLink>
        <RouterLink to="/g" class="ml-3"><i class="fa-solid fa-circle-exclamation"></i></RouterLink>
      </div>
      <div class="lg:flex-1"></div>
      <!-- tittle -->
      <div class="flex items-center justify-center px-2 grow sm:mb-0 lg:shrink-0">
        <img class="lg:w-[100px]" src="../../assets/image/logo.png" alt="logo" width="80" />
        <h1 class="text-2xl font-extrabold lg:text-4xl text-primary">
          拼圖趣 Puzzle
          <span class="block px-3 text-xl text-center border sm:inline sm:text-2xl border-primary">後台中心</span>
        </h1>
      </div>
      <!-- 登出按鈕 -->
      <div class="flex justify-center py-2 ml-3 sm:ml-0 lg:mt-5 lg:flex-1">
        <div class="items-center justify-center hidden mr-4 md:flex">
          <i class="fa-solid fa-circle-user"></i>
          <p class="ml-2">管理員 admin</p>
        </div>
        <button class="flex items-center justify-center border-dark border-[1px] hover:bg-primary hover:text-white px-3 sm:px-6 py-1 h-1/4 rounded-md" @click="signOut">
          <p class="hidden mr-1 text-base md:block">登出</p>
          <i class="ml-1 fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </div>

    <!-- content -->
    <div class="flex font-bold text-center sm:p-0">
      <router-link exact-active-class="bg-success text-white " to="/order" class="px-6 py-2 border border-b-0 sm:py-3 sm:px-10 hover:bg-secondary hover:text-white hover:font-black border-secondary">訂單管理</router-link>
      <router-link exact-active-class="bg-success text-white " to="/PuzzleProduct" class="px-6 py-2 border border-b-0 border-l-0 sm:py-3 sm:px-10 hover:bg-secondary hover:text-white hover:font-black border-secondary">商品管理</router-link>
    </div>

    <!-- routeview -->
    <div class="flex-1 bg-white bg-opacity-50 border-y-2 border-secondary">
      <RouterView />
    </div>
    <!-- footer -->
    <div class="py-4 text-center text-white bg-secondary md:py-6">
      <img src="../../assets/image/logo-white.svg" class="mx-auto" alt="logo" />
      <p class="text-sm md:">此網站僅做 Side Project 作品使用，無營利用途 / Copyright © 2023 SuPuzzle. All rights reserved.</p>
    </div>

    <ToastItem :toast="toast"></ToastItem>
  </div>
</template>

<script>
import ToastItem from '../../components/ToastItem.vue'
const { VITE_APP_API } = import.meta.env
export default {
  data() {
    return {
      toast: {
        viewIsHidden: true,
        toastText: '',
        toastType: false
      }
    }
  },
  methods: {
    checkLogin() {
      this.axios
        .post(`${VITE_APP_API}/api/user/check`)
        .then(() => {
          this.toast.viewIsHidden = false
          this.toast.toastText = '登入成功'
          this.toast.toastType = true
          setTimeout(() => {
            this.toast.toastType = false
          }, 1200)
        })
        .catch((err) => {
          this.toast.toastText = err.response.data.message
          this.toast.toastType = true
          setTimeout(() => {
            this.toast.toastType = false
            this.$router.push({ path: '/index' })
          }, 1200)
        })
    },
    signOut() {
      this.axios
        .post(`${VITE_APP_API}/logout`)
        .then(() => {
          this.toast.toastText = '登出成功'
          this.toast.toastType = true
          setTimeout(() => {
            this.$router.push({ path: '/index' })
            this.toast.toastType = false
          }, 1200)
        })
        .catch((err) => {
          this.toast.toastText = '登出失敗，請重新嘗試'
          this.toast.toastType = true
          setTimeout(() => {
            this.toast.toastType = false
          }, 1200)
        })
    }
  },
  components: {
    ToastItem
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)puzzletoken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common['Authorization'] = token
    this.checkLogin()
  }
}
</script>

<style lang="scss" scoped></style>
