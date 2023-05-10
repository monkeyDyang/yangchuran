import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TimeLine from "../views/TimeLine.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/timeline",
    name: "timeline",
    component: TimeLine,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
