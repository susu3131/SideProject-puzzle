<template>
  <div>
    <!-- 分頁 -->
    <div class="flex justify-center mb-5 sm:mb-1">
      <div class="inline-flex duration-150 rounded-md">
        <button type="button" :class="{ 'bg-gray-100': !page.has_pre, 'text-gray-300': !page.has_pre }" class="inline-block px-3 py-2 text-sm font-medium border rounded-l md:px-8 md:py-2 border-success hover:bg-emerald-200">上一頁</button>
        <button type="button" v-for="page in page.total_pages" :key="page" class="inline-block px-3 py-2 text-sm font-medium border md:px-8 md:py-2 border-success hover:bg-emerald-200 focus:bg-success focus:text-white">{{ page }}</button>
        <button type="button" :class="{ 'bg-gray-100': !page.has_next, 'text-gray-300': !page.has_next }" class="inline-block px-3 py-2 text-sm font-medium border rounded-r md:px-8 md:py-2 border-success hover:bg-emerald-200">下一頁</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['page'],
  methods: {
    name() {}
  },
  mounted() {
    console.log('頁面測試訊息')
  }
}
</script>

<style lang="scss" scoped></style>
