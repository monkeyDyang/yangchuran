<script setup lang="ts">
import { RouterView } from "vue-router";
import navVue from "./components/nav.vue";
import footerVue from "./components/footer.vue";
</script>

<template>
  <navVue />
  <RouterView />
  <footerVue />
</template>

<style scoped></style>
