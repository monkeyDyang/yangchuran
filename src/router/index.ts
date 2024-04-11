import type { Router } from "unplugin-vue-router/types";
import { createRouter, createWebHistory } from "vue-router/auto";

const router: Router = createRouter({
  history: createWebHistory(),
});

export default router;
