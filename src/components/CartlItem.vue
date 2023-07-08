<template>
  <div>
    <input type="checkbox" id="cart-modal" class="modal-toggle" v-model="modal" />
    <div class="modal">
      <div class="modal-box max-w-4xl relative p-0 opacity-95">
        <div class="bg-white rounded-lg shadow dark:bg-gray-700 text-center">
          <!-- tittle -->
          <div class="flex items-center justify-center px-6 py-6 text-white bg-primary lg:px-8">
            <i class="fa-solid fa-cart-shopping mr-4 text-3xl"></i>
            <h3 class="text-2xl font-bold text-center">購物車</h3>
            <!-- 關閉按鈕 -->
            <div class="modal-action">
              <label for="cart-modal" class="absolute inline-flex items-center px-2 ml-auto text-white bg-transparent rounded-lg top-6 right-5 hover:bg-white hover:text-primary">
                <i class="text-2xl fa-solid fa-xmark"></i>
              </label>
            </div>
          </div>
          <!-- content -->
          <div class="px-10 ">
            <ul v-if="carts.carts != ''" class="pt-3 text-right ">
              <button class="btn  btn-outline  btn-sm  btn-info  text-white   px-12 mt-2"  @click.prevent="cleanCart()">清空購物車</button>
              <li class="flex items-center justify-between border-b py-4" v-for="cart in carts.carts" :key="cart.id">
                <img :src="cart.product.imageUrl" class="w-44 h-24 object-cover" alt="" />
                <p class="text-left">{{ cart.product.title }}</p>
                <select class="select select-error max-w-[75px]" v-model.number="cart.qty">
                  <option v-for="num in 11" :key="num">{{ num - 1 }}</option>
                </select>
                <p>
                  售價: <span> NT {{ cart.final_total }} </span>
                </p>
                <button class="bg-primary py-1 px-2 text-white"><i class="fa-solid fa-xmark" @click.prevent= "delCart(cart.id,cart.product.title)"></i></button>
              </li>
            </ul>
            <div v-else class="mt-3 py-10">未有商品加入購物車</div>
          </div>

          <!-- 確認金額 -->
          <div class="mt-5 px-10" v-if="cartSubmit">
            <div class="flex justify-between items-center mb-4">
              <p class="font-semibold text-xl">輸入優惠卷</p>
              <label for="">
                <input type="text" class="text-right border p-2" placeholder="請輸入您的優惠卷序號" />
              </label>
            </div>
            <div class="flex justify-between items-center mb-4">
              <p class="font-semibold text-xl">運費</p>
              <p>NT $60</p>
            </div>
            <div class="text-left pb-5 border-b-2 border-gray-300">
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
            <div class="flex justify-between items-center py-3">
              <p class="font-bold text-2xl">本日訂單金額</p>
              <p class="text-3xl font-bold">NT $ {{ carts.final_total }}</p>
            </div>
          </div>
          <button v-if="cartSubmit == false && carts.carts != '' " @click.prevent="cartSubmit = true" class="my-5 px-20 ring-1 ring-primary hover:bg-primary hover:text-white font-medium rounded-lg text-sm py-2.5 text-center">前往結帳</button>
          <button v-else-if=" carts.carts != ''" @click.prevent="orderSubmit(), (cartSubmit = false)" class="my-5 px-20 ring-1 ring-primary hover:bg-primary hover:text-white font-medium rounded-lg text-sm py-2.5 text-center">送出訂單</button>
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
  props: ['getCart', 'carts'],
  data() {
    return {
      modal: false,
      cartSubmit: false,
      toast: {
        viewIsHidden: false,
        toastText: '',
        toastType: false
      }
    }
  },
  methods: {
    cleanCart(){
      this.$http
        .delete(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/carts`)
        .then((res) => {
          this.getCart()
          this.modal = false
          this.toast.toastText = '已清空購物車'
          this.toast.toastType = true
          setTimeout(() => {
            this.toast.toastType = false
          }, 1200)
          
        })
        .catch((err) => console.log(err))
    },
    delCart(id,tittle){
      this.$http
      .delete(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/cart/${id}`)
        .then((res) => {
          this.modal = false
          this.toast.toastText = `刪除${tittle}成功`
          this.toast.toastType = true
          setTimeout(() => {
            this.toast.toastType = false
          }, 1200)
          
        })
        .catch((err) => console.log(err))
    },
    orderSubmit() {
      this.$http
        .post(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/order`, {
          data: {
            user: {
              name: 'test',
              email: 'test@gmail.com',
              tel: '0912346768',
              address: 'kaohsiung'
            },
            message: '測試結帳'
          }
        })
        .then((res) => {
          this.getCart()
          this.modal = false
          this.toast.toastText = '訂單結帳成功'
          this.toast.toastType = true
          setTimeout(() => {
            this.toast.toastType = false
          }, 1200)
          
        })
        .catch((err) => console.log(err))
    },
    login() {
      this.$router.push({ path: '/order' })
    }
  },
  components: {
    ToastItem
  },
  mounted() {}
}
</script>
