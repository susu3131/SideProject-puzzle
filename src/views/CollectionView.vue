<template lang="">
  <div class="container pt-4 pb-6 md:pt-12 md:pb-20">
    <h2 class="font-semibold mb-6">我的收藏</h2>
    <ul class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      <li class="mb-4" v-for="product in CollectionProducts" :key="product.id">
        <div class="relative">
          <img :src="product.imageUrl" class="w-full h-[200px]" alt="" />
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
    getId(i) {
      this.$http
        .get(`${VITE_APP_API}/api/${VITE_APP_APIPATH}/product/${i}`)
        .then((res) => {
          console.log(res.data.product)
          this.CollectionProducts.push(res.data.product)
          console.log(this.CollectionProducts)
        })
        .catch((err) => console.log(err.response.data.message))
    }
  },
  mounted() {
    // 轉成陣列，運用,分割
    this.id = Cookies.get('collection').split(',')
    this.id.forEach((i) => {
      this.getId(i)
    })
  }
}
</script>
<style lang=""></style>
