<template>
  <section class="profile">
    <div class="profile__header">
      <h1 class="page-title">Мой аккаунт</h1>
      <div class="profile__tabs">
        <button class="btn profile__tabs-tab active">История заказов</button>
        <button class="btn profile__tabs-tab">Настройки</button>
      </div>
    </div>
    <div class="profile__body">
      <div class="profile__content">
        <div class="profile"></div>
      </div>
      <div class="profile__content"></div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.profile {
  padding-top: 40px;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__tabs {
    display: flex;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background: #ffffff;
    max-width: 360px;
    width: 100%;
    &-tab {
      width: 50%;
      border-radius: 6px;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: #191919;
      padding: 13px 20px;
      &.active {
        background-color: #ff7010;
        color: #fff;
      }
    }
  }
}
</style>
