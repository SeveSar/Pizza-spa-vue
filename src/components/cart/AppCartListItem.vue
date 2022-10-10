<template>
  <div class="product">
    <div class="product__inner">
      <div class="product__col">
        <div class="product__content">
          <img :src="itemCart.imageUrl" alt="" class="product__img" />
          <div class="product__info">
            <h4 class="product__name">{{ itemCart.name }}</h4>
            <div class="product__rating">Рейтинг: {{ itemCart.rating }}</div>
          </div>
        </div>
      </div>
      <div class="product__col">
        <div class="product__content">
          <div class="product-wrap">
            <div class="product__actions">
              <button
                class="btn"
                @click="
                  cartStore.updateCnt({ itemCart, newCnt: itemCart.cnt - 1 })
                "
              >
                -
              </button>
              <input
                type="number"
                :value="itemCart.cnt"
                @change="onChange(itemCart, $event)"
              />
              <button
                class="btn"
                @click="
                  cartStore.updateCnt({ itemCart, newCnt: itemCart.cnt + 1 })
                "
              >
                +
              </button>
            </div>
          </div>
          <div class="product__price">₽{{ itemCart.price }}</div>
        </div>
      </div>
    </div>
    <button class="btn btn--del" @click="cartStore.delFromCart(itemCart)">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.33213 0.228557C1.02739 -0.0761858 0.5333 -0.0761858 0.228557 0.228557C-0.0761858 0.533301 -0.0761858 1.02739 0.228557 1.33213L10.8964 12L0.228564 22.6679C-0.0761791 22.9726 -0.0761791 23.4667 0.228564 23.7714C0.533307 24.0762 1.02739 24.0762 1.33214 23.7714L12 13.1036L22.6679 23.7714C22.9726 24.0762 23.4667 24.0762 23.7714 23.7714C24.0762 23.4667 24.0762 22.9726 23.7714 22.6679L13.1036 12L23.7714 1.33213C24.0762 1.02739 24.0762 0.533302 23.7714 0.228559C23.4667 -0.0761838 22.9726 -0.0761838 22.6679 0.228559L12 10.8964L1.33213 0.228557Z"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { Cartitem } from "@/types/CartItem";
import { useCartStore } from "@/stores/cart";
const props = defineProps<{
  itemCart: Cartitem;
}>();
const cartStore = useCartStore();

const onChange = (itemCart: Cartitem, event: Event): void => {
  const element = event.currentTarget as HTMLInputElement;
  cartStore.updateCnt({
    itemCart,
    newCnt: +element.value,
  });
};
</script>

<style lang="less" scoped>
.product {
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  color: #191919;
  padding: 15px 24px 15px 16px;
  margin-bottom: 16px;
  position: relative;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 700px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .btn.btn--del {
    position: absolute;
    right: 16px;
    top: 10px;
    svg {
      width: 15px;
      fill: #ff7010;
    }
  }
  &__col {
    width: 65%;
    @media screen and (max-width: 700px) {
      width: 100%;
    }
    &:last-child {
      width: 35%;
      @media screen and (max-width: 700px) {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
  &__name {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    @media screen and (max-width: 575px) {
      font-size: 15px;
      line-height: 18px;
      margin-bottom: 1px;
    }
  }
  &__content {
    display: flex;
    align-items: center;
  }
  &__img {
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    margin-right: 15px;
    object-fit: contain;
    display: block;
    @media screen and (max-width: 575px) {
      width: 70px;
      height: 70px;
      margin-right: 8px;
    }
  }
  &-wrap {
    // width: 75%;
  }
  &__actions {
    display: flex;
    background: #ffeee2;
    border-radius: 6px;
    align-items: center;
    height: 36px;
    padding: 0 6px;
    margin-right: 40px;
    max-width: 92px;
    button {
      color: #ff7010;
      font-size: 24px;
      border-radius: 1px;
      height: 22px;
      width: 15px;
      transition: all 0.2s linear;
      &:active {
        transform: translateY(1px);
      }
    }
    input {
      width: 40px;
      text-align: center;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #ff7010;
      margin: 0 5px;
    }
  }
  &__price {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #ff7010;
    margin-left: auto;
  }
}
</style>
