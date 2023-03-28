<template>
  <div>
    <input type="checkbox" id="cart-modal" class="modal-toggle" />
    <div class="modal" v-if="modal">
      <div class="modal-box max-w-4xl  relative p-0  opacity-95">
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
            <i class="fa-solid fa-cart-shopping mr-4 text-3xl"></i>
            <h3 class="text-2xl font-bold text-center">購物車</h3>
          </div>
          <!-- content -->
          <div class="px-10">
            <ul>
              <li class="flex items-center justify-between border-b  pt-5 pb-5">
                <img src="../assets/image/product/product(7).jpg" class="w-44" alt="" />
                <p class="text-left">[ 1200片 ] - 相遇 (もの久保 )</p>
                <select class="select select-error max-w-[75px]">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
                <p>售價: <span> NT $2800 </span></p>
                <button class="bg-primary py-1 px-2 text-white"><i class="fa-solid fa-xmark"></i></button>
              </li>
              <li class="flex items-center justify-between border-b  pt-5 pb-5">
                <img src="../assets/image/product/product(7).jpg" class="w-44" alt="" />
                <p class="text-left">[ 1200片 ] - 相遇 (もの久保 )</p>
                <select class="select select-error max-w-[75px]">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
                <p>售價: <span> NT $2800 </span></p>
                <button class="bg-primary py-1 px-2 text-white"><i class="fa-solid fa-xmark"></i></button>
              </li>
            </ul>
          </div>
          <!-- 確認金額 -->
          <div class="mt-5  px-10" v-if ="cartSubmit">
            <div class="flex justify-between items-center mb-4">
              <p class=" font-semibold text-xl">輸入優惠卷</p>
              <label for="">
                <input type="text" class="text-right border p-2" placeholder="請輸入您的優惠卷序號" />
              </label>
            </div>
            <div class="flex justify-between items-center mb-4">
              <p class=" font-semibold text-xl">運費</p>
              <p>NT $60</p>
            </div>
            <div class="text-left pb-5 border-b-2  border-gray-300">
              <p class="mb-2 font-semibold text-xl">折扣</p>
              <div class="flex justify-between items-center mb-2">
                <p class="border-l-4 pl-2 border-primary">全店滿千免運，買五幅折150元</p>
                <p class="text-red-600">- NT $ 210</p>
              </div>
              <div class="flex justify-between items-center">
                <p class="border-l-4 pl-2 border-primary">優惠卷折扣85%</p>
                <p class="text-red-600">- NT $ 609</p>
              </div>
            </div>
            <div class="flex justify-between items-center py-3 ">
              <p class=" font-bold text-2xl ">本日訂單金額</p>
              <p class=" text-3xl font-bold">NT $ 3241</p>
            </div>
          </div>
          <button @click.prevent="cartSubmit= true" type="submit" class="my-5 px-20 ring-1 ring-primary hover:bg-primary hover:text-white font-medium rounded-lg text-sm py-2.5 text-center">前往結帳</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: true,
      cartSubmit : false
    }
  },
  methods: {
    closeModal() {
      this.modal = false
    },
    login() {
      this.$router.push({ path: '/order' })
    }
  }
}
</script>
