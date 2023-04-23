<template>
  <div>
    <input type="checkbox" id="login-modal" class="modal-toggle" />
    <div class="modal" v-if="modal">
      <div class="modal-box relative p-0 opacity-95">
        <div class="bg-white rounded-lg shadow dark:bg-gray-700 text-center">
          <!-- 關閉按鈕 -->
          <button @click="closeModal" type="button" class="absolute top-5 right-2.5 bg-transparent text-white hover:bg-white hover:text-primary rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="authentication-modal">
            <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <!-- tittle -->
          <div class="bg-primary px-6 py-6 lg:px-8 flex items-center text-white justify-center">
            <i class="fa-solid fa-user mr-4 text-3xl"></i>
            <h3 class="text-2xl font-bold text-center">會員登入</h3>
          </div>
          <form class=" space-y-8 px-6 py-6 lg:px-8 mt-3 md:mt-6 md:w-7/6" action="#">
            <div class="md:flex items-center justify-center">
              <label for="text" class="block text-gray-900 dark:text-white mr-7 text-lg text-left mb-2 md:mb-">會員帳號</label>
              <input v-model="user.username" type="email" name="text" id="text" class="w-full md:w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-primary focus:border-primary focus-visible:outline-none block p-2.5" placeholder="請輸入您的會員帳號 " required />
            </div>
            <div class="md:flex items-center justify-center">
              <label for="password" class="block text-gray-900 dark:text-white mr-7 text-lg text-left mb-2 md:mb-0">會員密碼</label>
              <input v-model="user.password" type="password" name="password" id="password" class="w-full md:w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-primary focus:border-primary focus-visible:outline-none block p-2.5" placeholder="請輸入您的會員密碼 " required />
            </div>
            <div>
              <button @click.prevent="login" type="submit" class="w-full  px-20 ring-1 ring-primary hover:bg-primary hover:text-white font-medium rounded-lg text-sm py-2.5 text-center">登入</button>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300 mt-3 ">
                我還沒有加入會員 ?
                <a href="#" class="text-blue-700 hover:underline dark:text-blue-500" onclick="event.preventDefault()" >前往註冊</a>
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
          this.$router.push({ path: '/order' })
        })
        .catch((err) => alert(err.response.data.message))
    }
  }
}
</script>
