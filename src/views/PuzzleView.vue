<template>
  <div class="p-4 lg:px-20 md:py-10">
    <!-- tittle -->
    <div class="md:flex items-center mb-4 md:mb-8">
      <h2 class="text-left text-black mr-10 mb-3 md:mb-0">商品管理</h2>
      <!-- 搜尋欄 -->
      <div class="bg-white border items-center flex justify-between mb-3 md:mb-0">
        <div class="flex">
          <label for="puzzle-search"></label>
          <i class="fa-solid fa-magnifying-glass p-2 md:mr-0 flex-none"></i>
          <input type="search" id="puzzle-search" name="puzzle-search" class="md:p-1 md:pl-2" placeholder="輸入商品名稱.." />
        </div>
        <button class="py-1 px-4 bg-secondary hover:bg-success hover:text-white flex-none">查詢</button>
      </div>

      <!-- 類別篩選 -->
      <div class="flex items-center md:ml-4">
        <label for="puzzletype" class="mr-5">類別</label>
        <select name="puzzletype" id="puzzletype" class="select select-success select-sm max-w-xs">
          <option value="全部商品">全部商品</option>
          <option value="精選系列">精選系列</option>
        </select>
      </div>
    </div>

    <!-- table -->
    <div class="overflow-x-auto lg:overflow-y-auto lg:h-[437px] overflow-ui mb-10">
      <table class="table w-full border table-auto text-black border-black">
        <!-- head -->
        <thead class="p-2 hidden lg:table-header-group lg:border-b lg:border-black">
          <tr class=" ">
            <th>商品圖片</th>
            <th class="hidden lg:block">商品名稱</th>
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
          <tr class="flex flex-col lg:table-row md:w-1/2 md:border lg:border-0 lg:border-b border-gray-300 lg:border-black">
            <td class="hidden lg:table-cell lg:border-0">
              <img src=".././assets/image/product/product(8).jpg" class="lg:w-24 mx-auto lg:m-0 w-32" alt="img" />
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">商品名稱</p>
              <p>[ 1000片 ] - 春眠 (もの久保 )</p>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">上架數量</p>
              <select class="select select-accent max-w-xs">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">原價</p>
              <p>$1400</p>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">特價</p>
              <p>$1100</p>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <div class="flex">
                <div class="form-control mr-2">
                  <label class="label cursor-pointer">
                    <input type="checkbox" class="checkbox checkbox-primary bg-white" />
                  </label>
                </div>
                <p class="border px-4 align-baseline py-2 bg-primary text-white rounded-lg">已下架</p>
              </div>
            </td>
            <td class="border-b lg:border-0 border-black md:border-0 rounded-none">
              <div class="flex items-center hover:text-secondary">
                <i class="fa-solid fa-pen-to-square mr-3"></i>
                <p>修改</p>
              </div>
            </td>
          </tr>

        </tbody>
      </table>
    </div>

    <!-- 分頁 -->
    <PaginationItemVue></PaginationItemVue>
  </div>
</template>

<script>
import PaginationItemVue from '../components/PaginationItem.vue'
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
    }
  },
  components: {
    PaginationItemVue
  },
  mounted() {
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
