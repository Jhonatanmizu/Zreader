import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/games",
    name: "Games",
    component: () => import("../views/Games.vue"),
  },
  {
    path: "/howToUse",
    name: "HowToUse",
    component: () => import("../views/HowToUse.vue"),
  },
  {
    path: "/404",
    name: "paginaNaoExiste",
    component: () => import("../views/Error404.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
  {
    path: "/login",
    name: "login",

    component: () => import("../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
