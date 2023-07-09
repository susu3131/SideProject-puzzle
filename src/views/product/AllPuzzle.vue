<template>
  <div class="py-10">
    <!-- product -->
    <div v-if="puzzleProducts == ''">
      <img src="../../assets/image/load.gif" class="mx-auto mt-20" alt="" width="170" />
    </div>

    <div v-else>
      <ul class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 mt-5 mb-10">
        <li v-for="puzzle in puzzleProducts" :key="puzzle.id" class="text-center mb-5">
          <div class="relative">
            <img :src="puzzle.imageUrl" alt="" class="rounded-md object-cover mx-auto w-[300px] h-[200px]" />
            <i class="fa-regular text-[28px] fa-bookmark absolute right-5 top-5" @click="addCollection(puzzle.id)"></i>
            <!-- <i class="fa-solid fa-bookmark  text-[28px]  absolute right-5 top-5 text-primary opacity-95 "></i> -->
          </div>
          <h3 class="mt-2 md:text-lg xl:text-xl">{{ puzzle.title }}</h3>
          <p class="md:text-xl text-pink font-medium">售價 : NT $ {{ puzzle.price }} / {{ puzzle.unit }}</p>
          <button class="px-9 py-1 mt-2 text-white rounded-md bg-primary duration-300 hover:scale-110" @click="addCart(puzzle.id, puzzle.title)">加入購物車</button>
        </li>
      </ul>
    </div>
    {{ collection }}
    <ToastItem :toast="toast"></ToastItem>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import ToastItem from '../../components/ToastItem.vue'
const { VITE_APP_API, VITE_APP_APIPATH } = import.meta.env

export default {
  data() {
    return {
      collection: [],
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
    addCart(id, tittle, qty = 1) {
      this.$http
        .post(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/cart`, {
          data: {
            product_id: id,
            qty
          }
        })
        .then((res) => {
          this.toast.toastText = `加入${tittle}成功`
          this.toast.toastType = true
          setTimeout(() => {
            this.toast.toastType = false
          }, 1200)
        })
        .catch((err) => console.log(err.response.data.message))
    },
    getPuzzleProduct(page = 1) {
      this.$http
        .get(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/products/all`)
        .then((res) => {
          this.puzzleProducts = res.data.products
          this.page = res.data.pagination
        })
        .catch((err) => console.log(err.response.data.message))
    },
    addCollection(id){
      this.collection.push(id)
      console.log(this.collection);
      Cookies.set('collection', this.collection);
    }
  },
  components: {
    ToastItem
  },
  mounted() {
    this.getPuzzleProduct()
  }
}
</script>
