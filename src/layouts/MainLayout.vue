<template>
  <AppHeader v-if="!loadingStore.loading"></AppHeader>
  <Teleport to="body">
    <AppSpinner v-if="loadingStore.loading" />
    <AppModalWrap>
      <AppModalAuth></AppModalAuth>
    </AppModalWrap>
    <AppNotification />
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
import { watch } from "vue";
const loadingStore = useLoadingStore();
const noticeStore = useNoticeStore();
const route = useRoute();
const router = useRouter();
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
<style scoped>
.main {
  background-color: #f9f9f9;
}
</style>
