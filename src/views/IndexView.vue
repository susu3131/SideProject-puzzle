<template>
  <div class="py-10">
    <div class="h-[80vh] flex pb-10">
      <!-- 直立 -->
      <div class="flex">
        <div class="silder flex-1 transition-all duration-1000 hover:flex-[3.5] mr-1">
          <img src="../assets/image/index/banner1.jpg" class="h-full w-full object-cover" alt="" />
        </div>
        <div class="silder flex-1 transition-all duration-1000 hover:flex-[3.5] mr-1">
          <img src="../assets/image/index/banner2.jpg" class="h-full w-full object-cover" alt="" />
        </div>
                <div class="silder flex-1 transition-all duration-1000 hover:flex-[3.5] mr-1">
          <img src="../assets/image/index/banner3.jpg" class="h-full w-full object-cover" alt="" />
        </div>


        <div class="silder flex-1 transition-all duration-1000 hover:flex-[3.5] mr-1">
          <img src="../assets/image/index/banner4.jpg" class="h-full w-full object-cover" alt="" />
        </div>
                <div class="silder flex-1 transition-all duration-1000 hover:flex-[3.5] mr-1">
          <img src="../assets/image/index/banner5.jpg" class="h-full w-full object-cover" alt="" />
        </div>
      </div>
      <!-- 橫立 -->
      <div class="bg-dark w-[800px] h-[700px]"></div>
    </div>

    <!-- banner -->
    <!-- <div class="bg-banner h-[90vh] bg-no-repeat relative">
      <div class="bg-primary text-center w-[500px] text-5xl py-5 px-10 text-bold text-white opacity-90 absolute top-[65%] right-[22%]">
        <p class="mb-2 opacity-100">屬於你的拼圖世界</p>
        <p>創造拼圖奇幻旅程</p>
      </div>
    </div> -->
    <!-- new -->
    <div class="bg-pink flex justify-center md:p-4 py-8">
      <div class="container lg:flex justify-center">
        <h3 class="text-white lg:mr-5 text-2xl mb-3">最新消息</h3>
        <div class="bg-white rounded-md md:p-3 py-5 px-4 lg:w-[70%]">
          <p>
            <span v-for="(char, index) in chars" :key="index">{{ char }}</span>
          </p>
          <div class="flex justify-between mt-5 text-sm">
            <p>[ 拼圖趣 Puzzle ]</p>
            <p>2023/01/03</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 關於我們 -->
    <div class="container py-10 lg:py-16">
      <div class="flex justify-center relative mb-10 items-center sm:mb-8 md:mb-10 lg:mb-14">
        <i class="fa-solid fa-store text-[28px] mr-3"></i>
        <h2>關於我們</h2>
      </div>

      <div class="lg:flex justify-center mb-10 sm:mb-12 bg-opacity-70 bg-white py-10 sm:pt-5 sm:pb-8 lg:py-10 px-4 border border-primary lg:w-5/6 xl:w-2/3 lg:mx-auto md:mb-14">
        <div class="sm:flex items-center sm:mr-10 mb-8 sm:mb-6 justify-center">
          <img src="../assets/image/logo.png" class="w-[80px] sm:w-[90px] mx-auto sm:mx-0" alt="" />
          <p class="text-primary font-black sm:text-3xl text-2xl text-center">拼圖趣 Puzzle</p>
        </div>
        <p class="sm:hidden">我們是拼圖趣Puzzle ，很榮幸有這機會為大家服務，本店主要經營販售奇幻風格拼圖，與各大繪師畫家進行合作，想要挑選最優質材質的拼圖嗎 ? 想要蒐集最特別奇幻風格 ?缺片提供補片服務，還享有不定期優惠折扣 !歡迎大家選購喜愛的拼圖，祝購物愉快 !</p>
        <p class="hidden sm:block pl-24 md:pl-32 lg:pl-0">我們是拼圖趣Puzzle ，很榮幸有這機會為大家服務 <br />本店主要經營販售奇幻風格拼圖，與各大繪師畫家進行合作 <br />想要挑選最優質材質的拼圖嗎 ? 想要蒐集最特別奇幻風格 ? <br />缺片提供補片服務，還享有不定期優惠折扣 ! <br />歡迎大家選購喜愛的拼圖，祝購物愉快 !</p>
      </div>

      <div class="sm:flex justify-center text-xl sm:flex-wrap lg:w-3/4 xl:w-2/3 lg:mx-auto">
        <div class="text-center sm:w-1/2 lg:w-1/4 mb-14 sm:mb-20 md:mb-22 lg:mb-0">
          <i class="fa-solid fa-puzzle-piece text-5xl lg:text-4xl sm:mb-2 mb-4 text-pink"></i>
          <p>精選優質拼圖</p>
        </div>
        <div class="text-center sm:w-1/2 lg:w-1/4 mb-14 sm:mb-20 md:mb-22 lg:mb-0">
          <i class="fa-solid fa-dragon text-5xl lg:text-4xl sm:mb-2 mb-4 text-pink"></i>
          <p>奇幻風格拼圖</p>
        </div>
        <div class="text-center sm:w-1/2 lg:w-1/4 mb-14 sm:mb-0">
          <i class="fa-solid fa-arrow-right-arrow-left text-5xl lg:text-4xl sm:mb-2 mb-4 text-pink"></i>
          <p>缺片換片服務</p>
        </div>
        <div class="text-center sm:w-1/2 lg:w-1/4">
          <i class="fa-solid fa-sack-dollar text-5xl lg:text-4xl sm:mb-2 mb-4 text-pink"></i>
          <p>不定期優惠折扣</p>
        </div>
      </div>
    </div>
    <!-- 新品上市 -->
    <div class="container py-10">
      <div class="flex justify-center items-center">
        <div class="flex justify-center items-center mb-20 bg-primary text-white px-10 py-2 xl:py-3 xl:px-12">
          <i class="fa-solid fa-puzzle-piece text-[28px] mr-3"></i>
          <h2>新品上市</h2>
        </div>
      </div>

      <div class="md:grid xl:grid-cols-3 gap-4 items-center">
        <!-- 左 -->
        <div class="text-center mx-auto mb-6 md:mb-0">
          <div class="relative">
            <div class="go-product-button xl:hover:scale-125 xl:contrast-75 xl:hover:contrast-100 xl:hover:drop-shadow-xl xl:after:content-['春眠(もの久保)'] xl:duration-300">
              <img src="../assets/image/product/product(8).jpg" class="md:w-[300px] mx-auto" alt="" />
            </div>
          </div>
          <p class="mt-2">[ 1000片 ] - 春眠 (もの久保 )</p>
          <p class="text-pink text-lg mt-1">售價: NT $1300</p>
        </div>

        <!-- 中 -->
        <div class="md:grid md:grid-cols-2 md:gap-6 xl:block md:my-8 xl:my-0">
          <div class="text-center mx-auto lg:mb-5 xl:pb-8">
            <div class="go-product-button xl:hover:scale-125 xl:contrast-75 xl:hover:contrast-100 xl:after:text-white xl:hover:drop-shadow-xl xl:after:content-['相遇(もの久保)'] xl:duration-300">
              <img src="../assets/image/product/product(9).jpg" class="mx-auto h-[200px] lg:h-[250px]" alt="" />
            </div>
            <p class="mt-2">[ 1200片 ] - 相遇 (もの久保 )</p>
            <p class="text-pink text-lg">售價: NT $1400</p>
          </div>
          <div class="text-center mx-auto mb-6 md:mb-0">
            <div class="go-product-button xl:hover:scale-125 xl:contrast-75 xl:hover:contrast-100 xl:after:text-white xl:hover:drop-shadow-xl xl:after:content-['凝望(もの久保)'] xl:duration-300">
              <img src="../assets/image/product/product(7).jpg" class="mx-auto h-[200px] lg:h-[250px]" alt="" />
            </div>
            <p class="mt-2">[ 1200片 ] - 凝望 (もの久保 )</p>
            <p class="text-pink text-lg mt-1">售價: NT $1400</p>
          </div>
        </div>
        <!-- 右 -->
        <div class="text-center mx-auto">
          <div class="go-product-button xl:hover:scale-125 xl:contrast-75 xl:hover:contrast-100 xl:after:text-white xl:hover:drop-shadow-xl xl:after:content-['奇幻鹿'] xl:duration-300">
            <img src="../assets/image/product/product(10).jpg" class="md:w-[300px] xl:w-[300px] mx-auto" alt="" />
          </div>

          <p class="mt-2 xl:mt-6">[ 1000片 ] - 奇幻鹿</p>
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

      <div class="md:grid xl:grid-cols-3 md:grid-cols-2 gap-4">
        <!-- 1 -->
        <div class="mb-6 md:mb-0">
          <p class="text-light-green text-center text-2xl font-black mb-3">NO.1</p>
          <div class="relative overflow-hidden">
            <i class="fa-solid fa-cart-shopping absolute text-white top-3 left-3 md:hidden text-lg opacity-90"></i>
            <div class="md:hover:scale-110 add-cart add-cart-text md:before:content-['狼(もの久保)'] duration-300 text-center">
              <img src="../assets/image/product/product(5).jpg" class="w-full" alt="no1image" />
              <!-- phone button -->
              <button class="py-1 px-5 rounded-md text-white bg-primary mt-4 md:hidden">加入購物車</button>
            </div>
          </div>
        </div>
        <!-- 2 -->
        <div class="mb-6 md:mb-0">
          <p class="text-light-green text-center text-2xl font-black mb-3">NO.2</p>
          <div class="relative overflow-hidden">
            <i class="fa-solid fa-cart-shopping absolute text-white top-3 left-3 md:hidden text-lg opacity-90"></i>
            <div class="md:hover:scale-110 add-cart add-cart-text md:before:content-['相遇(もの久保)'] duration-300 text-center">
              <img src="../assets/image/product/product(2).jpg" class="w-full" alt="no1image" />
              <!-- phone button -->
              <button class="py-1 px-5 rounded-md text-white bg-primary mt-4 md:hidden">加入購物車</button>
            </div>
          </div>
        </div>
        <!-- 3 -->
        <div class="mb-6 md:mb-0">
          <p class="text-light-green text-center text-2xl font-black mb-3">NO.3</p>
          <div class="relative overflow-hidden">
            <i class="fa-solid fa-cart-shopping absolute text-white top-3 left-3 md:hidden text-lg opacity-90"></i>
            <div class="md:hover:scale-110 add-cart add-cart-text md:before:content-['山村貓語(AFU)'] duration-300 text-center">
              <img src="../assets/image/product/product(3).jpg" class="w-full" alt="no1image" />
              <!-- phone button -->
              <button class="py-1 px-5 rounded-md text-white bg-primary mt-4 md:hidden">加入購物車</button>
            </div>
          </div>
        </div>
        <!-- 4 -->
        <div class="xl:mt-5 mb-6 md:mb-0">
          <p class="text-light-green text-center text-2xl font-black mb-3">NO.4</p>
          <div class="relative overflow-hidden">
            <i class="fa-solid fa-cart-shopping absolute text-white top-3 left-3 md:hidden text-lg opacity-90"></i>
            <div class="md:hover:scale-110 add-cart add-cart-text md:before:content-['雪(もの久保)'] duration-300 text-center">
              <img src="../assets/image/product/product(6).jpg" class="w-full" alt="no1image" />
              <!-- phone button -->
              <button class="py-1 px-5 rounded-md text-white bg-primary mt-4 md:hidden">加入購物車</button>
            </div>
          </div>
        </div>
        <!-- 5 -->
        <div class="xl:mt-5 mb-6 md:mb-0">
          <p class="text-light-green text-center text-2xl font-black mb-3">NO.5</p>

          <div class="relative overflow-hidden">
            <i class="fa-solid fa-cart-shopping absolute text-white top-3 left-3 md:hidden text-lg opacity-90"></i>
            <div class="md:hover:scale-110 add-cart add-cart-text md:before:content-['NightMarket(AFU)'] duration-300 text-center">
              <img src="../assets/image/product/product(1).jpg" class="w-full" alt="no1image" />
              <!-- phone button -->
              <button class="py-1 px-5 rounded-md text-white bg-primary mt-4 md:hidden">加入購物車</button>
            </div>
          </div>
        </div>
        <!-- 6 -->
        <div class="xl:mt-5 mb-6 md:mb-0">
          <p class="text-light-green text-center text-2xl font-black mb-3">NO.6</p>
          <div class="relative overflow-hidden">
            <i class="fa-solid fa-cart-shopping absolute text-white top-3 left-3 md:hidden text-lg opacity-90"></i>
            <div class="md:hover:scale-110 add-cart add-cart-text md:before:content-['幻想物語(CullenCole)'] duration-300 text-center">
              <img src="../assets/image/product/product(4).jpg" class="w-full" alt="no1image" />
              <!-- phone button -->
              <button class="py-1 px-5 rounded-md text-white bg-primary mt-4 md:hidden">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// snowStorm.autoStart = false;
