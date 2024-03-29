import { createRouter, createWebHashHistory } from "vue-router";
import ErrorPage from "@/views/ErrorPage.vue";
import { loadLayoutMiddleware } from "./middleware/loadLayout.middleware";
import { checkIsAuth } from "./middleware/chekIsAuth.middleware";
import { AppLayoutsEnum } from "@/layouts/layouts.types";
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/IndexPage.vue"),
      alias: ["/products"],
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("../views/CartPage.vue"),
      meta: {
        isAuth: true,
      },
    },
    {
      path: "/order-done",
      name: "Order",
      component: () => import("../views/OrderPage.vue"),
      meta: {
        isAuth: true,
      },
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../views/ProfilePage.vue"),
      meta: {
        isAuth: true,
      },
    },
    {
      name: "Product",
      path: "/products/:id",
      component: () => import("../views/ProductPage.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: ErrorPage,
      meta: {
        layout: AppLayoutsEnum.error,
      },
    },
  ],
});

router.beforeEach(loadLayoutMiddleware);
router.beforeEach(checkIsAuth);
export default router;
