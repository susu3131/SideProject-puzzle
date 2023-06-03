<template>
  <div class="p-4 lg:px-20 md:py-10">
    <!-- tittle -->
    <div class="items-center mb-4 md:flex md:mb-8">
      <h2 class="mb-3 mr-10 text-left text-black md:mb-0">商品管理</h2>
      <!-- 搜尋欄 -->
      <div class="flex items-center justify-between mb-3 bg-white border md:mb-0">
        <div class="flex">
          <label for="puzzle-search"></label>
          <i class="flex-none p-2 fa-solid fa-magnifying-glass md:mr-0"></i>
          <input type="search" id="puzzle-search" name="puzzle-search" class="md:p-1 md:pl-2" placeholder="輸入商品名稱.." />
        </div>
        <button class="flex-none px-4 py-1 bg-secondary hover:bg-success hover:text-white">查詢</button>
      </div>

      <!-- 類別篩選 -->
      <div class="flex items-center md:ml-4">
        <label for="puzzletype" class="mr-5">類別</label>
        <select name="puzzletype" id="puzzletype" class="max-w-xs select select-success select-sm">
          <option value="全部商品">全部商品</option>
          <option value="精選系列">精選系列</option>
        </select>
      </div>
    </div>

    <!-- table -->
    <div class="overflow-x-auto lg:overflow-y-auto lg:h-[437px] overflow-ui mb-10">
      <table class="table w-full text-black border border-black table-auto">
        <!-- head -->
        <thead class="hidden p-2 lg:table-header-group lg:border-b lg:border-black">
          <tr class="">
            <th>商品圖片</th>
            <th class="hidden lg:block">商品名稱</th>
            <th>類別</th>
            <th>上架數量</th>
            <th>原價</th>
            <th>特價</th>
            <th>商品狀態</th>
            <th>修改商品</th>
          </tr>
        </thead>
        <!-- order content -->
        <tbody class="md:flex lg:table-header-group md:flex-wrap">
          <!-- row 1 -->
          <tr class="flex flex-col border-gray-300 lg:table-row md:w-1/2 md:border lg:border-0 lg:border-b lg:border-black" v-for="product in products" :key="product.id">
            <td class="hidden lg:table-cell lg:border-0">
              <img :src="product.imageUrl" class="w-32 mx-auto lg:w-24 lg:m-0" alt="img" />
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">商品名稱</p>
              <p>{{ product.title }}</p>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden"></p>
              <p>{{ product.category }}</p>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">上架數量</p>
              <select class="max-w-xs select select-accent" :value="product.num">
                <option v-for="num in 10" :key="num.id">{{ num }}</option>
              </select>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">原價</p>
              <p>${{ product.origin_price }}</p>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">特價</p>
              <p>${{ product.price }}</p>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <div class="flex">
                <div class="mr-2 form-control">
                  <label class="cursor-pointer label">
                    <input type="checkbox" class="bg-white checkbox checkbox-primary" :checked="product.is_enabled" />
                  </label>
                </div>
                <p class="px-4 py-2 text-white align-baseline border rounded-lg bg-secondary" v-if="product.is_enabled">上架中</p>
                <p class="px-4 py-2 text-white align-baseline border rounded-lg bg-primary" v-else>已下架</p>
              </div>
            </td>
            <td class="border-b border-black rounded-none lg:border-0 md:border-0">
              <label for="product-modal" class="flex items-center hover:text-secondary" @click="updateProduct">
                <i class="mr-3 fa-solid fa-pen-to-square"></i>
                <p>修改</p>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 分頁 -->
    <PaginationItemVue></PaginationItemVue>

    <UpdateProduct></UpdateProduct>
  </div>
</template>

<script>
import PaginationItemVue from '../../components/PaginationItem.vue'
import UpdateProduct from '../../components/UpdateProduct.vue'

const { VITE_APP_API, VITE_APP_APIPATH } = import.meta.env

export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      page: {}
    }
  },
  methods: {
    getProduct(page = 1) {
      this.$http
        .get(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/admin/products?page=${page}`)
        .then((res) => {
          this.products = res.data.products
          this.page = res.data.pagination
        })
        .catch((err) => console.log(err.response.data.message))
    },
    updateProduct() {
      console.log('修改商品')
    }
  },
  components: {
    PaginationItemVue,
    UpdateProduct
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)puzzletoken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common['Authorization'] = token
    this.getProduct()
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
