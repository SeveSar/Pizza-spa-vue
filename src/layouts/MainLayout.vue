<template>
  <AppHeader v-if="!loadingStore.loading"></AppHeader>
  <Teleport to="body">
    <AppSpinner v-if="loadingStore.loading" />
    <AppModalWrap>
      <AppModalAuth></AppModalAuth>
    </AppModalWrap>
    <AppNotification />
    <router-link :to="{ name: 'Cart' }" class="cart-mobile">
      <img src="@/assets/images/icons/cart.svg" alt="" />
      <span>{{ totalItems }}</span>
    </router-link>
  </Teleport>
  <main class="main" v-if="!loadingStore.loading">
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppModalWrap from "@/components/popups/AppModalWrap.vue";
import AppModalAuth from "@/components/popups/AppModalAuth.vue";
import AppNotification from "@/components/ui/AppNotification.vue";
import AppSpinner from "@/components/main/AppSpinner.vue";
import { useLoadingStore } from "@/stores/loading";
import { useRouter, useRoute } from "vue-router";
import { useNoticeStore } from "@/stores/notification";
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
import { watch } from "vue";
const loadingStore = useLoadingStore();
const noticeStore = useNoticeStore();
const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();
const { totalItems } = storeToRefs(cartStore);
watch(
  () => route.query,
  () => {
    switch (route.query.msg) {
      case "NOT_AUTH":
        noticeStore.setMessage({
          type: "error",
          title: "Error",
          text: "Вы не авторизованы",
        });
        break;
    }
    router.push({ query: {} });
  }
);
</script>
<style scoped lang="less">
.main {
  background-color: #f9f9f9;
}
.cart-mobile {
  position: fixed;
  background: #ff7010;
  box-shadow: 0px 2px 8px rgba(25, 25, 25, 0.2);
  border-radius: 50%;
  display: flex;
  width: 56px;
  height: 56px;
  right: 20px;
  z-index: 444;
  bottom: 20px;
  img {
    margin: auto;
    display: block;
  }
  span {
    position: absolute;
    top: -2px;
    right: -2px;
    background: #ffffff;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ff7010;
    border-radius: 50%;
    font-weight: 400;
    overflow: hidden;
    font-size: 12px;
    line-height: 16px;
    color: #ff7010;
  }
}
</style>
