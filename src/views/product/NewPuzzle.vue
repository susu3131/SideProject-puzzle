<template>
  <div class="py-10">
    <!-- <div class="flex justify-between px-2">
      <button class="flex items-center text-lg hover:font-semibold hover:scale-110">
        <i class="fa-solid fa-circle-chevron-left mr-4"></i>
        <p>上一頁</p>
      </button>

      <button class="flex items-center text-lg hover:font-semibold hover:scale-110">
        <p>下一頁</p>
        <i class="fa-solid fa-circle-chevron-right ml-4"></i>
      </button>
    </div> -->

    <!-- product -->
    <div v-if="puzzleProducts == ''">
      <img src="../../assets/image/load.gif" class="mx-auto mt-20" alt="" width="170" />
    </div>

    <div v-else>
      <ul  class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 mt-5 mb-10">
        <li v-for="puzzle in puzzleProducts" :key="puzzle.id" class="text-center mb-5">
          <div class="relative">
            <img :src="puzzle.imageUrl" alt="" class="rounded-md object-cover mx-auto w-full h-[200px]" />
            <i v-if="collectionType[puzzle.id] !== true" class="fa-regular text-[28px] fa-bookmark absolute right-4 top-4 text-white" @click="addCollection(puzzle.id)"></i>
            <i v-else class="fa-solid fa-bookmark  text-[28px]  absolute right-4 top-4 text-primary   "  @click="addCollection(puzzle.id)"></i>
          </div>
          <h3 class="mt-2 md:text-lg xl:text-xl">{{ puzzle.title }}</h3>
          <p class="md:text-xl text-pink font-medium">售價 : NT $ {{ puzzle.price }} / {{ puzzle.unit }}</p>
          <button class="px-9 py-1 mt-2 text-white rounded-md bg-primary duration-300 hover:scale-110" @click="addCart(puzzle.id, puzzle.title)">加入購物車</button>
        </li>
      </ul>

    </div>

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
      collectionType: {},
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
    addCart(id , tittle , qty = 1 ) {
      this.$http
        .post(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/cart`, {
          data: {
            "product_id":id,
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
        .get(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/products?page=${page}&category=新品上市`)
        .then((res) => {
          console.log(res.data.products)
          this.puzzleProducts = res.data.products
          this.page = res.data.pagination
        })
        .catch((err) => console.log(err.response.data.message))
    },
    addCollection(id) {
      if (this.collectionType[id] == true) {
        // 刪除指定id
        this.collection = this.collection.filter(function (x) {
          return x !== id
        })
        this.collectionType[id] = false
        Cookies.set('collection', this.collection,{ expires: 365 })

        this.toast.toastText = `刪除收藏`
          this.toast.toastType = true
          setTimeout(() => {
            this.toast.toastType = false
          }, 1200)        
      } else {
        this.collectionType[id] = true
        this.collection.push(id)
        Cookies.set('collection', this.collection,{ expires: 365 })
        Cookies.set('collectionType', JSON.stringify(this.collectionType),{ expires: 365 })
        
        this.toast.toastText = `加入收藏`
          this.toast.toastType = true
          setTimeout(() => {
            this.toast.toastType = false
          }, 1200)     
      }
    }
  },
  components: {
    ToastItem
  },
  mounted() {
    this.getPuzzleProduct()
    if (Cookies.get('collection') == undefined) {
        return
      }
    else{
      this.collectionType = JSON.parse(Cookies.get('collectionType'))
      this.collection = Cookies.get('collection').split(',')
    }
  }
}
</script>
