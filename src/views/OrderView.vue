<template>
  <div class="p-3 lg:px-20">
    <div class="flex items-center justify-between">
      <h2 class="text-left mb-4">訂單管理</h2>
      <!-- home  -->
      <div class="bg-white opacity-80">
        <div class="text-blue-600 text-xl">
          <RouterLink to="/index">回到首頁</RouterLink>
          <RouterLink to="/g" class="ml-5">404 測試</RouterLink>
        </div>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="table w-full border table-auto text-black border-black">
        <!-- head -->
        <thead class="p-2 hidden md:table-header-group">
          <tr>
            <th>商品圖片</th>
            <th class="hidden md:block">商品名稱</th>
            <th>數量</th>
            <th>金額</th>
            <th>訂購資訊</th>
            <th class="hidden md:block">訂單狀態</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr class="flex flex-col border md:table-row">
            <td class="hidden ">
              <img src=".././assets/image/product/1.jpg" class="md:w-24 mx-auto md:m-0 w-32" alt="img" />
            </td>
            <td class="border-b border-gray-300">
              <p class="md:hidden font-bold mb-1">商品名稱</p>
              <p>[ 1000片 ] - 春眠 (もの久保 )</p>
            </td>
            <td class="border-b border-gray-300">
              <p class="md:hidden font-bold mb-1">數量</p>
              <div class="border px-3 py-1 md:px-4 md:py-2 inline">1</div>
            </td>
            <td class="border-b border-gray-300">
              <p class="md:hidden font-bold mb-1">金額</p>
              <p>$2000</p>
            </td>
            <td class="border-b border-gray-300">
              <p class="md:hidden font-bold mb-1">訂購資訊</p>
              <div class="=">
                <p>名字: 王曉蕾</p>
                <p>電話:0912-345-429</p>
                <p>信箱 :wang@gmail.com</p>
                <p>地址: 252 新北市三芝區觀海街10號</p>
              </div>
            </td>
            <td class="items-center flex">
              <div class="border">
                <i class="fa-solid fa-xmark px-3 py-2 text-base"></i>
              </div>
              <p class="border p-2">訂單完成</p>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
