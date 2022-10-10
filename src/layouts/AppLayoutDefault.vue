<template>
  <AppHeader></AppHeader>
  <Teleport to="body">
    <AppModalWrap>
      <AppModalAuth></AppModalAuth>
    </AppModalWrap>
    <AppNotification />
    <router-link :to="{ name: 'Cart' }" class="cart-mobile">
      <img src="@/assets/images/icons/cart.svg" alt="" />
      <span>{{ totalItems }}</span>
    </router-link>
  </Teleport>
  <main class="main">
    <div class="container">
      <slot></slot>
    </div>
  </main>
</template>

<script lang="ts">
import AppHeader from "@/components/layouts/AppHeader.vue";
import AppModalWrap from "@/components/modal/AppModalWrap.vue";
import AppModalAuth from "@/components/modal/AppModalAuth.vue";
import AppNotification from "@/components/ui/AppNotification.vue";
import { useRouter, useRoute } from "vue-router";
import { useNoticeStore } from "@/stores/notification";
import { useCartStore } from "@/stores/cart";
import { mapState } from "pinia";
import { watch, defineComponent, onMounted } from "vue";
export default defineComponent({
  setup() {
    const noticeStore = useNoticeStore();
    const route = useRoute();
    const router = useRouter();

    const callNotify = (type: string, title: string, text: string) => {
      noticeStore.setMessage({
        type,
        title,
        text,
      });
    };
    const checkRouteErrors = () => {
      if (route.query.msg) {
        switch (route.query.msg) {
          case "NOT_AUTH":
            callNotify("error", "Error", "Вы не авторизованы");
            break;
        }
        router.push({ query: {} });
      }
    };
    onMounted(() => {
      checkRouteErrors();
    });
    watch(
      () => route.query,
      () => {
        checkRouteErrors();
      }
    );
    return {
      // totalItems,
    };
  },
  components: {
    AppHeader,
    AppModalWrap,
    AppModalAuth,
    AppNotification,
  },
  computed: {
    ...mapState(useCartStore, ["totalItems"]),
  },
});
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
