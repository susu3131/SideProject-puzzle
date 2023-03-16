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

    <div class="overflow-x-auto  ">
      <table class="table  w-full border border-dark">
        <!-- head -->
        <thead class="p-2">
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
          <tr class="hover">
            <td><img src=".././assets/image/product/1.jpg" class="w-24 mx-auto md:m-0" alt="img" /></td>
            <td class="hidden md:block">[ 1000片 ] - 春眠 (もの久保 )</td>
            <td>
              <div class="border px-3 py-1 md:px-4 md:py-2 inline">1</div>
            </td>
            <td>$2000</td>
            <td>
              <div class="hidden md:block">
                <p>名字: 王曉蕾</p>
                <p>電話:0912-345-429</p>
                <p>信箱 :wang@gmail.com</p>
                <p>地址: 252 新北市三芝區觀海街10號</p>
              </div>
              <button class="border px-2 py-1 hover:bg-secondary hover:text-white">查看訂單</button>
            </td>
            <td class="items-center hidden md:block">
              <div class="border">
                <i class="fa-solid fa-xmark px-3 py-2 text-base"></i>
              </div>
              <p class="border p-2">訂單完成</p>
            </td>
          </tr>
          <!-- row 2 -->
          <tr class="hover">
  
          </tr>
          <!-- row 3 -->
          <tr>

          </tr>
        </tbody>
      </table>
    </div>
    <!-- <table class="border-2 w-full  text-center md:text-left    p-1 ">
      <thead class=" text-center md:text-left">
        <tr  >
          <th >商品圖片</th>
          <th class="hidden">商品名稱</th>
          <th>數量</th>
          <th>金額</th>
          <th>
            <p>訂購資訊</p>
          </th>
          <th class="hidden">訂單狀態</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src=".././assets/image/product/1.jpg" class="w-24  mx-auto md:m-0" alt="img" /></td>
          <td class="hidden">[ 1000片 ] - 春眠 (もの久保 )</td>
          <td >
            <div class="border px-3 py-1 md:px-4 md:py-2 inline">1</div>
          </td>
          <td>$2000</td>
          <td>
            <div class="hidden">
              <p>名字: 王曉蕾</p>
              <p>電話:0912-345-429</p>
              <p>信箱 :wang@gmail.com</p>
              <p>地址: 252 新北市三芝區觀海街10號</p>
            </div>
            <button class="border px-2 py-1 hover:bg-secondary hover:text-white">查看訂單</button>
          </td>
          <td class="flex items-center hidden">
            <div class="border">
              <i class="fa-solid fa-xmark px-3 py-2 text-base"></i>
            </div>
            <p class="border p-2">訂單完成</p>
          </td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
