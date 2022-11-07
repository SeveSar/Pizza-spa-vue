import { defineStore } from "pinia";

import { useUserStore } from "@/stores/user";
import { addtoCart, saveCart } from "@/core/services/firebase";
import { useModalStore } from "@/stores/modal";
import type { Cartitem } from "@/types/CartItem";
import { useProductsStore } from "./products";
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
    inProccessing() {
      return (id: number): boolean => this.inProccess.includes(id);
    },
    getItem: (state) => (id: number) =>
      state.cart.find((item) => item.id === id),
    canAdd() {
      return (id: number) => !this.inProccessing(id) && !this.inCart(id);
    },
    canDel() {
      return (id: number) => !this.inProccessing(id) && this.inCart(id);
    },
    canUpdate() {
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
    async addToCart(id: number) {
      if (!useUserStore().isAuth) {
        useModalStore().openLoginModal();
        return false;
      }
      const productsStore = useProductsStore();
      const cartItem = productsStore.getItemById(id);
      if (this.canAdd(id) && cartItem) {
        this.inProccess.push(id);
        const newItem = {
          ...cartItem,
          cnt: 1,
        } as Cartitem;
        this.cart.push(newItem);
        await addtoCart(newItem, useUserStore().user.id ?? "");
        this.inProccess = this.inProccess.filter((id) => id !== id);
      }
    },
    async updateCnt(id: number, newCnt: number) {
      if (this.canUpdate(id)) {
        this.inProccess.push(id);
        const itemCart = this.getItem(id);
        if (!itemCart) return false;
        itemCart.cnt = Math.max(1, newCnt);
        const standartSize = itemCart.sizes?.find((item) => item.active);
        if (standartSize) {
          itemCart.price = itemCart.cnt * standartSize?.price;
        }
        await saveCart(this.cart, useUserStore().user.id ?? "");
        this.inProccess = this.inProccess.filter((itemId) => itemId !== id);
      }
    },
    async delFromCart(id: number) {
      if (this.canDel(id)) {
        this.inProccess.push(id);
        this.cart = this.cart.filter((pr) => pr.id !== id);
        await saveCart(this.cart, useUserStore().user.id ?? "");
        this.inProccess = this.inProccess.filter((itemId) => itemId !== id);
      }
    },
    saveCart(cart: Cartitem[]) {
      this.cart = cart;
    },
    async clearCart() {
      this.cart = [];
      await saveCart(this.cart, useUserStore().user.id ?? "");
    },
  },
});
