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
  <div>
    <h2>{{ time }}</h2>
  </div>
</template>
<style scoped>
h2 {
  font-size: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  background-image: url("@/assets/image/01.jpg");
  background-size: cover;
  margin-bottom: 0;
}
</style>
