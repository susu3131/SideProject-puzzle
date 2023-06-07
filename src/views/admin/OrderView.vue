<template>
  <div class="p-4 lg:px-20 md:py-10">
    <h2 class="mb-4 text-left text-black">訂單管理</h2>
    <!-- table -->
    <div class="overflow-x-auto lg:overflow-y-auto lg:h-[437px] overflow-ui mb-10">
      <table class="table w-full text-black border border-black table-auto">
        <!-- head -->
        <thead class="hidden p-2 lg:table-header-group lg:border-b lg:border-black">
          <tr class="">
            <th>商品圖片</th>
            <th class="hidden lg:block">商品名稱</th>
            <th>數量</th>
            <th>金額</th>
            <th>訂購資訊</th>
            <th class="hidden lg:block">訂單狀態</th>
          </tr>
        </thead>
        <!-- order content -->
        <tbody class="md:flex lg:table-header-group md:flex-wrap">
          <!-- row 1 -->
          <tr class="flex flex-col border-gray-300 lg:table-row md:w-1/2 md:border lg:border-0 lg:border-b lg:border-black">
            <td class="hidden lg:table-cell lg:border-0">
              <img src="../../assets/image/product/product(8).jpg" class="w-32 mx-auto lg:w-24 lg:m-0" alt="img" />
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">商品名稱</p>
              <p>[ 1000片 ] - 春眠 (もの久保 )</p>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">數量</p>
              <div class="inline px-3 py-1 border lg:px-4 lg:py-2">1</div>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">金額</p>
              <p>$2000</p>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">訂購資訊</p>
              <div class="=">
                <p>名字: 王曉蕾</p>
                <p>電話:0912-345-429</p>
                <p>信箱 :wang@gmail.com</p>
                <p>地址: 252 新北市三芝區觀海街10號</p>
              </div>
            </td>
            <td class="border-b border-black rounded-none lg:border-0 md:border-0">
              <div class="flex">
                <div class="mr-3 form-control">
                  <label class="cursor-pointer label">
                    <input type="checkbox" checked="checked" class="checkbox checkbox-accent checkbox-md" />
                  </label>
                </div>
                <p class="px-4 py-2 text-white align-baseline border rounded-lg bg-light-green">訂單完成</p>
              </div>
            </td>
          </tr>
          <!-- row 1 -->
          <tr class="flex flex-col border-gray-300 lg:table-row md:w-1/2 md:border lg:border-0 lg:border-b lg:border-black">
            <td class="hidden lg:table-cell lg:border-0">
              <img src="../../assets/image/product/product(8).jpg" class="w-32 mx-auto lg:w-24 lg:m-0" alt="img" />
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">商品名稱</p>
              <p>[ 1000片 ] - 春眠 (もの久保 )</p>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">數量</p>
              <div class="inline px-3 py-1 border lg:px-4 lg:py-2">1</div>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">金額</p>
              <p>$2000</p>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">訂購資訊</p>
              <div class="=">
                <p>名字: 王曉蕾</p>
                <p>電話:0912-345-429</p>
                <p>信箱 :wang@gmail.com</p>
                <p>地址: 252 新北市三芝區觀海街10號</p>
              </div>
            </td>
            <td class="border-b border-black rounded-none lg:border-0 md:border-0">
              <div class="flex">
                <div class="mr-3 form-control">
                  <label class="cursor-pointer label">
                    <input type="checkbox" class="checkbox checkbox-accent checkbox-md border-primary" />
                  </label>
                </div>
                <p class="px-4 py-2 text-white align-baseline border rounded-lg bg-primary">訂單處理中</p>
              </div>
            </td>
          </tr>
          <!-- row 1 -->
          <tr class="flex flex-col border-gray-300 lg:table-row md:w-1/2 md:border lg:border-0 lg:border-b lg:border-black">
            <td class="hidden lg:table-cell lg:border-0">
              <img src="../../assets/image/product/product(8).jpg" class="w-32 mx-auto lg:w-24 lg:m-0" alt="img" />
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">商品名稱</p>
              <p>[ 1000片 ] - 春眠 (もの久保 )</p>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">數量</p>
              <div class="inline px-3 py-1 border lg:px-4 lg:py-2">1</div>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">金額</p>
              <p>$2000</p>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">訂購資訊</p>
              <div class="=">
                <p>名字: 王曉蕾</p>
                <p>電話:0912-345-429</p>
                <p>信箱 :wang@gmail.com</p>
                <p>地址: 252 新北市三芝區觀海街10號</p>
              </div>
            </td>
            <td class="border-b border-black rounded-none lg:border-0 md:border-0">
              <div class="flex">
                <div class="mr-3 form-control">
                  <label class="cursor-pointer label">
                    <input type="checkbox" checked="checked" class="checkbox checkbox-accent checkbox-md" />
                  </label>
                </div>
                <p class="px-4 py-2 text-white align-baseline border rounded-lg bg-light-green">訂單完成</p>
              </div>
            </td>
          </tr>
          <!-- row 1 -->
          <tr class="flex flex-col border-gray-300 lg:table-row md:w-1/2 md:border lg:border-0 lg:border-b lg:border-black">
            <td class="hidden lg:table-cell lg:border-0">
              <img src="../../assets/image/product/product(8).jpg" class="w-32 mx-auto lg:w-24 lg:m-0" alt="img" />
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">商品名稱</p>
              <p>[ 1000片 ] - 春眠 (もの久保 )</p>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">數量</p>
              <div class="inline px-3 py-1 border lg:px-4 lg:py-2">1</div>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">金額</p>
              <p>$2000</p>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">訂購資訊</p>
              <div class="=">
                <p>名字: 王曉蕾</p>
                <p>電話:0912-345-429</p>
                <p>信箱 :wang@gmail.com</p>
                <p>地址: 252 新北市三芝區觀海街10號</p>
              </div>
            </td>
            <td class="border-b border-black rounded-none lg:border-0 md:border-0">
              <div class="flex">
                <div class="mr-3 form-control">
                  <label class="cursor-pointer label">
                    <input type="checkbox" checked="checked" class="checkbox checkbox-accent checkbox-md" />
                  </label>
                </div>
                <p class="px-4 py-2 text-white align-baseline border rounded-lg bg-light-green">訂單完成</p>
              </div>
            </td>
          </tr>
          <!-- row 1 -->
          <tr class="flex flex-col border-gray-300 lg:table-row md:w-1/2 md:border lg:border-0 lg:border-b lg:border-black">
            <td class="hidden lg:table-cell lg:border-0">
              <img src="../../assets/image/product/product(8).jpg" class="w-32 mx-auto lg:w-24 lg:m-0" alt="img" />
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">商品名稱</p>
              <p>[ 1000片 ] - 春眠 (もの久保 )</p>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">數量</p>
              <div class="inline px-3 py-1 border lg:px-4 lg:py-2">1</div>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">金額</p>
              <p>$2000</p>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">訂購資訊</p>
              <div class="=">
                <p>名字: 王曉蕾</p>
                <p>電話:0912-345-429</p>
                <p>信箱 :wang@gmail.com</p>
                <p>地址: 252 新北市三芝區觀海街10號</p>
              </div>
            </td>
            <td class="border-b border-black rounded-none lg:border-0 md:border-0">
              <div class="flex">
                <div class="mr-3 form-control">
                  <label class="cursor-pointer label">
                    <input type="checkbox" checked="checked" class="checkbox checkbox-accent checkbox-md" />
                  </label>
                </div>
                <p class="px-4 py-2 text-white align-baseline border rounded-lg bg-light-green">訂單完成</p>
              </div>
            </td>
          </tr>
          <!-- row 1 -->
          <tr class="flex flex-col border-gray-300 lg:table-row md:w-1/2 md:border lg:border-0 lg:border-b lg:border-black">
            <td class="hidden lg:table-cell lg:border-0">
              <img src="../../assets/image/product/product(8).jpg" class="w-32 mx-auto lg:w-24 lg:m-0" alt="img" />
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">商品名稱</p>
              <p>[ 1000片 ] - 春眠 (もの久保 )</p>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">數量</p>
              <div class="inline px-3 py-1 border lg:px-4 lg:py-2">1</div>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">金額</p>
              <p>$2000</p>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">訂購資訊</p>
              <div class="=">
                <p>名字: 王曉蕾</p>
                <p>電話:0912-345-429</p>
                <p>信箱 :wang@gmail.com</p>
                <p>地址: 252 新北市三芝區觀海街10號</p>
              </div>
            </td>
            <td class="border-b border-black rounded-none lg:border-0 md:border-0">
              <div class="flex">
                <div class="mr-3 form-control">
                  <label class="cursor-pointer label">
                    <input type="checkbox" checked="checked" class="checkbox checkbox-accent checkbox-md" />
                  </label>
                </div>
                <p class="px-4 py-2 text-white align-baseline border rounded-lg bg-light-green">訂單完成</p>
              </div>
            </td>
          </tr>
          <!-- row 1 -->
          <tr class="flex flex-col border-gray-300 lg:table-row md:w-1/2 md:border lg:border-0 lg:border-b lg:border-black">
            <td class="hidden lg:table-cell lg:border-0">
              <img src="../../assets/image/product/product(8).jpg" class="w-32 mx-auto lg:w-24 lg:m-0" alt="img" />
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">商品名稱</p>
              <p>[ 1000片 ] - 春眠 (もの久保 )</p>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">數量</p>
              <div class="inline px-3 py-1 border lg:px-4 lg:py-2">1</div>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">金額</p>
              <p>$2000</p>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">訂購資訊</p>
              <div class="=">
                <p>名字: 王曉蕾</p>
                <p>電話:0912-345-429</p>
                <p>信箱 :wang@gmail.com</p>
                <p>地址: 252 新北市三芝區觀海街10號</p>
              </div>
            </td>
            <td class="border-b border-black rounded-none lg:border-0 md:border-0">
              <div class="flex">
                <div class="mr-3 form-control">
                  <label class="cursor-pointer label">
                    <input type="checkbox" checked="checked" class="checkbox checkbox-accent checkbox-md" />
                  </label>
                </div>
                <p class="px-4 py-2 text-white align-baseline border rounded-lg bg-light-green">訂單完成</p>
              </div>
            </td>
          </tr>
          <!-- row 1 -->
          <tr class="flex flex-col border-gray-300 lg:table-row md:w-1/2 md:border lg:border-0 lg:border-b lg:border-black">
            <td class="hidden lg:table-cell lg:border-0">
              <img src="../../assets/image/product/product(8).jpg" class="w-32 mx-auto lg:w-24 lg:m-0" alt="img" />
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">商品名稱</p>
              <p>[ 1000片 ] - 春眠 (もの久保 )</p>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">數量</p>
              <div class="inline px-3 py-1 border lg:px-4 lg:py-2">1</div>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">金額</p>
              <p>$2000</p>
            </td>
            <td class="border-b border-gray-300 lg:border-0">
              <p class="mb-1 font-bold lg:hidden">訂購資訊</p>
              <div class="=">
                <p>名字: 王曉蕾</p>
                <p>電話:0912-345-429</p>
                <p>信箱 :wang@gmail.com</p>
                <p>地址: 252 新北市三芝區觀海街10號</p>
              </div>
            </td>
            <td class="border-b border-black rounded-none lg:border-0 md:border-0">
              <div class="flex">
                <div class="mr-3 form-control">
                  <label class="cursor-pointer label">
                    <input type="checkbox" checked="checked" class="checkbox checkbox-accent checkbox-md" />
                  </label>
                </div>
                <p class="px-4 py-2 text-white align-baseline border rounded-lg bg-light-green">訂單完成</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 分頁 -->
    <PaginationItemVue :page="page"></PaginationItemVue>
  </div>
</template>

<script>
import PaginationItemVue from '../../components/PaginationItem.vue'
const { VITE_APP_API, VITE_APP_APIPATH } = import.meta.env

export default {
  data() {
    return {
      page: {}
    }
  },
  methods: {
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
    PaginationItemVue
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)puzzletoken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common['Authorization'] = token
    this.getPage()
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
