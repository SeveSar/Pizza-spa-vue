import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/user";
import TheError from "@/views/TheError.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/TheIndex.vue"),
      meta: {
        layout: "MainLayout",
        isAuth: false,
      },
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("../views/TheCart.vue"),
      meta: {
        layout: "MainLayout",
        isAuth: true,
      },
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../views/TheProfile.vue"),
      meta: {
        layout: "MainLayout",
        isAuth: true,
      },
    },
    {
      path: "/:pathMatch(.*)*",
      component: TheError,
      meta: {
        layout: "MainLayout",
        isAuth: false,
      },
    },
  ],
});
router.beforeEach((to, from, next) => {
  const requiredAuth = to.matched.some((record) => record.meta.isAuth);
  const userIsAuth = useUserStore().isAuth;
  if (requiredAuth && !userIsAuth) next("/?msg=NOT_AUTH");
  next();
});
export default router;
