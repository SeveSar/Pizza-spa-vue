<template>
  <ul class="cart-list" v-if="cart.length">
    <li class="cart-list__item" v-for="item in cart" :key="item.id">
      <AppCartitem :itemCart="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import AppCartitem from "./AppCartItem.vue";
import type { Cartitem } from "@/types/CartItem";
defineProps<{
  cart: Cartitem[];
}>();
</script>

<style scoped lang="less"></style>
