<script>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'


</script>

<template>
  <header>
    
    <div class="flex items-center justify-center">
      <img src="./assets/image/logo.png" alt="logo" width="100" />
      <p class="text-4xl font-bold text-primary">拼圖趣</p>
    </div>
    <nav class="font-bold bg-slate-300 text-center text-xl">
      <RouterLink to="/">
        <div class="pr-9 border-r border-black">
          <i class="fa-solid fa-house"></i>
          <p>首頁</p>
        </div>
      </RouterLink>
      <RouterLink to="/about">精選商品</RouterLink>
      <RouterLink to="/about">訂製拼圖</RouterLink>
      <RouterLink to="/about">會員登入</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>



