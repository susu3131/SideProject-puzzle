<template>
  <div>
    <input type="checkbox" id="coupon-modal" class="modal-toggle" v-model="modal" />
    <div class="modal">
      <div class="relative max-w-xs md:max-w-sm p-0 modal-box">
        <div class="text-center rounded-lg shadow dark:bg-gray-700 bg-[#DADADA] px-2">
          <!-- tittle -->
          <div class="py-2 lg:px-8">
            <!-- 關閉按鈕 -->
            <div class="modal-action">
              <label for="coupon-modal" class="absolute inline-flex items-center px-2 ml-auto bg-transparent rounded-lg top-4 right-3">
                <i class="fa-solid fa-xmark"></i>
              </label>
            </div>
          </div>

          <!-- content -->
          <div class="h-[170px] md:h-[200px] bg-no-repeat">
            <div class="relative">
              <img src="../assets/image/coupon.png" alt="" class="absolute top-1 left-0" />
              <div class="text-white ml-8 mt-4 z-50 absolute left-0 md:left-1 md:top-2">
                <div class="flex items-center">
                  <i class="fa-solid fa-gift mr-2"></i>
                  <h4>Coupon</h4>
                </div>
                <p class="text-5xl md:text-6xl font-semibold ml-14 mt-3 md:mt-4 md:ml-16">80 <span class="text-4xl">%</span></p>
              </div>
              <p class="z-50 mr-6 text-xl md:text-2xl font-semibold w-[10px] px-9 py-3 absolute md:right-2 md:top-2 right-0">領取優惠</p>
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
  // props: ['tempOrder'],
  data() {
    return {
      modal: false,
      coupon: {},
      toast: {
        toastText: '',
        toastType: false
      }
    }
  },
  methods: {
    // getCoupon() {
    //   this.$http
    //     .post(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/coupon`, 
    //     {
    //       data: {
    //         code: "testCode1"
    //       }
    //     })
    //     .then((res) => {
    //       console.log(res)
    //     })
    //     .catch((err) => console.log(err.response.data))
    // },
    // drawCoupon() {
    //   this.$http
    //     .delete(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/admin/coupon`)
    //     .then((res) => {
    //       this.toast.toastText = '清空所有訂單'
    //       this.toast.toastType = true
    //       setTimeout(() => {
    //         this.toast.toastType = false
    //       }, 1200)
    //       this.getOrder()
    //     })
    //     .catch((err) => console.log(err.response.data))
    // }
  },
  components: {
    ToastItem
  },
  mounted() {
    // this.getCoupon()
  }
}
</script>
