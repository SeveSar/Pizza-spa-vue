<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppLayout from "@/layouts/AppLayout.vue";

export default defineComponent({
  components: {
    AppLayout,
  },
});
</script>

<style lang="less"></style>
