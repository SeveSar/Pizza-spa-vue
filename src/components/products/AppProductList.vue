<template>
  <ul class="list-product" v-if="products?.length">
    <li
      class="list-product__item"
      v-for="product in products"
      :key="product.id"
    >
      <AppProductItem :product="product" />
    </li>
  </ul>
</template>

<script lang="ts">
import AppProductItem from "./AppProductItem.vue";

import type { ProductItem } from "@/types/ProductItem";
import { defineComponent } from "vue";
import type { PropType } from "vue";
export default defineComponent({
  components: {
    AppProductItem,
  },
  props: {
    products: Array as PropType<ProductItem[]>,
  },
});
</script>

<style lang="less" scoped>
.list-product {
  display: flex;
  flex-wrap: wrap;
  margin: 60px -15px 0;
  @media screen and (max-width: 575px) {
    margin: 60px 0 0;
  }
  &__item {
    width: calc(100% / 4);
    padding: 0 15px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in;
    @media screen and (max-width: 1200px) {
      width: calc(100% / 3);
    }
    @media screen and (max-width: 875px) {
      width: calc(100% / 2);
    }
    @media screen and (max-width: 575px) {
      width: 100%;
      padding: 0;
    }
    &:hover {
      transform: scale(1.03);
    }
  }
}
</style>
