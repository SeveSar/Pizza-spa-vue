<template>
  <div class="order-done">
    <h1>
      Благодарим вас за покупку.
      <router-link :to="{ name: 'Home' }" class="btn btn--main"
        >Вернуться к покупкам</router-link
      >
    </h1>
    <img src="@/assets/images/order-image.png" alt="" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.order-done {
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h1 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    a {
      margin-top: 10px;
      transition: all 0.2s linear;
      color: #fff;
      padding: 0 25px;
    }
  }
}
</style>