// snowStorm.snowColor = '#ffffff';
// snowStorm.flakesMaxActive = 300;    // 顯示雪

export default {
  data() {
    return {
      newInfo: '各位顧客您好 ， 我們的拼圖店即將開業！我們將於 2023 / 01 / 05 正式開幕，在我們的拼圖店，您可以找到各種各樣的拼圖，從初學者級別到專業級別，並且還有各種主題和類型可供選擇，我們也會有一些獨家和限量版的拼圖，在我們的拼圖店，您可以找到各種各樣的拼圖，還有各種主題和類型可供選擇，我們也會陸續提供一些獨家限量的拼圖，感謝您的關注和支持，我們期待與您相見！',
      showInfo: '',
      options: {
        licenseKey: 'YOUR_KEY_HEERE',
        menu: '#menu',
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      }
    }
  },
  computed: {
    chars() {
      return this.showInfo.split('')
    }
  },
  methods: {
    // 秀出公告
    showNewInfo() {
      let i = 0
      setInterval(() => {
        if (i < this.newInfo.length) {
          this.showInfo += this.newInfo.charAt(i)
          i++
        }
      }, 80)
    }
  },
  mounted() {
    console.log(this.newInfo.length)
    this.showNewInfo()
  }
}
</script>

<style lang="scss" scoped>
//  熱銷排行 hover效果
@media (min-width: 768px) {
  .add-cart {
    @apply after:content-['加入購物車'] after:text-sm after:absolute md:after:bottom-14 md:after:right-28 lg:after:bottom-24 lg:after:right-44 xl:after:bottom-[70px] xl:after:right-[140px] 2xl:after:right-44  2xl:after:bottom-24  after:py-1 after:px-5 after:rounded-md after:text-white after:border after:bg-primary after:bg-opacity-90 after:opacity-0;
    &:hover:after {
      @apply opacity-100 duration-200;
    }
  }
  .add-cart-text {
    //自行加入商品名稱
    @apply before:absolute before:text-xl  before:w-full before:bg-opacity-50  before:bg-dark before:h-full  before:text-white before:flex before:justify-center before:items-center before:opacity-0;
    &:hover:before {
      @apply opacity-100 duration-500;
    }
  }
  .go-product-button {
    @apply after:text-2xl after:font-black  after:bottom-5 after:absolute after:w-full after:left-1 after:opacity-0;
    &:hover:before,
    &:hover:after {
      @apply opacity-100 duration-300;
    }
  }
}
</style>
