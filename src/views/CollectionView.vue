<template lang="">
  <div class="container pt-4 pb-6 min-h-[62vh]">
    <div class="lg:flex justify-between">
      <h2 class="font-semibold mb-6">我的收藏</h2>
      <button v-if="CollectionProducts != ''" class="btn px-10 btn-sm btn-outline btn-error" @click.prevent="delCollection('all')">清空我的收藏</button>
    </div>

    <div v-if="CollectionProducts == ''" class="text-center rounded-xl lg:rounded-3xl border lg:py-8 lg:px-20 border-primary w-[10px] pr-10 pl-5 py-2  text-primary lg:w-1/3 mx-auto mt-40  my-auto">
      <p class="lg:text-2xl  text-xl">尚未加入任何收藏</p>
    </div>

    <ul v-else class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      <li class="mb-4" v-for="product in CollectionProducts" :key="product.id">
        <div class="relative">
          <img :src="product.imageUrl" class="w-full h-[200px] object-cover" alt="" />
          <i class="fa-regular text-[28px] fa-bookmark absolute right-5 top-5"></i>
          <!-- <i class="fa-solid fa-bookmark  text-[28px]  absolute right-5 top-5 text-primary opacity-95 "></i> -->
        </div>
        <p class="text-center mt-2">{{ product.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
const { VITE_APP_API, VITE_APP_APIPATH } = import.meta.env

export default {
  data() {
    return {
      id: [],
      CollectionProducts: []
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
          this.CollectionProducts.push(res.data.product)
        })
        .catch((err) => console.log(err.response.data.message))
    },
    //刪除蒐藏
    delCollection(type, id = 0) {
      if (type == 'all') {
        Cookies.remove('collection')
        this.CollectionProducts = []
      }
    }
  },
  mounted() {
    this.getId()
  }
}
</script>
<style lang=""></style>
