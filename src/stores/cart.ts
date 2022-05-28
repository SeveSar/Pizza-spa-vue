import { defineStore } from "pinia";
import type { ProductItem } from "@/types/ProductItem";
import { useUserStore } from "@/stores/user";
import { addtoCartService, saveCartService } from "@/services/firebase";
import { useNoticeStore } from "@/stores/notification";
import type { Cartitem } from "@/types/CartItem";
interface cartStore {
  cart: Cartitem[];
  inProccess: number[];
}

export const useCartStore = defineStore({
  id: "cart",
  state: () =>
    ({
      cart: [],
      inProccess: [],
    } as cartStore),
  getters: {
    index:
      (state) =>
      (id: number): number =>
        state.cart.findIndex((item) => item.id === id),
    inCart(state) {
      return (id: number) => {
        return this.index(id) !== -1;
      };
    },
    inProccessing(state) {
      return (id: number): boolean => this.inProccess.includes(id);
    },
    canAdd(state) {
      return (id: number) => !this.inProccessing(id) && !this.inCart(id);
    },
    canDel(state) {
      return (id: number) => !this.inProccessing(id) && this.inCart(id);
    },
    canUpdate(state) {
      return (id: number) => !this.inProccessing(id) && this.inCart(id);
    },
    totalPrice: (state) =>
      state.cart.reduce((acc, item) => {
        return (acc += item.price);
      }, 0),
    totalItems: (state) =>
      state.cart.reduce((acc, item) => {
        return (acc += item.cnt);
      }, 0),
  },
  actions: {
    async addToCart(item: ProductItem) {
      if (!useUserStore().isAuth) {
        useNoticeStore().setMessage({
          type: "error",
          title: "Error",
          text: "Авторизуйтесь в системе",
        });
        return false;
      }
      if (this.canAdd(item.id)) {
        this.inProccess.push(item.id);
        const newItem = {
          ...item,
          cnt: 1,
        } as Cartitem;
        this.cart.push(newItem);
        await addtoCartService(newItem, useUserStore().user.id ?? "");
        this.inProccess = this.inProccess.filter((id) => id !== item.id);
      }
    },
    async updateCnt(data: { itemCart: Cartitem; newCnt: number }) {
      if (this.canUpdate(data.itemCart.id)) {
        this.inProccess.push(data.itemCart.id);
        data.itemCart.cnt = Math.max(1, data.newCnt);
        const standartSize = data.itemCart.sizes?.find((item) => item.active);
        if (standartSize) {
          data.itemCart.price = data.itemCart.cnt * standartSize?.price;
        }
        await saveCartService(this.cart, useUserStore().user.id ?? "");
        this.inProccess = this.inProccess.filter(
          (id) => id !== data.itemCart.id
        );
      }
    },
    async delFromCart(item: ProductItem) {
      if (this.canDel(item.id)) {
        this.inProccess.push(item.id);
        this.cart = this.cart.filter((pr) => pr.id !== item.id);
        console.log(this.cart);
        await saveCartService(this.cart, useUserStore().user.id ?? "");
        this.inProccess = this.inProccess.filter((id) => id !== item.id);
      }
    },
    saveCart(cart: Cartitem[]) {
      this.cart = cart;
    },
    clearCartLocal() {
      this.cart = [];
    },
    async clearCart() {
      this.cart = [];
      await saveCartService(this.cart, useUserStore().user.id ?? "");
    },
  },
});
