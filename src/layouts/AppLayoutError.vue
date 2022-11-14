<template>
  <TheHeader></TheHeader>
  <main class="main">
    <div class="container">
      <slot></slot>
    </div>
  </main>
</template>

<script lang="ts" setup>
import TheHeader from "@/components/layouts/TheHeader.vue";
</script>
<style lang="scss" scoped></style>
