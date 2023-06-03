<template>
  <div>
    <input type="checkbox" id="product-modal" class="modal-toggle" />
    <div class="modal" v-if="modal">
      <div class="relative max-w-xl p-0 modal-box opacity-95">
        <div class="text-center bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- 關閉按鈕 -->
          <button @click="closeModal" type="button" class="absolute top-5 right-2.5 bg-transparent text-white hover:bg-white hover:text-primary rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="authentication-modal">
            <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <!-- tittle -->
          <div class="flex items-center justify-center px-6 py-6 text-white bg-secondary lg:px-8">
            <i class="mr-4 text-3xl fa-solid fa-puzzle-piece"></i>
            <h3 class="text-2xl font-bold text-center">修改商品</h3>
          </div>
          <!-- content -->
          <div class="px-10 py-5 text-left">
            <div class="flex mb-2">
              <div class="mr-2 form-control">
                <label class="cursor-pointer label">
                  <input type="checkbox" checked="checked" class="checkbox checkbox-success checkbox-sm" />
                </label>
              </div>
              <p class="px-4 py-1 text-white align-baseline border rounded-lg bg-secondary">上架中</p>
              <p class="px-4 py-1 text-white align-baseline border rounded-lg bg-primary">已下架</p>
            </div>
            <div class="relative flex items-center justify-center group">
              <img src="../assets/image/product/product(7).jpg" class="w-full h-[200px] object-cover" alt="" />
              <label for="imgurl" class="absolute opacity-0 btn btn-sm btn-primary hover:text-black group-hover:opacity-100">更換圖片</label>
            </div>
            <input type="text" id="imgurl" name="imgurl" value="http://www.jpg" class="w-full my-4 input input-bordered input-sm input-success" />
            <div class="text-left">
              <div class="flex items-center mb-4">
                <label for="productname" class="w-1/4">商品名稱</label>
                <input type="text" id="productname" name="productname" class="w-full max-w-sm input input-bordered input-sm" value="[ 1200片 ] - 相遇 (もの久保 )" />
              </div>

              <div class="flex items-center mb-4">
                <label for="product-type" class="w-1/4">商品類別</label>
                <select class="w-full max-w-sm select-sm select" id="product-type" name="product-type">
                  <option>精選拼圖</option>
                  <option>新品上市</option>
                  <option>獨家/客製拼圖</option>
                  <option>500片</option>
                  <option>1000片</option>
                  <option>2000片以上</option>
                </select>
              </div>

              <div class="flex items-center mb-4">
                <label for="product-type" class="w-1/4">上架數量</label>
                <select class="w-full max-w-sm select-sm select" id="product-type" name="product-type">
                  <option v-for="num in 10" :key="num.id">{{ num }}</option>
                </select>
              </div>

              <div class="flex items-center mb-4">
                <label for="product-origin-price" class="w-1/4">原價</label>
                <input type="text" id="product-origin-price" name="product-origin-price" class="w-full max-w-sm input input-bordered input-sm" value="$2800" />
                <label for="product-price" class="w-1/4 ml-2">特價</label>
                <input type="text" id="product-price" name="product-price" class="w-full max-w-sm input input-bordered input-sm" value="$2800" />
              </div>

              <div class="flex mb-4">
                <label for="productname" class="w-1/4">商品介紹</label>
                <textarea class="w-full max-w-xl textarea textarea-bordered textarea-xs" placeholder=""></textarea>
              </div>

              <div class="flex mb-4">
                <label for="productname" class="w-1/4">商品介紹</label>
                <textarea class="w-full max-w-xl textarea textarea-bordered textarea-xs" placeholder=""></textarea>
              </div>
            </div>
            <button @click.prevent="" type="submit" class="w-full px-20 ring-1 ring-secondary hover:bg-secondary hover:text-white font-medium rounded-lg text-sm py-2.5 text-center">修改</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: true
    }
  },
  methods: {
    closeModal() {
      this.modal = false
    }
  }
}
</script>

<style lang="scss" scoped>
.overflow-ui {
  // 滾動整體
  &::-webkit-scrollbar {
    @apply bg-white;
  }
  // 滾動移動方塊
  &::-webkit-scrollbar-thumb {
    @apply bg-secondary;
  }
  // 滾動背景顏色
  &::-webkit-scrollbar-track {
    @apply bg-gray-200;
  }
}
</style>
