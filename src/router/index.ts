import BruteForceAlgorithm from "@/views/BruteForceAlgorithm.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/planning",
      name: "planning",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Planning.vue"),
    },
    {
      path: "/password",
      name: "password",
      component: () => import("../views/Password.vue"),
    },{
      path: "/brute-force-algorithm",
      name:"bruteForceAlgorithm",
      component: BruteForceAlgorithm
    },
    {
      path: "/subjects",
      name: "subjects",
      component: () => import("../views/Subject.vue"),
    }
  ],
});

export default router;
