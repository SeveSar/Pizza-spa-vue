import { defineStore } from "pinia";

interface modalState {
  loginModal: boolean;
}
export const useModalStore = defineStore({
  id: "modal",
  state: () =>
    ({
      loginModal: false,
    } as modalState),
  actions: {
    openLoginModal() {
      this.loginModal = true;
    },
    closeLoginModal() {
      this.loginModal = false;
    },
  },
  getters: {},
});
