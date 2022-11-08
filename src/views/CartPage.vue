<template>
  <div class="cart">
    <div class="cart__inner" v-if="cart.length">
      <div class="cart__header">
        <h1 class="page-title">Ваш заказ</h1>
        <BaseButton class="button_clear" @click="cartStore.clearCart">
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path
              d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"
            />
          </svg>
          Очистить корзину
        </BaseButton>
      </div>
      <AppCartList :cart="cart" />
      <div class="cart__footer">
        <div class="cart__footer-cnt">
          <span>Всего в корзине: </span> {{ totalItems }} шт
        </div>
        <div class="cart__footer-price">
          <span>Итого: </span> ₽{{ totalPrice }}
        </div>
      </div>
      <BaseButton class="button_order standart" @click="order">
        Оформить заказ
      </BaseButton>
    </div>
    <div class="cart-empty" v-show="!cart.length">
      <img src="@/assets/images/empty-cart.png" alt="" />
      <router-link :to="{ name: 'Home' }">Вернуться к покупкам</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppCartList from "@/components/cart/AppCartList.vue";
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import BaseButton from "@/components/ui/BaseButton.vue";
const cartStore = useCartStore();
const { cart, totalPrice, totalItems } = storeToRefs(cartStore);
const router = useRouter();
const order = () => {
  router.push({ name: "Order" });
  cartStore.clearCart();
};
</script>

<style scoped lang="less">
.cart {
  max-width: 882px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
  padding: 80px 0;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    @media screen and (max-width: 575px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &-empty {
    display: flex;
    flex-direction: column;
    img {
      display: block;
      margin: auto;
      width: 60%;
      @media screen and (max-width: 575px) {
        width: 100%;
      }
    }
    a {
      font-weight: 400;
      font-size: 25px;
      line-height: 39px;
      margin: 20px auto 0;
      display: inline-block;
      color: #ff7010;
      transition: all 0.2s linear;
      &:hover {
        color: darken(#ff7010, 15%);
      }
    }
  }
  .button_clear {
    color: #000;
    @media screen and (max-width: 575px) {
      margin-top: 15px;
    }
    svg {
      transition: all 0.2s linear;
    }
    &:hover {
      color: #ff7010;
      svg {
        fill: #ff7010;
      }
    }
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    font-weight: 600;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    font-size: 20px;
    line-height: 28px;
    color: #ff7010;
    padding: 20px 16px;
    @media screen and (max-width: 575px) {
      flex-direction: column;
      align-items: flex-start;
      .cart__footer-price {
        margin-top: 15px;
      }
    }
    span {
      color: #000;
    }
  }
  .button_order {
    margin: 25px auto 0;
  }
}
</style>
