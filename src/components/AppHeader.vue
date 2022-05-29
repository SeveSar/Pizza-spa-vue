<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__top">
        <div class="container">
          <div class="header__top-inner">
            <div class="header__top-col">
              <div class="header__text">Время работы: с 11:00 до 23:00</div>
            </div>
            <div class="header__top-col">
              <div class="user-auth">
                <button
                  v-if="!userStore.isAuth"
                  class="user-auth__btn"
                  @click="modalStore.openLoginModal"
                >
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.00001 0C6.35804 0 4.20825 2.14979 4.20825 4.79176C4.20825 7.43372 6.35803 9.58333 9.00001 9.58333C11.642 9.58333 13.7918 7.43372 13.7918 4.79176C13.7918 2.14979 11.642 0 9.00001 0ZM5.2755 4.79176C5.2755 2.73768 6.94613 1.06724 9.00001 1.06724C11.0539 1.06724 12.7245 2.73768 12.7245 4.79176C12.7245 6.84566 11.0539 8.51609 9.00001 8.51609C6.94614 8.51609 5.2755 6.84566 5.2755 4.79176Z"
                      fill="#FF7010"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.96381 11.6665C2.59468 11.6665 0.666626 13.6453 0.666626 16.0768V19.4881C0.666626 19.7705 0.890047 19.9998 1.1652 19.9998H16.8347C17.1099 19.9998 17.3333 19.7705 17.3333 19.4881V16.0768C17.3333 13.6453 15.4052 11.6665 13.0361 11.6665H4.96381ZM1.66378 16.0768C1.66378 14.2092 3.14412 12.6899 4.96381 12.6899H13.0361C14.8558 12.6899 16.3361 14.2092 16.3361 16.0768V18.9764H1.66378V16.0768Z"
                      fill="#FF7010"
                    />
                  </svg>
                  Войти в аккаунт
                </button>
                <div v-if="userStore.isAuth" class="user-drop">
                  <div class="current">
                    <button>
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.00001 0C6.35804 0 4.20825 2.14979 4.20825 4.79176C4.20825 7.43372 6.35803 9.58333 9.00001 9.58333C11.642 9.58333 13.7918 7.43372 13.7918 4.79176C13.7918 2.14979 11.642 0 9.00001 0ZM5.2755 4.79176C5.2755 2.73768 6.94613 1.06724 9.00001 1.06724C11.0539 1.06724 12.7245 2.73768 12.7245 4.79176C12.7245 6.84566 11.0539 8.51609 9.00001 8.51609C6.94614 8.51609 5.2755 6.84566 5.2755 4.79176Z"
                          fill="#FF7010"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.96381 11.6665C2.59468 11.6665 0.666626 13.6453 0.666626 16.0768V19.4881C0.666626 19.7705 0.890047 19.9998 1.1652 19.9998H16.8347C17.1099 19.9998 17.3333 19.7705 17.3333 19.4881V16.0768C17.3333 13.6453 15.4052 11.6665 13.0361 11.6665H4.96381ZM1.66378 16.0768C1.66378 14.2092 3.14412 12.6899 4.96381 12.6899H13.0361C14.8558 12.6899 16.3361 14.2092 16.3361 16.0768V18.9764H1.66378V16.0768Z"
                          fill="#FF7010"
                        />
                      </svg>
                      Вы
                    </button>
                  </div>
                  <div class="dropdown">
                    <div class="dropdown__inner">
                      <router-link :to="{ name: 'Profile' }"
                        >Профиль</router-link
                      >
                      <button @click="logOut">Выйти</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header__bottom">
        <div class="container">
          <div class="header__bottom-inner">
            <div class="header__bottom-logo">
              <router-link :to="{ name: 'Home' }" href="#" class="logo">
                <img src="@/assets/images/logo.svg" alt="" />
              </router-link>
            </div>
            <nav class="nav" v-if="userStore.isAuth">
              <ul class="nav-list">
                <li
                  class="nav-list__item"
                  v-for="link in menuLinks"
                  :key="link.title"
                >
                  <router-link to="/" :class="{ active: link.active }">
                    {{ link.title }}
                  </router-link>
                </li>
              </ul>
            </nav>
            <div class="header__bottom-user">
              <router-link class="user-cart" :to="{ name: 'Cart' }">
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.78125 14.5001H20.4846C20.7991 14.5001 21.0751 14.293 21.1602 13.9922L23.9729 4.1921C24.0333 3.98083 23.9919 3.75388 23.8588 3.57833C23.7255 3.40333 23.5183 3.29998 23.2971 3.29998H6.15802L5.6554 1.04833C5.58398 0.72768 5.29834 0.5 4.96875 0.5H0.703125C0.314575 0.5 0 0.813174 0 1.19999C0 1.587 0.314575 1.89999 0.703125 1.89999H4.40442L6.94354 13.2749C6.19647 13.5983 5.67188 14.3386 5.67188 15.2001C5.67188 16.358 6.61816 17.3 7.78125 17.3H20.4846C20.8733 17.3 21.1877 16.987 21.1877 16.6C21.1877 16.2132 20.8733 15.9 20.4846 15.9H7.78125C7.39398 15.9 7.07813 15.5863 7.07813 15.2001C7.07813 14.8138 7.39398 14.5001 7.78125 14.5001Z"
                    fill="white"
                  />
                  <path
                    d="M7.07812 19.3998C7.07812 20.5579 8.02441 21.4998 9.18768 21.4998C10.3508 21.4998 11.2971 20.5579 11.2971 19.3998C11.2971 18.2419 10.3508 17.2998 9.18768 17.2998C8.02441 17.2998 7.07812 18.2419 7.07812 19.3998Z"
                    fill="white"
                  />
                  <path
                    d="M16.9689 19.3998C16.9689 20.5579 17.9152 21.4998 19.0782 21.4998C20.2415 21.4998 21.1876 20.5579 21.1876 19.3998C21.1876 18.2419 20.2415 17.2998 19.0782 17.2998C17.9152 17.2998 16.9689 18.2419 16.9689 19.3998Z"
                    fill="white"
                  />
                </svg>
                <div class="user-cart__price">{{ cartStore.totalPrice }} ₽</div>
              </router-link>
              <div
                class="burger"
                @click="isOpenedBurger = !isOpenedBurger"
                :class="{ active: isOpenedBurger }"
              >
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="mobile-menu" :class="{ active: isOpenedBurger }">
    <div class="user-auth">
      <button
        v-if="!userStore.isAuth"
        class="user-auth__btn"
        @click="modalStore.openLoginModal"
      >
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.00001 0C6.35804 0 4.20825 2.14979 4.20825 4.79176C4.20825 7.43372 6.35803 9.58333 9.00001 9.58333C11.642 9.58333 13.7918 7.43372 13.7918 4.79176C13.7918 2.14979 11.642 0 9.00001 0ZM5.2755 4.79176C5.2755 2.73768 6.94613 1.06724 9.00001 1.06724C11.0539 1.06724 12.7245 2.73768 12.7245 4.79176C12.7245 6.84566 11.0539 8.51609 9.00001 8.51609C6.94614 8.51609 5.2755 6.84566 5.2755 4.79176Z"
            fill="#FF7010"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.96381 11.6665C2.59468 11.6665 0.666626 13.6453 0.666626 16.0768V19.4881C0.666626 19.7705 0.890047 19.9998 1.1652 19.9998H16.8347C17.1099 19.9998 17.3333 19.7705 17.3333 19.4881V16.0768C17.3333 13.6453 15.4052 11.6665 13.0361 11.6665H4.96381ZM1.66378 16.0768C1.66378 14.2092 3.14412 12.6899 4.96381 12.6899H13.0361C14.8558 12.6899 16.3361 14.2092 16.3361 16.0768V18.9764H1.66378V16.0768Z"
            fill="#FF7010"
          />
        </svg>
        Войти в аккаунт
      </button>
      <div v-if="userStore.isAuth" class="user-drop">
        <div class="current">
          <button>
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.00001 0C6.35804 0 4.20825 2.14979 4.20825 4.79176C4.20825 7.43372 6.35803 9.58333 9.00001 9.58333C11.642 9.58333 13.7918 7.43372 13.7918 4.79176C13.7918 2.14979 11.642 0 9.00001 0ZM5.2755 4.79176C5.2755 2.73768 6.94613 1.06724 9.00001 1.06724C11.0539 1.06724 12.7245 2.73768 12.7245 4.79176C12.7245 6.84566 11.0539 8.51609 9.00001 8.51609C6.94614 8.51609 5.2755 6.84566 5.2755 4.79176Z"
                fill="#FF7010"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.96381 11.6665C2.59468 11.6665 0.666626 13.6453 0.666626 16.0768V19.4881C0.666626 19.7705 0.890047 19.9998 1.1652 19.9998H16.8347C17.1099 19.9998 17.3333 19.7705 17.3333 19.4881V16.0768C17.3333 13.6453 15.4052 11.6665 13.0361 11.6665H4.96381ZM1.66378 16.0768C1.66378 14.2092 3.14412 12.6899 4.96381 12.6899H13.0361C14.8558 12.6899 16.3361 14.2092 16.3361 16.0768V18.9764H1.66378V16.0768Z"
                fill="#FF7010"
              />
            </svg>
            Вы
          </button>
        </div>
        <div class="dropdown">
          <div class="dropdown__inner">
            <router-link :to="{ name: 'Profile' }">Профиль</router-link>
            <button @click="logOut">Выйти</button>
          </div>
        </div>
      </div>
    </div>
    <nav class="nav" v-if="userStore.isAuth">
      <ul class="nav-list">
        <li class="nav-list__item" v-for="link in menuLinks" :key="link.title">
          <router-link to="/" :class="{ active: link.active }">
            {{ link.title }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/modal";
import { useUserStore } from "@/stores/user";
import { useCartStore } from "@/stores/cart";
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";
import { useBodyToggleClass } from "@/use/bodyToggleClass";
const modalStore = useModalStore();
const userStore = useUserStore();
const cartStore = useCartStore();
const route = useRoute();
const isOpenedBurger = ref<boolean>(false);
useBodyToggleClass(isOpenedBurger);
const menuLinks = [
  { title: "Пицца", active: true },
  { title: "Суши", active: false },
  { title: "Напитки", active: false },
  { title: "Закуски", active: false },
  { title: "Комбо", active: false },
  { title: "Десерты", active: false },
  { title: "Соусы", active: false },
];
const router = useRouter();
const logOut = () => {
  userStore.logout();
  router.push({ name: "Home" });
};
watch(
  () => route.query,
  () => {
    isOpenedBurger.value = false;
  }
);
</script>

<style scoped lang="less">
.user-drop {
  position: relative;

  button {
    display: flex;
    align-items: center;
    transition: all 0.2s linear;
    font-size: 14px;
    line-height: 18px;
    color: #ff7010;
  }

  &:hover {
    color: darken(#ff7010, 15%);
    .dropdown {
      opacity: 1;
      visibility: visible;
    }
  }
  .dropdown {
    position: absolute;
    top: 100%;
    z-index: 5;
    width: 150px;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.2s linear;
    padding-top: 10px;
    opacity: 0;
    visibility: hidden;
    @media screen and (max-width: 1430px) {
      left: auto;
      transform: none;
      right: 0;
    }
    @media screen and (max-width: 991px) {
      left: 0;
      right: auto;
    }
    &__inner {
      padding: 15px 20px;
      background: #ffffff;
      /* Line gray */
      border: 1px solid #f0f0f0;
      box-shadow: 0px 2px 8px rgba(25, 25, 25, 0.1);
      border-radius: 12px;
    }
    button {
      margin: 0;
    }
  }
}
.header {
  width: 100%;
  position: relative;
  z-index: 999;
  background-color: #fff;
  @media screen and (max-width: 991px) {
    position: fixed;
    width: 100%;
  }
  &__top {
    border-bottom: 1px solid #f0f0f0;
    padding: 4px 0;
    &-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-col {
      display: flex;
      align-items: center;
    }
  }
  .user-auth {
    margin-left: 40px;
    &__btn {
      color: #ff7010;
      display: flex;
      align-items: center;
    }
    svg {
      margin-right: 10px;
    }
  }

  .logo {
    display: block;
    width: 141px;
    @media screen and (max-width: 991px) {
      width: 120px;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  .header__text {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
  &__bottom {
    padding: 12px 0;
    @media screen and (max-width: 991px) {
      padding: 7px 0;
    }
    &-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .user-cart {
    background: #ff7010;
    border-radius: 4px;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 17px;
    color: #ffffff;
    @media screen and (max-width: 991px) {
      display: none;
    }
    svg {
      margin-right: 8px;
    }
  }
  .nav {
    @media screen and (max-width: 991px) {
      display: none;
    }
  }
}
.nav-list {
  display: flex;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
  &__item {
    font-size: 16px;
    line-height: 22px;
    &:not(:last-child) {
      margin-right: 32px;
      @media screen and (max-width: 991px) {
        margin-right: 0;
        margin-bottom: 15px;
      }
    }
    a {
      color: #191919;
      &.active {
        color: #ff7010;
      }
      &:hover {
        color: #ff7010;
      }
    }
  }
}

.mobile-menu {
  position: fixed;
  top: -100%;
  overflow: auto;
  z-index: 777;
  height: 100%;
  background-color: #fff;
  width: 100%;
  padding: 100px 20px 20px;
  transition: all 0.3s ease;
  &.active {
    top: 0;
  }
  .nav {
    margin-top: 25px;
  }
  .user-auth__btn {
    color: #ff7010;
    display: flex;
    align-items: center;
    svg {
      margin-right: 10px;
    }
  }
}
</style>
