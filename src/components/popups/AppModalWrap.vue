<template>
  <transition name="fade">
    <div
      class="modal-overlay"
      v-if="loginModal"
      @click="storeModal.closeLoginModal"
    >
      <div class="modal" @click.stop>
        <button class="modal-close" @click="storeModal.closeLoginModal">
          <img src="@/assets/images/icons/close.svg" alt="" />
        </button>
        <form action="" class="form">
          <h2 class="form__title">Describe the task</h2>
        </form>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/modal";
import { storeToRefs } from "pinia";
import { useBodyToggleClass } from "@/use/bodyToggleClass";

const storeModal = useModalStore();
const { loginModal } = storeToRefs(storeModal);
useBodyToggleClass(loginModal);
</script>

<style scoped lang="less">
.modal {
  background: #f9f9f9;
  border-radius: 24px;
  max-width: 850px;
  margin: auto;
  width: 100%;
  padding: 60px 20px;
  color: #191919;
  position: relative;
}
.modal-close {
  position: absolute;
  right: -62px;
  top: 0;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-3px);
  }
}
.modal-overlay {
  display: flex;
  z-index: 1001;
  position: relative;
  overflow: auto;
  padding: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 600px) {
    padding: 20px;
  }
}
</style>
