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
      <BaseButton
        :class="{ active: size.active }"
        color="red small"
        v-for="size in product.sizes"
        :key="size.id"
        @click="productsStore.changeSizeProduct(product.id, size.id)"
      >
        {{ size.size }}см
      </BaseButton>
    </div>
    <div class="product__footer">
      <BaseButton
        v-if="!userCartStore.inCart(product.id)"
        @click="userCartStore.addToCart(product.id)"
        color="standart"
      >
        Добавить
      </BaseButton>
      <BaseButton
        color="button red"
        v-if="userCartStore.inCart(product.id)"
        @click="userCartStore.delFromCart(product.id)"
      >
        Удалить
      </BaseButton>
      <div class="product__price">{{ product.price }} ₽</div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { ProductItem } from "@/types/ProductItem";
import { useProductsStore } from "@/stores/products";
import BaseButton from "@/components/ui/BaseButton.vue";
import { useCartStore } from "@/stores/cart";

export default defineComponent({
  components: {
    BaseButton,
  },
  props: {
    product: {
      type: Object as PropType<ProductItem>,
      required: true,
    },
  },
  setup() {
    const productsStore = useProductsStore();
    const userCartStore = useCartStore();
    return {
      productsStore,
      userCartStore,
    };
  },
});
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
    .button {
      width: calc((100% / 3) - 6px);
      margin: 0 3px;
      flex-grow: 1;
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
    .button {
      width: 131px;
    }
  }
}
</style>
