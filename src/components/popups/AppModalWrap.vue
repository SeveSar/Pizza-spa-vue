<template>
  <transition name="fade">
    <div class="modal-backdrop" v-if="loginModal"></div>
  </transition>
  <transition name="fade">
    <div
      class="modal-overlay"
      v-if="loginModal"
      @click="storeModal.closeLoginModal"
    >
      <div class="modal" @click.stop>
        <slot></slot>
        <button class="modal-close" @click="storeModal.closeLoginModal">
          <img src="@/assets/images/icons/close.svg" alt="" />
        </button>
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
  z-index: 780;
  position: relative;
  overflow: auto;
  padding: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(25, 25, 25, 0.4);
  backdrop-filter: blur(32px);
  z-index: 777;
}
</style>
