<template>
  <div class="py-10">
    <div class="flex justify-between px-2">
      <button class="flex items-center text-lg hover:font-semibold hover:scale-110">
        <i class="fa-solid fa-circle-chevron-left mr-4"></i>
        <p>上一頁</p>
      </button>

      <button class="flex items-center text-lg hover:font-semibold hover:scale-110">
        <p>下一頁</p>
        <i class="fa-solid fa-circle-chevron-right ml-4"></i>
      </button>
    </div>

    <!-- product -->
    <div v-if="puzzleProducts == ''">
      <img src="../../assets/image/load.gif" class="mx-auto mt-20" alt="" width="170" />
    </div>

    <div v-else>
      <ul  class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 mt-5 mb-10">
        <li v-for="puzzle in puzzleProducts" :key="puzzle.id" class="text-center mb-5">
          <img :src="puzzle.imageUrl" alt="" class="rounded-md object-cover mx-auto w-[300px] h-[200px]" />
          <h3 class="mt-2 md:text-lg xl:text-xl">{{ puzzle.title }}</h3>
          <p class="md:text-xl text-pink font-medium">售價 : NT $ {{ puzzle.price }} / {{ puzzle.unit }}</p>
          <button class="px-9 py-1 mt-2 text-white rounded-md bg-primary duration-300 hover:scale-110">加入購物車</button>
        </li>
      </ul>

      <PaginationItemVue :page="page" ></PaginationItemVue>
    </div>

    <ToastItem :toast="toast"></ToastItem>
  </div>
</template>

<script>
import PaginationItemVue from '../../components/PaginationItem.vue'
import ToastItem from '../../components/ToastItem.vue'
const { VITE_APP_API, VITE_APP_APIPATH } = import.meta.env

export default {
  data() {
    return {
      puzzleProducts: [],
      tempPuzzleProduct: {},
      page: {},
      toast: {
        viewIsHidden: false,
        toastText: '',
        toastType: false
      }
    }
  },
  methods: {
    getPuzzleProduct(page = 1) {
      this.$http
        .get(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/products?page=${page}`)
        .then((res) => {
          console.log(res.data.products)
          this.puzzleProducts = res.data.products
          this.page = res.data.pagination
        })
        .catch((err) => console.log(err.response.data.message))
    }
  },
  components: {
    PaginationItemVue,
    ToastItem
  },
  mounted() {
    this.getPuzzleProduct()
  }
}
</script>
