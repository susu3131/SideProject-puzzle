<template lang="">
  <div class="container pt-4 pb-6 min-h-[62vh]">
    <div class="lg:flex justify-between">
      <h2 class="font-semibold mb-6">我的收藏</h2>
      <button v-if="collectionProducts != ''" class="btn px-10 btn-sm btn-outline btn-error" @click.prevent="delAllCollection('all')">清空我的收藏</button>
    </div>

    <div v-if="collectionProducts == ''" class="text-center rounded-xl lg:rounded-3xl border lg:py-8 lg:px-20 border-primary w-[10px] pr-10 pl-5 py-2 text-primary lg:w-1/3 mx-auto mt-40 my-auto">
      <p class="lg:text-2xl text-xl">尚未加入任何收藏</p>
    </div>

    <ul v-else class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      <li class="mb-4" v-for="product in collectionProducts" :key="product.id">
        <div class="relative">
          <img :src="product.imageUrl" class="w-full h-[200px] object-cover" alt="" />
          <i v-if="collectionType[product.id] !== true" class="fa-regular text-[28px] fa-bookmark absolute right-4 top-4 text-white" @click="delCollection(product.id)"></i>
          <i v-else class="fa-solid fa-bookmark text-[28px] absolute right-4 top-4 text-primary" @click="delCollection(product.id)"></i>
        </div>
        <p class="text-center mt-2">{{ product.title }}</p>
      </li>
    </ul>
    <ToastItem :toast="toast"></ToastItem>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import ToastItem from '../components/ToastItem.vue'
const { VITE_APP_API, VITE_APP_APIPATH } = import.meta.env

export default {
  data() {
    return {
      id: [],
      collectionProducts: [],
      collectionType: {},
      toast: {
        viewIsHidden: false,
        toastText: '',
        toastType: false
      }
    }
  },
  methods: {
    //取得蒐藏id ，判斷是否為空避免出錯
    getId() {
      if (Cookies.get('collection') == undefined) {
        return
      } else {
        // 轉成陣列，運用,分割
        this.id = Cookies.get('collection').split(',')
        this.collectionType = JSON.parse(Cookies.get('collectionType'))
        this.id.forEach((i) => {
          this.getProduct(i)
        })
      }
    },
    // 對應id商品資訊，取得資料
    getProduct(id) {
      this.$http
        .get(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/product/${id}`)
        .then((res) => {
          this.collectionProducts.push(res.data.product)
        })
        .catch((err) => console.log(err.response.data.message))
    },
    //刪除蒐藏
    delAllCollection(type, id = 0) {
      if (type == 'all') {
        Cookies.remove('collection')
        Cookies.remove('collectionType')
        this.collectionProducts = []
        this.collectionType = []

        this.toast.toastText = `刪除全部收藏`
          this.toast.toastType = true
          setTimeout(() => {
            this.toast.toastType = false
          }, 1200)    
      }
    },
    delCollection(newid) {
      this.collectionType[newid] = false
      // 刪除指定id
      this.id = this.id.filter(function (x) {
        return x !== newid
      })
      Cookies.set('collection', this.id)
      Cookies.set('collectionType', JSON.stringify(this.collectionType),{ expires: 365 })
      this.collectionProducts = []
      this.getId()

      this.toast.toastText = `刪除收藏`
          this.toast.toastType = true
          setTimeout(() => {
            this.toast.toastType = false
          }, 1200)    
    }
  },  
  components: {
    ToastItem
  },
  mounted() {
    this.getId()
  }
}
</script>
<style lang=""></style>
