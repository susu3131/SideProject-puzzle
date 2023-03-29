<script>
import { RouterLink, RouterView } from 'vue-router'
// snowStorm.autoStart = true
// snowStorm.snowColor = '#FF8888';   // blue-ish snow!?
// snowStorm.flakesMax = 100;
// snowStorm.animationInterval = 30;
// snowStorm.flakesMaxActive = 150;    // show more snow on screen at once
// snowStorm.snowStick = false;
// snowStorm.usePositionFixed = true;
var sakura = new Sakura('body', {
    fallSpeed:0.5,
    // minSize: 10,
    // maxSize: 20,
    // delay:100,
});
</script>

<template>
  <RouterView />
</template>
