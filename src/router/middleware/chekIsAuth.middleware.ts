import type { RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import { useUserStore } from "@/stores/user";

export function checkIsAuth(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void {
  const requiredAuth = to.matched.some((record) => record.meta.isAuth);
  const userIsAuth = useUserStore().isAuth;
  if (requiredAuth && !userIsAuth) next("/?msg=NOT_AUTH");
  next();
}
