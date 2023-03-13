<template>
  <div
    id="modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
  >
    <div class="relative w-full h-full max-w-2xl md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 text-center">
        <button
          id="closeButton"
          type="button"
          class="absolute top-5 right-2.5 bg-transparent text-white hover:bg-white hover:text-primary rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          data-modal-hide="authentication-modal"
        >
          <svg
            aria-hidden="true"
            class="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div>
          <div class="bg-primary px-6 py-6 lg:px-8 flex items-center text-white justify-center">
            <i class="fa-solid fa-user mr-4 text-3xl"></i>
            <h3 class="text-2xl font-bold text-center">會員登入</h3>
          </div>
          <form class="space-y-6 px-6 py-6 lg:px-8 mt-6" action="#">
            <div class="flex items-center justify-center">
              <label for="text" class="block text-gray-900 dark:text-white mr-4 text-lg"
                >會員帳號</label
              >
              <input
                type="text"
                name="text"
                id="text"
                class="w-3/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="請輸入您的會員帳號 "
                required
              />
            </div>
            <div class="flex items-center justify-center">
              <label for="password" class="block text-gray-900 dark:text-white mr-4 text-lg"
                >會員密碼</label
              >
              <input
                type="password"
                name="password"
                id="password"
                class="w-3/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="請輸入您的會員密碼 "
                required
              />
            </div>
            
            <button @click="login" 
              type="submit"
              class=" px-20   ring-1 ring-primary  hover:bg-primary  hover:text-white   font-medium rounded-lg text-sm  py-2.5 text-center "
            >
              登入
            </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              我還沒有加入會員 ?   
              <a href="#" class="text-blue-700 hover:underline dark:text-blue-500"
                >前往註冊</a
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  

  export default {
    data() {
      return {
        
      }
    },
    methods: {
      login() {
        this.$router.push({ path: '/admin'})
      }
    },
  }
</script>
