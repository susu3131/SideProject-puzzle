<template>
  <div class="about md:py-10 container">
    <!-- banner -->
    <img src="../assets/image/product-banner.jpg" alt="" class="h-24 w-full object-cover object-center sm:h-auto" />
    <!-- nav -->
    <div class="bg-pink text-white lg:flex justify-between items-center">
      <label for="coupon-modal" class="border bg-white py-2 lg:w-[230px] lg:justify-center px-4 w-full text-black flex items-center lg:rounded-lg hover:bg-secondary lg:hover:outline-white lg:hover:outline lg:ml-4">
        <i class="fa-solid fa-gift mr-2"></i>
        <p class="">領取本日優惠卷</p>
      </label>
      <div class="flex justify-around md:w-full md:mr-5 text-center lg:pl-5">
        <RouterLink to="/allpuzzle" @click="getPuzzleProduct('all')" class="border-r sm:border-0 lg:text-xl hover:bg-white lg:hover:scale-105 xl:hover:scale-125 duration-300 px-5 py-4 md:py-4 md:px-6 lg:px-10 lg:py-6 hover:text-primary">全部拼圖</RouterLink>
        <RouterLink to="/newpuzzle" @click="getPuzzleProduct('new')" class="border-r sm:border-0 lg:text-xl hover:bg-white lg:hover:scale-105 xl:hover:scale-125 duration-300 px-5 py-4 md:py-4 md:px-6 lg:px-10 lg:py-6 hover:text-primary">新品上市</RouterLink>
        <RouterLink to="/salepuzzle" @click="getPuzzleProduct('sale')" class="border-r sm:border-0 lg:text-xl hover:bg-white lg:hover:scale-105 xl:hover:scale-125 duration-300 px-5 py-4 md:py-4 md:px-6 lg:px-10 lg:py-6 hover:text-primary">精選拼圖</RouterLink>
        <RouterLink to="/puzzlepiece" @click="getPuzzleProduct('piece')" class="border-r sm:border-0 lg:text-xl hover:bg-white lg:hover:scale-105 xl:hover:scale-125 duration-300 px-5 py-4 md:py-4 md:px-6 lg:px-10 lg:py-6 hover:text-primary">拼圖片數</RouterLink>
        <RouterLink to="/onlypuzzle" @click="getPuzzleProduct('only')" class="lg:text-xl hover:bg-white xl:hover:scale-125 lg:hover:scale-105 duration-300 md:py-4 px-5 py-4 md:px-6 lg:px-10 lg:py-6 hover:text-primary">限量拼圖</RouterLink>
      </div>
    </div>

    <RouterView></RouterView>

    <CouponModalVue></CouponModalVue>
    <ToastItem :toast="toast"></ToastItem>

  </div>
</template>

<script>
import CouponModalVue from '../components/CouponModal.vue'
import ToastItem from '../components/ToastItem.vue'
const { VITE_APP_API, VITE_APP_APIPATH } = import.meta.env

export default {
  data() {
    return {
      puzzleProducts:[],
      tempPuzzleProduct :{},
      toast: {
        viewIsHidden: false,
        toastText: '',
        toastType: false
      }
    }
  },
  methods: {
    getPuzzleProduct(category,page = 1) {
      if( category == 'all' ){
        this.$http
        .get(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/products`)
        .then((res) => {
          console.log(res.data.products);
          this.puzzleProducts = res.data.products
          console.log('取得全部產品')
        })
        .catch((err) => console.log(err.response.data.message))
      }
      else if (category == 'new'){
        this.$http
        .get(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/products/?category=新品上市`)
        .then((res) => {
          console.log(res.data.products);
          this.puzzleProducts = res.data.products
          console.log('取得新產品')
        })
        .catch((err) => console.log(err.response.data.message))
      }
      else if (category == 'sale'){
        this.$http
        .get(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/products/?category=精選拼圖`)
        .then((res) => {
          console.log(res.data.products);
          this.puzzleProducts = res.data.products
          console.log('取得精選產品')
        })
        .catch((err) => console.log(err.response.data.message))
      }
      else if (category == 'piece'){
        this.puzzleProducts = []
        this.$http
        .get(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/products/?category=500片`)
        .then((res) => {
          this.puzzleProducts.push(...res.data.products);
        })
        .catch((err) => console.log(err.response.data.message))
        this.$http
        .get(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/products/?category=1000片`)
        .then((res) => {
          this.puzzleProducts.push(...res.data.products);
        })
        .catch((err) => console.log(err.response.data.message))
        this.$http
        .get(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/products/?category=2000片以上`)
        .then((res) => {
          this.puzzleProducts.push(...res.data.products);
        })
        .catch((err) => console.log(err.response.data.message))
        console.log('取得拼圖片數')
      }
      else if (category == 'only'){
        this.$http
        .get(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/products/?category=獨家/客製拼圖`)
        .then((res) => {
          console.log(res.data.products);
          this.puzzleProducts = res.data.products
          console.log('取得限量拼圖')
        })
        .catch((err) => console.log(err.response.data.message))
      }
    },
  },
  components: {
    ToastItem,
    CouponModalVue
  }
}
</script>

<style></style>
