<template>
  <div>
    <input type="checkbox" id="coupon-modal" class="modal-toggle" v-model="modal" />
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
          <div class="t">

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
  // props: ['tempOrder'],
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
}
</script>
