<template>
  <div>
    <input type="checkbox" id="login-modal" class="modal-toggle" />
    <div class="modal">
      <div class="relative p-0 modal-box opacity-95">
        <div class="text-center bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- tittle -->
          <div class="flex items-center justify-center px-6 py-6 text-white bg-primary lg:px-8">
            <i class="mr-4 text-3xl fa-solid fa-user"></i>
            <h3 class="text-2xl font-bold text-center">會員登入</h3>
            <!-- 關閉按鈕 -->
            <div class="modal-action">
              <label for="login-modal" class="absolute inline-flex items-center px-2 ml-auto text-white bg-transparent rounded-lg top-6 right-5 hover:bg-white hover:text-primary">
                <i class="text-2xl fa-solid fa-xmark"></i>
              </label>
            </div>
          </div>
          <form class="px-6 py-6 mt-3 space-y-8 lg:px-8 md:mt-6 md:w-7/6" action="#">
            <div class="items-center justify-center md:flex">
              <label for="text" class="block mb-2 text-lg text-left text-gray-900 dark:text-white mr-7 md:mb-">會員帳號</label>
              <input v-model="user.username" type="email" name="text" id="text" class="w-full md:w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-primary focus:border-primary focus-visible:outline-none block p-2.5" placeholder="請輸入您的會員帳號 " required />
            </div>
            <div class="items-center justify-center md:flex">
              <label for="password" class="block mb-2 text-lg text-left text-gray-900 dark:text-white mr-7 md:mb-0">會員密碼</label>
              <input v-model="user.password" type="password" name="password" id="password" class="w-full md:w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-primary focus:border-primary focus-visible:outline-none block p-2.5" placeholder="請輸入您的會員密碼 " required />
            </div>
            <div>
              <button @click.prevent="login" type="submit" class="w-full px-20 ring-1 ring-primary hover:bg-primary hover:text-white font-medium rounded-lg text-sm py-2.5 text-center">登入</button>
              <div class="mt-3 text-sm font-medium text-gray-500 dark:text-gray-300">
                我還沒有加入會員 ?
                <a href="#" class="text-blue-700 hover:underline dark:text-blue-500" onclick="event.preventDefault()">前往註冊</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_API } = import.meta.env
export default {
  data() {
    return {
      modal: true,
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    closeModal() {
      this.modal = false
    },
    login() {
      this.$http
        .post(`${VITE_APP_API}/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data
          document.cookie = `puzzletoken=${token};expires=${new Date(expired)}`
          this.$router.push({ path: '/PuzzleProduct' })
        })
        .catch((err) => alert(err.response.data.message))
    }
  }
}
</script>
