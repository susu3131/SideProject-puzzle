<script>
import { RouterLink, RouterView } from 'vue-router'
// snowStorm.autoStart = true
snowStorm.snowColor = '#FF8888';   // blue-ish snow!?
snowStorm.flakesMax = 800;
snowStorm.animationInterval = 30;
snowStorm.flakesMaxActive = 150;    // show more snow on screen at once
snowStorm.snowStick = false;
snowStorm.usePositionFixed = true;
</script>

<template>
  <RouterView />
</template>
