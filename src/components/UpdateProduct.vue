<template>
  <div>
    <input type="checkbox" id="update-product-modal" class="modal-toggle" v-model="modal" />
    <div class="modal">
      <div class="relative max-w-xl p-0 modal-box opacity-95">
        <div class="text-center bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- tittle -->
          <div class="flex items-center justify-center px-6 py-6 text-white bg-secondary lg:px-8">
            <i class="mr-4 text-3xl fa-solid fa-puzzle-piece"></i>
            <h3 class="text-2xl font-bold text-center">修改商品</h3>
            <!-- 關閉按鈕 -->
            <div class="modal-action">
              <label for="update-product-modal" class="absolute inline-flex items-center px-2 ml-auto text-white bg-transparent rounded-lg top-6 right-5 hover:bg-white hover:text-primary">
                <i class="text-2xl fa-solid fa-xmark"></i>
              </label>
            </div>
          </div>
          <!-- content -->
          <div class="relative px-10 py-5 text-left">
            <!-- 上架狀態 -->
            <div class="flex items-center justify-between mb-3">
              <div class="flex">
                <label class="mr-2 cursor-pointer label" for="is_enabled">
                  <input id="is_enabled" class="checkbox checkbox-sm" type="checkbox" :true-value="1" :false-value="0" v-model="tempProduct.is_enabled" :class="{ 'checkbox-success': tempProduct.is_enabled == true }" />
                </label>
                <p class="px-4 py-1 text-white align-baseline border rounded-lg bg-secondary" v-if="tempProduct.is_enabled">上架中</p>
                <p class="px-4 py-1 text-white align-baseline border rounded-lg bg-primary" v-else>已下架</p>
              </div>
              <button @click="deleteModal = true" class="btn btn-sm btn-outline btn-error"><i class="mr-2 fa-solid fa-xmark"></i>刪除</button>
              <!-- 刪除確認 -->
              <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full text-2xl bg-white bg-opacity-80" v-if="deleteModal">
                <div class="mt-32 text-center">
                  <p class="mb-5">再次確認是否刪除 ?</p>
                  <button class="mr-5 text-lg btn btn-error" @click="deleteProduct(tempProduct.id)">刪除</button>
                  <button class="ml-5 text-lg btn btn-outline btn-success" @click="deleteModal = false">取消</button>
                </div>
              </div>
            </div>
            <!-- 圖片 -->
            <div class="relative flex items-center justify-center group">
              <img :src="tempProduct.imageUrl" class="w-full h-[200px] object-cover" alt="無" v-if="tempProduct.imageUrl" />
              <div v-else class="w-full py-20 text-center bg-gray-200">
                <i class="text-3xl text-center text-gray-500 fa-solid fa-image"></i>
                <p class="block text-xs">No Image</p>
              </div>
              <label for="imgurl" class="absolute opacity-0 btn btn-sm btn-primary hover:text-black group-hover:opacity-100" @click.prevent="">更換圖片</label>
            </div>
            <input type="text"  id="imgurl" name="imgurl" placeholder="無圖片" v-model="tempProduct.imageUrl" class="w-full my-4 input input-bordered input-sm input-success" />

            <div class="text-left">
              <!-- 名稱 -->
              <div class="flex items-center mb-4">
                <label for="productname" class="w-1/4">商品名稱</label>
                <input type="text" id="productname" name="productname" placeholder="請輸入商品名稱" class="w-full max-w-sm input input-bordered input-sm" v-model="tempProduct.title" />
              </div>
              <!-- 類別 -->
              <div class="flex items-center mb-4">
                <label for="product-type" class="w-1/4">商品類別</label>
                <select class="w-full max-w-sm select-sm select" id="product-type" name="product-type" v-model="tempProduct.category">
                  <option value="未分類" selected>未分類</option>
                  <option value="精選拼圖">精選拼圖</option>
                  <option value="新品上市">新品上市</option>
                  <option value="獨家/客製拼圖">獨家/客製拼圖</option>
                  <option value="500片">500片</option>
                  <option value="1000片">1000片</option>
                  <option value="2000片以上">2000片以上</option>
                </select>
              </div>
              <!-- 數量 -->
              <div class="flex items-center mb-4">
                <label for="product-num" class="w-1/4">上架數量</label>
                <select class="w-full max-w-sm select-sm select" id="product-num" name="product-num" v-model.number="tempProduct.num">
                  <option v-for="num in 11" :key="num">{{ num - 1 }}</option>
                </select>
              </div>
              <!-- 價格 -->
              <div class="flex items-center mb-4">
                <label for="product-origin-price" class="w-1/4">原價</label>
                <input type="number" id="product-origin-price" name="product-origin-price" placeholder="請輸入原價" class="w-full max-w-sm input input-bordered input-sm" v-model.number="tempProduct.origin_price" />
                <label for="product-price" class="w-1/4 ml-2">售價</label>
                <input type="number" id="product-price" name="product-price" class="w-full max-w-sm input input-bordered input-sm" placeholder="請輸入售價" v-model.number="tempProduct.price" />
              </div>
              <!-- 描述 -->
              <div class="flex items-center mb-4">
                <label for="product-description" class="w-1/4">商品描述</label>
                <textarea class="w-full max-w-xl textarea textarea-bordered textarea-xs" name="product-description" id="product-description" v-model="tempProduct.description" placeholder="請輸入商品描述"></textarea>
              </div>
              <!-- 說明 -->
              <div class="flex items-center mb-2">
                <label for="product-content" class="w-1/4">說明</label>
                <textarea class="w-full max-w-xl textarea textarea-bordered textarea-xs" name="product-content" id="product-content" v-model="tempProduct.content" placeholder="請輸入商品說明"></textarea>
              </div>
            </div>

            <button v-if="updateButton" @click.prevent="updateProduct(tempProduct.id)" type="submit" class="w-full px-20 ring-1 ring-secondary hover:bg-secondary hover:text-white font-medium rounded-lg text-sm py-2.5 text-center mt-3">修改</button>

            <button v-else type="submit" class="text-red-400 w-full px-20 ring-1 ring-secondary hover:bg-secondary hover:text-white font-medium rounded-lg text-sm py-2.5 text-center my-4">未正確輸入，請重新輸入</button>
          </div>
        </div>
      </div>
    </div>
    <ToastItem :toast="toast"></ToastItem>
  </div>
