<template>
  <component :is="layout" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainLayout from "./layouts/MainLayout.vue";
export default defineComponent({
  components: {
    MainLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
});
</script>

<style lang="less"></style>
