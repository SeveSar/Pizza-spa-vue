import { defineStore } from "pinia";
import * as userApi from "../services/auth";
import { useNoticeStore } from "./notification";
import { useModalStore } from "./modal";
import { getInfo, setInfo, delInfo, setRefreshToken } from "@/utils/token";
import type { UserInfo } from "@/types/UserInfo";
import { setNewUserData } from "@/services/firebase";
import { getCartUser } from "@/services/firebase";
import { useCartStore } from "@/stores/cart";

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
      try {
        const res = await userApi.login(email, password);
        const data = res.data;

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
      } catch (e: any) {
        if (e.response?.data?.error?.message) {
          switch (e.response?.data?.error.message) {
            case "EMAIL_NOT_FOUND":
              useNoticeStore().setMessage({
                type: "error",
                title: "Ошибка",
                text: "Пользователь с таким e-mail не существует",
              });
              break;
            case "INVALID_PASSWORD":
              useNoticeStore().setMessage({
                type: "error",
                title: "Ошибка",
                text: "Пароль не верен",
              });
              break;
            case "TOO_MANY_ATTEMPTS_TRY_LATER":
              useNoticeStore().setMessage({
                type: "error",
                title: "Ошибка",
                text: "Вы сделали много попыток входа. Повторите позже",
              });
              break;
          }
        }
      }
    },
    async register(email: string, password: string) {
      try {
        const res = await userApi.register(email, password);

        const data = res.data;
        if (res && data) {
          await setNewUserData(email, data.localId ?? "");
          this.login(email, password);
          setRefreshToken(data?.refreshToken ?? "");
        }
      } catch (e: any) {
        if (e.response?.data?.error?.message) {
          switch (e.response?.data?.error?.message) {
            case "EMAIL_EXISTS":
              useNoticeStore().setMessage({
                type: "error",
                title: "Ошибка",
                text: "Пользователь с таким e-mail уже существует",
              });
              break;
          }
        }
      }
    },
    logout() {
      this.token = null;
      this.user = {};
      delInfo();
      useCartStore().clearCartLocal();
    },
  },
});
