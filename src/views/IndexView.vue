<template>
  <div class="py-10">
    <!-- banner -->
    <div class="bg-banner h-[90vh] bg-no-repeat relative">
      <div class="bg-primary text-center w-[500px] text-5xl py-5 px-10 text-bold text-white opacity-90 absolute top-[65%] right-[22%]">
        <p class="mb-2 opacity-100">屬於你的拼圖世界</p>
        <p>創造拼圖奇幻旅程</p>
      </div>
    </div>
    <!-- new -->
    <div class="bg-pink flex justify-center p-4">
      <div class="container flex justify-center">
        <h3 class="text-white p-3 text-2xl">最新消息</h3>
        <div class="bg-white rounded-md p-3 w-[70%]">
          <p>各位顧客您好 ， 我們的拼圖店即將開業！我們將於 2023 / 01 / 05 正式開幕，在我們的拼圖店，您可以找到各種各樣的拼圖，從初學者級別到專業級別，並且還有各種主題和類型可供選擇，我們也會有一些獨家和限量版的拼圖，在我們的拼圖店，您可以找到各種各樣的拼圖，還有各種主題和類型可供選擇，我們也會陸續提供一些獨家限量的拼圖，感謝您的關注和支持，我們期待與您相見！</p>
          <div class="flex justify-between">
            <p>[ 拼圖趣 Puzzle ]</p>
            <p>2023/01/03</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 關於我們 -->
    <div class="container py-10">
      <div class="flex justify-center relative mb-10 items-center">
        <i class="fa-solid fa-store text-[28px] mr-3"></i>
        <h2>關於我們</h2>
      </div>

      <div class="flex justify-center mb-10">
        <div class="flex items-center mr-10">
          <img src="../assets/image/logo.png" class="w-[100px]" alt="" />
          <p class="text-primary font-black text-3xl">拼圖趣 Puzzle</p>
        </div>
        <p>我們是拼圖趣Puzzle ，很榮幸有這機會為大家服務 <br />本店主要經營販售奇幻風格拼圖，與各大繪師畫家進行合作 <br />想要挑選最優質材質的拼圖嗎 ? 想要蒐集最特別奇幻風格 ? <br />缺片提供補片服務，還享有不定期優惠折扣 ! <br />歡迎大家選購喜愛的拼圖，祝購物愉快 !</p>
      </div>

      <div class="flex justify-center text-xl">
        <div class=" mr-16 text-center  ">
          <i class="fa-solid fa-puzzle-piece text-4xl mb-2 text-pink"></i>
          <p>精選優質拼圖</p>
        </div>
        <div class="mr-16 text-center  ">
          <i class="fa-solid fa-dragon text-4xl mb-2 text-pink"></i>
          <p>奇幻風格拼圖</p>
        </div>
        <div class="mr-16 text-center  ">
          <i class="fa-solid fa-arrow-right-arrow-left text-4xl mb-2 text-pink"></i>
          <p>缺片換片服務</p>
        </div>
        <div class=" text-center  ">
          <i class="fa-solid fa-sack-dollar text-4xl mb-2 text-pink"></i>
          <p>不定期優惠折扣</p>
        </div>
      </div>
    </div>
    <!-- 新品上市 -->
    <div class="container py-10">
      <div class="flex justify-center items-center">
        <div class="flex justify-center items-center mb-10 w-1/6 bg-primary text-white p-3">
          <i class="fa-solid fa-puzzle-piece text-[28px] mr-3"></i>
          <!-- <i class="fa-solid fa-ranking-star mr-3 text-[28px]"></i> -->
          <h2>新品上市</h2>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4 items-center">
        <div class="text-center mx-auto">
          <img src="../assets/image/product/product(8).jpg" class="w-[300px]" alt="" />
          <p class="mt-3">[ 1000片 ] - 春眠 (もの久保 )</p>
          <p class="text-pink text-lg mt-1">售價: NT $1300</p>
        </div>
        <div>
          <div class="text-center mx-auto mb-5">
            <img src="../assets/image/product/product(9).jpg" alt="" />
            <p class="mt-3">[ 1200片 ] - 相遇 (もの久保 )</p>
            <p class="text-pink text-lg mt-1">售價: NT $1400</p>
          </div>
          <div class="text-center mx-auto">
            <img src="../assets/image/product/product(7).jpg" alt="" />
            <p class="mt-3">[ 1200片 ] - 凝望 (もの久保 )</p>
            <p class="text-pink text-lg mt-1">售價: NT $1400</p>
          </div>
        </div>
        <div class="text-center mx-auto">
          <img src="../assets/image/product/product(10).jpg" class="w-[300px]" alt="" />
          <p class="mt-3">[ 1000片 ] - 奇幻鹿</p>
          <p class="text-pink text-lg mt-1">售價: NT $800</p>
        </div>
      </div>
    </div>
    <!-- 熱銷排行 -->
    <div class="container py-10">
      <div class="flex justify-center relative mb-10">
        <i class="fa-solid fa-ranking-star mr-3 text-[28px]"></i>
        <h2>熱銷排行</h2>
        <div class="after:border-primary after:content-[''] after:w-1/6 after:absolute after:-translate-x-1/2 after:-bottom-4 after:left-1/2 after:border-b-[4px]"></div>
      </div>

      <div class="grid grid-cols-3 gap-4">
        <div>
          <p class="text-light-green text-center text-2xl font-black mb-3">NO.1</p>
          <div class="relative">
            <img src="../assets/image/product/product(5).jpg" alt="no1image" />
            <button class="btn btn-sm bg-primary absolute right-4 bottom-4 text-lg">加入購物車</button>
          </div>
        </div>
        <!-- 1 -->
        <div>
          <p class="text-light-green text-center text-2xl font-black mb-3">NO.2</p>
          <div class="relative">
            <img src="../assets/image/product/product(2).jpg" alt="no1image" />
            <button class="btn btn-sm bg-primary absolute right-4 bottom-4 text-lg">加入購物車</button>
          </div>
          <!-- 收藏 -->
          <i class="fa-solid fa-heart"></i>
          <i class="fa-regular fa-heart"></i>
        </div>
        <!-- 1 -->
        <div>
          <p class="text-light-green text-center text-2xl font-black mb-3">NO.3</p>
          <div class="relative">
            <img src="../assets/image/product/product(3).jpg" alt="no1image" />
            <button class="btn btn-sm bg-primary absolute right-4 bottom-4 text-lg">加入購物車</button>
          </div>
        </div>
        <!-- 1 -->
        <div>
          <p class="text-light-green text-center text-2xl font-black mb-3">NO.4</p>
          <div class="relative">
            <img src="../assets/image/product/product(6).jpg" alt="no1image" />
            <button class="btn btn-sm bg-primary absolute right-4 bottom-4 text-lg">加入購物車</button>
          </div>
        </div>

        <!-- 1 -->
        <div>
          <p class="text-light-green text-center text-2xl font-black mb-3">NO.5</p>
          <div class="relative">
            <img src="../assets/image/product/product(1).jpg" alt="no1image" />
            <button class="btn btn-sm bg-primary absolute right-4 bottom-4 text-lg">加入購物車</button>
          </div>
        </div>

        <!-- 1 -->
        <div>
          <p class="text-light-green text-center text-2xl font-black mb-3">NO.6</p>
          <div class="relative">
            <img src="../assets/image/product/product(4).jpg" alt="no1image" />
            <button class="btn btn-sm bg-primary absolute right-4 bottom-4 text-lg">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
