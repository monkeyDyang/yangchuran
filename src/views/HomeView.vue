<script setup lang="ts">
import { ref } from "vue";

const time = ref("");

const startDate = new Date("2022-11-15 23:07:00");

setInterval(() => {
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - startDate.getTime();
  const seconds = Math.floor(timeDiff / 1000) % 60;
  const minutes = Math.floor(timeDiff / 1000 / 60) % 60;
  const hours = Math.floor(timeDiff / 1000 / 60 / 60) % 24;
  const days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
  time.value = `出生第 ${days} 天 - ${hours} 时 - ${minutes} 分 - ${seconds} 秒`;
}, 1000);
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Hello 果果</h1>
        <p class="mb-5">
          {{ time }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hero {
  background-image: url("@/assets/image/bg.jpg");
}
</style>