</template>

<script>
import ToastItem from '../components/ToastItem.vue'
const { VITE_APP_API, VITE_APP_APIPATH } = import.meta.env

export default {
  props: ['tempProduct'],
  data() {
    return {
      modal: false,
      deleteModal: false,
      updateButton: true,
      updateImg : false,
      toast: {
        toastText: '',
        toastType: false
      }
    }
  },
  methods: {
    deleteProduct(id) {
      this.$http
        .delete(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/admin/product/${id}`)
        .then(() => {
          this.modal = false
          this.deleteModal = false

          this.toast.toastText = '刪除商品成功'
          this.toast.toastType = true
          setTimeout(() => {
            this.toast.toastType = false
          }, 1200)
        })
        .catch((err) => {
          this.deleteModal = false
          this.modal = false
          this.toast.toastText = err.response.data.message
          this.toast.toastType = true
          setTimeout(() => {
            this.toast.toastType = false
          }, 1200)
        })
    },
    updateProduct(id) {
      this.$http
        .put(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/admin/product/${id}`, { data: this.tempProduct })
        .then(() => {
          this.modal = false
          console.log('t')
          this.toast.toastText = '修改商品成功'
          this.toast.toastType = true
          setTimeout(() => {
            this.toast.toastType = false
          }, 1200)
        })
        .catch((err) => {
          this.updateButton = false
          setTimeout(() => {
            this.updateButton = true
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
