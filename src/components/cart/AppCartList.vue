<template>
  <ul class="cart-list" v-if="cart.length">
    <li class="cart-list__item" v-for="item in cart" :key="item.id">
      <AppCartListItem :itemCart="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import AppCartListItem from "./AppCartListItem.vue";
import type { Cartitem } from "@/types/CartItem";
defineProps<{
  cart: Cartitem[];
}>();
</script>

<style scoped lang="less"></style>
