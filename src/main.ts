import { createApp } from "vue";
import { createPinia } from "pinia";
import initFire from "@/plugins/firebase";
import App from "./App.vue";
import router from "./router";

import "ant-design-vue/dist/antd.css";
import "./assets/less/main.less";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { useCartStore } from "@/stores/cart";
import { getCartUser } from "@/core/services/firebase";
import { getInfo } from "@/utils/token";
import { useProductsStore } from "@/stores/products";

export const db = getDatabase();
export const dbFireStore = getFirestore(initFire);
const userId = getInfo()?.user.id;

const app = createApp(App);

app.use(createPinia());
app.use(router);

async function setUserCart() {
  if (userId) {
    const cartData = await getCartUser(userId);
    return await useCartStore().saveCart(cartData?.data ?? []);
  }
  return true;
}
const productsStore = useProductsStore();

Promise.all([productsStore.fetchProducts(), setUserCart()]).then(() => {
  app.mount("#app");
});
