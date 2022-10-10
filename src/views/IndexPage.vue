<template>
  <div class="products">
    <AppFilter @buttonClick="onClick" :currentCategory="currentCategory" />
    <AppProductList :products="products" />
  </div>
</template>

<script setup lang="ts">
import AppProductList from "@/components/products/AppProductList.vue";
import AppFilter from "@/components/main/AppFilter.vue";
import { useProductsStore } from "@/stores/products";
import { computed } from "vue";
import { ref } from "vue";
let currentCategory = ref<number>(0);
const onClick = (category: number) => {
  currentCategory.value = category;
};

const productsStore = useProductsStore();
const products = computed(() => {
  return productsStore.products.filter((item) => {
    if (currentCategory.value !== 0) {
      return item.category === currentCategory.value;
    }
    return true;
  });
});
</script>
<style scoped>
.products {
  padding-top: 50px;
}
</style>
