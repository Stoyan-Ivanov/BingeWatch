import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:id",
      name: "show details",
      component: () => import("@/views/ShowDetailsView.vue"),
      props: true,
    },
  ],
  scrollBehavior: (to, from, savedPosition) => {
    return { top: 0 };
  },
});

export default router;
