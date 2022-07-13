import { createRouter, createWebHashHistory } from "vue-router";
import { useUserStore } from "@/stores/user";
import ErrorPage from "@/views/ErrorPage.vue";
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/IndexPage.vue"),
      meta: {
        layout: "MainLayout",
        isAuth: false,
      },
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("../views/CartPage.vue"),
      meta: {
        layout: "MainLayout",
        isAuth: true,
      },
    },
    {
      path: "/order-done",
      name: "Order",
      component: () => import("../views/OrderPage.vue"),
      meta: {
        layout: "MainLayout",
        isAuth: true,
      },
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../views/ProfilePage.vue"),
      meta: {
        layout: "MainLayout",
        isAuth: true,
      },
    },
    {
      name: "Product",
      path: "/products/:id",
      component: () => import("../views/ProductPage.vue"),
      meta: {
        layout: "MainLayout",
        isAuth: false,
      },
    },
    {
      path: "/:pathMatch(.*)*",
      component: ErrorPage,
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
