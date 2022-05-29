import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { Button, Select, Alert, Spin } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "./assets/less/main.less";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { useCartStore } from "@/stores/cart";
import { useLoadingStore } from "@/stores/loading";
import { getCartUser } from "@/services/firebase";
import { getInfo } from "@/utils/infoUser";
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
app.use(Spin);
app.use(createPinia());
app.use(router);

async function getUserCartFunc() {
  if (userId) {
    const cartData = await getCartUser(userId);
    return await useCartStore().saveCart(cartData?.data ?? []);
  }
  return true;
}
useLoadingStore().setLoading(true);
Promise.all([useProductsStore().fetchProducts(), getUserCartFunc()]).then(
  () => {
    useLoadingStore().setLoading(false);
  }
);

app.mount("#app");
