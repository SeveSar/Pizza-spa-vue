import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { Button, Select, Alert } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "./assets/less/main.less";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { useCartStore } from "@/stores/cart";
import { useLoadingStore } from "@/stores/loading";
import { getCartUser } from "@/services/firebase";
import { getInfo } from "@/utils/token";
import { useProductsStore } from "@/stores/products";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE_KEY}`,
  authDomain: "pizza-spa.firebaseapp.com",
  databaseURL: "https://pizza-spa-default-rtdb.firebaseio.com",
  projectId: "pizza-spa",
  storageBucket: "pizza-spa.appspot.com",
  messagingSenderId: "345252824969",
  appId: `${import.meta.env.VITE_FIREBASE_APPID}`,
};
const initFire = firebase.initializeApp(firebaseConfig);
export const db = getDatabase();
export const dbFireStore = getFirestore(initFire);
const userId = getInfo()?.user.id;

const app = createApp(App);
app.use(Button);
app.use(Select);
app.use(Alert);
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
