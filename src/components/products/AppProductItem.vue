<template>
  <article class="product">
    <router-link
      :to="{ name: 'Product', params: { id: product.id } }"
      class="product__img"
    >
      <img :src="product.imageUrl" alt="" />
    </router-link>
    <div class="product__body">
      <router-link :to="{ name: 'Product', params: { id: product.id } }">
        <h4 class="product__name">
          {{ product.name }}
        </h4>
      </router-link>

      <div class="product__text">Рейтинг: {{ product.rating }}</div>
    </div>
    <div class="product__actions" v-if="!userCartStore.inCart(product.id)">
      <button
        :class="['btn', { active: size.active }]"
        v-for="size in product.sizes"
        :key="size.id"
        @click="productsStore.changeSizeProduct(product.id, size.id)"
      >
        {{ size.size }}см
      </button>
    </div>
    <div class="product__footer">
      <button
        v-if="!userCartStore.inCart(product.id)"
        class="btn btn--main"
        @click="userCartStore.addToCart(product)"
      >
        Добавить
      </button>
      <button
        class="btn btn--main btn--red"
        v-if="userCartStore.inCart(product.id)"
        @click="userCartStore.delFromCart(product)"
      >
        Удалить
      </button>
      <div class="product__price">{{ product.price }} ₽</div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { ProductItem } from "@/types/ProductItem";
import { useProductsStore } from "@/stores/products";
import { useCartStore } from "@/stores/cart";
const props = defineProps<{
  product: ProductItem;
}>();
const productsStore = useProductsStore();
const userCartStore = useCartStore();
</script>

<style scoped lang="less">
.product {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 20px;
  &__img {
    position: relative;
    padding-bottom: 91.7%;
    margin: 0 auto;
    width: 100%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &__body {
    margin-top: 15px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  &__price {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #ff7010;
  }
  &__actions {
    display: flex;
    justify-content: space-between;
    margin: 10px -3px 0;
    flex-wrap: wrap;
    button {
      width: calc((100% / 3) - 6px);
      padding: 10px;
      border-radius: 25px;
      background-color: #f0f0f0;
      color: #000;
      margin: 0 3px;
      flex-grow: 1;
      &:hover {
        background-color: lighten(#e23535, 10%);
        color: #fff;
      }
      &.active {
        background-color: #e23535;
        color: #fff;
      }
    }
  }
  &__name {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #191919;
  }
  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #191919;
  }
  &__footer {
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .btn {
      width: 131px;
    }
  }
}
</style>
