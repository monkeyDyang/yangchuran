<script setup lang="ts">
import { RouterView } from "vue-router";
import navbarVue from "./components/navbar.vue";
import footerVue from "./components/footer.vue";
</script>

<template>
  <navbarVue />
  <RouterView />
  <footerVue />
</template>

<style scoped></style>
