<template>
  <div class="p-4 lg:px-20 md:py-10">
    <div class="flex mb-4 items-center">
      <h2 class="text-left text-black">訂單管理</h2>
      <!-- 刪除所有訂單 -->
      <button class="flex items-center ml-5 btn btn-error btn-outline btn-sm" @click="delOrderButton = true">
        <i class="fa-solid fa-xmark"></i>
        <p class="ml-2">清空所有訂單</p>
      </button>
      <div class="flex ml-4" v-if="delOrderButton">
        <button class="flex items-center px-2 hover:bg-error hover:text-white rounded-md" @click.prevent="delAllOrder">
          <i class="fa-solid fa-check"></i>
          <p class="ml-2">是</p>
        </button>
        <button class="flex items-center ml-4 px-2 hover:ring-secondary hover:ring-2 rounded-md" @click="delOrderButton = false">
          <i class="fa-solid fa-xmark"></i>
          <p class="ml-2">否</p>
        </button>
      </div>
    </div>

    <div v-if="orders == ''">
      <img src="../../assets/image/load-admin.gif" class="mx-auto mt-2 0" alt="" width="170" />
    </div>
    <div v-else>
      <!-- table -->
      <div class="overflow-x-auto lg:overflow-y-auto lg:h-[437px] overflow-ui mb-10">
        <table class="table w-full text-black border border-black table-auto">
          <!-- head -->
          <thead class="hidden p-2 text-center lg:table-header-group lg:border-b lg:border-black">
            <tr class="">
              <th>訂單編號</th>
              <th>訂單資訊</th>
              <th>訂單訊息</th>
              <th>訂單狀態</th>
              <th>訂單明細</th>
            </tr>
          </thead>
          <!-- order content -->
          <tbody class="text-center md:flex lg:table-header-group md:flex-wrap">
            <!-- row 1 -->
            <tr v-for="order in orders" :key="order.id" class="flex flex-col border-gray-300 lg:table-row md:w-1/2 md:border lg:border-0 lg:border-b lg:border-black">
              <td class="border-b border-gray-300 lg:border-0">
                <p class="mb-1 font-bold lg:hidden">訂單編號</p>
                <p class="font-semibold text-lg">{{ order.create_at }}</p>
              </td>

              <td class="border-b border-gray-300 lg:border-0">
                <p class="mb-1 font-bold lg:hidden">訂單資訊</p>
                <div class="">
                  <p>名字: {{ order.user.name }}</p>
                  <p>電話: {{ order.user.tel }}</p>
                  <p>信箱 : {{ order.user.email }}</p>
                  <p>地址: {{ order.user.address }}</p>
                </div>
              </td>
              <td class="border-b border-gray-300 lg:border-0">
                <p class="mb-1 font-bold lg:hidden">訂單訊息</p>
                <div class="bg-gray-200 px-10 py-5 ring-gray-400 ring-1 rounded-md">{{ order.message ? order.message : '無訊息' }}</div>
              </td>
              <td class="border-b border-black lg:border-0">
                <div class="flex justify-center">
                  <label class="mr-2 cursor-pointer label" for="is_paid">
                    <input id="is_paid" class="checkbox checkbox-sm" type="checkbox" :true-value="1" :false-value="0" v-model="order.is_paid" disabled />
                  </label>
                  <p class="px-4 py-1 text-white align-baseline border rounded-lg bg-secondary" v-if="order.is_paid">已付款</p>
                  <p class="px-4 py-1 text-white align-baseline border rounded-lg bg-primary" v-else>未付款</p>
                </div>
              </td>

              <td class="border-b border-black lg:border-0">
                <div class="flex justify-center">
                  <label for="order-modal" class="flex items-center hover:text-secondary" @click="updateOrder(order)">
                    <p class="btn btn-sm btn-success btn-outline">查看明細</p>
                  </label>
                  <butto class="btn btn-sm btn-error btn-outline ml-4" @click="deleteOrder(order.id)">刪除訂單</butto>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 分頁 -->
      <PaginationItemVue :page="page"></PaginationItemVue>
      <OrderModalVue :tempOrder="tempOrder"></OrderModalVue>
      <ToastItemVue :toast="toast"></ToastItemVue>
    </div>
  </div>
</template>

<script>
import OrderModalVue from '../../components/OrderModal.vue'
import PaginationItemVue from '../../components/PaginationItem.vue'
import ToastItemVue from '../../components/ToastItem.vue'

const { VITE_APP_API, VITE_APP_APIPATH } = import.meta.env

export default {
  data() {
    return {
      orders: [],
      tempOrder: {},
      page: {},
      orderPage: {},
      delOrderButton: false,
      toast: {
        toastText: '',
        toastType: false
      }
    }
  },
  methods: {
    getOrder(orderPage = 1) {
      this.$http
        .get(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/admin/orders?page=${orderPage}`)
        .then((res) => {
          this.orders = res.data.orders
          this.orderPage = res.data.pagination
        })
        .catch((err) => console.log(err.response.data.message))
    },
    delAllOrder() {
      this.delOrderButton = false
      this.$http
        .delete(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/admin/orders/all`)
        .then((res) => {
          this.toast.toastText = '清空所有訂單'
          this.toast.toastType = true
          setTimeout(() => {
            this.toast.toastType = false
          }, 1200)
          this.getOrder()
        })
        .catch((err) => console.log(err.response.data))
    },
    deleteOrder(id) {
      this.$http
        .delete(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/admin/order/${id}`)
        .then((res) => {
          this.toast.toastText = '刪除訂單成功'
          this.toast.toastType = true
          setTimeout(() => {
            this.toast.toastType = false
          }, 1200)
          this.getOrder()
        })
        .catch((err) => console.log(err.response.data))
    },
    updateOrder(order) {
      this.tempOrder = order
    },
    getPage(page = 1) {
      this.$http
        .get(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/admin/products?page=${page}`)
        .then((res) => {
          this.page = res.data.pagination
        })
        .catch((err) => console.log(err.response.data.message))
    }
  },
  components: {
    PaginationItemVue,
    OrderModalVue,
    ToastItemVue
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)puzzletoken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common['Authorization'] = token
    this.getPage()
    this.getOrder()
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
