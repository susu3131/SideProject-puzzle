<template>
  <div>
    <input type="checkbox" id="order-modal" class="modal-toggle" v-model="modal" />
    <div class="modal">
      <div class="relative max-w-lg p-0 modal-box opacity-95">
        <div class="text-center bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- tittle -->
          <div class="flex items-center justify-center px-6 py-6 text-white bg-secondary lg:px-8">
            <i class="fa-regular fa-clipboard mr-4 text-3xl"></i>
            <h3 class="text-2xl font-bold text-center">訂單明細</h3>
            <!-- 關閉按鈕 -->
            <div class="modal-action">
              <label for="order-modal" class="absolute inline-flex items-center px-2 ml-auto text-white bg-transparent rounded-lg top-6 right-5 hover:bg-white hover:text-primary">
                <i class="text-2xl fa-solid fa-xmark"></i>
              </label>
            </div>
          </div>

          <!-- content -->
          <div class="relative px-10 py-5 text-left">
            <div class="text-left">
              <!-- 名稱 -->
              <div class="flex items-center mb-4">
                <p class="w-1/4 pb-1">訂單編號</p>
                <p class="border-b-2 w-full pb-1 border-secondary">{{ tempOrder.create_at }}</p>
              </div>

              <div class="flex items-center mb-4">
                <p class="w-1/4 pb-1">訂購商品</p>
                <ul class="w-full">
                  <li v-for="orderProduct in tempOrder.products" :key="orderProduct.id" class="list-disc ml-4 pl-2 border-b-2 border-secondary">
                    <p>
                      {{ orderProduct.product.title }} - <span class="text-primary">{{ orderProduct.product.num }}{{ orderProduct.product.unit }} / ${{ orderProduct.product.price * orderProduct.product.num }}</span>
                    </p>
                  </li>
                </ul>
              </div>

              <!-- 名稱 -->
              <div class="flex items-center mb-4">
                <p class="w-1/4 pb-1">總金額</p>
                <p class="w-full pb-1 text-2xl  text-primary font-semibold">$ {{ tempOrder.total }}</p>
              </div>
            </div>
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
  props: ['tempOrder'],
  data() {
    return {
      modal: false,
      toast: {
        toastText: '',
        toastType: false
      }
    }
  },
  methods: {},
  components: {
    ToastItem
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)puzzletoken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common['Authorization'] = token
  }
}
</script>
