import { defineStore } from "pinia";
import * as userApi from "@/core/services/auth";

import { useModalStore } from "./modal";
import { getInfo, setInfo, delInfo, setRefreshToken } from "@/utils/token";
import type { UserInfo } from "@/types/UserInfo";
import { setNewUserData } from "@/core/services/firebase";
import { getCartUser } from "@/core/services/firebase";
import { useCartStore } from "@/stores/cart";
import { callNotification } from "@/utils/notice";

interface UserState {
  token: null | string;
  user: UserInfo;
}

export const useUserStore = defineStore({
  id: "user",
  state: () =>
    ({
      token: getInfo()?.token ? getInfo()?.token : null,
      user: getInfo()?.user ? getInfo()?.user : {},
    } as UserState),
  getters: {
    isAuth: (state) => !!state.token,
  },
  actions: {
    async login(email: string, password: string) {
      const data = await userApi.login(email, password);

      if (!data) return false;
      this.token = data.idToken ?? "";
      this.user = {
        email: data.email ?? "",
        id: data.localId ?? "",
        refreshToken: data.refreshToken ?? "",
      };
      setInfo(this.token, this.user);
      getCartUser(this.user.id ?? "").then((cartData) => {
        useCartStore().saveCart(cartData?.data ?? []);
      });
      useModalStore().closeLoginModal();
    },
    async register(email: string, password: string) {
      const data = await userApi.register(email, password);
      if (data) {
        await setNewUserData(email, data.localId ?? "");
        this.login(email, password);
        setRefreshToken(data?.refreshToken ?? "");
      }
    },
    logout() {
      this.token = null;
      this.user = {};
      delInfo();
      useCartStore().clearCart();
    },
  },
});
