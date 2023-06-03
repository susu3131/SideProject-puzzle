<template>
  <div>
    <input type="checkbox" id="product-modal" class="modal-toggle" />
    <div class="modal" v-if="modal">
      <div class="relative max-w-4xl p-0 modal-box opacity-95">
        <div class="text-center bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- 關閉按鈕 -->
          <button @click="closeModal" type="button" class="absolute top-5 right-2.5 bg-transparent text-white hover:bg-white hover:text-primary rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="authentication-modal">
            <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <!-- tittle -->
          <div class="flex items-center justify-center px-6 py-6 text-white bg-primary lg:px-8">
            <i class="mr-4 text-3xl fa-solid fa-puzzle-piece"></i>
            <h3 class="text-2xl font-bold text-center">修改商品</h3>
          </div>
          <!-- content -->
          <div class="flex px-10 py-10 text-left">
            <img src="../assets/image/product/product(7).jpg" class="" alt="" />
            <div class="ml-4">
              <label for="productname">商品名稱</label>
              <input type="text" id="productname" name="productname" class="px-5 border" value="[ 1200片 ] - 相遇 (もの久保 )" />

              <p class="text-left"></p>
              <select class="select select-error max-w-[75px]">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>

              <li class="flex items-center justify-between pt-5 pb-5 border-b">
                <p>售價: <span> NT $2800 </span></p>
              </li>
              <button class="px-2 py-1 text-white bg-primary"><i class="fa-solid fa-xmark"></i></button>
            </div>
          </div>

          <button @click.prevent="cartSubmit = true" type="submit" class="my-5 px-20 ring-1 ring-primary hover:bg-primary hover:text-white font-medium rounded-lg text-sm py-2.5 text-center">前往結帳</button>
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
      cartSubmit: false
    }
  },
  methods: {
    closeModal() {
      this.modal = false
    }
  }
}
</script>
