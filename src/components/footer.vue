<script setup lang="ts">
const year = new Date().getFullYear();
const author = "Yang";
const record = "湘ICP备2023008600号";
</script>

<template>
  <div class="footer footer-center p-4 bg-base-100 text-base-100-content">
    <a href="http://www.beian.gov.cn" target="_blank">{{ `© ${year} ${author} ` }}{{ record }}</a>
  </div>
</template>

<style scoped></style>
