<template>
  <div class="py-10">
    <div class="flex  justify-between px-2">
      <button class="flex items-center  text-lg hover:font-semibold hover:scale-110 ">
        <i class="fa-solid fa-circle-chevron-left mr-4"></i>
        <p>上一頁</p>
      </button>

      <button class="flex items-center text-lg  hover:font-semibold hover:scale-110 ">
        <p>下一頁</p>
        <i class="fa-solid fa-circle-chevron-right ml-4"></i>
      </button>
    </div>

    <!-- product -->
    <ul class="grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  sm:gap-6  mt-5">
      <li class=" text-center mb-5 ">
        <img src="../../assets/image/product/product(1).jpg" alt="" class=" rounded-md mx-auto">
        <h3 class="mt-2    md:text-lg xl:text-xl">[ 1200片 ] - 相遇 (もの久保 )</h3>
        <p class="md:text-xl text-pink  font-medium">售價 : NT $ 1400 </p>
        <button class="px-9 py-1 mt-2 text-white rounded-md bg-primary  duration-300     hover:scale-110">加入購物車</button>
      </li>
      <li class=" text-center mb-5 ">
        <img src="../../assets/image/product/product(1).jpg" alt="" class=" rounded-md mx-auto">
        <h3 class="mt-2    md:text-lg xl:text-xl">[ 1200片 ] - 相遇 (もの久保 )</h3>
        <p class="md:text-xl text-pink  font-medium">售價 : NT $ 1400 </p>
        <button class="px-9 py-1 mt-2 text-white rounded-md bg-primary  duration-300     hover:scale-110">加入購物車</button>
      </li>
      <li class=" text-center mb-5 ">
        <img src="../../assets/image/product/product(1).jpg" alt="" class=" rounded-md mx-auto">
        <h3 class="mt-2    md:text-lg xl:text-xl">[ 1200片 ] - 相遇 (もの久保 )</h3>
        <p class="md:text-xl text-pink  font-medium">售價 : NT $ 1400 </p>
        <button class="px-9 py-1 mt-2 text-white rounded-md bg-primary  duration-300     hover:scale-110">加入購物車</button>
      </li>
      <li class=" text-center mb-5 ">
        <img src="../../assets/image/product/product(1).jpg" alt="" class=" rounded-md mx-auto">
        <h3 class="mt-2    md:text-lg xl:text-xl">[ 1200片 ] - 相遇 (もの久保 )</h3>
        <p class="md:text-xl text-pink  font-medium">售價 : NT $ 1400 </p>
        <button class="px-9 py-1 mt-2 text-white rounded-md bg-primary  duration-300     hover:scale-110">加入購物車</button>
      </li>
      <li class=" text-center mb-5 ">
        <img src="../../assets/image/product/product(1).jpg" alt="" class=" rounded-md mx-auto">
        <h3 class="mt-2    md:text-lg xl:text-xl">[ 1200片 ] - 相遇 (もの久保 )</h3>
        <p class="md:text-xl text-pink  font-medium">售價 : NT $ 1400 </p>
        <button class="px-9 py-1 mt-2 text-white rounded-md bg-primary  duration-300     hover:scale-110">加入購物車</button>
      </li>
      <li class=" text-center mb-5 ">
        <img src="../../assets/image/product/product(1).jpg" alt="" class=" rounded-md mx-auto">
        <h3 class="mt-2    md:text-lg xl:text-xl">[ 1200片 ] - 相遇 (もの久保 )</h3>
        <p class="md:text-xl text-pink  font-medium">售價 : NT $ 1400 </p>
        <button class="px-9 py-1 mt-2 text-white rounded-md bg-primary  duration-300     hover:scale-110">加入購物車</button>
      </li>
      <li class=" text-center mb-5 ">
        <img src="../../assets/image/product/product(1).jpg" alt="" class=" rounded-md mx-auto">
        <h3 class="mt-2    md:text-lg xl:text-xl">[ 1200片 ] - 相遇 (もの久保 )</h3>
        <p class="md:text-xl text-pink  font-medium">售價 : NT $ 1400 </p>
        <button class="px-9 py-1 mt-2 text-white rounded-md bg-primary  duration-300     hover:scale-110">加入購物車</button>
      </li>
      <li class=" text-center mb-5 ">
        <img src="../../assets/image/product/product(1).jpg" alt="" class=" rounded-md mx-auto">
        <h3 class="mt-2    md:text-lg xl:text-xl">[ 1200片 ] - 相遇 (もの久保 )</h3>
        <p class="md:text-xl text-pink  font-medium">售價 : NT $ 1400 </p>
        <button class="px-9 py-1 mt-2 text-white rounded-md bg-primary  duration-300     hover:scale-110">加入購物車</button>
      </li>



    </ul>


    <!-- <PaginationItemVue :page="page"></PaginationItemVue> -->
  </div>
</template>

<script>

import PaginationItemVue from '../../components/PaginationItem.vue'


// import ToastItem from '../components/ToastItem.vue'
const { VITE_APP_API, VITE_APP_APIPATH } = import.meta.env

export default {
  data() {
    return {
      toast: {
        viewIsHidden: false,
        toastText: '',
        toastType: false
      }
    }
  },
  components: {
    PaginationItemVue,
       // ToastItem,
  },

}
</script>