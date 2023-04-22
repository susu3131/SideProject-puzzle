<template>
  <div class="p-4 lg:px-20 md:py-10">
    <h2 class="text-left mb-4 text-black">訂單管理</h2>
    <!-- table -->
    <div class="overflow-x-auto lg:overflow-y-auto lg:h-[437px] overflow-ui mb-10">
      <table class="table w-full border table-auto text-black border-black">
        <!-- head -->
        <thead class="p-2 hidden lg:table-header-group lg:border-b lg:border-black">
          <tr class=" ">
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
          <tr class="flex flex-col lg:table-row md:w-1/2 md:border lg:border-0 lg:border-b border-gray-300 lg:border-black">
            <td class="hidden lg:table-cell lg:border-0">
              <img src=".././assets/image/product/product(8).jpg" class="lg:w-24 mx-auto lg:m-0 w-32" alt="img" />
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">商品名稱</p>
              <p>[ 1000片 ] - 春眠 (もの久保 )</p>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">數量</p>
              <div class="border px-3 py-1 lg:px-4 lg:py-2 inline">1</div>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">金額</p>
              <p>$2000</p>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">訂購資訊</p>
              <div class="=">
                <p>名字: 王曉蕾</p>
                <p>電話:0912-345-429</p>
                <p>信箱 :wang@gmail.com</p>
                <p>地址: 252 新北市三芝區觀海街10號</p>
              </div>
            </td>
            <td class="border-b lg:border-0 border-black md:border-0 rounded-none">
              <div class="flex">
                <div class="form-control mr-3">
                  <label class="cursor-pointer label">
                    <input type="checkbox" checked="checked" class="checkbox checkbox-accent checkbox-md" />
                  </label>
                </div>
                <p class="border px-4 align-baseline py-2 bg-light-green text-white rounded-lg">訂單完成</p>
              </div>
            </td>
          </tr>
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
              <p class="lg:hidden font-bold mb-1">數量</p>
              <div class="border px-3 py-1 lg:px-4 lg:py-2 inline">1</div>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">金額</p>
              <p>$2000</p>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">訂購資訊</p>
              <div class="=">
                <p>名字: 王曉蕾</p>
                <p>電話:0912-345-429</p>
                <p>信箱 :wang@gmail.com</p>
                <p>地址: 252 新北市三芝區觀海街10號</p>
              </div>
            </td>
            <td class="border-b lg:border-0 border-black md:border-0 rounded-none">
              <div class="flex">
                <div class="form-control mr-3">
                  <label class="cursor-pointer label">
                    <input type="checkbox" class="checkbox checkbox-accent checkbox-md border-primary" />
                  </label>
                </div>
                <p class="border px-4 align-baseline py-2 bg-primary text-white rounded-lg">訂單處理中</p>
              </div>
            </td>
          </tr>
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
              <p class="lg:hidden font-bold mb-1">數量</p>
              <div class="border px-3 py-1 lg:px-4 lg:py-2 inline">1</div>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">金額</p>
              <p>$2000</p>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">訂購資訊</p>
              <div class="=">
                <p>名字: 王曉蕾</p>
                <p>電話:0912-345-429</p>
                <p>信箱 :wang@gmail.com</p>
                <p>地址: 252 新北市三芝區觀海街10號</p>
              </div>
            </td>
            <td class="border-b lg:border-0 border-black md:border-0 rounded-none">
              <div class="flex">
                <div class="form-control mr-3">
                  <label class="cursor-pointer label">
                    <input type="checkbox" checked="checked" class="checkbox checkbox-accent checkbox-md" />
                  </label>
                </div>
                <p class="border px-4 align-baseline py-2 bg-light-green text-white rounded-lg">訂單完成</p>
              </div>
            </td>
          </tr>
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
              <p class="lg:hidden font-bold mb-1">數量</p>
              <div class="border px-3 py-1 lg:px-4 lg:py-2 inline">1</div>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">金額</p>
              <p>$2000</p>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">訂購資訊</p>
              <div class="=">
                <p>名字: 王曉蕾</p>
                <p>電話:0912-345-429</p>
                <p>信箱 :wang@gmail.com</p>
                <p>地址: 252 新北市三芝區觀海街10號</p>
              </div>
            </td>
            <td class="border-b lg:border-0 border-black md:border-0 rounded-none">
              <div class="flex">
                <div class="form-control mr-3">
                  <label class="cursor-pointer label">
                    <input type="checkbox" checked="checked" class="checkbox checkbox-accent checkbox-md" />
                  </label>
                </div>
                <p class="border px-4 align-baseline py-2 bg-light-green text-white rounded-lg">訂單完成</p>
              </div>
            </td>
          </tr>
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
              <p class="lg:hidden font-bold mb-1">數量</p>
              <div class="border px-3 py-1 lg:px-4 lg:py-2 inline">1</div>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">金額</p>
              <p>$2000</p>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">訂購資訊</p>
              <div class="=">
                <p>名字: 王曉蕾</p>
                <p>電話:0912-345-429</p>
                <p>信箱 :wang@gmail.com</p>
                <p>地址: 252 新北市三芝區觀海街10號</p>
              </div>
            </td>
            <td class="border-b lg:border-0 border-black md:border-0 rounded-none">
              <div class="flex">
                <div class="form-control mr-3">
                  <label class="cursor-pointer label">
                    <input type="checkbox" checked="checked" class="checkbox checkbox-accent checkbox-md" />
                  </label>
                </div>
                <p class="border px-4 align-baseline py-2 bg-light-green text-white rounded-lg">訂單完成</p>
              </div>
            </td>
          </tr>
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
              <p class="lg:hidden font-bold mb-1">數量</p>
              <div class="border px-3 py-1 lg:px-4 lg:py-2 inline">1</div>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">金額</p>
              <p>$2000</p>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">訂購資訊</p>
              <div class="=">
                <p>名字: 王曉蕾</p>
                <p>電話:0912-345-429</p>
                <p>信箱 :wang@gmail.com</p>
                <p>地址: 252 新北市三芝區觀海街10號</p>
              </div>
            </td>
            <td class="border-b lg:border-0 border-black md:border-0 rounded-none">
              <div class="flex">
                <div class="form-control mr-3">
                  <label class="cursor-pointer label">
                    <input type="checkbox" checked="checked" class="checkbox checkbox-accent checkbox-md" />
                  </label>
                </div>
                <p class="border px-4 align-baseline py-2 bg-light-green text-white rounded-lg">訂單完成</p>
              </div>
            </td>
          </tr>
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
              <p class="lg:hidden font-bold mb-1">數量</p>
              <div class="border px-3 py-1 lg:px-4 lg:py-2 inline">1</div>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">金額</p>
              <p>$2000</p>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">訂購資訊</p>
              <div class="=">
                <p>名字: 王曉蕾</p>
                <p>電話:0912-345-429</p>
                <p>信箱 :wang@gmail.com</p>
                <p>地址: 252 新北市三芝區觀海街10號</p>
              </div>
            </td>
            <td class="border-b lg:border-0 border-black md:border-0 rounded-none">
              <div class="flex">
                <div class="form-control mr-3">
                  <label class="cursor-pointer label">
                    <input type="checkbox" checked="checked" class="checkbox checkbox-accent checkbox-md" />
                  </label>
                </div>
                <p class="border px-4 align-baseline py-2 bg-light-green text-white rounded-lg">訂單完成</p>
              </div>
            </td>
          </tr>
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
              <p class="lg:hidden font-bold mb-1">數量</p>
              <div class="border px-3 py-1 lg:px-4 lg:py-2 inline">1</div>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">金額</p>
              <p>$2000</p>
            </td>
            <td class="border-b lg:border-0 border-gray-300">
              <p class="lg:hidden font-bold mb-1">訂購資訊</p>
              <div class="=">
                <p>名字: 王曉蕾</p>
                <p>電話:0912-345-429</p>
                <p>信箱 :wang@gmail.com</p>
                <p>地址: 252 新北市三芝區觀海街10號</p>
              </div>
            </td>
            <td class="border-b lg:border-0 border-black md:border-0 rounded-none">
              <div class="flex">
                <div class="form-control mr-3">
                  <label class="cursor-pointer label">
                    <input type="checkbox" checked="checked" class="checkbox checkbox-accent checkbox-md" />
                  </label>
                </div>
                <p class="border px-4 align-baseline py-2 bg-light-green text-white rounded-lg">訂單完成</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 分頁 -->
    <div class="flex justify-center">
      <div class="btn-group">
        <button class="btn btn-md bg-white active:bg-secondary hover:bg-gray-200 hover:ring-gray-200 text-black">«</button>
        <button class="btn btn-md bg-white active:bg-secondary hover:bg-gray-200 hover:ring-gray-200 text-black btn-active">1</button>
        <button class="btn btn-md bg-white active:bg-secondary hover:bg-gray-200 hover:ring-gray-200 text-black">2</button>
        <button class="btn btn-md bg-white active:bg-secondary hover:bg-gray-200 hover:ring-gray-200 text-black">3</button>
        <button class="btn btn-md bg-white active:bg-secondary hover:bg-gray-200 hover:ring-gray-200 text-black">4</button>
        <button class="btn btn-md bg-white active:bg-secondary hover:bg-gray-200 hover:ring-gray-200 text-black">»</button>
      </div>
    </div>


    驗證失敗遮擋畫面
    <div v-if="viewIsHidden" class=" h-screen w-screen   bg-puzzle  blur-md  fixed top-0 left-0 z-20"> </div>
    <!-- toast -->
    <div class="toast  toast-end top-0 w-[300px]   z-30" v-if="toast.toastType">
      <div class="alert alert-success text-white  ">
        <p  class="mx-auto">{{ toast.toastText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_API } = import.meta.env
export default {
  data() {
    return {
      viewIsHidden: true,
      toast: {
        toastText: '',
        toastType: false
      }
    }
  },
  methods: {
    checkLogin() {
      this.axios
        .post(`${VITE_APP_API}/api/user/check`)
        .then(() => {
          this.viewIsHidden = false;
          this.toast.toastText = "登入成功";
          this.toast.toastType = true;
          setTimeout(() => {
            this.toast.toastType = false;
          }, 2000);
          })
        .catch((err) => {
          this.toast.toastText = err.response.data.message ;
          this.toast.toastType = true;
          setTimeout(() => {
            this.toast.toastType = false;
            this.$router.push({ path: '/index' })
          }, 2500);
          
        })

    }
  },

  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)puzzletoken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common['Authorization'] = token
    this.checkLogin()
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
